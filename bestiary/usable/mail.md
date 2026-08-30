---
aside: false
description: Почтовый ящик, колокольчик и посылка - из чего собрана почта на Кошкокрафте.
---

# Почта

Посылки на Кошкокрафте приходят не в инвентарь, а в **почтовый ящик** — его нужно поставить, а для отправки посылки нужно обращаться к почтальону.

Полноценное описание механики есть [на странице почты](/gameplay/unique/mail.md)

## Камера хранения

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Камера хранения" src="/assets/crafts/mailbox.webp" width="40%"/>
    </template>
    <template #title>Камера хранения</template>
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

### Почтовый ящик

<ItemCard>
<Card style="overflow: hidden;" class="m-0">
    <template #header>
        <Image alt="Почтовый ящик" src="/assets/crafts/small_mailbox.webp" width="40%"/>
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

Ящиков есть два вида, но они отличаются только внешним видом.

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

Почтовый колокольчик появляется в ящике каждый раз, когда игрок открывает его, не имея при себе колокольчик.

Звонок призывает **Курьера** — котика, который оформит и отправит вашу посылку. Колокольчик звенит сам по себе, когда в ваш почтовый ящик приходит посылка.

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

Содержимое посылки приходит... Посылкой! Может содержать прикреплённое письмо с текстом. Посылка может вместить лишь стак предметов, или 2 стака, с подпиской [Котик+](/info/donate).

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
  name: 'Камера хранения',
  count: 1
}

const smallMailboxRecipe = [
  [null, iron, null],
  [iron, pearl, iron],
  [null, iron, null],
]

const smallMailboxResult = {
  image: '/assets/crafts/small_mailbox.webp',
  name: 'Почтовый ящик',
  count: 1
}
</script>
