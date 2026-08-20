<template>
  <section class="reviews"><h2>Что говорят игроки</h2><div class="reviews__window" :class="{ 'is-static': staticMode }" @mouseenter="setPaused(true)" @mouseleave="setPaused(false)"><div ref="track" class="reviews__track">
    <div v-for="(review,index) in doubled" :key="`${review.nick}-${index}`" class="review-card" :aria-hidden="index >= reviews.length">
      <p>{{ review.text }}</p><footer><img :src="review.avatar || `https://cravatar.eu/avatar/${review.nick}/50.png`" :alt="review.name" loading="lazy" /><strong>{{ review.name }}</strong></footer>
    </div>
  </div></div></section>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const track = ref(null)
const BASE_SPEED = 0.065
const EASE_DURATION = 650
let position = 0
let speed = BASE_SPEED
let speedFrom = BASE_SPEED
let speedTarget = BASE_SPEED
let speedChangeAt = 0
let lastFrame = 0
let frameId = 0
const staticMode = ref(false)

function setPaused(paused) {
  if (staticMode.value) return
  speedFrom = speed
  speedTarget = paused ? 0 : BASE_SPEED
  speedChangeAt = performance.now()
}

function animate(now) {
  if (!track.value) return
  if (!lastFrame) lastFrame = now
  const delta = Math.min(now - lastFrame, 50)
  lastFrame = now
  const progress = Math.min((now - speedChangeAt) / EASE_DURATION, 1)
  const eased = 1 - Math.pow(1 - progress, 3)
  speed = speedFrom + (speedTarget - speedFrom) * eased
  const firstCard = track.value.children[0]
  const firstDuplicate = track.value.children[reviews.length]
  const loopWidth = firstCard && firstDuplicate ? firstDuplicate.offsetLeft - firstCard.offsetLeft : 0
  if (loopWidth > 0) position = (position + speed * delta) % loopWidth
  track.value.style.transform = `translateX(${-position}px)`
  frameId = requestAnimationFrame(animate)
}

onMounted(() => {
  staticMode.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!staticMode.value) frameId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => cancelAnimationFrame(frameId))

const reviews = [
  { nick:'Szarkan', name:'Не Szarkan', text:'я НЕ основатель этого сервера и я ТОЧНО НЕ подкупал игроков АРами чтобы они написали сюда хороший отзыв.' },
  { nick:'sm1lly', name:'sm1lly', text:'крутой сервер. меня не подкупали АРами.' },
  { nick:'ffesco', name:'ffesco', text:'Вчера я играл на кошкокрафте до 2 часов ночи, было очень весело... Хохотал на весь дом всю ночь, но сегодня почему-то проснулся в детдоме.' },
  { nick:'Sibirius', name:'Sibirius', text:'КошкоКрафт очень крутой сервер. Здесь добрые и веселые котики, хорошие ивенты, имеется много всяких кастомных приколюх, особенно сильно мне нравица мебель и рисовать. А так же, только здесь самая лучшая, отзывчивая и пиздец какая крутая модерация, особенно Всекотец (ака админ). Я рыгнул и у меня упал потолок.' },
  { nick:'dark_moooon', name:'dark_moooon', text:'Кошкокрафт это мой второй сервер, где я остался окончательно. Честно, не могу сказать, почему я выбрал именно его. Но могу быть уверенным, что здесь много интересных людей, с которыми можно потерять свою жизнь, играя в майнкрафт.' },
  { nick:'CharaBell', name:'CharaBell', text:'самый лучший сервер, у админа большой хуй. я не жена админа.' },
  { nick:'Kaban4Ever', name:'Kaban4Ever', text:'Играю с 5 сезона, название сервер оправдывает. Коты везде и повсюду, даже в интерфейсе... За время игры познал себя в Блендере, т.к. нашел некое вдохновение. Тут играют ОЧЕНЬ интересные люди, непредсказуемые.' },
  { avatar:'/assets/l_vitek_l.webp', name:'l_vitek_l', text:'СНРВЕР ДАСТАТАЧНА ХАРОШЫЙ ДЛЯ ИГРЫ С ДРУЗЬЯМИ, НО ЭТО НЕ ТОЧНО. Ладно потом что-то нормальное придумаю' },
  { nick:'kc_salt', name:'kc_salt', text:'Кошкокрафт хороший сервер, играю с 5 и атмосферка хорошая, сервер оч интересный!! Всем советую' },
  { nick:'artlaks', name:'artlaks', text:'До того как я узнал о Кошкокрафте, у меня была импотенция. Но когда я узнал о нем и начал играть... Так я и стал дедом в 16 лет. В общем, сервер объединяет ранее незнакомых людей в семьи.' },
  { nick:'Charanixy', name:'Charanixy', text:'всем привет' },
  { nick:'Kvar1kc', name:'Kvar1kc', text:'Играю с 5-го сезона. Блин, очень круто! Сервер всегда находится в онлайн! Игроки отзывчивые, админ делает новые фишки и крутые дополнения.' },
  { nick:'Mrs_Tori', name:'Mrs_Tori', text:'Сервер хорош, каждую неделю выходят разоблачения и интриги, перестала смотреть криминальную Россию, так как и на Кошкокрафте хватает запутанных историй.' },
  { nick:'Skorohodon', name:'Skorohodon', text:'Самый лучший сервер, админ мой лучший друг, я его очень люблю и не желаю ему адской и мучительной смерти каждый божий день.' },
]
const doubled = [...reviews,...reviews]
</script>
<style scoped>
.reviews { display:flex; flex-direction:column; gap:16px; }
.reviews h2 { margin:0; border:0; color:#7c3aed; font:700 12px/1.4 'Rubik',sans-serif; letter-spacing:.16em; text-transform:uppercase; }
.reviews__window { overflow:hidden; -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent); mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent); }
.reviews__track { display:flex; width:max-content; gap:14px; will-change:transform; }
.review-card { display:flex; flex:none; flex-direction:column; gap:10px; width:320px; padding:16px; border:1px solid rgba(255,255,255,.07); border-radius:14px; background:rgba(255,255,255,.03); }
.review-card p { margin:0; color:#b8b3c6; font-size:13.5px; line-height:1.55; }
.review-card footer { display:flex; align-items:center; gap:8px; margin-top:auto; }
.review-card img { width:22px; height:22px; border-radius:4px; image-rendering:pixelated; }
.review-card strong { color:#c4b5fd; font-size:13px; font-weight:600; }
.reviews__window.is-static { overflow-x:auto; -webkit-mask-image:none; mask-image:none; }
.reviews__window.is-static .reviews__track { transform:none!important; will-change:auto; }
.reviews__window.is-static .review-card[aria-hidden="true"] { display:none; }
</style>
