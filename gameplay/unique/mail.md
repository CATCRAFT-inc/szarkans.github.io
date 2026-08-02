---
aside: false
description: Как работает почта на Кошкокрафте - ящик, посылки и Курьер.
---

# Почта

Хочешь отправить другому котику предметы или сообщение, но крайне впадлу бежать к нему? Решение есть!

***

## Заведи себе адрес

Создай себе почтовый ящик, чтобы начать получать письма! Их два вида:

<div class="crafting-row">

<CraftingGrid
  :ingredients="mailboxRecipe"
  :result="mailboxResult"
/>

<CraftingGrid
  :ingredients="smallMailboxRecipe"
  :result="smallMailboxResult"
/>

</div>

::: danger Но!
Ящик защищён от чужих рук, но не от чужой кирки. Сломают — **адрес пропадёт из почтовой системы**, а всё содержимое вывалится на землю рядом с блоком.

Ставь ящик там, где до него не дотянутся!
:::

## Отправка

**Колокольчик** - предмет, позволяющий вызвать **Курьера**. Обычно, он сразу же лежит в почтовом ящике.

1. Кликаешь Колокольчиком.

2. Пару секунд ждёшь **Курьера**.

3. Попроси курьера **отправить посылку**

4. Кладёшь вещи в **Посылку**. Она работает как мешочек и вмещает примерно стопку.

5. Настраиваешь всё остальное:

    - Выбираешь **тип письма** - обычное или анонимное.

    - Пишешь текст, какой хочешь, главное по [нашим правилам!](/info/rules/rules.md#заповеди-общения)

    - Выбираешь **адрес** из списка **всех** ящиков сервера!

6. Жмёшь **«Отправить»** и готово!

7. Делаешь сальто ахахха сиксевен

## Котик+

Обладателям привилегии [Котик+](/info/donate) почта даёт две вещи:

- вместимость посылки **вдвое больше**;
- раз в сутки почтой приходит подарочный набор.

<script setup>

const iron = {
  image: "https://minecraft.wiki/images/Invicon_Iron_Ingot.png",
  name: "Железный слиток",
  link: "https://ru.minecraft.wiki/w/Железный_слиток"
}
const eye = {
  image: "https://minecraft.wiki/images/Invicon_Eye_of_Ender.png",
  name: "Око Эндера",
  link: "https://ru.minecraft.wiki/w/Око_Эндера"
}

const mailboxRecipe = [
  [iron, iron, iron],
  [iron, eye, iron],
  [iron, iron, iron],
]

const mailboxResult = {
  name: 'Почтовый ящик',
  count: 1
}

const smallMailboxRecipe = [
  [null, iron, null],
  [iron, eye, iron],
  [null, iron, null],
]

const smallMailboxResult = {
  name: 'Малый почтовый ящик',
  count: 1
}
</script>
