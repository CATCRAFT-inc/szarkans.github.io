---
aside: false
---
# Незеритовая губка
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Незеритовая губка" src="/assets/crafts/lava_sponge.webp" width="40%"/>
    </template>
    <template #title>Незеритовая губка</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Лавовая незеритовая губка" src="/assets/crafts/lava_sponge_filled.webp" width="40%"/>
    </template>
    <template #title>Лавовая незеритовая губка</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>После засасывания лавы</li>
      </ul>
    </template>
</Card>
</ItemCard>

Предмет типа [**Бомба**](bombs). Если бросить незеритовую губку, то при ударе об поверхность или при контакте с [лавой](https://ru.minecraft.wiki/w/Лава) она всосёт всю лаву в радиусе 3 блоков.

Губка может всосать лубую лаву, но если ей попадётся **источник лавы**, то губка преобразится в Лавовую незеритовую губку. Независимо от исхода, губка выпадает в виде предмета на том же месте, где упала.

**Лавовая незеритовая губка** размещает лаву на месте приземления, после чего осушается и превращается в обычную незеритовую губку.

#

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Бросок незеритовой губки в лаву" src="/assets/bestiary/items/lava_sponge_use.gif" preview />
    </template>
    <template #subtitle>Бросок незеритовой губки в лаву</template>
</Card>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Бросок лавовой незеритовой губки на землю" src="/assets/bestiary/items/lava_sponge_filled_use.gif" preview />
    </template>
    <template #subtitle>Бросок лавовой незеритовой губки на землю</template>
</Card>
</CardGrid>

## Получение
---
**Крафт**

| Ингредиенты | Рецепты |
| --- | --- |
| [Незеритовый лом](https://ru.minecraft.wiki/w/Незеритовый_лом) + [Губка](https://ru.minecraft.wiki/w/Губка) | <CraftingGrid :ingredients="lavaSpongeRecipe" :result="lavaSpongeResult" /> |

<script setup>

const netherite_scrap = {
  image: "https://minecraft.wiki/images/Netherite_Scrap_JE2_BE1.png?ef2a4",
  name: "Незеритовый лом",
  link: "https://ru.minecraft.wiki/w/Незеритовый_лом"
}
const sponge = {
  image: "https://minecraft.wiki/images/thumb/Sponge_JE3_BE3.png/160px-Sponge_JE3_BE3.png?ded7d",
  name: "Губка",
  link: "https://ru.minecraft.wiki/w/Губка"
}

const lavaSpongeRecipe = [
  [sponge, netherite_scrap],
  [netherite_scrap, sponge],
]

const lavaSpongeResult = {
  image: '/assets/crafts/lava_sponge.webp',
  name: 'Незеритовая губка',
  count: 2
}
</script>