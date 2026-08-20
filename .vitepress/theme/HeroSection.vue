<template>
  <section class="home-hero">
    <div class="home-hero__copy">
      <h1>Лучший. Кошачий. Навсегда!</h1>
      <p>Сервер-песочница с обилием новых механик и уклоном в сторону РПГ со всеми его вытекающими!</p>
      <div class="home-hero__actions">
        <a class="home-button cc-primary-button" href="/info/guide">Начать играть</a>
        <a class="home-button home-button--secondary" href="https://discord.gg/6f3FwFRJWC" target="_blank" rel="noopener">Discord</a>
      </div>
    </div>

    <article class="server-card">
      <div class="server-card__head">
        <img src="/favicon.png" alt="Кошкокрафт" width="52" height="52" />
        <div class="server-card__name">
          <strong>Кошкокрафт</strong>
          <span>1.21.11 Java</span>
        </div>
        <div class="server-card__status">
          <span class="server-card__dot" :style="{ background: statusColor, boxShadow: `0 0 10px ${statusColor}` }"></span>
          <span>{{ statusText }}</span>
        </div>
      </div>
      <button class="ip-copy" type="button" @click="copyIp">
        <code>play.catcraft.ru</code><span>{{ copied ? 'скопировано!' : 'копировать' }}</span>
      </button>
      <p>Сезон 8 — <strong>REBORN</strong></p>
    </article>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useCopyIp } from './useCopyIp.js'

const SERVER_MODE = 'online'
const players = ref(null)
const loaded = ref(false)
const failed = ref(false)
const { copied, copyIp } = useCopyIp()
const pluralRu = new Intl.PluralRules('ru')
const forms = { one: 'игрок', few: 'игрока', many: 'игроков', other: 'игроков' }

const statusText = computed(() => {
  if (SERVER_MODE === 'offseason') return 'межсезонье'
  if (SERVER_MODE === 'maintenance') return 'тех. работы'
  if (!loaded.value) return 'подключаемся…'
  if (failed.value) return 'тех. работы'
  return `${players.value} ${forms[pluralRu.select(players.value)]} онлайн`
})
const statusColor = computed(() => {
  if (SERVER_MODE === 'offseason') return '#facc15'
  if (SERVER_MODE === 'maintenance') return '#f87171'
  if (!loaded.value) return '#8f87a3'
  return failed.value ? '#f87171' : '#4ade80'
})

onMounted(async () => {
  if (SERVER_MODE !== 'online') return
  const cacheKey = 'catcraft_server_status'
  const cacheTimeKey = 'catcraft_server_status_time'
  const cached = sessionStorage.getItem(cacheKey)
  const cachedTime = Number(sessionStorage.getItem(cacheTimeKey))
  if (cached && cachedTime && Date.now() - cachedTime < 60000) {
    try {
      players.value = JSON.parse(cached).players
      loaded.value = true
      return
    } catch { /* fetch fresh data */ }
  }
  try {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 5000)
    const response = await fetch('https://api.mcsrvstat.us/2/play.catcraft.ru', { signal: controller.signal })
    clearTimeout(timeout)
    if (!response.ok) throw new Error('status request failed')
    const data = await response.json()
    if (data.online !== true) throw new Error('server offline')
    players.value = data.players?.online ?? 0
    sessionStorage.setItem(cacheKey, JSON.stringify({ players: players.value }))
    sessionStorage.setItem(cacheTimeKey, String(Date.now()))
  } catch {
    failed.value = true
  } finally {
    loaded.value = true
  }
})

</script>

<style scoped>
.home-hero { display:grid; grid-template-columns:1fr 420px; gap:56px; align-items:center; }
.home-hero__copy { display:flex; flex-direction:column; gap:20px; }
.home-hero h1 { margin:0; max-width:650px; border:0; background:linear-gradient(100deg,#fff 20%,#c299e5 90%); background-clip:text; color:transparent; font:900 58px/1.04 'Unbounded',sans-serif; letter-spacing:-1px; text-shadow:none; }
.home-hero__copy > p { max-width:520px; margin:0; color:#9a94ab; font-size:18px; line-height:1.6; }
.home-hero__actions { display:flex; gap:12px; }
.home-button { display:inline-flex; align-items:center; justify-content:center; padding:13px 28px; border-radius:12px; color:#fff; font-size:16px; font-weight:600; text-decoration:none; transition:.2s ease; }
.home-button--secondary { padding-inline:24px; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.06); color:#d0d0e0; }
.home-button--secondary:hover { background:rgba(255,255,255,.12); color:#fff; }
.server-card { display:flex; flex-direction:column; gap:14px; padding:20px 22px; border:1px solid rgba(255,255,255,.08); border-radius:16px; background:#1c1826; }
.server-card__head { display:flex; align-items:center; gap:14px; }
.server-card__head img { image-rendering:pixelated; }
.server-card__name { display:flex; flex:1; flex-direction:column; gap:4px; min-width:0; }
.server-card__name strong { font-size:17px; }
.server-card__name span,.server-card > p { color:#9a94ab; font-size:13.5px; }
.server-card__status { display:flex; align-items:center; gap:7px; font-size:13.5px; font-weight:600; white-space:nowrap; }
.server-card__dot { width:9px; height:9px; border-radius:50%; }
.ip-copy { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; border:1px dashed rgba(255,255,255,.18); border-radius:10px; background:#0f0d14; color:#e8e7f0; cursor:pointer; font-family:'Rubik',sans-serif; }
.ip-copy:hover { border-color:#8758f3; }
.ip-copy code { color:#e8e7f0; font:17px monospace; }
.ip-copy span { color:#a67cf5; font-size:13px; font-weight:600; }
.server-card > p { margin:0; }
.server-card > p strong { color:#c4b5fd; font-weight:600; }
@media (max-width:900px) { .home-hero { grid-template-columns:1fr; } .home-hero h1 { font-size:clamp(38px,8vw,58px); } }
@media (max-width:560px) { .home-hero__actions { flex-wrap:wrap; } .server-card__head { flex-wrap:wrap; } .server-card__status { width:100%; } }
</style>
