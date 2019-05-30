---
title: Filtros SVG acelerados por GPU en Google Chrome
author: Jorge Aznar
layout: post
permalink: /filtros-svg-acelerados-por-gpu-en-google-chrome/
comments: true
dsq_thread_id:
  - 2583265904
tags:
  - SMIL
  - SVG
---
El otro día [Carlos Burges](https://twitter.com/carlos_burges){:target="_blank"} editor de [faq-mac](http://faq-mac.com){:target="_blank"} me puso sobre la pista de uno de los experimentos que se llevan acabo en Google Chrome y que tiene que ver con SVG.

<!--more-->

{% tweet 451022704742006784 %}


Para acceder a este menú solamente tenemos que escribir en la barra de navegación lo siguiente: chrome://flags

Ahora vamos a buscar la opción que se llama &#8220;Filtros de SVG acelerados por GPU&#8221; y le damos a habilitar. Lo que vamos a conseguir habilitando esta opción es que se acelere la presentación de los filtros utilizando la [GPU](http://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico){:target="_blank"}.

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/filtrossvgchrome.png)

Ahora vamos a ver el efecto que produce habilitar esta opción. Para poder ver los cambios que produce el habilitar esta opción voy a utilizar varios ejemplos de filtros SVG animados con SMIL. El código como siempre esta disponible en CodePen.

En el primer ejemplo los filtros animados son `feComposite` y `feMorphology`

Con aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/SVGFILTROS.gif)

Sin aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/primero.gif)

{% codepen Ayevf jorgeatgu [result] [400] %}


En el segundo ejemplo los filtros animados son ` feTurbulence` `feMorphology`

Con aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/filters.gif)

Sin aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/segund.gif)

{% codepen npsAq jorgeatgu [result] [400] %}



En el tercer ejemplo los filtros animados son `feTurbulence`

Con aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/viewbox.gif)

Sin aceleración:

![filters svg chrome](http://jorgeatgu.com/blog/img/2014/04/tercero.gif)

{% codepen lctyI jorgeatgu [result] [400] %}