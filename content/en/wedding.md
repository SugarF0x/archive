---
status: archived
title: Wedding invitation
stack: ['html','css','js','bootstrap']
git: https://github.com/SugarF0x/wedding
link: https://archive.sugarfox.ru/items/wedding
---

Wedding invitation with customisable header text.
<!--more-->
My sister wanted a landing page for her wedding. Lucky for her I was learnign **Bootstrap 4** at the time
and was looking for some inspiration to put the newly acquired knowledge to practice.

This page came to be in a couple of weeks of development under her supervision as a client.
She was the one to come up with the design as well as to pick assets.

### Configuration

The invitation message can be customized by editing the url as follows:

#### Variables

* name - Any recipient name
* type - Gender to use [he | she | many]
* resp - Whether to use respectful form [true]

These variables are to be inserted into the link as follows:

**https://archive.sugarfox.ru/items/wedding/?name=ANYNAME&type=TYPE&resp=RESP**

### Examples

* **.../wedding/?name=Дима&type=he**
  * _Дорогой Дима, приглашаем тебя на свадьбу_
* **.../wedding/?name=Нина и Серёжа&type=many**
  * _Дорогие Нина и Серёжа, приглашаем вас на свадьбу_
* **.../wedding/?name=Артёр Артёмович&type=he&resp=true**
  * _Дорогой Артёр Артёмович, приглашаем Вас на свадьбу_
