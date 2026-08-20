<template>
  <div class="wiki-index" ref="root">
    <header class="wiki-index__head">
      <h1 class="wiki-index__title">{{ title }}</h1>
      <div class="wiki-index__intro"><slot /></div>
    </header>

    <!-- Крупные: то, чем игрок ЗАНИМАЕТСЯ. Плитка с пояснением, потому что по
         одному названию «Кланы β» или «Пивоварение» не догадаешься.
         Идут над кладкой, во всю ширину — это витрина, а не часть списка. -->
    <section
      v-for="(group, gi) in featuredGroups"
      :key="group.text"
      class="wi-feature"
      :style="{ '--wi-delay': gi * 60 + 'ms' }"
    >
        <h2 class="wi-panel__title">{{ group.text }}</h2>
        <div class="wi-feature__grid">
          <a
            v-for="item in group.items"
            :key="item.link"
            class="wi-feat"
            :href="hrefOf(item.link)"
          >
            <span class="wi-feat__head">
              <img
                v-if="item.icon"
                class="wi-feat__icon"
                :src="withBase(item.icon)"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <span class="wi-feat__name">{{ item.text }}</span>
              <!-- Стрелка — то, что делает коробку кнопкой ещё до наведения. -->
              <svg class="wi-feat__arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span v-if="item.blurb" class="wi-feat__blurb">{{ item.blurb }}</span>
          </a>
        </div>
      </section>

    <div class="wiki-index__grid">
      <section
        v-for="(group, gi) in listGroups"
        :key="group.text"
        class="wi-panel"
        :style="{ '--wi-delay': gi * 60 + 'ms' }"
      >
        <h2 class="wi-panel__title">{{ group.text }}</h2>
        <ul class="wi-panel__list">
          <li v-for="item in group.items" :key="item.link">
            <a class="wi-link" :href="hrefOf(item.link)">
              <img
                v-if="hasIcons(group)"
                class="wi-link__icon"
                :src="withBase(item.icon || FALLBACK_ICON)"
                :class="{ 'wi-link__icon--fallback': !item.icon }"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <span class="wi-link__text">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { sidebarsBySection } from '../sidebars.js';

const props = defineProps({
  section: { type: String, required: true },
  title: { type: String, required: true },
});

const FALLBACK_ICON = '/assets/info/brandbook/paw_purple.svg';

// Строки без `items` — это одиночные ссылки бокового меню (в первую очередь
// «← Весь бестиарий», дорога обратно сюда же). В хабе им делать нечего:
// группой они не являются и нарисовались бы пустой коробкой с заголовком.
const groups = computed(() =>
  (sidebarsBySection[props.section] ?? []).filter((g) => g.items?.length)
);
const featuredGroups = computed(() => groups.value.filter((g) => g.featured));
const listGroups = computed(() => groups.value.filter((g) => !g.featured));
// Иконки — свойство ГРУППЫ, а не строки. У предметов текстура есть, у механик
// («Почта», «Войсчат», «Достижения») её не существует и быть не может: колонка
// из одинаковых лапок-заглушек читается как поломка, а не как решение.
// Поэтому рисуем иконки только там, где хоть у кого-то в группе она настоящая.
const hasIcons = (group) => (group.items ?? []).some((i) => i.icon);

// cleanUrls: true — адреса без расширения, поэтому у ссылок меню срезаем `.md`.
const hrefOf = (link) => withBase(String(link).replace(/\.md$/, ''));

const root = ref(null);

// Тот же приём, что в ItemCard: иконки предметов — пиксель-арт 16×16, их надо
// масштабировать без сглаживания. А вот крупные рендеры (сланец, зачарованный
// булыжник — под 30 КБ) от pixelated только рассыпались бы на лесенки, поэтому
// решаем по натуральному размеру картинки, а не одним CSS-правилом на всех.
onMounted(() => {
  root.value?.querySelectorAll('.wi-link__icon, .wi-feat__icon').forEach((img) => {
    const mark = () => img.classList.toggle('pixel-art', img.naturalWidth > 0 && img.naturalWidth <= 256);
    if (img.complete) mark();
    else img.addEventListener('load', mark, { once: true });
  });
});
</script>

<style scoped>
/* ---------------------------------------------------------------------------
   Хаб раздела: вход, с которого видно ВЕСЬ раздел без скролла и без меню.
   Списки, а не карточки с описаниями: предмет опознаётся по иконке и названию,
   описание тут — шум. Ширина и плотность рассчитаны на рост контента:
   группа на 3 позиции и группа на 40 выглядят одинаково уместно.
   --------------------------------------------------------------------------- */
.wiki-index {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 96px;
}

.wiki-index__head {
  margin-bottom: 40px;
}

.wiki-index__title {
  font-family: Unbounded, sans-serif;
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--cc-text-1);
  margin: 0 0 16px;
}

.wiki-index__intro {
  max-width: 700px;
  color: var(--cc-text-2);
  line-height: 1.7;
}

.wiki-index__intro :deep(p) {
  margin: 0;
}

.wiki-index__intro :deep(.white) {
  color: var(--cc-text-1);
  font-weight: 600;
}

.wiki-index__intro :deep(.gold) {
  color: var(--cc-ember);
}

/* КЛАДКА, а не сетка из равных ячеек.
   Группы у раздела очень разного размера (2, 8, 8, 1 позиции). В обычном гриде
   ряд равняется по самой высокой коробке, и рядом с короткой зияет дыра —
   на четырёх группах это давало рваную шахматку с двумя пустотами по диагонали.
   `columns` даёт каждой коробке ровно её высоту и сам балансирует колонки. */
.wiki-index__grid {
  columns: 2;
  column-gap: 20px;
}

.wiki-index__grid > .wi-panel {
  /* Коробку нельзя разрезать между колонками. */
  break-inside: avoid;
  margin-bottom: 20px;
}

@media (max-width: 760px) {
  .wiki-index__grid {
    columns: 1;
  }
}

.wi-panel {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  padding: 20px 20px 16px;
  animation: wi-rise 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--wi-delay, 0ms);
}

/* Крупные механики: плитки во всю ширину ряда, без коробки-обёртки.
   Пояснение здесь не украшение — без него «Кланы β» ничего не говорят. */
.wi-feature {
  margin-bottom: 20px;
  animation: wi-rise 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--wi-delay, 0ms);
}

.wi-feature__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 16px;
}

.wi-feat {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  /* Рамка сразу с фиолетом: серая волосяная линия делала плитку абзацем
     в коробке, а не кнопкой. */
  border: 1px solid rgba(167, 139, 250, 0.22);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  text-decoration: none;
  transition: background-color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
}

.wi-feat:hover,
.wi-feat:focus-visible {
  background: rgba(124, 58, 237, 0.12);
  border-color: rgba(167, 139, 250, 0.55);
  transform: translateY(-2px);
}

.wi-feat__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.wi-feat__icon {
  flex: none;
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.wi-feat__name {
  flex: 1;
  min-width: 0;
}

.wi-feat__arrow {
  flex: none;
  width: 20px;
  height: 20px;
  color: var(--cc-purple-400);
  transition: transform 0.18s ease;
}

.wi-feat:hover .wi-feat__arrow {
  transform: translateX(4px);
}

.wi-feat:focus-visible {
  outline: 2px solid var(--cc-purple-400);
  outline-offset: 2px;
}

.wi-feat__name {
  font-family: Unbounded, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--cc-text-1);
}

.wi-feat:hover .wi-feat__name {
  color: var(--cc-purple-300);
}

.wi-feat__blurb {
  font-size: 0.85rem;
  line-height: 1.4;
  color: var(--cc-text-2);
}

.wi-panel__title {
  font-family: Unbounded, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  color: #b698fc;
  margin: 0 0 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Все коробки одной ширины: раньше большие группы растягивались на весь ряд,
   а мелкие оставались в одну колонку — ряды чередовались, и справа от каждой
   мелкой зияла дыра. Ширина теперь одна на всех, а колонки ссылок внутри
   набираются по месту: в коробке на 8 позиций их две, на 40 — столько же,
   просто строк больше. */
.wi-panel__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
  column-gap: 12px;
  row-gap: 2px;
  margin: 0;
  padding: 0;
}

.wi-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  /* Лавандовый в ПОКОЕ, а не только на наведении: пока ссылка цвета обычного
     текста, она и читается как текст. На телефоне hover'а нет вовсе, там это
     был единственный сигнал «сюда можно ткнуть» — то есть никакого. */
  color: var(--cc-purple-300);
  font-size: 1rem;
  line-height: 1.4;
  text-decoration: none;
  transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
}

.wi-link:hover,
.wi-link:focus-visible {
  background: rgba(124, 58, 237, 0.16);
  color: var(--cc-text-1);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(167, 139, 250, 0.6);
  transform: translateX(3px);
}

.wi-link:focus-visible {
  outline: 2px solid var(--cc-purple-400);
  outline-offset: 1px;
}

.wi-link__icon {
  flex: none;
  width: 22px;
  height: 22px;
  object-fit: contain;
  transition: filter 0.18s ease;
}

.wi-link__icon.pixel-art,
.wi-feat__icon.pixel-art {
  image-rendering: pixelated;
}

/* Лапка вместо иконки — у страниц, которые не про конкретный предмет. */
.wi-link__icon--fallback {
  opacity: 0.35;
  padding: 2px;
}

.wi-link:hover .wi-link__icon {
  filter: drop-shadow(0 0 6px rgba(167, 139, 250, 0.55));
}

.wi-link__text {
  min-width: 0;
}

@keyframes wi-rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wi-panel,
  .wi-feature {
    animation: none;
  }

  .wi-feat {
    transition: none;
  }

  .wi-feat:hover,
  .wi-feat:focus-visible {
    transform: none;
  }

  .wi-feat__arrow,
  .wi-feat:hover .wi-feat__arrow {
    transition: none;
    transform: none;
  }

  .wi-link {
    transition: none;
  }

  .wi-link:hover,
  .wi-link:focus-visible {
    transform: none;
  }
}

@media (max-width: 640px) {
  .wiki-index {
    padding: 32px 16px 64px;
  }

  .wiki-index__grid {
    gap: 14px;
  }
}
</style>
