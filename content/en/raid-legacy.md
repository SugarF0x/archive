---
status: active
title: Raid Legacy
stack: ['nuxt','ts','konva','pwa']
git: https://github.com/SugarF0x/raider
link: https://raid.sugarfox.ru
life: 1 September 2020 - To this day
---

A passion-replica of Dungeon Raid - an old and no longer updated smartphone game.
<!--more-->
Given that Dungeon Raid stopped updating back in like 2013 or something like that,
resulting in abysmally poor performance even on latest top-end devices,
I took it upon myself to replicate the glorious game Dungeon Raid once was.

Since the only thing I know of how to do was web dev, I decided to start working on it via canvas, thus
effectively also working on this project being responsive enough to work on all devices.

The project is built using `Nuxt.js` as its base and `Konva` as the canvas framework, the latter using its native
Vue support. Thus, many of the canvas modules, most commonly - layers, are split up into dedicated `Vue` components.
`Vuex` is the heart of this project dealing with all of the many state changes. `Nuxt PWA` is utilised to easily
make the app available for smartphone standalone installation.

The code for all the logic is written in **TypeScript** with most of all the type checks maintained to the fullest.
There are several bits I still feel unconfident doing like working with nodes, but I'm doing my best.

Given my lack of experience, the development is not going exactly smoothly. I am open for criticism. Any contributions
to the repository are more than welcome. If you want to contribute but don't know where to start - there are always
low priority [issues](https://github.com/SugarF0x/raider/issues) opened on the GitHub page - pick any you like
