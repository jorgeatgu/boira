---
title: Animando el viewBox en SVG
author: Jorge Aznar
layout: post
permalink: /animando-el-viewbox-en-svg/
comments: true
dsq_thread_id:
  - 2684658355
tags:
  - SMIL
  - SVG
---
Hace unos meses vimos el significado del <a href="http://jorgeatgu.com/blog/atributos-viewbox-y-preserveaspectratio-en-svg/" target="_blank">atributo viewBox</a> en SVG, en esta ocasión vamos a animarlo a través de la etiqueta `animate`.

<!--more-->

Lo primero es crear un SVG que nos sirva de ejemplo.

{% highlight HTML linenos %}
<svg width="1266" height="600" viewBox="0 0 1266 600">

  <rect x="200" y="125" width="100" height="100" fill="crimson"/>

  <rect x="600" y="125" width="100" height="100" fill="crimson"/>

  <text font-size="2px" font-family="Arial" x="200" y="175">Hola que pasa que tal</text>

</svg>
{% endhighlight %}

Tenemos dos cuadrados de 100px con el mismo color, uno situado a 200 y otro a 600. También tenemos un texto con una fuente y un tamaño de 2px, este tamaño hace que el texto en estos momentos sea prácticamente ilegible.

Antes de seguir vamos a recordar los cuatro valores que tiene el `viewBox`, los dos primeros corresponden a las coordenadas `x` e `y`, y los dos últimos al `width` y `height`.

Ahora vamos a animar el viewBox para conseguir un zoom que nos permita ver el texto a la perfección.

{% highlight HTML linenos %}
<animate  attributeName="viewBox"
            begin="0s"
            dur="5s"
            values="0 0 1265 600;
            200 172 5 5;
            230 172 5 5;
            0 0 1265 600"
            fill="freeze"/>
{% endhighlight %}

En primer valor corresponde al que tiene el propio documento `0 0 1265 600`, en el segundo le decimos que la coordenada `x` comience en 200 y que la `y` comience en 172, además le decimos que el `width` y el `height` van a reducir su tamaño a 5px, con esto vamos a conseguir un efecto de zoom, en el siguiente valor solo vamos a cambiar la coordenada `x` para que cree un efecto de desplazamiento a lo largo de 30 pixeles y así podemos leer toda la frase, con el último valor le decimos que todo vuelva a su sitio con `0 0 1265 600`.

En el ejemplo la animación se repite cinco veces para que no tengáis que recargar la página.

<button class="boton-centrar">
  <a target="" class="btn" href="http://jorgeatgu.com/ejemplos/animateviewBox/viewbox.html">IR AL EJEMPLO</a>
</button>

Por último comentar que la animación no va muy fluida en Firefox y se cuelga durante unos segundos, en el ejemplo al pasar de `230 172 5 5` `0 0 1265 600` la animación se congela y ejecuta un movimiento bastante brusco.

A continuación os dejo otro par de ejemplos en los que también animo el viewBox y que he publicado en CodePen.


{% codepen akfDE jorgeatgu [result] [400] %}

{% codepen lctyI jorgeatgu [result] [400] %}