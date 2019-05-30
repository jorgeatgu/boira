---
title: Bislai, fiscalización de plenos en Zaragoza
author: Jorge Aznar
layout: post
permalink: /bislai-fiscalizacion-ayuntamiento-zaragoza/
comments: true
tags:
  - open-data
  - d3
  - graficas
  - Zaragoza
---

La traducción “d’bislai” al castellano sería mirar de reojo. Y así es
como a veces miramos a como emplean nuestro voto los diferentes
partidos.

<!--more-->

La idea de [Bislai](http://bislai.co) nace en una sobremesa de un día de
octubre. Mientras veía el telediario de Aragon TV una reportera
informaba sobre una votación en el pleno del Ayuntamiento de Zaragoza de
la que no tenía noticia alguna. Me creía una persona más o menos
informada pero no había oído nada de aquella noticia. Así que cuando
acabó la pieza decidí buscar información, encontré la página de plenos
del Ayuntamiento de Zaragoza. Allí estaba toda la información en bruto,
sin distinción alguna, parecía aquello una especificación de la W3C. Así
que se me ocurrió la idea de recopilar toda la información de todos los
plenos y mostrarla de una manera más visual.

La idea es parecida al tema de los contenedores de aceite usado, busque
información no la encontré o lo que encontré no me gusto así que al
final recopile la información y la muestro de otra manera. Aunque esta
vez había mucha más información.

Me he limitado a la actual legislatura que comenzó con las elecciones
municipales de 2015. No he podido abarcar todas y cada unas de las
votaciones que se han realizado en el pleno, como por ejemplo el tema de
la aprobación de facturas, tampoco las votaciones de licencias de
solares en las que solo consta un número que no aporta nada de valor,
espero poder encontrar la manera de enlazar los números con algo
visible. Me hubiera gustado agrupar las mociones por áreas como
vivienda, transporte, educación pero era algo que quedaba bajo mi
criterio así que he preferido no agruparlas por categorías.

También existe la opción de buscar por palabras en los diferentes
plenos. Por desgracia no están las mociones completas, solamente esta el
primer párrafo en el buscador. Queda pendiente incluir todo el texto de
la moción que se ha presentado.

He incluido una pequeña navegación en la cabecera para ir al pleno
anterior y posterior. La idea es no tener que volver al calendario de
plenos del inicio. He de decir que no me gusta como queda pero le he
dado muchas vuelta y por ahora no encuentro una mejor solución.

Tecnología
----------

Vamos con la parte técnica. No hay nada del otro mundo pero esto es lo
he utilizado para construir [Bislai](http://bislai.co), y también lo que
he creado a raíz de su elaboración.

La gráfica del inicio esta creada con CSS + JS, animada con
[mo.js](http://mojs.io)

La verdad es que pensaba que iba a ser algo más rápido y no tan
laborioso. Pero conforme iba acumulando datos el trabajo se
multiplicaba, y como no ando muy sobrado de tiempo no pare a pensar en
intentar automatizar algo como la gestión de plenos, bueno si, un día
intente tirar de Jekyll pero como ya me había currado una plantilla en
HTML y solo(casi nada) tenía que rellenarla de información decidí no
usarlo. Así que con un pico monte una estructura en HTML y con una pala
que se accionaba con `⌘ + C` más `⌘ + V` fui rellenando las diferentes
plantillas de plenos, poco a poco.

En el proceso de dar estilos quise utilizar
[Tachyons](http://tachyons.io) o [Basscss](http://basscss.com) pero no
me terminaba de convencer, así que como mi idea era utilizar lo que se
llama **Atomic CSS**, me dije bueno pues lo hago yo, y así nació
[Astral](http://jorgeatgu.com/blog/astral-css-toolbet/).

Separar las votaciones de las mociones ha sido un infierno, me he
encontrado con datos mal, y los he tenido que corregir visualizando los
PDF que se publican con todo el contenido de los diferentes plenos del
Ayuntamiento de Zaragoza, locuron. Aunque de este pequeño infierno se me
ocurrió la idea de la sección de estadísticas ¿quién presenta más
mociones? ¿cuantas se votan por unanimidad? la sección de estadísticas
ha sido otro campo para intentar experimentar con la visualización de
datos. Aquí se me fue la cabeza y quise meterle
[d3.js](https://d3js.org), he leído mucho sobre ello y he hecho varios
*hola mundo*, pero d3 es tan bonito como jodido así que decidí tirar de
chart.js y probar a ir mostrando las estadísticas conforme el usuario
vaya avanzando, para eso tire de [ScrollMagic](http://scrollmagic.io).
No ha quedado como las movidas increíbles que hace la gente de
[pudding](https://pudding.cool) pero es que este juega en otra liga. Aún
así he podido aprender a como lanzar eventos y controlarlos usando
[scrollMagic](http://scrollmagic.io), y la verdad es que las cosas que
se pueden hacer son increíbles. Me he prometido a mi mismo avanzar con
d3.js usando esta sección de campo de pruebas, veremos si lo cumplo.

Ahora había que darle vida a las diferentes votaciones, lo que me
ofrecía [chart.js](http://www.chartjs.org) para lo que yo tenía en mente
no me valía, así que tras buscar me encontré con
[c3.js](http://c3js.org) que tiene unas gráficas que son las que
buscaba, lo único malo es que necesita a d3.js y mi idea era no cargar
la web con mil movidas de librerías pero no me quedaba otra. Agradecer
en este punto a [Ricardo](https://twitter.com/PallasR/) ‘maestro de
JavaScript’ la creación de funciones para automatizar la visualización
de las mismas. Así como el addClass en JavaScript puro y duro.

Tengo más cosas en mente pero irán poco a poco, por ahora las he
trackeado todas en [issues de
GitHub](https://github.com/jorgeatgu/bislai/issues). El que quiera
cacharrear esta todo subido a
[GitHub](https://github.com/jorgeatgu/bislai).
