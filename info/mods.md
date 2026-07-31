---
aside: false
---

# Моды для сервера

## Моды

Для самого комфортного геймплея тебе нужно скачать **обязательные моды**. Они позволят полностью насладиться фишками нашего сервера!

## Нужные моды

Если ты не хочешь скачивать готовую сборку, то вот список самых нужных модов для нашего сервера:

- [PlasmoVoice](https://modrinth.com/plugin/plasmo-voice/versions) - войсчат
- [ETF](https://modrinth.com/mod/entitytexturefeatures/versions) - текстуры существ
- [EMF](https://modrinth.com/mod/entity-model-features/versions) - модели существ
- [EmoteCraft](https://modrinth.com/plugin/emotecraft/versions) - эмоции внутри игры

::: warning Не знаешь как скачивать моды?
Мы написали гайд только для тебя! Он доступен по [этой ссылке](/guides/tech/mod_download.md)!
:::

## Готовые сборки {#modpack}

У нас их две - обе на **1.21.11 Fabric**, обе с обязательными модами и кучей оптимизации (с ~45 ФПС до стабильных **150-250**).

:::: tip LITE - если важен ФПС
Всё нужное и ничего лишнего: обязательные моды сервера, оптимизация, удобства вроде мини-карты, тултипа шалкеров и символов в чате.

::: details Список модов LITE
- BendableCuboids
- BetterF1
- Continuity
- EmoteCraft
- Entity Culling
- Entity Model Features (EMF)
- Entity Texture Features (ETF)
- fast-ip-ping
- FerriteCore
- ImmediatelyFast
- Iris
- Krypton
- Language Reload
- Lithium
- Mod Menu
- More Culling
- Mouse Tweaks
- No Chat Reports
- Plasmo Voice
- Reese's Sodium Options
- Remove Reloading Screen
- Shulker Box Tooltip
- Sodium
- Sodium Extra
- Symbol Chat
- Very Many Players (VMP)
- Xaero's World Map
- И библиотеки для модов
:::
::::

:::: tip DELUXE - если важна красота
Всё то же самое, плюс 19 косметических и удобных модов. Требует чуть больше от компьютера.

::: details Что DELUXE добавляет сверх LITE
- AppleSkin
- Chat Animation
- Chat Heads
- Chunks Fade In
- Controlling
- CoolRain
- Durability Tooltip
- Falling Leaves
- LambDynamicLights
- Ok Zoomer
- Particle Rain
- Particular
- Presence Footsteps
- Smooth GUI
- Sound Physics Remastered
- Visuality
- Wakes
- И библиотеки для модов
:::
::::

::: tip Установка для Modrinth App, MultiMC, PrismLauncher и т.п.
1. Скачиваешь файл `.mrpack` нужной сборки

<File
  filePath="/downloads/catcraft_lite.mrpack"
  fileAlias="CATCRAFT 1.21.11 LITE"
/>

<File
  filePath="/downloads/catcraft_deluxe.mrpack"
  fileAlias="CATCRAFT 1.21.11 DELUXE"
/>

1. Создаёшь новую сборку

2. В настройках сборки выбираешь пункт "Импортировать из файла" или что-то похожее <Image src="/assets/guides/mrpack.webp" alt="Via .mrpack" width="100%" preview />

`.mrpack` это файл всей сборки - все моды, иконка и всё-всё-всё!
:::

::: tip Установка для ванильного лаунчера и прочих
1. Скачиваешь архив нужной сборки

<File
  filePath="/downloads/catcraft_lite.zip"
  fileAlias="CATCRAFT 1.21.11 LITE"
/>

<File
  filePath="/downloads/catcraft_deluxe.zip"
  fileAlias="CATCRAFT 1.21.11 DELUXE"
/>

1. Открываешь папку **игры**

    - Открыть папку игры можно нажав `Win` + `R`, написав `%appdata%` и перейдя в папку `.minecraft`

    - Или нажав в лаунчере иконку **папки**, она есть почти везде <Image src="/assets/guides/folder.webp" alt="Mods Folder" width="100%" preview />

2. Открываешь архив

    - Для этого нужно иметь установленный архиватор, советуем [7-Zip](https://ru.wikipedia.org/wiki/7-Zip)

3. Внутри архива лежит папка `minecraft`, а в ней - папка `mods`. Перекидываешь папку `mods` целиком в папку игры

4. Запускаешь игру на версии **1.21.11 Fabric**

5. Готово!
:::
