---
aside: false
description: Кувалда - после замаха вскапывает площадку блоков и оглушает противника.
---

# Кувалда
---
<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кувалда" src="/assets/crafts/hammer_in_hand.webp" width="40%"/>
    </template>
    <template #title>Кувалда</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Кувалда может моментально вскапывать горсть блоков после продолжительного замаха. Зажав `ПКМ` появится шкала прогресса, по мере заполнения которой будет увеличиться зона вскапывания, вплоть до области **3х3х3** блока. Важно, что непосредственно **удар** происходит только по достижению 25% прогресса.

Кувалдой можно ударить сущность, и тогда на неё наложится Оглушение, продолжительность которой зависит от прогресса удержания во время удара.

Прочность кувалды тратится отдельно за каждый задетый блок.

- Кувалда поддерживает все чары, которые поддерживает обычная кирка
- Чары [Эффективность](https://ru.minecraft.wiki/w/%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C) ускоряют время заполнения прогресса кувалды
- Эффекты "[Спешка](https://ru.minecraft.wiki/w/%D0%A1%D0%BF%D0%B5%D1%88%D0%BA%D0%B0)" и "[Утомление](https://ru.minecraft.wiki/w/%D0%A3%D1%82%D0%BE%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5)" соответственно ускоряют и замедляют прогресс кувалды

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/bestiary/items/hammer_work.gif" preview />
    </template>
    <template #subtitle>Демонстрация копания кувалдой</template>
</Card>
</CardGrid>

## Полуение
---
Кувалда крафтится из двух [Огненных стержней](https://ru.minecraft.wiki/w/%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%B5%D1%80%D0%B6%D0%B5%D0%BD%D1%8C) и целых двух [Тяжёлых ядер](https://ru.minecraft.wiki/w/%D0%9D%D0%B0%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%B5_%D0%B1%D1%83%D0%BB%D0%B0%D0%B2%D1%8B):

<CraftingGrid
  :ingredients="hammerRecipe"
  :result="hammerResult"
/>

<script setup>

const heavyCore = {
  image: "https://minecraft.wiki/images/Invicon_Heavy_Core.png",
  name: "Тяжёлое ядро",
  link: "https://ru.minecraft.wiki/w/Тяжёлое_ядро"
}
const blazeRod = {
  image: "https://minecraft.wiki/images/Invicon_Blaze_Rod.png",
  name: "Огненный стержень",
  link: "https://ru.minecraft.wiki/w/Огненный_стержень"
}

const hammerRecipe = [
  [null, heavyCore, null],
  [null, blazeRod, heavyCore],
  [blazeRod, null, null],
]

const hammerResult = {
  image: '/assets/crafts/hammer.webp',
  name: 'Кувалда',
  count: 1
}
</script>
