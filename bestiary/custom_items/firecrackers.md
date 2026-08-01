---
aside: false
---

# Петарды

Шумят, пугают и ничего не ломают. Кидаются с руки, взрываются на месте падения.

## Петарда «Мелочь»

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Петарда Мелочь" src="/assets/crafts/petard_small.webp" width="40%"/>
    </template>
    <template #title>Петарда «Мелочь»</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
      <Divider />
      <p>Текстура: sm1lly</p>
    </template>
</Card>
</ItemCard>

Неотъемлемый атрибут уличной шпаны. Хлопает звонко, но безобидно.

<CraftingGrid
  :ingredients="smallRecipe"
  :result="smallResult"
/>

## Петарда «П*здец»

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Большая петарда" src="/assets/crafts/petard_big.webp" width="40%"/>
    </template>
    <template #title>Петарда «П*здец»</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
      <Divider />
      <p>Текстура: sm1lly</p>
    </template>
</Card>
</ItemCard>

От настоящего динамита её отличает только отсутствие последствий. Грохот — как у полноценного взрыва.

<CraftingGrid
  :ingredients="bigRecipe"
  :result="bigResult"
/>

## Связка петард «Стая котят»

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Связка петард" src="/assets/crafts/petard_bunch.webp" width="40%"/>
    </template>
    <template #title>Связка петард «Стая котят»</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
      <Divider />
      <p>Текстура: sm1lly</p>
    </template>
</Card>
</ItemCard>

Те самые китайские петарды-погремушки: одна связка трещит несколько раз подряд.

<CraftingGrid
  :ingredients="bunchRecipe"
  :result="bunchResult"
/>

<script setup>

const gunpowder = {
  image: "https://minecraft.wiki/images/Invicon_Gunpowder.png",
  name: "Порох",
  link: "https://ru.minecraft.wiki/w/Порох"
}
const paper = {
  image: "https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be",
  name: "Бумага",
  link: "https://ru.minecraft.wiki/w/Бумага"
}
const small = {
  image: "/assets/crafts/petard_small.webp",
  name: "Петарда «Мелочь»"
}

const smallRecipe = [
  [gunpowder, paper],
  [gunpowder, paper],
]
const smallResult = {
  image: '/assets/crafts/petard_small.webp',
  name: 'Петарда «Мелочь»',
  count: 3
}

const bigRecipe = [
  [gunpowder, paper],
  [gunpowder, paper],
  [gunpowder, paper],
]
const bigResult = {
  image: '/assets/crafts/petard_big.webp',
  name: 'Петарда «П*здец»',
  count: 3
}

const bunchRecipe = [
  [small, small],
  [small, small],
]
const bunchResult = {
  image: '/assets/crafts/petard_bunch.webp',
  name: 'Связка петард «Стая котят»',
  count: 1
}
</script>
