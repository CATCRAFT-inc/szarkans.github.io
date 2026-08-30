---
aside: false
---

# Крюк-кошка

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="user header" src="/assets/crafts/grappling_hook.webp" width="40%"/>
    </template>
    <template #title>Крюк-кошка</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Для того, чтобы кинуть крюк, нужно удерживать `ПКМ`, крюк будет активным до тех пор, пока кнопка не отжата. Во время полёта крюк может зацепиться за блок или сущность:
- **Зацепившись за блок**, игрока начнёт тянуть в его сторону. Игрок будет висеть до тех пор, пока не отпустит кнопку;
- **Захваченная сущность** может быть притянута к игроку, если обладает достаточно мелкими габаритами (примерно равными размеру игрока). Крупные же цели не могут быть притянуты и они работают как точка опоры для притягивания игрока к ним. Сущности **не получают урона** при зацепе;

Основной фишкой является возможность маневрирования и смены траектории полёта путём повора камеры. Направление меняется обратно пропорционально углу поворота камеры: если смотреть влево -> тянет вправо; если смотреть вниз -> тянет вверх, и наоборот. Как если бы игрок "оттягивал" цепь рукой. 

Захваченные сущности так же подвержены маневрированию, давая возможность "швырять" врагов в стороны, при захвате крюком.

После время зацепа крюка за блок или сущность, существует крохотная задержка перед началом полёта. Эта задержка отсутствует, если во время зацепа игрок находится в воздухе.

<!-- На крюк вешаются [свои зачарования](/bestiary/enchantments). -->

<CardGrid>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Покатушки на крюке-кошки" src="/assets/bestiary/items/grappling_hook_round.gif" preview />
    </template>
    <template #subtitle>Покатушки</template>
</Card>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Крутой захват игрока крюком-кошкой" src="/assets/bestiary/items/grappling_hook_grab_player.gif" preview />
    </template>
    <template #subtitle>Пример захвата игрока крюком</template>
</Card>
</CardGrid>

## Получение
---
Крюк-кошка добывается путём крафта из цепей, медных слитков и вихревого стержня

<CraftingGrid
  :ingredients="gunpowderRecipe"
  :result="gunpowderResult"
/>

<script setup>

const gunpowderRecipe = [
  [
    null,
    {
      image: "https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410",
      name: "Медный слиток",
      link: "https://minecraft.wiki/w/Copper_Ingot"
    },
    {
      image: "https://minecraft.wiki/images/Breeze_Rod_JE1_BE1.png?28670",
      name: "Стержень вихря",
      link: "https://ru.minecraft.wiki/w/Стержень_вихря"
    },
  ],
  [
    null,
    {
      image: "https://minecraft.wiki/images/Invicon_Iron_Chain.png?5d1e7",
      name: "Железная цепь",
      link: "https://ru.minecraft.wiki/w/Железная_цепь"
    },
    {
      image: "https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410",
      name: "Медный слиток",
      link: "https://minecraft.wiki/w/Copper_Ingot"
    },
  ],
  // Третья строка
  [
    {
      image: "https://minecraft.wiki/images/Invicon_Iron_Chain.png?5d1e7",
      name: "Железная цепь",
      link: "https://ru.minecraft.wiki/w/Железная_цепь"
    },
    null,
    null,
  ],
]

const gunpowderResult = {
  image: '/assets/crafts/grappling_hook.webp',
  name: 'Крюк Кошка',
  count: 1
}
</script>


## Интересные факты
---
- Крюк-кошка — один из старейших предметов на Кошкокрфте. Его первая вариация появилась на [5 сезоне](/history/5season/5season.md) и была просто удочкой. С тех пор прошло десяток переработок и переосмыслений. Всё ради того, чтобы прикольно прыгать по блокам
