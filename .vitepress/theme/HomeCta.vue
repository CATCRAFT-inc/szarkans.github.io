<template><section class="home-cta"><h2>Готов присоединиться?</h2><div><button class="cc-primary-button" type="button" @click="copyIp"><code>play.catcraft.ru</code><span>{{ copied ? 'скопировано!' : 'копировать' }}</span></button><a href="https://discord.gg/6f3FwFRJWC" target="_blank" rel="noopener">Discord</a></div></section></template>
<script setup>
import { useCopyIp } from './useCopyIp.js'
const { copied, copyIp } = useCopyIp()
</script>
<style scoped>
.home-cta { display:flex; flex-direction:column; align-items:center; gap:16px; padding-top:16px; text-align:center; }
.home-cta h2 { margin:0; border:0; color:#e8e7f0; font:800 26px/1.3 'Unbounded',sans-serif; }
.home-cta > div { display:flex; align-items:center; gap:12px; }
.home-cta button,.home-cta a { border-radius:12px; color:#fff; font:600 16px 'Rubik',sans-serif; cursor:pointer; text-decoration:none; }
.home-cta button { display:flex; align-items:center; gap:12px; padding:14px 28px; border:0; }
.home-cta code { color:#fff; font:17px monospace; }
.home-cta button span { color:#c4b5fd; font-size:13px; }
.home-cta a { padding:13px 24px; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.06); color:#d0d0e0; }
.home-cta a:hover { background:rgba(255,255,255,.12); color:#fff; }
@media (max-width:560px) { .home-cta > div { flex-direction:column; } }
</style>
