---
aside: false
description: Древние пластинки Кошкокрафта — кастомные пластинки с музыкой, отсылающей к прошлому сервера.
---

# Древние пластинки

Музыка из далёкого прошлого, чудом сохранившаяся до наших дней.
Играются в обычном проигрывателе.

<CardGrid>
<Card style="width: 16rem; overflow: hidden" class="m-0">
    <template #header>
        <img alt="Пластинка «no homo»" src="/assets/crafts/no_homo_disc.webp" />
    </template>
    <template #title>no homo</template>
    <template #subtitle>XARAKTER · 2:24</template>
</Card>
<Card style="width: 16rem; overflow: hidden" class="m-0">
    <template #header>
        <img alt="Пластинка «Прыгай, как можно выше!»" src="/assets/crafts/radiotrance_disc.webp" />
    </template>
    <template #title>Прыгай, как можно выше!</template>
    <template #subtitle>Radiotrance · 3:33</template>
</Card>
<Card style="width: 16rem; overflow: hidden" class="m-0">
    <template #header>
        <img alt="Пластинка «Все хотят меня поцеловать»" src="/assets/crafts/molli_disc.webp" />
    </template>
    <template #title>Все хотят меня поцеловать</template>
    <template #subtitle>Пошлая Молли · 2:24</template>
</Card>
</CardGrid>

<style scoped>
/* CardGrid по умолчанию отдаёт светлые карточки PrimeVue. Иконки пластинок
   с прозрачным фоном, поэтому белый квадрат под ними виден насквозь —
   красим локально, чтобы не трогать style.css и чужие страницы с CardGrid. */
:deep(.card-grid .p-card) {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: none;
}
:deep(.card-grid .p-card-title) { color: var(--vp-c-text-1); }
:deep(.card-grid .p-card-subtitle) { color: var(--vp-c-text-2); }

/* Пластинки нарисованы во всю ширину текстуры: без паддинга арт упирается
   в рамку карточки. Отбивка та же, что у ItemCard. */
:deep(.card-grid .p-card-header) { padding: 1.25rem 1.5rem 0; }
:deep(.card-grid .p-card-header img) { image-rendering: pixelated; }
</style>
