---
title: No utilizar guiones en los ID de los grupos
author: Jorge Aznar
layout: post
permalink: /no-utilizar-guiones-id-svg/
comments: true
dsq_thread_id:
  - 2335970922
tags:
  - SMIL
  - SVG
---
Una nota rápida para que alguien no se tenga que volver loco como yo.

<!--more-->
Si vamos a agrupar elementos dentro de una etiqueta `g` con la idea de animar ese grupo con SMIL no hay que utilizar guiones a la hora de nombrar el grupo con el `ID`.

Este problema es bastante similar al que vimos hace unos meses en el que los `ID` que <a href="http://jorgeatgu.com/blog/svg-firefox-error-id-utilizan-numeros/" target="_blank">contenían un número no funcionaban en Firefox</a>.

{% highlight HTML linenos %}<g id="con-guion" cursor="pointer">
    <rect x="100" y="100" fill="#F7931E" width="80" height="80">
      <animate attributeName="x"
      from="100" to="400"
      begin="con-guion.click"
      fill="freeze" dur="5s"/>
    </rect>
  </g>

  <g id="singuion" cursor="pointer">
    <rect x="100" y="300" fill="#F7931E" width="80" height="80">
      <animate attributeName="x"
      from="100" to="400"
      begin="singuion.click"
      fill="freeze" dur="5s"/>
    </rect>
  </g>{% endhighlight %}

Como se puede observar en el código la única diferencia es que el primer grupo tiene un `ID` con un guión y el segundo un `ID` sin guión.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/nombreid/nombre.html">VER EJEMPLO!</a>
</button>