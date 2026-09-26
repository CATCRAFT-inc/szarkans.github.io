---
aside: false
---
# Мячик
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Мячик" src="/assets/crafts/ball.webp" width="40%"/>
    </template>
    <template #title>Мячик</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Просто мячик. Относится к типу предметов "[**Бомба**](bombs)"

## Получение
---
**Крафт**

| Ингредиенты | Рецепты |
| --- | --- |
| [Сгусток смолы](https://ru.minecraft.wiki/w/Сгусток_смолы) + [Шерсть](https://ru.minecraft.wiki/w/Шерсть) | <CraftingGrid :ingredients="ballRecipe" :result="ballResult" /> |

<script setup>

const resin_clump = {
  image: "https://minecraft.wiki/images/Resin_Clump_%28item%29_JE1_BE1.png?123f8",
  name: "Сгусток смолы",
  link: "https://ru.minecraft.wiki/w/Сгусток_смолы"
}
const wool = {
  image: "https://minecraft.wiki/images/thumb/White_Wool_JE2_BE2.png/160px-White_Wool_JE2_BE2.png?2bcdc",
  name: "Белая шерсть",
  link: "https://ru.minecraft.wiki/w/Шерсть"
}

const ballRecipe = [
  [ , wool, ],
  [wool, resin_clump, wool],
  [ , wool, ],
]

const ballResult = {
  image: '/assets/crafts/ball.webp',
  name: 'Мячик',
  count: 1
}
</script>