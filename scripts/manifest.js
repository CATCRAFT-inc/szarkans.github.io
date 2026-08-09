
const fs = require('fs');
const path = require('path');

const GITHUB = 'szarkans/catcraft-album';
const BRANCH = 'main';

const PREFIX = `https://cdn.jsdelivr.net/gh/${GITHUB}@${BRANCH}/`;

const IMAGES_ROOT = path.resolve(__dirname, '..', '..', 'catcraft-album');

const DATA_DIR = path.resolve(__dirname, '..', '_data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const entries = fs.readdirSync(IMAGES_ROOT, { withFileTypes: true });
const seasons = entries.filter(e => e.isDirectory()).map(e => e.name);

// Счётчики отдельным файлом: страница-вход показывает «Альбом · 903», и ей
// нужны только числа. Тянуть ради них все манифесты (275 КБ ссылок) в бандл
// хаба — дорого, поэтому размер альбома пишется здесь, где он и так известен.
//
// Старые счётчики ДОПИСЫВАЮТСЯ, а не переписываются с нуля. Манифест сезона —
// отдельный файл, и отсутствие папки его не трогает: альбом продолжает
// работать. Собери мы counts заново — ключ пропавшей папки исчез бы, и кнопка
// «Альбом 642» молча ушла бы с хаба при живой странице альбома. Достаточно
// неполного чекаута catcraft-album, чтобы это случилось без единой ошибки.
const COUNTS_FILE = path.join(DATA_DIR, 'counts.json');

let counts = {};
try {
  counts = JSON.parse(fs.readFileSync(COUNTS_FILE, 'utf8'));
} catch {
  // Файла ещё нет — это первый прогон.
}

if (seasons.length === 0) {
  console.warn('⚠️ Не найдено ни одной подпапки-сезона.');
}

seasons.forEach(season => {
  const folder = path.join(IMAGES_ROOT, season);


  const files = fs.readdirSync(folder)
    .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort();

  const urls = files.map(f => `${PREFIX}${season}/${encodeURIComponent(f)}`);

  const outFile = path.join(DATA_DIR, `${season}.json`);
  fs.writeFileSync(outFile, JSON.stringify(urls, null, 2), 'utf8');

  if (/^\d+season$/.test(season)) counts[season] = urls.length;

  console.log(`✅ ${season}: ${urls.length} файлов → ${outFile}`);
});

const ordered = Object.fromEntries(
  Object.entries(counts).sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10))
);
fs.writeFileSync(COUNTS_FILE, JSON.stringify(ordered, null, 2) + '\n', 'utf8');
console.log(`✅ счётчики альбомов → ${COUNTS_FILE}`);

console.log('🎉 Все манифесты сезонов сгенерированы.');
