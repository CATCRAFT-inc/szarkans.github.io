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

Киянка позволяет вращать блоки, меняя их **направление**. Для этого нужно зажать `ПКМ` с киянкой в руке, смотря на нужный блок, после чего вращать камерой, не отпуская кнопку. Блок будет стараться поворачиваться соответственно. Отжатие `ПКМ` зафиксирует блок в новом положении.

Удар киянкой по блоку может изменить его **форму**, такие как:
- **Ступени** — меняют форму на одну из вариацию "углов"
- **Заборы, Ограды, Стекляные панели, Металлические прутья** — наращивают или срезают ту сторону, по которой прошёл удар.
  - Такими же возможностями обладают любые Топоры <span class="gray">(для заборов)</span> и Кирки <span class="gray">(для оград)</span>
- **Железные люки** — меняет состояние между открытым и закрытым 

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Изменение забора киянкой" src="/assets/bestiary/items/mallet_hit.gif" preview />
    </template>
    <template #subtitle>Изменение забора</template>
</Card>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Вращение блоков киянкой" src="/assets/bestiary/items/mallet_rotate.gif" preview />
    </template>
    <template #subtitle>Вращение блоков</template>
</Card>
</CardGrid>


## Получение
---
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
