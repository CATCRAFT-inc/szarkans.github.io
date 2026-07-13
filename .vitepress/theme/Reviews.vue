<template>
  <div class="reviews-container">
    <div class="review-wrapper" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <transition name="fade">
        <div class="review" v-if="currentReview">
          <div class="review-header">
            <!-- Здесь будет уже предзагруженное изображение -->
            <img class="review-avatar" :src="currentReview.avatar" alt="Автор" />
            <span class="review-name">{{ currentReview.name }}</span>
          </div>
          <Divider type="solid" />
          <div class="review-text">{{ currentReview.text }}</div>
        </div>
      </transition>

      <!-- Кнопка "Назад" -->
      <button class="review-button review-button-left" @click="prevReview">
        <i class="pi pi-chevron-left"></i>
      </button>
      <!-- Кнопка "Вперёд" -->
      <button class="review-button review-button-right" @click="nextReview">
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Массив отзывов
const reviews = [
  {
    avatar: 'https://cravatar.eu/avatar/Szarkan/50.png', // Замените на вашу ссылку
    name: 'Не Szarkan',
    text: 'я НЕ основатель этого сервера и я ТОЧНО НЕ подкупал игроков АРами чтобы они написали сюда хороший отзыв.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/sm1lly/50.png', // Замените на вашу ссылку
    name: 'sm1lly',
    text: 'крутой сервер. меня не подкупали АРами.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Ystika/50.png', // Замените на вашу ссылку
    name: 'Ystika',
    text: 'Вчера я играл на кошкокрафте до 2 часов ночи, было очень весело... Хохотал на весь дом всю ночь, но сегодня почему-то проснулся в детдоме.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Sibirius/50.png', // Замените на вашу ссылку
    name: 'Sibirius',
    text: 'КошкоКрафт очень крутой сервер. Здесь добрые и веселые котики, хорошие ивенты, имеется много всяких кастомных приколюх, особенно сильно мне нравица мебель и рисовать. А так же, только здесь самая лучшая, отзывчивая и пиздец какая крутая модерация, особенно Всекотец (ака админ). Я рыгнул и у меня упал потолок.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/dark_moooon/50.png', // Замените на вашу ссылку
    name: 'dark_moooon',
    text: 'Кошкокрафт это мой второй сервер, где я остался окончательно. Честно, не могу сказать, почему я выбрал именно его. Но могу быть уверенным, что здесь много интересных людей, с которыми можно потерять свою жизнь, играя в майнкрафт. Я играю на сервере год. У меня было много этапов развития. Сначала я пытался сделать свой клан Catstadt, потом пошёл в министры, и начал строить спавн. Я был в ренегатов, в кайфограде. И это всё привело меня к тому, чем я сейчас являюсь. Я уверен, что перетерплю ещё больше таких этапов, но одно останется неизменным - это самый крутой и кошачий сервер, под названием "Catcraft"'
  },
  {
    avatar: 'https://cravatar.eu/avatar/CharaBell/50.png', // Замените на вашу ссылку
    name: 'CharaBell',
    text: 'самый лучший сервер, у админа большой хуй. я не жена админа.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Kaban4Ever/50.png', // Замените на вашу ссылку
    name: 'Kaban4Ever',
    text: 'Играю с 5 сезона, название сервер оправдывает. Коты везде и повсюду, даже в интерфейсе... За время игры познал себя  в Блендере, т.к. нашел некое вдохновение. Тут играют ОЧЕНЬ интересные люди, непредсказуемые. В целом тут все вежливые и дружелюбные, я даже нашел себе друга, с которым общаюсь и играю по сей день. Сервер регулярно обновляют и завозят новый контент. А ещё можно набухаться.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/l_vitek_l/50.png', // Замените на вашу ссылку
    name: 'l_vitek_l',
    text: 'СНРВЕР ДАСТАТАЧНА ХАРОШЫЙ ДЛЯ ИГРЫ С ДРУЗЬЯМИ, НО ЭТО НЕ ТОЧНО Т.К ИЗ ДРУЗЕЙ У МЕНЯ ТОЛЬКА ПИСЬКА С КОТОРОЙ Я ИНАГДА ЕГРАЮ. Ладно потом что-то нормальное придумаю'
  },
  {
    avatar: 'https://cravatar.eu/avatar/TM_Kocherga/50.png', // Замените на вашу ссылку
    name: 'TM_Kocherga',
    text: 'Кошкокрафт хороший сервер,играю с 5 и атмосферка хорошая,сервер оч интересный!!Всем советую'
  },
  {
    avatar: 'https://cravatar.eu/avatar/artlaks/50.png', // Замените на вашу ссылку
    name: 'artlaks',
    text: 'До того как я узнал о Кошкокрафте, у меня была импотенция. Но когда я узнал о нем и начал играть, мой хуй стоял как каменный! После двух месяцев игры он выпал и улетел в поисках женщины. Спустя еще месяц он вернулся и заявил, что та, кого он нашел, беременна от него! Так я и стал дедом в 16 лет. А еще отец вернулся с 2 тоннами хлеба и 100 000 литрами молока, чтобы больше никогда не пропадать на столь долгий срок. В общем, сервер объединяет ранее незнакомых людей в семьи, а некоторые из семей возобновляет вновь. 💯 /10'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Charanixy/50.png', // Замените на вашу ссылку
    name: 'Charanixy',
    text: 'всем привет'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Kvar1kc/50.png', // Замените на вашу ссылку
    name: 'Kvar1kc',
    text: 'Играю с 5-го сезона. Блин, очень круто!  Сервер всегда находится в онлайн! Игроки отзывчивые, админ делает новые фишки и крутые дополнение на Кошкокрафте, в крайних случаях ГыЧу мафонит.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Mrs_Tori/50.png', // Замените на вашу ссылку
    name: 'Mrs_Tori',
    text: 'Сервер хорош, каждую неделю выходят разоблачения и интриги, перестала смотреть криминальную Россию, так как и на Кошкокрафте хватает запутанных историй. Если спросят чего я хочу в свои 20, так это три заркамбалы с пивом и шалкер гычи под кроватью.'
  },
  {
    avatar: 'https://cravatar.eu/avatar/Skorohodon/50.png', // Замените на вашу ссылку
    name: 'Skorohodon',
    text: 'Самый лучший сервер, админ мой лучший друг, я его очень люблю и не желаю ему адской и мучительной смерти каждый божий день и я точно не желаю чтобы вся его семья вечно горела в аду.'
  }
];

/* Текущий индекс и вычисляемый отзыв */
const currentIndex = ref(0)
const currentReview = computed(() => reviews[currentIndex.value])

function nextReview() {
  currentIndex.value = (currentIndex.value + 1) % reviews.length
}
function prevReview() {
  currentIndex.value = (currentIndex.value - 1 + reviews.length) % reviews.length
}

/* 
  Шаг 1: Предзагрузка картинок в onMounted, 
  чтобы они были доступны в кэше, когда мы будем переключаться.
*/
onMounted(() => {
  reviews.forEach(review => {
    const img = new Image()
    img.src = review.avatar
  })
})

/* 
  Базовая логика для свайпов 
  (то, что у тебя было, плюс используем ту же логику)
*/
let startX = 0
function handleTouchStart(e) {
  startX = e.touches[0].clientX
}
function handleTouchEnd(e) {
  const endX = e.changedTouches[0].clientX
  const diff = endX - startX
  if (diff < -50) nextReview()
  if (diff > 50) prevReview()
}
</script>

<style scoped>
.reviews-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.review-wrapper {
  position: relative;
  width: 70%;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.review-wrapper:hover {
  background: rgba(0, 0, 0, 0.32);
  border-color: rgba(79, 45, 190, 0.45);
  box-shadow: 0 4px 24px rgba(79, 45, 190, 0.13);
}

.review {
  padding: 0 20px 0 20px;
}

@media (max-width: 960px) {
  .review-wrapper {
    width: 95%;
  }
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}
.review-avatar {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  image-rendering: pixelated;
}
.review-name {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #d8d0ff;
  margin-left: 12px;
}

.review-button {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 44px;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: opacity 0.25s ease, background 0.25s ease, color 0.25s ease;
  color: #a0a0b0;
}
.review-button:hover {
  opacity: 1;
  background: rgba(79, 45, 190, 0.14);
  color: #b898ff;
}
.review-button-left {
  left: 0;
  border-radius: 14px 0 0 14px;
}
.review-button-right {
  right: 0;
  border-radius: 0 14px 14px 0;
}

.review-text {
  font-size: 15px;
  line-height: 1.7;
  color: #b0b0c4;
  padding: 4px 0 8px 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

