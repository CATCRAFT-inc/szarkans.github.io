// Боковые меню, вынесенные из config.mjs, чтобы их видел и браузер.
//
// Зачем: страница-хаб раздела (<WikiIndex />) строится из этого же массива.
// Пока меню жило внутри config.mjs, импортировать его в компонент было нельзя —
// config.mjs тянет fs/path и defineConfig, в браузере это не собирается.
// Держим здесь чистые данные без единого импорта.
//
// ДОБАВЛЯЕШЬ СТРАНИЦУ: одна строка сюда — и она сразу в меню И в хабе раздела.
//
// Поля сверх обычных text/link:
//   icon      — картинка из public/ (НЕ из корневого assets/ — оттуда файлы
//               не публикуются и отдают 404). Иконки рисуются по группе целиком:
//               если в группе нет ни одной настоящей, колонки идут просто
//               текстом, а единичный пропуск заполняется лапкой.
//   featured  — у ГРУППЫ. Её пункты выходят из списка и становятся крупными
//               плитками с пояснением. Для того, чем игрок занимается, а не
//               просто читает: рыбалка, пивоварение, рисование.
//   blurb     — строка под названием у плитки. Только у featured-групп:
//               в плотном списке описание — шум, там название говорит само.

export const bestiarySidebar = [
  {
    text: 'Разное',
    items: [
      { text: 'Жители Столицы', link: '/bestiary/mobs/npc.md', icon: '/assets/mechanics/name_tag.webp' },
      { text: 'Зачарования', link: '/bestiary/enchantments.md', icon: '/assets/crafts/enchanted_cobblestone.webp' },
    ]
  },
  {
    text: 'Инструменты',
    items: [
      { text: 'Крюк-кошка', link: '/bestiary/custom_items/grappling_hook.md', icon: '/assets/crafts/grappling_hook.webp' },
      { text: 'Эхо-колокол', link: '/bestiary/custom_items/echo_bell.md', icon: '/assets/crafts/echo_bell.webp' },
      { text: 'Кувалда', link: '/bestiary/custom_items/hammer.md', icon: '/assets/crafts/hammer.webp' },
      { text: 'Кузнечная кувалда', link: '/bestiary/custom_items/smithing_hammer.md', icon: '/assets/crafts/smithing_hammer.webp' },
      { text: 'Пылесос', link: '/bestiary/custom_items/hoover.md', icon: '/assets/crafts/hoover.webp' },
      { text: 'Киянка', link: '/bestiary/custom_items/mallet.md', icon: '/assets/crafts/mallet.webp' },
      { text: 'Фотоаппарат', link: '/bestiary/custom_items/camera.md', icon: '/assets/crafts/camera.webp' },
      { text: 'Рисование', link: '/bestiary/custom_items/painting_tools.md', icon: '/assets/crafts/easel.webp' },
    ]
  },
  {
    text: 'Предметы',
    items: [
      { text: 'Стеклянный меч', link: '/bestiary/custom_items/glass_sword.md', icon: '/assets/crafts/glass_sword.webp' },
      { text: 'Тренировочный манекен', link: '/bestiary/custom_items/dummy.md', icon: '/assets/crafts/dummy.webp' },
      { text: 'Петарды', link: '/bestiary/custom_items/firecrackers.md', icon: '/assets/crafts/petard_small.webp' },
      { text: 'Кошелёк', link: '/bestiary/custom_items/wallet.md', icon: '/assets/crafts/wallet.webp' },
      { text: 'Почта', link: '/bestiary/usable/mail.md', icon: '/assets/crafts/mailbell.webp' },
      { text: 'Руны обликов', link: '/bestiary/usable/runes.md', icon: '/assets/crafts/rune.webp' },
      { text: 'Награды строителям', link: '/bestiary/usable/awards.md', icon: '/assets/crafts/builder_glove.webp' },
      { text: 'Говно', link: '/bestiary/materials/poop.md', icon: '/assets/crafts/poop.webp' },
    ]
  },
  {
    text: 'Блоки',
    items: [
      { text: 'Укреплённый глубинный сланец', link: '/bestiary/blocks/reinforced_deepslate.md', icon: '/assets/crafts/reinforced_deepslate.webp' },
    ]
  }
];

// ── МЕХАНИКИ ─────────────────────────────────────────────────────────────────
// Группа «Роллплей» снята целиком: КСБ распущен, страница РП ролей удалена.
//
// «Изменения ваниллы» живут здесь, а не в Бестиарии: это не предметы (решение
// 09.08.2026). Сами файлы остались в /bestiary/vanilla/ — переезд файлов сменил
// бы адреса и порвал внешние ссылки; вместо этого config.mjs отдаёт этим двум
// страницам меню Механик.
export const mechanicsSidebar = [
  {
    text: 'Чем заняться',
    featured: true,
    items: [
      { text: 'Пивоварение', link: '/gameplay/unique/brewery.md', icon: '/assets/mechanics/cauldron.webp',
        blurb: 'Десятки рецептов: алкогольных, смертельных и конченных' },
      { text: 'Рыбалка', link: '/gameplay/unique/fishing.md', icon: '/assets/mechanics/fishing_rod.webp',
        blurb: 'Ловля превратилась в мини-игру, а не в АФК с зажатым ПКМ' },
      { text: 'Рисование', link: '/gameplay/unique/artmap.md', icon: '/assets/crafts/easel.webp',
        blurb: 'Садись за мольберт и рисуй свои шедевры прямо в игре' },
      { text: 'Кланы β', link: '/gameplay/unique/clans.md', icon: '/assets/mechanics/filled_map.webp',
        blurb: 'Гильдия, ОПГ или банда — собирай своих' },
    ]
  },
  {
    text: 'Общие механики',
    items: [
      { text: 'Команды', link: '/gameplay/unique/commands.md', icon: '/assets/mechanics/writable_book.webp' },
      // { text: 'Профиль игрока', link: '/gameplay/unique/qol/profile.md' },
      { text: 'Почта', link: '/gameplay/unique/mail.md', icon: '/assets/crafts/mailbell.webp' },
      { text: 'Достижения сообщества', link: '/gameplay/unique/qol/rewards.md', icon: '/assets/mechanics/nether_star.webp' },
      // { text: 'Подключение к Дискорду', link: '/gameplay/unique/qol/discord_link.md' }, - скрыто
      { text: 'Маленькие механики', link: '/gameplay/unique/qol/small_features.md', icon: '/assets/mechanics/bundle.webp' },
      { text: 'Войсчат', link: '/gameplay/unique/mods/voicechat.md', icon: '/assets/mechanics/goat_horn.webp' },
      { text: 'Реалистичные верёвки', link: '/gameplay/unique/catenary.md', icon: '/assets/mechanics/lead.webp' },
      // { text: 'Мебель и декорации', link: '/gameplay/unique/decor.md' }, - скрыто
      // { text: 'Гардеробная обликов', link: '/gameplay/unique/wardrobe.md' }, - скрыто
      // { text: 'Figura', link: '/gameplay/unique/mods/figura.md' }, - скрыто
    ]
  },
  {
    text: 'Изменения ваниллы',
    items: [
      { text: 'Изменения крафтов', link: '/bestiary/vanilla/vanilla_crafts.md', icon: '/assets/mechanics/crafting_table_front.webp' },
      { text: 'Изменения механик', link: '/bestiary/vanilla/vanilla_edits.md', icon: '/assets/mechanics/redstone.webp' },
    ]
  },
  {
    text: 'Геймплейные гайды',
    items: [
      { text: 'Как провести ивент?', link: '/guides/gameplay/create_event.md', icon: '/assets/mechanics/firework_rocket.webp' },
      { text: 'Как сделать разноцветный ник?', link: '/guides/gameplay/rgb_nick.md', icon: '/assets/mechanics/magenta_dye.webp' },
      { text: 'Как поставить другой скин?', link: '/guides/gameplay/set_skin.md', icon: '/assets/mechanics/armor_stand.webp' },
    ]
  },
];

export const sidebarsBySection = {
  bestiary: bestiarySidebar,
  mechanics: mechanicsSidebar,
};
