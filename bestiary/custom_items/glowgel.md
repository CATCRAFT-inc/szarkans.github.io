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

Невидимый светящийся гель. Мажется на пол, стены и потолок: в комнате светло, а лампы нигде нет.

Мазнёшь в то же место ещё раз - засветит ярче.

![Светогель на стенах подвала](/assets/updates/8season/8_0_4/glowgel.gif)

### Крафт

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
