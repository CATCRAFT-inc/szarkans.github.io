---
aside: false
description: Таблетка от несварения - скорми животному, и оно перестанет гадить.
---

# Таблетка от несварения

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Таблетка от несварения" src="/assets/crafts/antipoop_pill.webp" width="40%"/>
    </template>
    <template #title>Таблетка от несварения</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

ПКМ по животному и оно больше не какаит. Навсегда.

## Получение
---

Кошачья мята, любое мясо, пшеница и адский нарост.

<CraftingGrid
  :ingredients="pillRecipe"
  :result="pillResult"
/>

<script setup>

const catmint = {
  image: "/assets/crafts/catmint.webp",
  name: "Кошачья мята",
  link: "/bestiary/materials/catmint"
}
const meat = {
  image: "https://minecraft.wiki/images/Invicon_Raw_Beef.png",
  name: "Любое мясо",
  link: "https://ru.minecraft.wiki/w/Сырая_говядина"
}
const wheat = {
  image: "https://minecraft.wiki/images/Invicon_Wheat.png",
  name: "Пшеница",
  link: "https://ru.minecraft.wiki/w/Пшеница"
}
const netherWart = {
  image: "https://minecraft.wiki/images/Invicon_Nether_Wart.png",
  name: "Адский нарост",
  link: "https://ru.minecraft.wiki/w/Адский_нарост"
}

const pillRecipe = [
  [catmint, meat],
  [wheat, netherWart],
]

const pillResult = {
  image: '/assets/crafts/antipoop_pill.webp',
  name: 'Таблетка от несварения',
  count: 2
}
</script>
