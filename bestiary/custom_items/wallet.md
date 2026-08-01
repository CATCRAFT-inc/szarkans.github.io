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

Мешочек, в котором мурки лежат кучкой, а не занимают полинвентаря. Вмещает 156 монет, а с привилегией **Котик+** — сколько угодно.

Смерти кошелёк не боится, но пару монет в суматохе обронить может.

### Крафт

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
