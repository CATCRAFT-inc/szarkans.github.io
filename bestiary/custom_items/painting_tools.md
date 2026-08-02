---
aside: false
---

# Рисование

Три предмета, с которых начинается [рисование](/gameplay/unique/artmap) на сервере. Все крафтятся на обычном верстаке.

## Мольберт

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Мольберт" src="/assets/crafts/easel.webp" width="40%"/>
    </template>
    <template #title>Мольберт</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Ставится на землю, держит холст — твою будущую картину.

<CraftingGrid
  :ingredients="easelRecipe"
  :result="easelResult"
/>

## Студия для рисования

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Студия для рисования" src="/assets/crafts/studio.webp" width="40%"/>
    </template>
    <template #title>Студия для рисования</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Рабочее место художника: в студии ты выбираешь цвета и рисуешь.

<CraftingGrid
  :ingredients="studioRecipe"
  :result="studioResult"
/>

## Ведро краски

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Ведро краски" src="/assets/crafts/paint_bucket.webp" width="40%"/>
    </template>
    <template #title>Ведро краски</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Хранит цвет, которым ты рисуешь. Собирается из любых трёх красителей — какие возьмёшь, такой и цвет.

<CraftingGrid
  :ingredients="bucketRecipe"
  :result="bucketResult"
/>

<script setup>

const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}
const frame = {
  image: "https://minecraft.wiki/images/Invicon_Item_Frame.png",
  name: "Рамка",
  link: "https://ru.minecraft.wiki/w/Рамка"
}
const slab = {
  image: "https://minecraft.wiki/images/Invicon_Oak_Slab.png",
  name: "Любая деревянная плита",
  link: "https://ru.minecraft.wiki/w/Плита"
}
const painting = {
  image: "https://minecraft.wiki/images/Invicon_Painting.png",
  name: "Картина",
  link: "https://ru.minecraft.wiki/w/Картина"
}
const brush = {
  image: "https://minecraft.wiki/images/Invicon_Brush.png",
  name: "Кисть",
  link: "https://ru.minecraft.wiki/w/Кисть"
}
const dye = {
  image: "https://minecraft.wiki/images/Invicon_Red_Dye.png",
  name: "Любой краситель",
  link: "https://ru.minecraft.wiki/w/Краситель"
}
const bucket = {
  image: "https://minecraft.wiki/images/Invicon_Bucket.png",
  name: "Ведро",
  link: "https://ru.minecraft.wiki/w/Ведро"
}

const easelRecipe = [
  [null, stick, null],
  [stick, frame, stick],
  [stick, slab, stick],
]
const easelResult = { image: '/assets/crafts/easel.webp', name: 'Мольберт', count: 1 }

const studioRecipe = [
  [painting, brush],
]
const studioResult = { image: '/assets/crafts/studio.webp', name: 'Студия для рисования', count: 1 }

const bucketRecipe = [
  [dye, dye, dye],
  [bucket],
]
const bucketResult = { image: '/assets/crafts/paint_bucket.webp', name: 'Ведро краски', count: 1 }
</script>
