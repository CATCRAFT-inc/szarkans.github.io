---
aside: false
description: Кувалда - после замаха вскапывает площадку блоков и оглушает противника.
---

# Кувалда

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кувалда" src="/assets/crafts/hammer.webp" width="40%"/>
    </template>
    <template #title>Кувалда</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Тяжёлый молот с замахом: чем дольше копится замах, тем шире вскопанная площадка и тем дольше противник стоит оглушённым. Полный замах держит его четыре секунды, и столько же кувалда потом перезаряжается. От щита отскакивает.

### Крафт

<CraftingGrid
  :ingredients="hammerRecipe"
  :result="hammerResult"
/>

<script setup>

const heavyCore = {
  image: "https://minecraft.wiki/images/Invicon_Heavy_Core.png",
  name: "Тяжёлое ядро",
  link: "https://ru.minecraft.wiki/w/Тяжёлое_ядро"
}
const blazeRod = {
  image: "https://minecraft.wiki/images/Invicon_Blaze_Rod.png",
  name: "Огненный стержень",
  link: "https://ru.minecraft.wiki/w/Огненный_стержень"
}

const hammerRecipe = [
  [null, heavyCore, null],
  [null, blazeRod, heavyCore],
  [blazeRod, null, null],
]

const hammerResult = {
  image: '/assets/crafts/hammer.webp',
  name: 'Кувалда',
  count: 1
}
</script>
