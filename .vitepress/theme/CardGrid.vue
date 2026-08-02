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

.card-grid .p-card {
  transition: box-shadow 0.1s ease-in-out !important;
}

.card-grid .p-card:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5) !important;
}

</style>
