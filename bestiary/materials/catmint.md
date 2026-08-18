---
aside: false
description: Кошачья мята - что нюхачи выкапывают из земли, как её вырастить и что из неё крутят.
---

# Кошачья мята

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кошачья мята" src="/assets/crafts/catmint.webp" width="40%"/>
    </template>
    <template #title>Кошачья мята</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Нюхачи выкапывают семена из земли</li>
      </ul>
    </template>
</Card>
</ItemCard>

Трава с грядки. Семена приносят нюхачи, дальше она растёт сама.

![Заросли кошачьей мяты](/assets/updates/8season/8_0_4/catmint.webp){ width=60% }

## Блант

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Блант" src="/assets/crafts/blunt.webp" width="40%"/>
    </template>
    <template #title>Блант</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Самокрутка с кошачьей мятой. Ароматная на запах, но такое стоит пробовать **только в игре!**

Чтобы использовать, во второй руке должно быть огниво или любой источник огня

### Крафт

<CraftingGrid
  :ingredients="bluntRecipe"
  :result="bluntResult"
/>

<script setup>

const paper = {
  image: "https://minecraft.wiki/images/Invicon_Paper.png",
  name: "Бумага",
  link: "https://ru.minecraft.wiki/w/Бумага"
}
const catmint = {
  image: "/assets/crafts/catmint.webp",
  name: "Кошачья мята"
}

const bluntRecipe = [
  [paper, paper, paper],
  [catmint, catmint, catmint],
]

const bluntResult = {
  image: '/assets/crafts/blunt.webp',
  name: 'Блант',
  count: 1
}
</script>
