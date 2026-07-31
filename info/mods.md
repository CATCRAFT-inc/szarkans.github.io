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

<!-- Скрыто:
- [CIT Resewn](https://modrinth.com/mod/cit-resewn/versions) - ресурспак с переименованиями
-->

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

1. В Modrinth App жмёшь **плюсик**, чтобы создать сборку

2. Выбираешь пункт **Install modpack** <Image src="/assets/guides/mods/modrinth_create.webp" alt="Install modpack в Modrinth App" width="100%" preview />

3. Указываешь скачанный `.mrpack` - и всё, сборка ставится сама

В других лаунчерах пункт называется "Импортировать из файла" или похоже <Image src="/assets/guides/mrpack.webp" alt="Via .mrpack" width="100%" preview />

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

<!-- Скрыто: старая единая сборка
## Готовая сборка сервера {#modpack}

::: tip В неё входят

- Все обязательные для сервера моды

- **Куча** модов на оптимизацию! С ~45 ФПС до стабильных **150-250**!

- Полезные моды (свет от факела в руке, зум камеры и т.д.)

- Вспомогательные моды для ресурспака, по типу его загрузки без экрана загрузки, просмотр всех переименований в наковальне и т.д.

- Конфиги к модам, чтобы не настраивать всё по полчаса =)

::: details Список модов в сборке
- [[EMF] Entity Model Features](https://modrinth.com/mod/entity-model-features)  
- [[ETF] Entity Texture Features](https://modrinth.com/mod/entitytexturefeatures)  
- [Entity Culling](https://modrinth.com/mod/entityculling)  
- [Distant Horizons](https://modrinth.com/mod/distanthorizons)
- [Falling Leaves](https://modrinth.com/mod/fallingleaves)  
- [fast-ip-ping](https://modrinth.com/mod/fast-ip-ping)  
- [FastQuit](https://modrinth.com/mod/fastquit)  
- [FerriteCore](https://modrinth.com/mod/ferrite-core)  
- [ImmediatelyFast](https://modrinth.com/mod/immediatelyfast)  
- [Iris](https://modrinth.com/mod/iris)  
- [Krypton](https://modrinth.com/mod/krypton)  
- [LambDynamicLights](https://modrinth.com/mod/lambdynamiclights)  
- [Language Reload](https://modrinth.com/mod/language-reload)  
- [Lithium](https://modrinth.com/mod/lithium)  
- [ModernFix](https://modrinth.com/mod/modernfix)  
- [Mod Menu](https://modrinth.com/mod/modmenu)  
- [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice)  
- [Reese's Sodium Options](https://modrinth.com/mod/reeses-sodium-options)  
- [Remove Reloading Screen](https://modrinth.com/mod/rrls)  
- [Sodium](https://modrinth.com/mod/sodium)  
- [Sodium Extra](https://modrinth.com/mod/sodium-extra)  
- [Very Many Players](https://modrinth.com/mod/vmp-fabric)  
- И библиотеки для модов  
:::

::: tip Установка для ванильного лаунчера, TL, TLegacy и прочих
1. Скачиваешь архив

<File
  filePath="/downloads/catcraft_mods.zip"
/>

1. Открываешь папку **игры**
    
    - Открыть папку игры можно нажав `Win` + `R`, написав `%appdata%` и перейдя в папку `.minecraft`
    
    - Или нажав в лаунчере иконку **папки**, она есть почти везде <Image src="/assets/guides/folder.webp" alt="Mods Folder" width="100%" preview />

2. Открываешь архив 

    - Для этого нужно иметь установленный архиватор, советуем [7-Zip](https://ru.wikipedia.org/wiki/7-Zip)

3. Перекидываешь все моды из архива в папку `mods`

4. Запускаешь игру на версии **1.21.11 Fabric**

5. Готово!
:::

::: tip Установка для MultiMC, ModrinthApp, PrismLauncher и т.п.
1. Скачиваешь файл .mrpack

<File
  filePath="/downloads/catcraft.mrpack"
/>

1. Создаёшь новую сборку

2. В настройках сборки выбираешь пункт "Импортировать из файла" или что-то похожее <Image src="/assets/guides/mrpack.webp" alt="Via .mrpack" width="100%" preview />

`.mrpack` это файл всей сборки - все моды, все конфиги, иконка и всё-всё-всё!
:::
-->
