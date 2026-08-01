# Изменения крафтов

Часть ванильных предметов на Кошкокрафте крафтится иначе — обычно чтобы не гонять игрока за редкостью там, где она не нужна.

## Бирка

Бирку больше не нужно выменивать у библиотекаря: она собирается из **бумаги и одного самородка** — железного, медного или золотого, любого на выбор.

<CraftingGrid
  :ingredients="nameTagRecipe"
  :result="nameTagResult"
/>

## Кальцит

Красивый белый блок, которого на текущей генерации досадно мало. Собирается из **двух костей и двух кусочков кварца** крест-накрест, на выходе — два блока.

<CraftingGrid
  :ingredients="calciteRecipe"
  :result="calciteResult"
/>

## Колокол

Больше не нужно искать деревню, чтобы забрать один-единственный колокол.

<CraftingGrid
  :ingredients="bellRecipe"
  :result="bellResult"
/>

## Мешок

Мешок собирается из **кроличьих шкурок и нити** — без охоты на лам и торговли.

<CraftingGrid
  :ingredients="bundleRecipe"
  :result="bundleResult"
/>

## Снежный блок

Достаточно **двух снежков** вместо четырёх. Ванильный рецепт из четырёх при этом убран.

<CraftingGrid
  :ingredients="snowRecipe"
  :result="snowResult"
/>

## Красители

Красители получить проще, чем в ванилле:

| Краситель | Из чего |
| --------- | ------- |
| **Чёрный** | уголь, древесный уголь, чернильный мешок или роза иссушения |
| **Коричневый** | какао-бобы, либо красный + зелёный краситель |
| **Зелёный** | синий + жёлтый краситель, либо папоротник в печи |

<script setup>

const paper = { image: "https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be", name: "Бумага", link: "https://ru.minecraft.wiki/w/Бумага" }
const ironNugget = { image: "https://minecraft.wiki/images/Invicon_Iron_Nugget.png", name: "Железный самородок (или медный, или золотой)", link: "https://ru.minecraft.wiki/w/Железный_самородок" }
const bone = { image: "https://minecraft.wiki/images/Invicon_Bone.png?d8310", name: "Кость", link: "https://ru.minecraft.wiki/w/Кость" }
const quartz = { image: "https://minecraft.wiki/images/Invicon_Nether_Quartz.png", name: "Кварц", link: "https://ru.minecraft.wiki/w/Кварц" }
const gold = { image: "https://minecraft.wiki/images/Invicon_Gold_Ingot.png", name: "Золотой слиток", link: "https://ru.minecraft.wiki/w/Золотой_слиток" }
const stick = { image: "https://minecraft.wiki/images/Invicon_Stick.png", name: "Палка", link: "https://ru.minecraft.wiki/w/Палка" }
const hide = { image: "https://minecraft.wiki/images/Invicon_Rabbit_Hide.png", name: "Кроличья шкурка", link: "https://ru.minecraft.wiki/w/Кроличья_шкурка" }
const string = { image: "https://minecraft.wiki/images/Invicon_String.png", name: "Нить", link: "https://ru.minecraft.wiki/w/Нить" }
const snowball = { image: "https://minecraft.wiki/images/Invicon_Snowball.png", name: "Снежок", link: "https://ru.minecraft.wiki/w/Снежок" }

const nameTagRecipe = [[ironNugget, paper]]
const nameTagResult = { image: "https://minecraft.wiki/images/Invicon_Name_Tag.png", name: "Бирка", count: 1 }

const calciteRecipe = [
  [bone, quartz],
  [quartz, bone],
]
const calciteResult = { image: "https://minecraft.wiki/images/Invicon_Calcite.png", name: "Кальцит", count: 2 }

const bellRecipe = [
  [stick, gold, stick],
  [gold, null, gold],
]
const bellResult = { image: "https://minecraft.wiki/images/Invicon_Bell.png?325d0", name: "Колокол", count: 1 }

const bundleRecipe = [
  [string, hide, string],
  [hide, null, hide],
  [hide, hide, hide],
]
const bundleResult = { image: "https://minecraft.wiki/images/Invicon_Bundle.png", name: "Мешок", count: 1 }

const snowRecipe = [[snowball, snowball]]
const snowResult = { image: "https://minecraft.wiki/images/Invicon_Snow_Block.png", name: "Снежный блок", count: 1 }
</script>
