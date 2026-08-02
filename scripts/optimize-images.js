import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ─── ЧТО ДЕЛАЕТ ──────────────────────────────────────────────────────────────
//
// Кидаешь .png/.jpg в assets/ или public/ — дальше ничего делать не надо.
// Скрипт сам запускается перед `npm run docs:dev` и `npm run docs:build`:
//
//   1. конвертирует новые картинки в .webp;
//   2. переписывает ВСЕ ссылки на них в тексте и компонентах;
//   3. и только потом удаляет исходник — если на него больше никто не ссылается.
//
// Порядок важен. Раньше исходник удалялся сразу после конвертации, а ссылки
// правились двумя регекспами по формам `![](...)` и `src="..."`. Форма
// `src: '/assets/….jpg'` внутри Vue-данных не распознавалась — в результате
// в репозитории накопились ссылки на файлы, которых уже нет.
//
// ─── НАСТРОЙКИ ───────────────────────────────────────────────────────────────

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Где лежат картинки (относительно PROJECT_ROOT)
const IMAGE_DIRS = ['assets', 'public'];

// Директории для полного пропуска.
// .git и .claude — чужие рабочие копии: обход правил .md внутри
// .claude/worktrees/* и пачкал соседние ветки.
const SKIP_DIRS = [
  'node_modules', '.git', '.claude',
  '.vitepress/dist', '.vitepress/cache', 'vibecode',
];

// Конкретные файлы для пропуска (на них ссылаются извне, по абсолютному URL)
const SKIP_FILES = new Set([
  'public/favicon.png',
  'public/og-image.png',
  'public/icon_purple.png',
]);

const SRC_EXTS = new Set(['.png', '.jpg', '.jpeg']);

// Где искать ссылки на картинки. .js/.mjs/.json — потому что пути живут
// не только в разметке, но и в данных компонентов и в _data/*.json.
const CONTENT_EXTS = new Set(['.md', '.vue', '.js', '.mjs', '.json', '.css']);

// Качество WebP по размеру файла:
//   < 10KB  → lossless (пиксель-арт иконки)
//   10–100KB → quality 85
//   > 100KB  → quality 82 (скриншоты/фото)
const TINY_THRESHOLD  = 10  * 1024;
const SMALL_THRESHOLD = 100 * 1024;

function webpOpts(sizeBytes) {
  if (sizeBytes < TINY_THRESHOLD)  return { lossless: true };
  if (sizeBytes < SMALL_THRESHOLD) return { quality: 85 };
  return { quality: 82 };
}

// ─────────────────────────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE   = args.includes('--force');

const toRel = (p) => path.relative(PROJECT_ROOT, p).replace(/\\/g, '/');

const shouldSkipDir = (absPath) => {
  const r = toRel(absPath);
  return SKIP_DIRS.some(d => r === d || r.startsWith(d + '/'));
};

const shouldSkipFile = (absPath) => SKIP_FILES.has(toRel(absPath));

function walk(dir, predicate) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!shouldSkipDir(full)) results.push(...walk(full, predicate));
    } else if (entry.isFile() && predicate(full)) {
      results.push(full);
    }
  }
  return results;
}

const listImages = () => IMAGE_DIRS.flatMap(d =>
  walk(path.join(PROJECT_ROOT, d), f =>
    SRC_EXTS.has(path.extname(f).toLowerCase()) && !shouldSkipFile(f)
  )
);

const listContentFiles = () =>
  walk(PROJECT_ROOT, f => CONTENT_EXTS.has(path.extname(f).toLowerCase()));

// ── Шаг 1: Конвертация (без удаления исходников) ─────────────────────────────

async function convertImages() {
  const todo = listImages().filter(src => {
    const dest = src.slice(0, -path.extname(src).length) + '.webp';
    return FORCE || !fs.existsSync(dest);
  });

  if (todo.length === 0) return { converted: 0, errors: 0 };
  console.log(`📸 Конвертация: ${todo.length} новых картинок\n`);

  let converted = 0, errors = 0, totalSaved = 0;

  for (const src of todo) {
    const dest = src.slice(0, -path.extname(src).length) + '.webp';
    const stat = fs.statSync(src);
    const opts = webpOpts(stat.size);

    if (DRY_RUN) {
      console.log(`  → ${toRel(src)}  [${opts.lossless ? 'lossless' : 'q' + opts.quality}]`);
      converted++;
      continue;
    }

    try {
      await sharp(src).webp(opts).toFile(dest);
      const destStat = fs.statSync(dest);
      if (destStat.size === 0) throw new Error('Выходной файл пуст');

      totalSaved += stat.size - destStat.size;
      const pct = Math.round((1 - destStat.size / stat.size) * 100);
      console.log(`  ✓ ${toRel(src)} → .webp  [${pct}% меньше]`);
      converted++;
    } catch (err) {
      console.error(`  ✗ ${toRel(src)}: ${err.message}`);
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      errors++;
    }
  }

  if (!DRY_RUN && totalSaved > 0) {
    console.log(`\nОсвобождено: ~${(totalSaved / 1024 / 1024).toFixed(1)}MB\n`);
  }
  return { converted, errors };
}

// ── Шаг 2: Переписывание ссылок ──────────────────────────────────────────────

// Любой путь до .png/.jpg/.jpeg, в какой бы синтаксис он ни был обёрнут:
// ![](x.png), src="x.png", src: '/assets/x.jpg', url(x.png), "image": "x.png".
const IMG_PATH_RE = /[\w@%.\-/]+\.(?:png|jpe?g)/gi;

// Путь к .webp-версии, если она есть на диске. Для путей от корня сайта
// проверяем два места: VitePress отдаёт public/ напрямую с корня,
// поэтому /foo.webp может лежать и в public/foo.webp.
function findWebp(contentFile, imgPath) {
  const webpRel = imgPath.slice(0, -path.extname(imgPath).length) + '.webp';
  const candidates = imgPath.startsWith('/')
    ? [path.join(PROJECT_ROOT, webpRel), path.join(PROJECT_ROOT, 'public', webpRel)]
    : [path.resolve(path.dirname(contentFile), webpRel)];
  return candidates.some(p => fs.existsSync(p)) ? webpRel : null;
}

function sourceOnDisk(contentFile, imgPath) {
  const candidates = imgPath.startsWith('/')
    ? [path.join(PROJECT_ROOT, imgPath), path.join(PROJECT_ROOT, 'public', imgPath)]
    : [path.resolve(path.dirname(contentFile), imgPath)];
  return candidates.find(p => fs.existsSync(p)) ?? null;
}

// Возвращает Set абсолютных путей исходников, на которые ссылки ОСТАЛИСЬ.
function updateReferences() {
  const stillReferenced = new Set();
  let updatedFiles = 0, totalReplaces = 0;

  for (const file of listContentFiles()) {
    const original = fs.readFileSync(file, 'utf-8');
    let count = 0;

    const updated = original.replace(IMG_PATH_RE, (imgPath, offset) => {
      // Внешние адреса (https://…/x.png) не трогаем: в совпадение попадает
      // «//host/x.png», а двоеточие протокола стоит ровно перед ним.
      if (original[offset - 1] === ':') return imgPath;

      const webp = findWebp(file, imgPath);
      if (webp) {
        count++;
        return webp;
      }
      // .webp нет — ссылка остаётся, и исходник удалять нельзя.
      const src = sourceOnDisk(file, imgPath);
      if (src) stillReferenced.add(src);
      return imgPath;
    });

    if (count > 0) {
      if (!DRY_RUN) fs.writeFileSync(file, updated, 'utf-8');
      console.log(`  ${DRY_RUN ? '→' : '✓'} ${toRel(file)}  (${count} замен)`);
      totalReplaces += count;
      updatedFiles++;
    }
  }

  if (totalReplaces > 0) {
    console.log(`\n🔗 Ссылки: ${totalReplaces} замен в ${updatedFiles} файлах\n`);
  }
  return stillReferenced;
}

// ── Шаг 3: Удаление исходников ───────────────────────────────────────────────

function pruneSources(stillReferenced) {
  let removed = 0, kept = 0;

  for (const src of listImages()) {
    const dest = src.slice(0, -path.extname(src).length) + '.webp';
    if (!fs.existsSync(dest)) continue;      // нет замены — не трогаем
    if (stillReferenced.has(src)) { kept++; continue; }

    if (DRY_RUN) console.log(`  → удалить ${toRel(src)}`);
    else fs.unlinkSync(src);
    removed++;
  }

  if (removed > 0) console.log(`🗑  Удалено исходников: ${removed}`);
  if (kept > 0) console.log(`⚠️  Оставлено (на них ещё есть ссылки): ${kept}`);
  return removed;
}

// ── Точка входа ──────────────────────────────────────────────────────────────

async function main() {
  if (DRY_RUN) console.log('🔍 Режим --dry-run: изменения не вносятся\n');
  if (FORCE)   console.log('⚡ Режим --force: существующие .webp будут перезаписаны\n');

  const { converted, errors } = await convertImages();
  const stillReferenced = updateReferences();
  const removed = pruneSources(stillReferenced);

  if (converted === 0 && removed === 0) console.log('🖼  Картинки в порядке, делать нечего');
  if (errors > 0) process.exitCode = 1;
}

main().catch(err => {
  console.error('\n💥 Ошибка:', err.message);
  process.exit(1);
});
