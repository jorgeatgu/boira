---
title: Clip-path o trazados de recorte en SVG
author: Jorge Aznar
layout: post
permalink: /clip-path-o-trazados-de-recorte-en-svg/
comments: true
dsq_thread_id:
  - 2476366490
tags:
  - Adobe Illustrator
  - SVG
---
Los trazados de recorte &#8211; mascaras de recorte &#8211; se utilizan en SVG a través del elemento `clipPath`.

<!--more-->

El elemento `clipPath` puede contener `path`, `text` y las diferentes <a href="http://jorgeatgu.com/blog/las-formas-basicas-en-svg/" target="_blank">formas básicas</a> que tenemos disponibles en SVG.

Con `clipPath` conseguimos que las figuras que declaramos dentro de `clipPath` hagan un efecto de recorte sobre el objeto que le indicamos. Como siempre esto lo vamos a ver mucho mejor con un ejemplo.

Para el ejemplo utilizare como trazado de recorte este buzón que podéis ver en CodePen.

{% codepen DLjey jorgeatgu [result] [400] %}

Ahora lo que haremos sera incluir este código dentro de `clipPath` con el id buzon. Lo siguiente que haremos sera aplicarlo sobre un `rect`, esto lo hacemos con este trozo de código dentro de la propia etiqueta `rect` `clip-path="url(#buzon)"`.

A continuación podeis ver todo el código:

{% highlight HTML linenos %}<clipPath id="buzon">
  <line stroke="#95A5A6"
  stroke-width="7"
  x1="261.7" y1="395.1" x2="126.7" y2="395.1"/>
  <line stroke="#95A5A6"
  stroke-width="15"
  x1="410.3" y1="532.3" x2="410.3" y2="398.7"/>
  <line stroke="#6D7575"
  stroke-width="15" x1="410.3" y1="417.6" x2="410.3" y2="398.7"/>
  <path fill="#34495E"
  d="M550.725,399.876H253.01c0,0,0.372-132.317,3.637-142.253c2.234,0.034,285.124-0.132,286.8,0
    C552.773,259.225,550.725,399.876,550.725,399.876z"/>
  <path fill="#2C3E50"
  d="M550.725,399.876H253.01c0,0,288.764-142.385,290.437-142.253
    C552.773,259.225,550.725,399.876,550.725,399.876z"/>
  <polygon fill="#47C9AF"
  points="167.908,338.555 239.688,380.977 239.688,291.115 "/>
  <polygon fill="#16A085"
  points="97.901,291.198 97.901,380.997 240.075,380.997 "/>

  <polyline fill="none"
  stroke="#E74C3C" stroke-width="15" points="286,335,286,220 330,220"/>

  <line stroke="#E74C3C"
  stroke-width="19" x1="277.58" y1="215.5" x2="338.4" y2="215.5"/>
  <line stroke="#E74C3C"
  stroke-width="13" x1="286.2" y1="335.4" x2="286.2" y2="211.4"/>

  <polygon fill="#47C9AF"
  points="175.828,333.536 97.901,291.115 97.901,380.977 "/>
  <polyline fill="#237C6B"
  points="239.688,291.115 171.27,340.936 97.901,291.198 "/>

  <rect x="281.7" y="323"
  fill="#2C3E50" width="9.3" height="9.3" />
</clipPath>


<rect width="1000px"
height="1000px"
fill="black" clip-path="url(#buzon)"/>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/clippath/clippath.html">VER EJEMPLO</a>
</button>

Vamos a ver otro ejemplo donde vamos a utilizar `clipPath` con texto, este recorte lo vamos a aplicar a un `g`, este grupo esta compuesto por dos rectángulos uno de ellos de color negro y el otro de color rojo.

{% highlight HTML linenos %}<clipPath id="texto">
  <text
  font-size="90px"
  font-family="Arial"
  x="100" y="100">
  Hola que pasa que tal
  </text>
</clipPath>

<g clip-path="url(#texto)">
    <rect
    width="1000px"
    height="100px"
    fill="black"/>
    <rect
    x="0" y="78"
    width="1000px"
    height="100px"
    fill="red"/>
</g>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/clippath/clippathtexto.html">VER EJEMPLO</a>
</button>

Por último comentar que Adobe Illustrator exporta bastante bien los trazados de recorte, en alguna ocasión utiliza el elemento `clipPath` para resolver otro tipo de problemas, pero si hacemos un trazado de recorte el resultado a la hora de exportar como SVG suele ser bastante bueno.

Me ha gustado mucho el ejemplo con el que ilustran el trazado de recorte en <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking" target="_blank">Mozilla Developers</a>.