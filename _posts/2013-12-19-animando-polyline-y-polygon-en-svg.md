---
title: Animando polyline y polygon en SVG
author: Jorge Aznar
layout: post
permalink: /animando-polyline-y-polygon-en-svg/
comments: true
dsq_thread_id:
  - 2109006525
tags:
  - SMIL
  - SVG
---
Por desgracia y a fecha de hoy el enunciado de este post no es del todo cierto.

<!--more-->

Si queremos dotar de movimiento a un `polygon` o `polyline` a través de `animate attributeName="points"` deberemos olvidarnos de ello a no ser que solo queramos que los usuarios de Firefox vean la animación.

En este vídeo he ejecutado el mismo código en Chrome, Safari, Firefox y Opera, como se puede ver solo Firefox soporta `animate attributeName="points"`

<iframe class="vine-embed" src="https://vine.co/v/h2AL5dwVXHp/embed/simple" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>


El código es el siguiente

{% highlight HTML linenos %}
<svg width="5cm" height="5cm"  viewBox="0 0 1000 1000"
  xmlns="http://www.w3.org/2000/svg" version="1.1">
<polyline stroke="red" stroke-width="3" fill="none">
  <animate attributeName="points" dur="5s" repeatCount="indefinite"
    from="100,100 900,100 900,900 100,900 100,100"
      to="200,200 800,500 800,500 200,800 200,200"/>
</polyline>
</svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animatepoints/points.html">VER EJEMPLO!</a>
</button>

La única solución que he encontrado es recurrir a Adobe Illustrator y a convertir trazado los elementos que estén con las etiquetas `polygon` y `polyline`, una vez hecho esto volvemos a exportar el SVG desde Adobe Illustrator y tanto `polygon` como `polyline` se habrán convertido en `path`, y podremos animarlo a través de `animate attributeName = "d`.

Funciona en Chrome, Safari, Firefox y Opera. Podéis ver un ejemplo alojado en <a href="http://docs.webplatform.org/" target="_blank">WebPlatform Docs</a>

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://letmespellitoutforyou.com/samples/svg/anim_morph.svg">VER EJEMPLO!</a>
</button>

Y aquí el código

{% highlight HTML linenos %}
<path id="shape" d="M 115,169 S 149,424 460,555 S 608,367 568,157 S 438,108 174,57 S 97,90 115,169">
<animate attributeName="d" begin="0s" dur="20s"
  from="M 115,169 S 149,424 460,555 S 608,367 568,157 S 438,108 174,57 S 97,90 115,169"
  to="M 115,169 S 149,424 460,555 S 608,367 568,157 S 438,108 174,57 S 97,90 115,169"
  values="M 115,169 S 149,424 460,555 S 608,367 568,157 S 438,108 174,57 S 97,90 115,169;M
    284,81 S 117,248 91 ,478 S 240,595 547,608 S 608,349 588,140 S 420,48 284,81;M
    360,313 S 413,253 475,308 S 491,422 464,508 S 293,511 217,424 S 254,297 360,313;M
    381,643 S 574,490 580,225 S 468,133 297,38 S 103,144 62,382 S 172,641 381,643;M
    456,56 S 579,221 603,479 S 449,59 5 196,636 S 64,367 96,111 S 371,28 456,56;M
    552,89 S 326,83 111,219 S 66,407 104,623 S 426,653 605,503 S 655,263 552,89;M
    628,3 55 S 563,183 397,79 S 199,79 65,270 S 65,464 258,650 S 467,623 628,355;M
    84,239 S 223,528 336,620 S 516,606 630,347 S 587,153 3 25,70 S 76,87 84,239;M
    115,169 S 149,424 460,555 S 608,367 568,157 S 438,108 174,57 S 97,90 115,169"/>
</path>
{% endhighlight %}