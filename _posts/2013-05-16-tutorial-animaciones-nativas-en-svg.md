---
title: 'Tutorial &#8211; Animaciones nativas en SVG'
author: Jorge Aznar
layout: post
permalink: /tutorial-animaciones-nativas-en-svg/
comments: true
dsq_thread_id:
  - 2100207164
tags:
  - SVG
  - tutorial
---
Si hace unos días en otro post animábamos un **SVG** a través de **CSS** con animate.css, hoy vamos a animar nativamente un **SVG** a través de la propiedad `animateTransform`.

<!--more-->

Para animar nativamente un **SVG** podemos recurrir a varios métodos o propiedades, podemos ver detalladamente todas las opciones de las que disponemos para animar un **SVG** en la <a href="http://www.w3.org/TR/SVG/animate.html" target="_blank">página de la W3C</a>.

Para animar un SVG a través de `animateTransform` tenemos a nuestra disposición:

*   `translate` <br/>
*   `scale` <br/>
*   `rotate` <br/>
*   `skewX` <br/>
*   `skewY` <br/>


Y aquí la lista de atributos y propiedades que podemos animar:


*   `svg` <br/>
*   `g` <br/>
*   `defs` <br/>
*   `use` <br/>
*   `image` <br/>
*   `switch` <br/>
*   `path` <br/>
*   `rect` <br/>
*   `circle` <br/>
*   `ellipse` <br/>
*   `line` <br/>
*   `polyline` <br/>
*   `polygon` <br/>
*   `text` <br/>
*   `clipPath` <br/>
*   `mask` <br/>
*   `a` <br/>
*   `foreignObject` <br/>

## ROTATE

{% highlight HTML linenos %}<animateTransform attributeType="xml"
attributeName="transform"
type="rotate"
from="0 1080 50"
to="360 180 50"
dur="3s"
repeatCount="1"
begin="mouseover"
/>{% endhighlight %}

La rotación del elemento puede ir de 0 a 360 grados, en este caso en el `from` indicaremos 0 y en to 360, así completaremos toda la rotación.
El centro de la rotación estara determinado por el segundo y el tercer valor que tenemos en `from` y `to`.
En `dur` indicaremos el tiempo que dura la animación, en este caso 3 segundos.
En `repeatCount` indicaremos cuantas veces queremos que se repita la animación, podemos indicarle segundo y decimales, también la podemos hacer que la animación sea infinita con infinite.
Por último en `begin `le diremos a la animación que solo se iniciara en el momento que el ratón se pose sobre los diferentes elementos que tiene la animación.
También disponemos de `end` para indicarle a la animación cuando debe de terminar.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animandosvg/rotate.html">VER EJEMPLO!</a>
</button>

## TRANSLATE

{% highlight HTML linenos %}<animateTransform attributeType="xml"
attributeName="transform"
type="translate"
from="0"
to="360"
dur="3s"
repeatCount="1"
fill="freeze"/>{% endhighlight %}

En esta animación el código es casi idéntico a la anterior, solamente hemos añadido el atributo `fill` con un valor de freeze, con esto conseguimos parar la animación, si no definimos este atributo la animación volverá a la posición inicial.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animandosvg/translate.html">VER EJEMPLO!</a>
</button>

## SCALE

{% highlight HTML linenos %}<animateTransform attributeType="xml"
attributeName="transform"
type="scale"
from="1"
to="6"
dur="8s"
repeatCount="1"
/>{% endhighlight %}

Con scale lo que conseguimos es escalar el elemento, en este caso le decimos que vaya de 1 a 6 y que la animación dure 8 segundos.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animandosvg/scale.html">VER EJEMPLO!</a>
</button>