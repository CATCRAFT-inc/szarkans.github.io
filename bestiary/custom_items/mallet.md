---
aside: false
description: Киянка - поворачивает блоки и меняет им форму прямо на месте, как дебаг-стик.
---

# Киянка

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Киянка" src="/assets/crafts/mallet.webp" width="40%"/>
    </template>
    <template #title>Киянка</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Строительный инструмент, который экономит нервы: блоки можно вертеть и менять им форму, не перекладывая заново - аналог дебаг-стика!

Железные и медные прутья ей тоже поддаются.

### Крафт

<CraftingGrid
  :ingredients="malletRecipe"
  :result="malletResult"
/>

<script setup>

const resinBrick = {
  image: "https://minecraft.wiki/images/Invicon_Resin_Brick.png",
  name: "Смолистый кирпич",
  link: "https://ru.minecraft.wiki/w/Смолистый_кирпич"
}
const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}

const malletRecipe = [
  [resinBrick],
  [stick],
  [stick],
]

const malletResult = {
  image: '/assets/crafts/mallet.webp',
  name: 'Киянка',
  count: 1
}
</script>
