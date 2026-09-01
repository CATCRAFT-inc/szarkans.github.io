---
aside: false
description: Кошачья мята - что нюхачи выкапывают из земли, как её вырастить и что из неё крутят.
---

# Кошачья мята

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кошачья мята" src="/assets/crafts/catmint.webp" width="40%"/>
    </template>
    <template #title>Кошачья мята</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Нюхачи выкапывают семена из земли</li>
      </ul>
    </template>
</Card>
</ItemCard>

Необычная, кошачья мята. Её семена выкапывают нюхачи и при посадке она вырастает в полноценный куст, который можно собирать с каждым созреванием.

![Заросли кошачьей мяты](/assets/updates/8season/8_0_4/catmint.webp){ width=60% }

## Сушёная кошачья мята

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Сушёная кошачья мята" src="/assets/crafts/cat_weed.webp" width="40%"/>
    </template>
    <template #title>Сушёная кошачья мята</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Костёр</li>
      <li>Коптильня</li>
      </ul>
    </template>
</Card>
</ItemCard>

Свежий лист на огонь — и он высыхает. В коптильне быстрее, на костре дольше, результат один и тот же.

Сама по себе сушёная мята ничего не делает. Она нужна для Бланта.

## Блант

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Блант" src="/assets/crafts/blunt.webp" width="40%"/>
    </template>
    <template #title>Блант</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Самокрутка с кошачьей мятой. Ароматная на запах, но такое стоит пробовать **только в игре!**

Чтобы использовать, во второй руке должно быть огниво или любой источник огня

### Крафт

<CraftingGrid
  :ingredients="bluntRecipe"
  :result="bluntResult"
/>

## Бумага из мяты

Если под рукой нет тростника, три листа мяты складываются в лист бумаги. Обмен так себе — тростник даёт втрое больше, — но выручает.

<CraftingGrid
  :ingredients="paperRecipe"
  :result="paperResult"
/>

<script setup>

const paper = {
  image: "https://minecraft.wiki/images/Invicon_Paper.png",
  name: "Бумага",
  link: "https://ru.minecraft.wiki/w/Бумага"
}
const catmint = {
  image: "/assets/crafts/catmint.webp",
  name: "Кошачья мята"
}
const catWeed = {
  image: "/assets/crafts/cat_weed.webp",
  name: "Сушёная кошачья мята"
}

const bluntRecipe = [
  [paper, paper, paper],
  [catWeed, catWeed, catWeed],
]

const bluntResult = {
  image: '/assets/crafts/blunt.webp',
  name: 'Блант',
  count: 1
}

const paperRecipe = [
  [catmint, catmint, catmint],
]

const paperResult = {
  image: "https://minecraft.wiki/images/Invicon_Paper.png",
  name: 'Бумага',
  count: 1
}
</script>
