---
title: Atributo viewBox sin declarar en Firefox
author: Jorge Aznar
layout: post
permalink: /atributo-viewbox-sin-declarar-en-firefox/
comments: true
dsq_thread_id:
  - 2099768058
tags:
  - Adobe Illustrator
  - Inkscape
  - Sketch
  - SVG
---
Hace unos días hablaba sobre el <a href="http://jorgeatgu.com/blog/atributos-viewbox-y-preserveaspectratio-en-svg/" target="_blank">atributo viewBox</a> en **SVG**.

<!--more-->

Ahora vamos a ver un pequeño problema que nos vamos a encontrar a la hora de generar un **SVG** sin el atributo `viewBox`.

Antes de nada voy a recodar el post sobre como <a href="http://jorgeatgu.com/blog/exportando-svg-desde-illustrator-inkscape-y-sketch/" target="_blank">Exportar SVG desde Illustrator, Inkscape y Sketch</a>

> <cite>InKscape omite el atributo viewBox lo cual nos puede crear problemas a la hora de insertar SVG en el HMTL</cite>

El problema viene a raíz de este *Pen* en el que aplico **filtros SVG** sobre una imagen que obtengo a través de una etiqueta `image` y que esta dentro de las etiquetas `SVG`.


{% codepen jyibl jorgeatgu [result] [400] %}


Al abrirlo en Firefox me di cuenta de que la imagen no respetaba las medidas que le había dado a la etiqueta `image`, y se incrustaba con su tamaño real.

![viewbox firefox][1]

La primera imagen no tiene declarado el atributo `viewBox`, el resto sí. La primera y la cuarta imagen son las mismas.

Aquí tenéis el código y el ejemplo.

{% highlight HTML linenos %}<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="1000px" height="800px"
  viewBox="0 0 1000 800">

  <image x="63.1" y="46.8" width="235" height="126" xlink:href="http://jorgeatgu.com/img/smilcityclock.svg"/>

  <image x="363.1" y="46.8" width="235" height="126" xlink:href="http://jorgeatgu.com/img/sublimesvg.svg"/>

  <image x="623.1" y="46.8" width="235" height="126" xlink:href="http://jorgeatgu.com/img/webjorgeatgu.svg"/>

  <image x="363.1" y="246.8" width="235" height="126" xlink:href="http://jorgeatgu.com/img/codepencity.svg"/>

  </svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/sinviewbox/sinviewbox.html">VER EJEMPLO!</a>
</button>

Así que el problema tiene fácil solución, añadir siempre el atributo viewBox a la etiqueta **SVG**. Como hemos visto anteriormente tanto Illustrator como Sketch siempre lo incluyen pero InKscape no lo incluye, y si creamos el el SVG a mano es posible que nos olvidemos de incluirlo. Así que no os olvidéis de revisar que en la etiqueta SVG este incluido el atributo `viewBox`.

 [1]: http://jorgeatgu.com/blog/img/2013/12/viewboxfirefox-800x450.png