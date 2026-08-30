---
aside: false
---

# Эхо-колокол

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/crafts/echo_bell.webp" width="40%"/>
    </template>
    <template #title>Эхо-колокол</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Для удара в колокол нужно зажать `ПКМ` непродолжительное время, после чего отпустить. Волна эха разлетится во все стороны в радиусе **64** блоков, подсветив и подсчитав всех найденных живых существ.

Так же, колокол подсвечивает тёмные зоны, в которых могут спавниться злые мобы.

<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/bestiary/items/echo_bell_use.gif" width="100%"/>
    </template>
</Card>

## Получение
---
Эхо-колокол можно скрафтить, обложив обычный колокол [Осколками эха](https://ru.minecraft.wiki/w/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0)
<CraftingGrid
  :ingredients="gunpowderRecipe"
  :result="gunpowderResult"
/>

<script setup>

const gunpowderRecipe = [
  [
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
  ],
  [
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
    {
      image: "https://minecraft.wiki/images/Invicon_Bell.png?325d0",
      name: "Колокол",
      link: "https://ru.minecraft.wiki/w/Колокол"
    },
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
  ],
  // Третья строка
  [
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
    {
      image: "https://ru.minecraft.wiki/images/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D1%8D%D1%85%D0%B0_JE1_BE1.png?d0d12",
      name: "Осколок Эха",
      link: "https://ru.minecraft.wiki/w/Осколок_эха"
    },
  ],
]

const gunpowderResult = {
  image: '/assets/crafts/echo_bell.webp',
  name: 'Эхо-колокол',
  count: 1
}
</script>