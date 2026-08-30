---
aside: false
---

# Кузнечная кувалда

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кузнечная кувалда" src="/assets/crafts/smithing_hammer.webp" width="40%"/>
    </template>
    <template #title>Кузнечная кувалда</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Может использоваться для разбивания предметов на те, из которых он крафтился. Для этого нужно разместить предмет на [Кузнечном столе](https://ru.minecraft.wiki/w/%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB), зажать кувалдой `ПКМ` и отпустить, ударив по предмету. Удар не гарантирует **100%** выпадания всех предметов.

Кувалда так же может выбить из предмета его **чары**. Они выпадут вместе с остальными ресурсами в виде книги. Нет гарантии выпадения полного списка чар из предмета.

Кувалдой можно снять [Кузнечные шаблоны](https://ru.minecraft.wiki/w/%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD) с брони. При ударе шаблон и его материал не выпадает, но броня становится "чистой".

## Получение
---
<CraftingGrid
  :ingredients="smithingHammerRecipe"
  :result="smithingHammerResult"
/>

<script setup>

const netherite = {
  image: "https://minecraft.wiki/images/Invicon_Netherite_Ingot.png",
  name: "Незеритовый слиток",
  link: "https://ru.minecraft.wiki/w/Незеритовый_слиток"
}
const stick = {
  image: "https://minecraft.wiki/images/Invicon_Stick.png",
  name: "Палка",
  link: "https://ru.minecraft.wiki/w/Палка"
}

const smithingHammerRecipe = [
  [null, netherite, null],
  [null, stick, netherite],
  [stick, null, null],
]

const smithingHammerResult = {
  image: '/assets/crafts/smithing_hammer.webp',
  name: 'Кузнечная кувалда',
  count: 1
}
</script>
