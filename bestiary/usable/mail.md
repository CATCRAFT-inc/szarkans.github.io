---
aside: false
description: Почтовый ящик, колокольчик и посылка - из чего собрана почта на Кошкокрафте.
---

# Почта

Посылки на Кошкокрафте приходят не в инвентарь, а в **почтовый ящик** — его нужно поставить, а вызывает почтальона отдельный колокольчик.

Полноценное описание механики есть [на странице почты](/gameplay/unique/mail.md)

## Почтовый ящик

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Почтовый ящик" src="/assets/crafts/mailbox.webp" width="40%"/>
    </template>
    <template #title>Почтовый ящик</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Крафт</li>
      </ul>
    </template>
</Card>
</ItemCard>

Поставленный ящик регистрирует твой адрес в почтовой системе и хранит всё, что тебе пришло. Открыть его можешь только ты. 

<CraftingGrid
  :ingredients="mailboxRecipe"
  :result="mailboxResult"
/>

Есть и малый ящик — тот же смысл, но подешевле:

<CraftingGrid
  :ingredients="smallMailboxRecipe"
  :result="smallMailboxResult"
/>

## Почтовый колокольчик

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Почтовый колокольчик" src="/assets/crafts/mailbell.webp" width="40%"/>
    </template>
    <template #title>Почтовый колокольчик</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Сам появляется в почтовом ящике</li>
      </ul>
    </template>
</Card>
</ItemCard>

Если колокольчика нет в инвентаре, он снова появится в твоём ящике — потерять его насовсем не выйдет.

Звонок призывает **Курьера**: ему можно отдать посылку для другого игрока. Задерживаться надолго он не станет. А когда посылка приходит тебе, колокольчик звенит прямо из инвентаря.

## Посылка

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Посылка" src="/assets/crafts/package.webp" width="40%"/>
    </template>
    <template #title>Посылка</template>
    <template #content>
      <Divider />
      <h3>Получение:</h3>
      <ul>
      <li>Приходит по почте</li>
      </ul>
    </template>
</Card>
</ItemCard>

Свёрток с вложением: подарочные наборы, награды и всё, что вам решил прислать сервер. Открывается прямо в руках.

<script setup>

const iron = {
  image: "https://minecraft.wiki/images/Invicon_Iron_Ingot.png",
  name: "Железный слиток",
  link: "https://ru.minecraft.wiki/w/Железный_слиток"
}
const pearl = {
  image: "https://minecraft.wiki/images/Invicon_Ender_Pearl.png",
  name: "Жемчуг Эндера",
  link: "https://ru.minecraft.wiki/w/Жемчуг_Эндера"
}

const mailboxRecipe = [
  [iron, iron, iron],
  [iron, pearl, iron],
  [iron, iron, iron],
]

const mailboxResult = {
  image: '/assets/crafts/mailbox.webp',
  name: 'Почтовый ящик',
  count: 1
}

const smallMailboxRecipe = [
  [null, iron, null],
  [iron, pearl, iron],
  [null, iron, null],
]

const smallMailboxResult = {
  image: '/assets/crafts/small_mailbox.webp',
  name: 'Малый почтовый ящик',
  count: 1
}
</script>
