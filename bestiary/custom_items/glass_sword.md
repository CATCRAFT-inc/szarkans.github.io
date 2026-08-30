---
aside: false
---

# Стеклянный меч
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Стеклянный меч" src="/assets/crafts/glass_sword.webp" width="40%"/>
    </template>
    <template #title>Стеклянный меч</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Можно наполнить любым зельем, и при ударе по врагу, оно наложится на него. Удар одноразвый, после него зелье потратится.

Неосторожное обращение с мечом, такое как удар перед откатом кулдауна, может разбить его. 

## Получение
---
Наполнение зельем происходит через сетку крафта

<CardGrid>
<CraftingGrid
  :ingredients="swordRecipe"
  :result="swordResult"
/>
<CraftingGrid
  :ingredients="fillRecipe"
  :result="fillResult"
/>
</CardGrid>

<script setup>

const glass = {
  image: "https://minecraft.wiki/images/Invicon_Glass.png",
  name: "Стекло",
  link: "https://ru.minecraft.wiki/w/Стекло"
}
const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}
const potion = {
  image: "https://minecraft.wiki/images/Invicon_Potion_of_Swiftness.png",
  name: "Любое зелье",
  link: "https://ru.minecraft.wiki/w/Зелье"
}
const emptySword = {
  image: "/assets/crafts/glass_sword.webp",
  name: "Стеклянный меч"
}

const swordRecipe = [
  [glass],
  [glass],
  [stick],
]

const swordResult = {
  image: '/assets/crafts/glass_sword.webp',
  name: 'Стеклянный меч',
  count: 1
}

const fillRecipe = [
  [emptySword, potion],
]

const fillResult = {
  image: '/assets/crafts/glass_sword.webp',
  name: 'Наполненный меч',
  count: 1
}
</script>
