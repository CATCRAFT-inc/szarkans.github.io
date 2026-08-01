---
aside: false
---

# Говно

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Говно" src="/assets/crafts/poop.webp" width="40%"/>
    </template>
    <template #title>Говно</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Выпадает из мирных мобов</li>
      </ul>
    </template>
</Card>
</ItemCard>

Ганво.

## Блок говна

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Блок говна" src="/assets/crafts/poop_block.webp" width="40%"/>
    </template>
    <template #title>Блок говна</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Гавон.

<CraftingGrid
  :ingredients="blockRecipe"
  :result="blockResult"
/>

## Удобрение

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #title>Удобрение</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Гвано.

<CraftingGrid
  :ingredients="fertilizerRecipe"
  :result="fertilizerResult"
/>

<script setup>

const poop = {
  image: "/assets/crafts/poop.webp",
  name: "Говно"
}
const boneMeal = {
  image: "https://minecraft.wiki/images/Invicon_Bone_Meal.png",
  name: "Костная мука",
  link: "https://ru.minecraft.wiki/w/Костная_мука"
}

const blockRecipe = [
  [poop, poop, poop],
  [poop, poop, poop],
  [poop, poop, poop],
]

const blockResult = {
  image: '/assets/crafts/poop_block.webp',
  name: 'Блок говна',
  count: 1
}

const fertilizerRecipe = [
  [poop, poop, poop],
  [boneMeal],
]

const fertilizerResult = {
  image: 'https://minecraft.wiki/images/Invicon_Bone_Meal.png',
  name: 'Удобрение',
  count: 1
}
</script>
