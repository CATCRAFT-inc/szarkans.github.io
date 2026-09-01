<template>
    <div class="card-grid">
      <!-- Здесь <slot> позволяет передавать полностью настраиваемые карточки из md-файла -->
      <slot />
    </div>
  </template>

<script setup>
</script>

<style>
.card-grid {
  display: flex;
  /* flex-wrap: на узком экране карточки переносятся, а не сжимаются
     в нечитаемые полоски. Ширину задаёт содержимое карточки — гридом
     с колонками фиксированной доли картинки растягивало на всю колонку. */
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: center;
  align-items: stretch; /* Растягивает элементы по высоте */
  margin-top: 24px;
  margin-bottom: 24px;
}

/* 🛑 Потолок ширины карточки. Без него flex-элемент берёт ширину по
   содержимому, а содержимое — картинка в натуральную величину: лапка
   брендбука раздувала карточку до 700px, гифки рыбалки — до 600px, по одной
   в ряд. Базовый `img { max-width: 100% }` тут не спасает: ширина карточки
   САМА выведена из картинки, и правило замыкается само на себя — размер
   обязан ограничить кто-то снаружи.
   25rem — та же ширина, что страницы проставляют инлайном (donate, discs),
   так что для них ничего не меняется; чинит только те, где ширину не задали.
   min() оставляет карточку в рамках экрана на телефоне. */
.card-grid > * {
  max-width: min(100%, 25rem);
}

.card-grid .p-card {
  transition: box-shadow 0.1s ease-in-out !important;
}

/* ── Плитки предметов ────────────────────────────────────────────────────
   Включается классом на самом гриде: <CardGrid class="item-cards">.
   Карточкам задаётся ОДИНАКОВАЯ ширина в самой странице (style="width: 14rem"),
   иначе flex меряет их по длине подписи и ряд выходит рваной лесенкой.
   Без класса не меняется ничего: страницы с фотографиями, гифками и лапками
   брендбука остаются как были. */
.card-grid.item-cards .p-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: none;
}

/* Иконки предметов — пиксель-арт 16×16, растянутый до 128. 96px = ровно
   6 экранных пикселей на пиксель арта, поэтому сетка не плывёт. */
.card-grid.item-cards .p-card-header {
  padding: 1.25rem 1rem 0;
}

.card-grid.item-cards .p-card-header img {
  display: block;
  margin: 0 auto;
  height: 96px;
  width: auto;
  image-rendering: pixelated;
}

.card-grid.item-cards .p-card-body {
  padding: 0.9rem 1.1rem 1.1rem;
}

.card-grid.item-cards .p-card-title {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
}

.card-grid.item-cards .p-card-content {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  line-height: 1.45;
  text-align: center;
}

.card-grid .p-card:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5) !important;
}

</style>
