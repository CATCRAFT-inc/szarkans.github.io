---
aside: false
---
# Грязная бомба
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Грязная бомба" src="/assets/crafts/dirt_bomb.webp" width="40%"/>
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

Предмет типа [**Бомба**](bombs). При детонации распространяет [землю](https://ru.minecraft.wiki/w/Земля) в радиусе 3 блоков. Земля не покрывает живых мобов и не заходит за стены

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Использование грязной бомбы вместе с Детонатором" src="/assets/bestiary/items/dirt_bomb_use.gif" preview />
    </template>
    <template #subtitle>Использование грязной бомбы вместе с Детонатором</template>
</Card>
</CardGrid>

## Получение
---
**Крафт**
| Ингредиенты | Рецепты |
| --- | --- |
| [Земля](https://ru.minecraft.wiki/w/Земля) + [Заряд ветра](https://ru.minecraft.wiki/w/Заряд_ветра) | <CraftingGrid :ingredients="dirtBombRecipe" :result="dirtBombResult" /> |

<script setup>

const dirt = {
  image: "https://minecraft.wiki/images/Dirt_JE2_BE2.png?438ac",
  name: "Земля",
  link: "https://ru.minecraft.wiki/w/Земля"
}
const windCharge = {
  image: "https://minecraft.wiki/images/Invicon_Wind_Charge.png",
  name: "Заряд ветра",
  link: "https://ru.minecraft.wiki/w/Заряд_ветра"
}

const dirtBombRecipe = [
  [dirt, dirt, dirt],
  [dirt, windCharge, dirt],
  [dirt, dirt, dirt],
]

const dirtBombResult = {
  image: '/assets/crafts/dirt_bomb.webp',
  name: 'Грязная бомба',
  count: 1
}
</script>