<template>
  <div ref="root" class="item-card">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const root = ref(null);

// Пиксель-арт (иконки предметов, 128×128 и мельче) масштабируем без сглаживания.
// Крупные рендеры (1000×1000) от pixelated только испортились бы алиасингом,
// поэтому решаем по натуральному размеру картинки, а не одним CSS-правилом.
onMounted(() => {
  root.value?.querySelectorAll('img').forEach((img) => {
    const mark = () => img.classList.toggle('pixel-art', img.naturalWidth > 0 && img.naturalWidth <= 256);
    if (img.complete) mark();
    else img.addEventListener('load', mark, { once: true });
  });
});
</script>

<style>
/* ---------------------------------------------------------------
   Карточка предмета: инфобокс справа от текста секции.
   Ширина фиксированная — иначе float ужимается по контенту и
   карточки выстраиваются рваной лесенкой разной ширины.
   --------------------------------------------------------------- */
.item-card {
  float: right;
  width: 280px;
  max-width: 100%;
  margin: 0.25rem 0 1.5rem 2rem;
  border-radius: 8px;
}

/* Карточка не должна залезать в следующую секцию и на широкие блоки.
   Заголовок следующей секции сам уходит под неё — это снимает нужду
   в <br><br><br> внутри .md. Флексовые блоки (.crafting-container)
   сами по себе BFC и обтекают карточку корректно, им clear не нужен.

   Стиль компонента не scoped и лежит в общем чанке, поэтому правила
   сужены до страниц, где карточка действительно есть: иначе clear
   срабатывал бы на всей вики. */
.vp-doc:has(.item-card) h1,
.vp-doc:has(.item-card) h2,
.vp-doc:has(.item-card) table,
.vp-doc:has(.item-card) div[class*='language-'],
.vp-doc:has(.item-card) .custom-block {
  clear: both;
}

/* Карточка — float, то есть отдельный BFC: клиры её внутренностей
   на внешний поток не влияют. Обнуляем на всякий случай. */
.item-card h1,
.item-card h2,
.item-card table {
  clear: none;
}

/* Контейнер документа должен содержать флоаты, иначе последняя карточка
   вываливается на футер. flow-root вместо overflow:auto — не режет
   абсолютные тултипы сетки крафта и не плодит скроллбар. */
.vp-doc:has(.item-card) {
  display: flow-root;
}

/* --- Тело карточки под тёмную тему вики --- */
.item-card .p-card {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: none;
}

.item-card .p-card-title {
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  line-height: 1.35;
  text-align: center;
}

.item-card .p-card-body {
  padding: 0.75rem 1.1rem 1.1rem;
}

.item-card .p-card-content ul {
  margin: 0.4rem 0 0;
  padding-left: 1.15rem;
}

.item-card .p-card-content h3 {
  margin: 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

/* Подписи внутри карточки — служебные, не должны спорить с текстом статьи */
.item-card .p-card-content,
.item-card .p-card-content p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.item-card .p-divider {
  --p-divider-border-color: var(--vp-c-divider);
  margin: 0.7rem 0;
}

/* --- Иконка предмета: крупно и без мыла --- */
.item-card .p-card-header {
  padding: 1.1rem 1rem 0;
}

.item-card .p-image {
  display: block;
  margin-top: 0;
}

.item-card .p-card-header img {
  display: block;
  margin: 0 auto;
  width: auto;
  height: 128px;
  max-width: 100%;
  object-fit: contain;
}

/* Класс вешает onMounted по натуральному размеру картинки */
.item-card .pixel-art {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}

/* Пока рядом с карточкой помещается сетка крафта (~354px) — обтекание.
   Уже — карточка встаёт в поток целиком, иначе сетка лезет ей под низ:
   .crafting-container это flex, то есть BFC, коробка ужимается, а
   содержимое фиксированной ширины вылезает поверх карточки.
   Контент-колонка вики = viewport - 440px, отсюда порог. */
@media (max-width: 1120px) {
  .item-card {
    float: none;
    width: 100%;
    max-width: 380px;
    margin: 0 0 1.5rem;
  }
}
</style>
