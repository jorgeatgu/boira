---
title: Web Animations en Google Chrome 36
author: Jorge Aznar
layout: post
permalink: /web-animations-en-google-chrome-36/
comments: true
dsq_thread_id:
  - 2706837247
tags:
  - Javascript
  - Web Animations
---
Ayer se publicó un <a href="http://updates.html5rocks.com/2014/05/Web-Animations---element-animate-is-now-in-Chrome-36" target="_blank">post en HTML5 Rocks</a> donde hablaban sobre la inclusión del `element.animate()` en Chrome 36.

<!--more-->

Este anuncio es un pequeño empujon a la especificación, así que a partir de ahora no necesitaremos el Polyfill de <a href="http://polymer.com" target="_blank">Polymer </a>para crear animaciones con `element.animate()` de Web Animations, eso sí por ahora solamente esta disponible en Google Canary, así que si vais a practicar seguid haciendolo con el polyfill de Polymer.

Por mi parte ayer hice un pequeño ejemplo modificando el que ya había hecho anteriormente para ilustrar el <a href="http://jorgeatgu.com/blog/web-animations-1-0-el-futuro-de-las-animaciones/" target="_blank">primer post que escribí sobre Web Animations 1.0</a>

Recordad que el ejemplo por ahora **solo funciona en Canary!!**

{% codepen wxbpk jorgeatgu [result] [400] %}


Para seguir como llevan la implementación el resto de navegadores aquí os dejo un link de <a href="http://www.chromestatus.com/features/5760616295825408" target="_blank">Chromium Dashboard</a>