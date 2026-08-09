// Сверяет список сезонов с тем, что реально лежит на диске.
//
// Зачем отдельная проверка: ссылки на страницу сезона и на его альбом лента
// строит из НОМЕРА (`/history/8season/8season`), а не пишет markdown-ссылкой.
// Встроенный в VitePress поиск мёртвых ссылок разбирает markdown и до
// `:href` внутри Vue-компонента не добирается — то есть добавил сезон в
// `.vitepress/seasons.js`, забыл создать папку, и сборка зелёная, а карточка
// на живом сайте ведёт в 404.
//
// Прогоняется автоматически перед каждой сборкой (`predocs:build`).
// Падает с ненулевым кодом: проверка, которая не умеет упасть, — не гейт.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { SEASONS, SEASONS_WITH_COVER } from '../.vitepress/seasons.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (...p) => path.join(ROOT, ...p);

const errors = [];
const warnings = [];

let counts = {};
try {
  counts = JSON.parse(fs.readFileSync(at('_data', 'counts.json'), 'utf8'));
} catch {
  warnings.push('_data/counts.json не читается — счётчики альбомов не проверены');
}

const numbers = new Set(SEASONS.map((s) => s.n));

for (const s of SEASONS) {
  const dir = `${s.n}season`;

  // Статья: на неё ведёт вся карточка целиком.
  if (!fs.existsSync(at('history', dir, `${dir}.md`))) {
    errors.push(`сезон ${s.n} есть в seasons.js, но нет history/${dir}/${dir}.md — карточка ведёт в 404`);
  }

  // Альбом: чип рисуется по наличию ключа в counts.json.
  if (counts[dir] !== undefined && !fs.existsSync(at('history', dir, 'album.md'))) {
    errors.push(`в counts.json есть "${dir}", но нет history/${dir}/album.md — кнопка «Альбом» ведёт в 404`);
  }
  if (counts[dir] === 0) {
    warnings.push(`альбом ${dir} пуст (0 фото) — кнопки «Альбом» на хабе не будет`);
  }

  // Обложка: список и файлы должны сходиться в обе стороны.
  const cover = at('public', 'assets', 'history', 'covers', `${dir}.webp`);
  if (SEASONS_WITH_COVER.includes(s.n) && !fs.existsSync(cover)) {
    errors.push(`сезон ${s.n} в SEASONS_WITH_COVER, но нет public/assets/history/covers/${dir}.webp`);
  }

  if (!s.redacted && !s.current && !(s.from && s.to)) {
    errors.push(`у сезона ${s.n} нет пары from/to и он не помечен current или redacted — длительность не посчитается`);
  }
}

// Обратная сторона: файл лежит, а показать его некому.
const coversDir = at('public', 'assets', 'history', 'covers');
if (fs.existsSync(coversDir)) {
  for (const f of fs.readdirSync(coversDir)) {
    const m = f.match(/^(\d+)season\.webp$/);
    if (!m) continue;
    const n = Number(m[1]);
    if (!SEASONS_WITH_COVER.includes(n)) {
      warnings.push(`обложка ${f} лежит на месте, но номера ${n} нет в SEASONS_WITH_COVER — она не показывается`);
    }
  }
}

// Ключ счётчика, которому не соответствует ни один сезон.
for (const key of Object.keys(counts)) {
  const m = key.match(/^(\d+)season$/);
  if (!m || !numbers.has(Number(m[1]))) {
    warnings.push(`ключ "${key}" в counts.json не совпадает ни с одним сезоном из seasons.js`);
  }
}

for (const w of warnings) console.warn(`⚠️  ${w}`);

if (errors.length) {
  for (const e of errors) console.error(`❌ ${e}`);
  console.error(`\nСезоны: ${errors.length} ${errors.length === 1 ? 'ошибка' : 'ошибок'}. Сборка остановлена.`);
  process.exit(1);
}

console.log(`✅ сезоны: ${SEASONS.length} шт., страницы, альбомы и обложки на месте`);
