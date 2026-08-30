---
aside: false
---

# Пылесос
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Пылесос" src="/assets/crafts/hoover.webp" width="40%"/>
    </template>
    <template #title>Пылесос</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

При вскопке нетвёрдого блока <span class="gray">(трава, снег, коврики)</span>, пылесос затягивает за собой соседние нетвёрдые блоки в радиусе 1 блока. Прямо в инвентарь.

Зажав `ПКМ` пылесос начнёт засасывать в инвентарь игрока предметы, лежащие на земле.

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Использование пылесоса" src="/assets/bestiary/items/hoover_break.gif" preview />
    </template>
    <template #subtitle>Пример захвата игрока крюком</template>
</Card>
</CardGrid>

## Получение
---

<CraftingGrid
  :ingredients="hooverRecipe"
  :result="hooverResult"
/>

<script setup>

const hopper = {
  image: "https://minecraft.wiki/images/Invicon_Hopper.png",
  name: "Воронка",
  link: "https://ru.minecraft.wiki/w/Воронка"
}
const windCharge = {
  image: "https://minecraft.wiki/images/Invicon_Wind_Charge.png",
  name: "Заряд ветра",
  link: "https://ru.minecraft.wiki/w/Заряд_ветра"
}
const cauldron = {
  image: "https://minecraft.wiki/images/Invicon_Cauldron.png",
  name: "Котёл",
  link: "https://ru.minecraft.wiki/w/Котёл"
}
const lever = {
  image: "https://minecraft.wiki/images/Invicon_Lever.png",
  name: "Рычаг",
  link: "https://ru.minecraft.wiki/w/Рычаг"
}

const hooverRecipe = [
  [null, hopper, null],
  [null, windCharge, null],
  [lever, cauldron, null],
]

const hooverResult = {
  image: '/assets/crafts/hoover.webp',
  name: 'Пылесос',
  count: 1
}
</script>
