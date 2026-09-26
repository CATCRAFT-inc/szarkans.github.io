---
aside: false
---

# Петарды
---
Предмет типа [**Бомба**](bombs). При взрыве издаёт хлопок, в зависимости от вида. Петарды не наносят урона и не ломают блоки. Отскакивают вплоть до **3** раз после броска.

## Получение
---

**Крафт**
| Ингредиенты | Рецепты | Результат |
| --- | --- | --- |
| [Порох](/bestiary/materials/poop) + [Бумага](firecrackers) + Нитка | <CraftingGrid :ingredients="smallRecipe" :result="smallResult" /> | Петарда "Мелочь", взрывается негромко |
| [Порох](/bestiary/materials/poop) + [Бумага](firecrackers) + Нитка | <CraftingGrid :ingredients="bigRecipe" :result="bigResult" /> | Петарда "Пиздец", взрывается со звуком динамита |
| Четыре петард "Мелочь" | <CraftingGrid :ingredients="bunchRecipe" :result="bunchResult" /> | Связка петард "Стая котят", плеяда мелких хлопков |


<script setup>

const gunpowder = {
  image: "https://minecraft.wiki/images/Invicon_Gunpowder.png",
  name: "Порох",
  link: "https://ru.minecraft.wiki/w/Порох"
}
const paper = {
  image: "https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be",
  name: "Бумага",
  link: "https://ru.minecraft.wiki/w/Бумага"
}
const string = {
  image: "https://minecraft.wiki/images/String_JE2_BE2.png?25d69",
  name: "Нитка",
  link: "https://ru.minecraft.wiki/w/Нитка"
}
const small = {
  image: "/assets/crafts/petard_small.webp",
  name: "Петарда «Мелочь»"
}

const smallRecipe = [
  [ , paper, string],
  [paper, gunpowder],
  [gunpowder],
]
const smallResult = {
  image: '/assets/crafts/petard_small.webp',
  name: 'Петарда «Мелочь»',
  count: 3
}

const bigRecipe = [
  [ , paper, string],
  [paper, gunpowder, gunpowder],
  [gunpowder, gunpowder],
]
const bigResult = {
  image: '/assets/crafts/petard_big.webp',
  name: 'Петарда «П*здец»',
  count: 3
}

const bunchRecipe = [
  [small, small],
  [small, small],
]
const bunchResult = {
  image: '/assets/crafts/petard_bunch.webp',
  name: 'Связка петард «Стая котят»',
  count: 2
}
</script>
