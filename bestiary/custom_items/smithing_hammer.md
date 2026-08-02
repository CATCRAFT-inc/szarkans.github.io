---
aside: false
---

# Кузнечная кувалда

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кузнечная кувалда" src="/assets/crafts/smithing_hammer.webp" width="40%"/>
    </template>
    <template #title>Кузнечная кувалда</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Достаточно прочная, чтобы разбить почти любую вещь на составные части. Положи предмет на **кузнечный стол** и ударь — он развалится на ресурсы, из которых его собирали.

### Крафт

<CraftingGrid
  :ingredients="smithingHammerRecipe"
  :result="smithingHammerResult"
/>

<script setup>

const netherite = {
  image: "https://minecraft.wiki/images/Invicon_Netherite_Ingot.png",
  name: "Незеритовый слиток",
  link: "https://ru.minecraft.wiki/w/Незеритовый_слиток"
}
const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}

const smithingHammerRecipe = [
  [null, netherite, null],
  [null, stick, netherite],
  [stick, null, null],
]

const smithingHammerResult = {
  image: '/assets/crafts/smithing_hammer.webp',
  name: 'Кузнечная кувалда',
  count: 1
}
</script>
