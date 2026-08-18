---
aside: false
description: Руны обликов и Антируна - как поменять предмету внешний вид через кузнечный стол.
---

# Руны обликов

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <div class="rune-stack">
          <img class="rune-tint" src="/assets/crafts/rune_overlay.webp" alt="" aria-hidden="true">
          <img class="rune-base" src="/assets/crafts/rune.webp" alt="Руна облика">
        </div>
    </template>
    <template #title>Руна облика</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li><a href="/info/donate">Донатик</a></li>
      </ul>
    </template>
</Card>
</ItemCard>

**Руны** позволяют наполнить ваш предмет магическими узами, дабы... облики они накладывают кароче.

Какие облики бывают — смотри на [странице донатика](/info/donate).

## Как применить

Подойди к **кузнечному столу**: руна кладётся в слот шаблона — туда же, куда обычно кладут кузнечные узоры, — а предмет в соседний слот.

## Антируна

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Антируна" src="/assets/crafts/anti_rune.webp" width="40%"/>
    </template>
    <template #title>Антируна</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li><a href="/info/donate">Донатик</a></li>
      </ul>
    </template>
</Card>
</ItemCard>

Снимает облик и возвращает предмету изначальный вид. Работает так же — через кузнечный стол, и одна на все облики сразу.

<style>
/* Руна собрана из двух текстур: тёмное кольцо-основа поверх узора, который
   в игре красится в цвет облика. Здесь узор вместо одного цвета медленно
   перебирает радугу — sepia+saturate сначала даёт серому слою цвет,
   иначе hue-rotate крутить нечего. */
/* 128px, а не проценты: соседняя Антируна рисуется через <Image>, и та
   держит натуральные 128px, игнорируя width="40%". Проценты давали 98px
   и две руны разного размера. */
.rune-stack {
  position: relative;
  width: 128px;
  height: 128px;
  max-width: 100%;
  margin: 0 auto;
}
.rune-stack img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}
.rune-tint {
  animation: rune-rainbow 14s linear infinite;
}
@keyframes rune-rainbow {
  from { filter: sepia(1) saturate(8) hue-rotate(0deg); }
  to   { filter: sepia(1) saturate(8) hue-rotate(360deg); }
}
@media (prefers-reduced-motion: reduce) {
  .rune-tint { animation: none; filter: sepia(1) saturate(8) hue-rotate(180deg); }
}
</style>
