<template><section class="home-faq"><article v-for="item in faq" :key="item.question"><h2>{{ item.question }}</h2><p>{{ item.answer }}</p></article></section></template>
<script setup>
import { faq } from '../faq.js'
</script>
<style scoped>
.home-faq { display:grid; grid-template-columns:1fr 1fr; gap:14px 40px; }
.home-faq article { display:flex; flex-direction:column; gap:5px; padding:14px 0; border-top:1px solid rgba(255,255,255,.07); }
.home-faq h2 { margin:0; border:0; color:#e8e7f0; font:600 16px/1.45 'Rubik',sans-serif; }
.home-faq p { margin:0; color:#9a94ab; font-size:14.5px; line-height:1.55; }
@media (max-width:640px) { .home-faq { grid-template-columns:1fr; } }
</style>
