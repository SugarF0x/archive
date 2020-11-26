---
status: archived
title: Simple Assistant
stack: ['ts','vue','webpack','plugin']
git: https://github.com/SugarF0x/simple-assistant
link: null
life: 11 June 2020 - 8 October 2020
---

Automation plugin for SimpleMMO Web-browser game.
<!--more-->
When I first started playing Simple-MMO, the first thing that caught my eye was their coin toss machine - place a bet
and double it with a 50% change. Just what I like - a win-win gamble if you play your cards right.

Then I thought to myself: "the rules are that simple, why place bets by hand if I can write a script for it?". So 
**Gambling Assistant** came to be. This crude chrome extension running on pure js would place bets based off of
previous bout outcome. However, I did not stop there.

Why spend time waiting for ingame travel cooldown if I can automate it? Why bother attacking enemies if script can
do that? Why do _"insert task"_ if script can do it all? So **Simple Assistant** came to be.

Back then it was a **jquery**-based single file script that would render display based on object passed to it
determined by the url currently loaded - basically a stone age version of a js framework that handled rerenders
and actions. This version then was refactored into **TypeScript**, which was the first time of me ever using it.

Soon enough I realised, that what I was making had already been long created. Thus, I ported the project to **Vue**.
This is where a lot of **webpack** configuration was involved, given that more custom files were to be ejected into
distribution directory to account for it being a plugin, thus letting me effortlessly update it on the Chrome Web STore.

It did not take long for the devs to discover my bot _(not that I was hiding to well)_. I left them a hidden message
in source code to which they actually gave a swift reply. Then we had a small wholesome conversation in DMs, after
which I took down the extension from the Chrome Web Store and ceased development.

Having said that, feel free to browse source code, use it for yourself and/ore contribute to the repository. While I
myself may not work on it anymore, I might review any pull requests that may come in.
