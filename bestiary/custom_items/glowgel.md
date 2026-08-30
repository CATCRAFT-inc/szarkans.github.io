---
aside: false
description: Светогель - невидимый светящийся гель, которым мажут пол, стены и потолок.
---

# Светогель

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Светогель" src="/assets/crafts/glowgel.webp" width="40%"/>
    </template>
    <template #title>Светогель</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Невидимый светящийся гель. Размещает [Источник света](https://ru.minecraft.wiki/w/%D0%91%D0%BB%D0%BE%D0%BA_%D1%81%D0%B2%D0%B5%D1%82%D0%B0) 3 уровня. Уровень освещения можно увеличивать на 3 с каждым использованием по тому же месту, вплоть до 15.

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Светогель на стенах" src="/assets/updates/8season/8_0_4/glowgel.gif" preview />
    </template>
</Card>
</CardGrid>

## Получение
---
<CraftingGrid
  :ingredients="gelRecipe"
  :result="gelResult"
/>

<script setup>

const slimeball = {
  image: "https://minecraft.wiki/images/Invicon_Slimeball.png",
  name: "Слизь",
  link: "https://ru.minecraft.wiki/w/Слизь"
}
const glowInkSac = {
  image: "https://minecraft.wiki/images/Invicon_Glow_Ink_Sac.png",
  name: "Светящийся мешочек",
  link: "https://ru.minecraft.wiki/w/Светящийся_мешочек"
}

const gelRecipe = [
  [slimeball, glowInkSac],
]

const gelResult = {
  image: '/assets/crafts/glowgel.webp',
  name: 'Светогель',
  count: 24
}
</script>
