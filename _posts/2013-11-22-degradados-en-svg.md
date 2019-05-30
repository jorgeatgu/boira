---
title: Degradados en SVG
author: Jorge Aznar
layout: post
permalink: /degradados-en-svg/
comments: true
dsq_thread_id:
  - 2150131664
tags:
  - Adobe Illustrator
  - SVG
---
Los degradados son una transición lineal o radial entre dos o más colores.
Tenemos dos tipos, el degradado lineal que en SVG se obtiene con la etiqueta `linearGradient` y el radial con la etiqueta `radialGradient`.

<!--more-->

Muy importante, los degradados se declaran dentro de la <a href="http://jorgeatgu.com/blog/mis-notas-sobre-svg-ii-etiqueta-defs/" target="_blank">etiqueta</a> `defs`, añadimos un `id=""` a la etiqueta `linearGradient` o `radialGradient`.

{% highlight HTML linenos %}<defs>
        <linearGradient
        id="uno"
        spreadMethod="pad"
        gradientUnits="userSpaceOnUse"
        x1="87.6567" y1="206.5967" x2="259.2988" y2="206.5967">
            <stop offset="0" style="stop-color:#FFFFFF"/>
            <stop offset="1" style="stop-color:#000000"/>
        </linearGradient>
</defs>
{% endhighlight %}

Y ahora vamos a aplicar el degradado a un rectángulo, simplemente añadimos `fill="url(#uno)"`, entre parentésis el nombre del `id=""`.

{% highlight HTML linenos %}<rect x="87.7" y="120.8"
    fill="url(#uno)"
    stroke="#000000"
    width="300" height="171"/>
{% endhighlight %}

### linearGradient

Con este degradado conseguimos cambios de color de forma lineal. Lo podemos utilizar de forma horizontal, vertical, diagonal y también que el relleno solo afecte a una parte del objeto donde se aplica.

Los atributos que tenemos disponibles para `linearGradient` son los siguientes:

#### gradientUnits

Este atributo sirve para definir el sistema de coordenadas del degradado a través de los valores `userSpaceOnUse` y `objectBoundingBox`.
Con `userSpaceOnUse` las coordenadas `x1` `y1` `x2` `y2` tomarán como referencia las medidas del documento.
En el caso de `objectBoundingBox` las coordenadas `x1` `y1` `x2` `y2` tomarán como referencia las medidas del objeto al que vamos a aplicar el degradado.
Para que esto quede mas claro vamos a ver un ejemplo, el código y una breve explicación.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/gradients/gradientUnits.html">VER EJEMPLO!</a>
</button>

El primer rectángulo tiene como relleno un degradado con `userSpaceOnUse`.
El segundo rectángulo es exactamente igual que el primero con la excepción de `objectBoundingbox` así que el degradado comienza fuera de las medidas del rectángulo.
El tercer rectángulo es igual que el segundo con la excepción de que hemos suprimido las coordenadas por lo tanto comienza en las coordenadas(0,0) del objeto y por lo tanto se visualiza.
Espero que haya quedado algo mas claro con estos ejemplos.

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="595px" height="841px" viewBox="0 0 595 841">

    <defs>
        <linearGradient
        id="userspace"
        gradientUnits="userSpaceOnUse"
        x1="87.6567" y1="206.5967" x2="259.2988" y2="206.5967">
            <stop offset="0" style="stop-color:#FFFFFF"/>
            <stop offset="1" style="stop-color:#000000"/>
        </linearGradient>
        <linearGradient
        id="objectBounding"
        gradientUnits="objectBoundingBox"
        x1="87.6567" y1="0" x2="259.2988" y2="0">
            <stop offset="0" style="stop-color:#FFFFFF"/>
            <stop offset="1" style="stop-color:#000000"/>
        </linearGradient>
        <linearGradient
        id="objectBounding2"
        gradientUnits="objectBoundingBox">
            <stop offset="0" style="stop-color:#FFFFFF"/>
            <stop offset="1" style="stop-color:#000000"/>
        </linearGradient>
    </defs>

    <rect x="87.7" y="120.8"
    fill="url(#userspace)"
    stroke="#000000"
    width="171" height="171"/>

    <g transform="translate(300)">
        <rect x="87.7" y="120.8"
        fill="url(#objectBounding)"
        stroke="#000000"
        width="171" height="171"/>
    </g>

    <g transform="translate(150,200)">
        <rect x="87.7" y="120.8"
        fill="url(#objectBounding2)"
        stroke="#000000"
        width="171" height="171"/>
    </g>
</svg>
{% endhighlight %}

#### gradientTransform

Este atributo sirve para añadir transformaciones como `matrix` `translate` `scale` `skewX` `skewY` a nuestros degradados.

#### x1 y1

Estas coordenadas se utilizan para indicar el punto inicial de nuestro degradado.

#### x2 y2

Estas coordenadas se utilizan para indicar el punto final de nuestro degradado.

#### spreadMethod

Este atributo sirve para definir el relleno del degradado a lo largo del objeto, y solo es efectivo cuando el degradado no consiga rellenar todo el objeto. Disponemos de tres valores `pad` que es el valor por defecto y con el que el degradado es extendido a lo largo del objeto, `repeat`, el degradado se repite a lo largo del objeto y`reflect`, el degradado se refleja.
Vamos a ver un ejemplo utilizando todos los valores con este orden `pad` `repeat` `reflect`.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/gradients/spreadMethod.html">VER EJEMPLO!</a>
</button>

#### xlink:href

Este atributo se utiliza para heredar las propiedades de otro degradado.

### radialGradient

Con este degradado conseguimos cambios de color de forma circular.

Los atributos que tenemos disponibles para `radialGradient` son los siguientes(algunos coinciden con los utilizados en `linearGradient`)

#### gradientUnits

Este atributo sirve para definir el sistema de coordenadas del degradado a través de los valores `userSpaceOnUse` y `objectBoundingBox`.
Con `userSpaceOnUse` las coordenadas `x1` `y1` `x2` `y2` tomarán como referencia las medidas del documento.
En el caso de `objectBoundingBox` las coordenadas `x1` `y1` `x2` `y2` tomarán como referencia las medidas del objeto al que vamos a aplicar el degradado.

#### cx, cy

Estas coordenadas forman el centro del degradado.

#### fx, fy

Estas coordenadas forman el punto focal del degradado.

#### r

Es el radio del degradado.

#### spreadMethod

Este atributo sirve para definir el relleno del degradado a lo largo del objeto, y solo es efectivo cuando el degradado no consiga rellenar todo el objeto. Disponemos de tres valores `pad` que es el valor por defecto y con el que el degradado es extendido a lo largo del objeto, `repeat`, el degradado se repite a lo largo del objeto y`reflect`, el degradado se refleja.
Vamos a ver un ejemplo utilizando todos los valores con este orden `pad` `repeat` `reflect`

#### gradientTransform

Este atributo sirve para añadir transformaciones como `matrix` `translate` `scale` `skewX` `skewY` a nuestros degradados.

#### xlink:href

Este atributo se utiliza para heredar las propiedades de otro degradado.

### Gradient stops

La gama de colores a utilizar en un degradado se define por los atributos `stop` estos atributos son secundarios a cualquier `linearGradient'` o `radialGradient`.

#### offset

El valor se da en % y sirve para especificar hasta que punto va a llegar el color en esa parte del degradado.

#### stop-color

Con este atributo especificamos el color que se va a utilizar en esa parte del degradado.

#### stop-opacity

Con este atributo definiremos la opacidad de esa parte del degradado.

Y para terminar os dejo una web de Microsoft con bastantes opciones para generar vuestros propios degradados SVG.

<a href="http://ie.microsoft.com/TESTDRIVE/Graphics/SVGGradientBackgroundMaker/Default.html" target="_blank">SVG Gradient Background Maker</a>