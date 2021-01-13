---
status: active
title: Raid Legacy
stack: ['nuxt','ts','konva','pwa']
git: https://github.com/SugarF0x/raider
link: https://raid.sugarfox.ru
life: 1 Сентября 2020 - По сей день
---

Попытка воссоздать Dungeon Raid - старую и уже давно не поддерживаемую игру на смартфон.
<!--more-->
Учитывая, что поддержка Dungeon Raid прекратилась ещё в далёком 2013 году, в результате чего производительность
упала до зубодробительной, а на последние модели телефонов установить её нельзя в принципе, я решил
самостоятельно попытаться воссоздать игру, в которой я провёл в сумме не одну сотню часов.

Так как единственное, за что я хоть как-то шарю в плане разработки, это веб дев, было принято решение
попытаться написать игру на полотне HTML5, а заодно сделать её адаптивной, чтобы запускать её можно было
на любых устройствах без особых усилий.

Проект построен с использованием `Nuxt.js` как основного фреймворка и `Konva` в качестве фреймворка для работы с канвасом.
Конва использует свою нативную поддержку Vue. Так, большинство модулей полотна, в основном - слои, разбиты на отельные
компоненты `Vue`. `Vuex` лежит в основе управления состояниями и их многочисленными мутациями. Модуль `Nuxt PWA` 
обеспечивает поддержку установки проекта как самостоятельного приложения для смартфонов.

Логика проекта прописана по большей части на **TypeScript** с соответствующей типизацией объектов. Есть, конечно, свои
пробелы, например узлы мне пока даются трудновато, но я стараюсь.

Ввиду моего малого опыта как в гейм-деве, так и в работе с полотном, работа не всегда идёт гладко. Любая конструктивная
критика приветствуется. Также приветствуются пул-реквесты. Если не знаете, с чего начать, то на странице проекта в GitHub
всегда есть открытые низкоприоритетные [тикеты](https://github.com/SugarF0x/raider/issues) - берите любой, что нравится.