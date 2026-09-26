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
      <li>Нюхач</li>
      </ul>
    </template>
</Card>
</ItemCard>

Кошачья мята (лат. Népeta catária) - она же Кото́вник коша́чий, коша́чья мя́та, лимонная мята - многолетнее травянистое растение, вид рода Котовник семейства Яснотковые.

На жителей Кошкоземья даёт особый эффект.

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

Готовый суб-продукт от Кошачьей мяты. Лучше всего если его завернуть в бумагу...

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

Чтобы использовать, во второй руке должно быть огниво или любой источник огня.

### Крафт

<CraftingGrid
  :ingredients="bluntRecipe"
  :result="bluntResult"
/>

## Бумага из мяты

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
