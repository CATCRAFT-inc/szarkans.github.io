---
aside: false
description: Возвратные часы - отматывают стрелку назад и возвращают туда, где ты стоял пару секунд назад.
---

# Возвратные часы
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Возвратные часы" src="/assets/crafts/recovery_clock.webp" width="40%"/>
    </template>
    <template #title>Возвратные часы</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

При зажатии `ПКМ` часы начинают отсчитывать секунды в прошлое, вплоть до **16**. После отпускания, игрока телепортирует туда, где он был указанное время назад.

Часы одноразовые.

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <img alt="Возвратные часы отматывают время назад" src="/assets/updates/8season/8_0_4/recovery_clock.gif" />
    </template>
    <template #subtitle>Демонстрация прыжка в прошлое</template>
</Card>
</CardGrid>

## Получение
---

<CraftingGrid
  :ingredients="clockRecipe"
  :result="clockResult"
/>

<script setup>

const echoShard = {
  image: "https://minecraft.wiki/images/Invicon_Echo_Shard.png",
  name: "Осколок эха",
  link: "https://ru.minecraft.wiki/w/Осколок_эха"
}
const clock = {
  image: "https://minecraft.wiki/images/Invicon_Clock.gif",
  name: "Часы",
  link: "https://ru.minecraft.wiki/w/Часы"
}

const clockRecipe = [
  [null, echoShard, null],
  [echoShard, clock, echoShard],
  [null, echoShard, null],
]

const clockResult = {
  image: '/assets/crafts/recovery_clock.webp',
  name: 'Возвратные часы',
  count: 1
}
</script>

## Интересные факты
---
- Использование часов награждает достижением **"Time Waits for No One"**