<template>
  <section v-if="latestUpdate" class="whats-new">
    <h2>Последнее обновление</h2>
    <article class="news-card" :class="{ 'news-card--no-image': !latestUpdate.image }">
      <div>
        <span class="badge">НОВОЕ</span>
        <p v-if="latestUpdate.date" class="news-meta">{{ latestUpdate.date }}</p>
        <h3>{{ latestUpdate.title }}</h3>
        <p>{{ latestUpdate.description }}</p>
        <a class="news-link cc-pill" :href="latestUpdate.url">
          <img src="/assets/info/brandbook/paw_white.svg" alt="" />
          <span>Читать обновление</span>
          <span class="news-link__arrow">→</span>
        </a>
      </div>
      <img v-if="latestUpdate.image" :src="latestUpdate.image.src" :alt="latestUpdate.image.alt" loading="lazy" />
    </article>
  </section>
</template>
<script setup>
import { data as latestUpdate } from './updates.data.mjs'
</script>
<style scoped>
.whats-new { display:flex; flex-direction:column; gap:16px; font-family:'Rubik',sans-serif; }
.whats-new > h2 { margin:0; border:0; color:#7c3aed; font:700 12px/1.4 'Rubik',sans-serif; letter-spacing:.16em; text-transform:uppercase; }
.news-card { display:grid; grid-template-columns:1fr 320px; gap:18px; align-items:center; overflow:hidden; padding:18px; border:1px solid rgba(255,255,255,.08); border-radius:16px; background:#1c1826; }
.news-card--no-image { grid-template-columns:1fr; }
.news-card > img { width:320px; height:170px; border-radius:12px; object-fit:cover; }
.badge { display:inline-block; padding:3px 8px; border-radius:8px; background:#4f2dbe; color:#fff; font-size:11px; font-weight:600; letter-spacing:.05em; }
.news-meta { margin:10px 0 0!important; color:#9a94ab!important; font-size:12px!important; }
.news-card h3 { margin:6px 0 0; border:0; color:#e8e7f0; font:700 19px/1.35 'Rubik',sans-serif; }
.news-card h3 + p { margin:8px 0 0; color:#9a94ab; font-size:14px; line-height:1.55; }
.news-card .news-link { margin-top:10px; }
.news-link__arrow { color:#a67cf5; transition:color .18s,transform .18s; }
.news-link:hover .news-link__arrow { color:#fff; transform:translateX(3px); }
@media (max-width:760px) { .news-card { grid-template-columns:1fr; } .news-card > img { order:-1; width:100%; } }
</style>
