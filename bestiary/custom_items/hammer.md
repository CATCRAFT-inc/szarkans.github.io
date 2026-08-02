---
aside: false
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

Разом вскапывает площадку блоков после замаха. Удар по противнику оглушит его на 8 секунд

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
