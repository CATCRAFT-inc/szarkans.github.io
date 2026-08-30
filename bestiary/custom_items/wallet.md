---
aside: false
---

# Кошелёк

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Кошелёк" src="/assets/crafts/wallet.webp" width="40%"/>
    </template>
    <template #title>Кошелёк</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Специальное хранилище для мурок, с функционалом мешочка. Вмещает в себя до **156** монет, а с привилегией [Котик+](/info/donate.md) — сколько угодно.

Кошелёк не выпадает после смерти игрока, но может выронить **1-5** мурок. В местах, где происходит оплата <span class="gray">(например, торги с нпс)</span>, деньги могут сниматься напрямую с кошелька.

## Получение
---
<CraftingGrid
  :ingredients="walletRecipe"
  :result="walletResult"
/>

<script setup>

const bundle = {
  image: "https://minecraft.wiki/images/Invicon_Bundle.png",
  name: "Мешок",
  link: "https://ru.minecraft.wiki/w/Мешок"
}
const catcoin = {
  image: "/assets/crafts/catcoin.webp",
  name: "Мурка"
}

const walletRecipe = [
  [bundle, catcoin],
]

const walletResult = {
  image: '/assets/crafts/wallet.webp',
  name: 'Кошелёк',
  count: 1
}
</script>
