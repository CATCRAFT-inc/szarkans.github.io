<template>
  <div class="blur-image-container" :class="{ revealed }" @click="revealed = !revealed">
    <img :src="src" :alt="alt" />
    <div class="blur-image-overlay">
      <div class="blur-image-text">
        <div class="nsfw-title">18+</div>
        <div class="nsfw-subtitle">Наведись / нажми, чтобы посмотреть</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
});

const revealed = ref(false);
</script>

<style scoped>
.blur-image-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.blur-image-container img {
  display: block;
  transition: filter 0.3s ease !important;
  width: 100%;
  height: auto;
  filter: blur(12px);
}

/* Раскрытие по клику/тапу — работает везде. Наведение мышью добавляется
   только там, где указатель действительно есть: на тач-экране браузер
   эмулирует mouseenter перед click, и JS-обработчик наведения гасил тап. */
.blur-image-container.revealed img {
  filter: none;
}
.blur-image-container.revealed .blur-image-overlay {
  opacity: 0;
}

@media (hover: hover) {
  .blur-image-container:hover img {
    filter: none;
  }
  .blur-image-container:hover .blur-image-overlay {
    opacity: 0;
  }
}

.blur-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.nsfw-title {
  font-size: 2rem;
  font-weight: bold;
}

.nsfw-subtitle {
  font-size: 1rem;
  margin-top: 8px;
}
</style>
