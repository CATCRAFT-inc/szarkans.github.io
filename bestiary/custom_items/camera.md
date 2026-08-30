---
aside: false
---

# Фотоаппарат

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Фотоаппарат" src="/assets/crafts/camera.webp" width="40%"/>
    </template>
    <template #title>Фотоаппарат</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Ослепляет цель, которая посмотрела в камеру во время вспышки. Использование происходит с задержкой в полсекунды.

Один снимок тратит 1 [Светокаменную пыль](https://ru.minecraft.wiki/w/%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BF%D1%8B%D0%BB%D1%8C).

## Получение
---
<CraftingGrid
  :ingredients="cameraRecipe"
  :result="cameraResult"
/>

<script setup>

const spyglass = {
  image: "https://minecraft.wiki/images/Invicon_Spyglass.png",
  name: "Подзорная труба",
  link: "https://ru.minecraft.wiki/w/Подзорная_труба"
}
const copper = {
  image: "https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410",
  name: "Медный слиток",
  link: "https://ru.minecraft.wiki/w/Медный_слиток"
}
const blazePowder = {
  image: "https://minecraft.wiki/images/Invicon_Blaze_Powder.png",
  name: "Огненный порошок",
  link: "https://ru.minecraft.wiki/w/Огненный_порошок"
}
const redstone = {
  image: "https://minecraft.wiki/images/Invicon_Redstone.png",
  name: "Красная пыль",
  link: "https://ru.minecraft.wiki/w/Красная_пыль"
}

const cameraRecipe = [
  [null, spyglass, null],
  [copper, blazePowder, copper],
  [copper, redstone, copper],
]

const cameraResult = {
  image: '/assets/crafts/camera.webp',
  name: 'Фотоаппарат',
  count: 1
}
</script>
