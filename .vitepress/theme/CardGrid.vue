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
  /* auto-fit + minmax: карточки сами переносятся и на узком экране встают
     в один столбец. Прежний flex без wrap сжимал их в нечитаемые полоски. */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.5em;
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
