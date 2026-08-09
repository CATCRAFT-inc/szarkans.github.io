<template>
  <div class="hist">
    <header class="hist__head">
      <h1 class="hist__title">{{ title }}</h1>
      <div class="hist__intro"><slot /></div>
    </header>

    <ol class="hist__list">
      <li v-for="s in seasons" :key="s.n" class="hist__item">
        <span class="hist__node" :class="{ 'hist__node--live': s.current }"></span>

        <article
          class="hs"
          :class="{
            'hs--redacted': s.redacted,
            'hs--current': s.current,
          }"
        >
          <img
            v-if="s.cover"
            class="hs__cover"
            :src="withBase(s.cover)"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <!-- Вся карточка — ссылка на статью. Отдельным слоем поверх обложки,
               а не обёрткой вокруг содержимого: внутри лежит вторая ссылка
               («Альбом»), а вложенные <a> — невалидная разметка. -->
          <a
            class="hs__go"
            :href="withBase(s.article)"
            :aria-label="`Статья — ${s.n} сезон`"
          ></a>

          <div class="hs__body">
            <p class="hs__num">{{ s.n }}<i>сезон</i></p>

            <p class="hs__dates">{{ s.dates }}</p>
            <p class="hs__sub">
              <template v-if="s.redacted">Записи об этом сезоне изъяты</template>
              <template v-else>
                <em>{{ s.versions }}</em>
                <template v-if="s.duration"><span class="hs__dot">·</span>{{ s.duration }}</template>
                <span v-if="s.current" class="hs__live">Сезон идёт прямо сейчас</span>
              </template>
            </p>

            <div class="hs__links">
              <!-- «Статья» осталась на месте как подпись к тому, куда ведёт
                   карточка, но клик по ней ловит слой выше: вторая ссылка на
                   тот же адрес — лишняя остановка при ходьбе по Tab. -->
              <span class="hs__chip hs__chip--ghost" aria-hidden="true">Статья</span>
              <a v-if="s.album" class="hs__chip" :href="withBase(s.album)">
                Альбом <b>{{ s.count }}</b>
              </a>
            </div>
          </div>
        </article>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import counts from '../../_data/counts.json';
// Сами сезоны — в .vitepress/seasons.js, вместе с инструкцией, как их править
// и как менять обложки. Здесь только то, как они рисуются.
import { SEASONS, SEASONS_WITH_COVER } from '../seasons.js';

defineProps({
  title: { type: String, default: 'История' },
});

const plural = (n, one, few, many) => {
  const a = Math.abs(n) % 100;
  const b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
};

const ru = (iso) => {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
};

// Календарная разница, а не деление на «средний месяц»: 30.44 дня врут
// на длинных сезонах, а 5-й идёт больше девяти месяцев.
//
// Числа берём прямо из строки, а НЕ через `new Date('2023-07-01')`: такую
// строку движок разбирает как полночь UTC, а `getDate()` потом отдаёт
// локальный день. К западу от Гринвича день уезжает на единицу, и 5 сезон
// становится «9 месяцев 7 дней» вместо шести — причём вразрез с разметкой,
// посчитанной при сборке, то есть с ошибкой гидратации.
// Остаток считается от ЯКОРЯ — начала, сдвинутого на целые месяцы, — а не
// добиванием дней из соседнего месяца. Наивный займ даёт отрицательные дни:
// с 31.01 по 01.03 он выдавал «1 месяц −2 дня», потому что в феврале 28 дней,
// а занять надо было 31. У якоря день схлопывается к длине месяца (31 января
// плюс месяц = 28 февраля), и остаток не может уйти в минус.
const DAY_MS = 86400000;

const span = (from, to) => {
  const [ay, am, ad] = from.split('-').map(Number);
  const [by, bm, bd] = to.split('-').map(Number);

  let months = (by - ay) * 12 + (bm - am);
  if (bd < ad) months -= 1;

  const shifted = am - 1 + months;
  const anchorY = ay + Math.floor(shifted / 12);
  const anchorM = ((shifted % 12) + 12) % 12;
  const lastDay = new Date(Date.UTC(anchorY, anchorM + 1, 0)).getUTCDate();
  const anchor = Date.UTC(anchorY, anchorM, Math.min(ad, lastDay));

  const days = Math.round((Date.UTC(by, bm - 1, bd) - anchor) / DAY_MS);
  return { months, days };
};

const durationOf = (s) => {
  const { months, days } = span(s.from, s.to);
  const d = `${days} ${plural(days, 'день', 'дня', 'дней')}`;

  // Сезон короче месяца: «0 месяцев 19 дней» — это не срок, это отчёт машины.
  if (!months) return s.fuzzyEnd ? 'меньше месяца' : d;

  const m = `${months} ${plural(months, 'месяц', 'месяца', 'месяцев')}`;
  if (s.fuzzyEnd) return `около ${m}`;
  if (!days) return m;
  return `${m} ${d}`;
};

// Идущий сезон намеренно не показывает «идёт уже N дней»: число посчиталось бы
// в момент сборки и с завтрашнего дня начало бы врать.
const datesOf = (s) => {
  if (s.redacted) return '██.██.20██ — ██.██.20██';
  if (s.current) return `с ${ru(s.from)}`;
  return `${ru(s.from)} — ${s.fuzzyEnd || ru(s.to)}`;
};

const seasons = computed(() =>
  SEASONS.map((s) => {
    const base = `/history/${s.n}season`;

    return {
      ...s,
      dates: datesOf(s),
      duration: s.from && s.to ? durationOf(s) : null,
      article: `${base}/${s.n}season`,
      // Альбом и обложка появляются сами, как только появляются файлы:
      // альбом — когда в _data лёг манифест сезона, обложка — когда номер
      // сезона вписан в SEASONS_WITH_COVER.
      album: counts[`${s.n}season`] ? `${base}/album` : null,
      count: counts[`${s.n}season`],
      cover: SEASONS_WITH_COVER.includes(s.n) ? `/assets/history/covers/${s.n}season.webp` : null,
    };
  })
);
</script>

<style scoped>
/* ---------------------------------------------------------------------------
   Лента сезонов. Нить времени сверху вниз, на ней карточки-сезоны с обложкой
   из собственного альбома. Раздел про скриншоты не может выглядеть как список
   ссылок, поэтому картинка здесь — содержание, а не украшение.
   --------------------------------------------------------------------------- */
.hist {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 96px;
}

.hist__head {
  margin-bottom: 44px;
}

.hist__title {
  font-family: Unbounded, sans-serif;
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #e8e7f0;
  margin: 0 0 16px;
}

.hist__intro {
  max-width: 700px;
  color: #8b8a96;
  line-height: 1.7;
}

.hist__intro :deep(p) { margin: 0; }
.hist__intro :deep(.white) { color: #e8e7f0; font-weight: 600; }
.hist__intro :deep(.gold) { color: #f5a623; }

.hist__list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Нить гаснет книзу: история дописывается прямо сейчас. */
.hist__list::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 26px;
  bottom: 40px;
  width: 1px;
  background: linear-gradient(
    180deg,
    rgba(167, 139, 250, 0.05),
    rgba(167, 139, 250, 0.5) 10%,
    rgba(167, 139, 250, 0.5) 78%,
    rgba(167, 139, 250, 0.08)
  );
}

.hist__item {
  position: relative;
}

/* Узел — тот же ромб-искра, что в герое лендинга. */
.hist__node {
  position: absolute;
  left: -35px;
  top: 34px;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
  background: #a78bfa;
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.7);
}

.hist__node--live {
  background: #4ade80;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.8);
  animation: hist-pulse 2.4s ease-in-out infinite;
}

@keyframes hist-pulse {
  50% { box-shadow: 0 0 18px rgba(74, 222, 128, 0.95); }
}

/* --- карточка сезона ------------------------------------------------------ */
.hs {
  position: relative;
  overflow: hidden;
  min-height: 178px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

/* Обложка живёт справа и растворяется влево, чтобы текст лежал на чистом
   фоне, а не на скриншоте: кнопки и даты поверх картинки не читаются. */
.hs__cover {
  position: absolute;
  inset: 0 0 0 auto;
  width: 64%;
  height: 100%;
  object-fit: cover;
  opacity: 0.82;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 52%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 52%);
  transition: opacity 0.3s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.hs:hover {
  border-color: rgba(167, 139, 250, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(124, 58, 237, 0.12);
}

.hs:hover .hs__cover {
  opacity: 1;
  transform: scale(1.03);
}

/* Слой-ссылка на всю карточку. Лежит под текстом, но над обложкой. */
.hs__go {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: inherit;
}

.hs__go:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: -4px;
}

.hs__body {
  position: relative;
  z-index: 2;
  max-width: 52%;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Текст не перехватывает клик — иначе по датам и номеру карточка бы
     не открывалась, а это ровно середина плашки. Плата за это — в карточке
     не выделяется текст, обычная цена сплошной кликабельности. */
  pointer-events: none;
}

.hs__num {
  margin: 0;
  font-family: Unbounded, sans-serif;
  font-weight: 800;
  /* Та же ступень, что у заголовка секции лендинга: номер сезона здесь и есть
     заголовок карточки, отдельный кегль системе не нужен. */
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: #c4b5fd;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.hs__num i {
  font-style: normal;
  font-family: var(--vp-font-family-base);
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0;
  color: #6b6a78;
}

.hs__dates {
  margin: 6px 0 0;
  font-size: 1rem;
  color: #e8e7f0;
  font-variant-numeric: tabular-nums;
}

.hs__sub {
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: #6b6a78;
}

.hs__sub em { font-style: normal; color: #a78bfa; }
.hs__dot { margin: 0 6px; }

/* Та же точка статуса, что в строке онлайна на лендинге. */
.hs__live {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 10px;
  color: #4ade80;
}

.hs__live::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}

.hs__links {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  pointer-events: none;
}

/* Кликабелен только «Альбом» — он единственный ведёт не туда, куда карточка. */
.hs__links a {
  pointer-events: auto;
}

/* Цель нажатия — не меньше 44 px по высоте: на телефоне это единственный
   способ попасть в кнопку пальцем, а hover'а там нет вовсе. */
.hs__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid rgba(167, 139, 250, 0.24);
  background: rgba(16, 17, 20, 0.5);
  font-size: 0.85rem;
  color: #c4b5fd;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.hs__chip:hover,
.hs__chip:focus-visible {
  background: rgba(124, 58, 237, 0.18);
  border-color: rgba(167, 139, 250, 0.55);
  color: #e8e7f0;
}

.hs__chip:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 2px;
}

.hs__chip b {
  font-weight: 500;
  color: #6b6a78;
  font-variant-numeric: tabular-nums;
}

.hs__chip:hover b { color: #a78bfa; }

/* «Статья» — подпись, а не кнопка: своего наведения у неё нет, она
   загорается вместе со всей карточкой, потому что карточка и есть эта кнопка.
   Именно :hover, а НЕ :focus-within: с клавиатуры фокус может стоять на
   «Альбоме», и тогда подсвечивались бы два чипа сразу, а Enter уводил в один. */
.hs__go:focus-visible ~ .hs__body .hs__chip--ghost,
.hs:hover .hs__chip--ghost {
  background: rgba(124, 58, 237, 0.18);
  border-color: rgba(167, 139, 250, 0.55);
  color: #e8e7f0;
}

/* --- сезон, которого не было ---------------------------------------------- */
/* Изъято, а не выключено: обложка должна остаться видимой картинкой,
   иначе тёмный кадр читается как не загрузившийся файл. */
.hs--redacted .hs__cover {
  filter: grayscale(0.85) contrast(1.1);
  opacity: 0.55;
}

.hs--redacted:hover .hs__cover { opacity: 0.7; }

.hs--redacted .hs__num,
.hs--redacted .hs__dates {
  filter: blur(0.28em);
  user-select: none;
}

.hs--redacted .hs__sub { color: #e8a0bf; }

/* --- сезон, который идёт --------------------------------------------------- */
.hs--current {
  border-style: dashed;
  border-color: rgba(167, 139, 250, 0.3);
  min-height: 150px;
  background:
    radial-gradient(30rem 14rem at 100% 50%, rgba(74, 222, 128, 0.05), transparent 70%),
    rgba(255, 255, 255, 0.02);
}

.hs--current .hs__num { color: #e8e7f0; }
.hs--current .hs__body { max-width: 100%; }

/* --- телефон --------------------------------------------------------------- */
@media (max-width: 760px) {
  .hist {
    padding: 32px 16px 64px;
  }

  .hist__list {
    padding-left: 26px;
    gap: 14px;
  }

  .hist__list::before {
    left: 4px;
    top: 20px;
  }

  .hist__node {
    left: -26px;
    top: 22px;
  }

  .hs {
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
  }

  /* Обложка переезжает наверх широкой полосой: сбоку от неё на 360 px
     не остаётся места ни под дату, ни под кнопки. */
  .hs__cover {
    position: relative;
    inset: auto;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    opacity: 0.9;
    -webkit-mask-image: linear-gradient(180deg, #000 55%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 55%, transparent 100%);
  }

  .hs__body {
    max-width: 100%;
    padding: 4px 18px 20px;
    margin-top: -34px;
  }

  .hs--current .hs__body { padding-top: 20px; margin-top: 0; }

  .hs__links {
    margin-top: 18px;
    gap: 8px;
  }

  /* Кнопки делят строку пополам вместо двух узких пилюль у левого края. */
  .hs__chip {
    flex: 1 1 0;
    min-height: 48px;
    padding: 0 12px;
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hs,
  .hs__cover,
  .hs__chip {
    transition: none;
  }

  .hs:hover { transform: none; }
  .hs:hover .hs__cover { transform: none; }
  .hist__node--live { animation: none; }
}
</style>
