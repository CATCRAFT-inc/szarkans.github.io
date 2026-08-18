---
aside: false
description: Возвратные часы - отматывают стрелку назад и возвращают туда, где ты стоял пару секунд назад.
---

# Возвратные часы

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

Одноразовые часы, которые отматывают тебя назад по твоим же следам. Дальше шестнадцати секунд не крутят.

![Возвратные часы отматывают время назад](/assets/updates/8season/8_0_4/recovery_clock.gif)

### Крафт

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
