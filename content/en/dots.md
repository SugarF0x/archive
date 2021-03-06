---
status: active
title: D.Beels of the Storm
stack: ['nuxt', 'vuetify', 'ts', 'mongo', 'node', 'konva', 'ocr', 'uppy']
git: https://github.com/SugarF0x/dots
link: https://dots.sugarfox.ru
life: 16 January 2021 - To this day
---
A database of all the remarkable players, both good and bad, we met on our journey to Master Ranks.
<!--more-->
On this interactive database one can look up player names and see if they have any recorded entries, containing
hero dedicated ranks and comments on their plays.

New entries can be added only by authenticated users, namely - those, having access to the password protected
auth page. Once logged in, the user will be able to create new entries on queried users.

User can upload Draft screenshot via `Uppy`. The image will be processed via `Konva` and then parsed via `Tesseract`.
Resulting data will be used to prepare 10 forms of all the players in lobby and query database for
existing entries. Since OCR is not always 100% accurate, _Levenshtein_ distance is used to account for error margin
and display similar entries.

Both database interactions and authentication process are hosted on a `Node` + `Express` server.
