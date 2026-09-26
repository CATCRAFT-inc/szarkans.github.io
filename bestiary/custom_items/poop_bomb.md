---
aside: false
---
# Вонючая бомба
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Вонючая бомба" src="/assets/crafts/poop_bomb.webp" width="40%"/>
    </template>
    <template #title>Вонючая бомба</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Предмет типа [**Бомба**](bombs). При детонации, отравляет рядом стоящих целей на непродолжительное время. Если цель находится близко к эпицентру взрыва, то [**Оглушается**](/gameplay/unique/effects#оглушение) на 3 секунды.

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Вонючие бомбы" src="/assets/bestiary/items/poop_bombs.gif" preview />
    </template>
    <template #subtitle>Фонтан вонючих бомб</template>
</Card>
</CardGrid>

## Получение
---
**Крафт**
| Ингредиенты | Рецепты |
| --- | --- |
| [Говно](/bestiary/materials/poop) + [Петарда "Пиздец"](firecrackers) | <CraftingGrid :ingredients="poopBombRecipe" :result="poopBombResult" /> |

<script setup>

const poop = {
  image: "/assets/crafts/poop.webp",
  name: "Говно",
  link: "poop"
}
const big_petard = {
  image: "/assets/crafts/petard_big.webp",
  name: "Петарда Пиздец",
  link: "firecrackers"
}

const poopBombRecipe = [
  [poop, poop, poop],
  [poop, big_petard, poop],
  [poop, poop, poop],
]

const poopBombResult = {
  image: '/assets/crafts/poop_bomb.webp',
  name: 'Вонючая бомба',
  count: 1
}
</script>