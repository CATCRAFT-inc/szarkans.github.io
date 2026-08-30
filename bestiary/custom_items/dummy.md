---
aside: false
---

# Тренировочный манекен
---

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/bestiary/items/dummy.webp" width="40%"/>
    </template>
    <template #title>Манякен</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
      <Divider />
    </template>
</Card>
</ItemCard>

Манекен бессмертный и на нём можно отбивать любые удары. Ставится как обычный блок, для ломания нужно кликнуть `Shift ` + `ПКМ` по нему-же.

## Демонстрация
---
<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/bestiary/items/dummy_demo.gif" preview />
    </template>
    <template #subtitle>Удар по манекену мечом</template>
</Card>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/bestiary/items/dummy_demo2.gif" preview />
    </template>
    <template #subtitle>Удар по манекену булавой</template>
</Card>
</CardGrid>


## Получение
---
<CraftingGrid
  :ingredients="dummyRecipe"
  :result="dummyResult"
/>

<script setup>

const hay = {
  image: "https://minecraft.wiki/images/Invicon_Hay_Bale.png",
  name: "Сноп сена",
  link: "https://ru.minecraft.wiki/w/Сноп_сена"
}
const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}

const dummyRecipe = [
  [hay],
  [hay],
  [stick],
]

const dummyResult = {
  image: '/assets/crafts/dummy.webp',
  name: 'Тренировочный манекен',
  count: 1
}
</script>