---
title: Obteniendo las medidas de un SVG con JavaScript
author: Jorge Aznar
layout: post
permalink: /svg-offset-getbounding/
comments: true
tags:
  - SVG
  - Javascript
---

Parece que cada vez que abro **Google Canary** algo relacionado con **SVG** pasa a estar *deprecated*.

<!--more-->

En la próxima version de Chrome y Opera se va a pasar a *deprecated* el método [SVGElement.offset](https://www.chromestatus.com/features/5724912467574784) el cual he utilizado en alguna ocasión para obtener las medidas de un **SVG**. Así que vamos a ver otro método alternativo para obtener todas las medidas de un **SVG**.

En la misma página de Chromestatus nos recomiendan que utilicemos ```getBoundingClientRect``` para obtener las medidas de un **SVG**. Así que vamos a ponernos con ello.

Para este ejemplo he utilizado mi logo en formato **SVG**.

Vamos a crear un archivo JavaScript. Ahora vamos a guardar en una variable el **SVG**, al cúal he asignado un ```id="logo"```

{% highlight Javascript %}
var logo = document.getElementById("logo");
{% endhighlight %}

Ahora vamos a utilizar el método ```getBoundingClientRect``` para obtener las medidas.

{% highlight Javascript %}
var logoDimensiones = logo.getBoundingClientRect();
{% endhighlight %}

Y ahora vamos a ir obteniendo sus dimensiones y su posición en el **HTML**.

Para obtener el ancho y el alto utilizamos el ```height``` y el ```width```

{% highlight JavaScript %}
var alturaLogo = logoDimensiones.height;
var anchuraLogo = logoDimensiones.width;
{% endhighlight %}

Para obtener su posición vamos a utilizar ```top```, ```bottom```, ```left``` y ```right``

{% highlight JavaScript %}
var topLogo = logoDimensiones.top;
var rightLogo = logoDimensiones.right;
var bottomLogo = logoDimensiones.bottom;
var leftLogo = logoDimensiones.left;
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/svg-javascript/medidas-svg.html">DEMO!</a>
</button>

El código como siempre en [GitHub](https://github.com/jorgeatgu/ejemplos-blog/tree/master/manipulando-svg-con-javascript)