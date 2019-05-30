---
title: Las formas básicas en SVG
author: Jorge Aznar
layout: post
permalink: /las-formas-basicas-en-svg/
comments: true
dsq_thread_id:
  - 2117201237
tags:
  - Diseño Web
  - HTML5
  - SVG
---
En **SVG** tenemos a nuestra disposición las siguientes formas básicas:

*   rectángulos <br/>
*   círculos <br/>
*   elipses <br/>
*   líneas rectas <br/>
*   polilíneas <br/>
*   polígonos <br/>

<!--more-->

## RECTÁNGULOS

Para generar un rectángulo con **SVG** utilizaremos la etiqueta `rect`

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="1198" height="398" >
<rect x="400" y="50" width="400" height="300"
fill="black" stroke="red" stroke-width="20" />
</svg>
{% endhighlight %}

A la etiqueta `rect` le asignamos los siguientos atributos:
`x="400"` donde x situa el rectangulo en las coordenadas que le asignamos al eje x, en este caso 400.
`y="50"` donde y situa el rectangulo en las coordeandas que le asignamos al eje y, en este caso 50.
`width="400"` determina el ancho del rectángulo, en este caso 400 pixeles.
`height="300"` determina la altura del rectángulo, en este caso 300 pixeles.
`fill="black"` determina el color del rectangulo, en este caso black.
`stroke="red"` determina el color del borde del rectángulo, en este caso red.
`stroke-width="20"` determina el grosor del borde del rectángulo, en este caso 20 pixeles.

Ahora generaremos un rectángulo con los bordes redondeados, tan solo tenemos que añadir el atributo `rx="40"`, en este caso el redondeado sera de 40 pixeles.

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="1198" height="398" >
<rect x="400" y="50" width="400" height="300"
fill="black" stroke="red" stroke-width="20" rx="40" />
</svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/rectangulo.html">VER EJEMPLO!</a>
</button>

## CÍRCULO

Para generar un círculo con **SVG** utilizaremos la etiqueta `circle`

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="1198" height="398" >

<circle cx="600" cy="200" r="150" fill="black" stroke="red" stroke-width="10"/>

</svg>{% endhighlight %}

A la etiqueta `circle` le asignamos los siguientos atributos:
`cx="600"` donde x situa el círculo en las coordenadas que le asignamos al eje x, en este caso 400.
`cy="200"` donde y situa el círculo en las coordeandas que le asignamos al eje y, en este caso 50.
`r="150"` determina el radio que tendra el círculo, en este caso 150 pixeles.
`fill="black"` determina el color del círculo, en este caso black.
`stroke="red"` determina el color del borde del círculo, en este caso red.
`stroke-width="10"` determina el grosor del borde del círculo, en este caso 10 pixeles.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/circulo.html">VER EJEMPLO!</a>
</button>

## ELIPSE

Para generar una elipse con **SVG** utilizaremos la etiqueta `ellipse`

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="1198" height="398" >

<ellipse cx="600" cy="200" rx="150" ry="50"
fill="black" stroke="red" stroke-width="10"/>

</svg>{% endhighlight %}

A la etiqueta `ellipse` le asignamos los siguientos atributos:
`cx="600"` donde x situa la elipse en las coordenadas que le asignamos al eje x, en este caso 600.
`cy="200"` donde y situa la elipse en las coordeandas que le asignamos al eje y, en este caso 200.
`rx="150"` determina el radio que tendra la elipse en el eje x, en este caso 150 pixeles.
`ry="50"` determina el radio que tendra la elipse en el eje y, en este caso 50 pixeles.
`fill="black"` determina el color de la elipse, en este caso black.
`stroke="red"` determina el color de la elipse, en este caso red.
`stroke-width="10"` determina el grosor del borde de la elipse, en este caso 10 pixeles.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/elipse.html">VER EJEMPLO!</a>
</button>

## LÍNEA

Para generar una línea con **SVG** utilizaremos la etiqueta `line`

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
mlns:xlink="http://www.w3.org/1999/xlink" width="1198" height="398" >

<line x1=’250′ y1="150" x2=’600′ y2=’150′
stroke="red" stroke-width="20" />

</svg>{% endhighlight %}

A la etiqueta `line` le asignamos los siguientos atributos:
`x1="250"` x1 son las coordenadas de principio y situa la línea en el eje x, en este caso 250.
`y1="150"` y1 son las coordenadas de principio y situa la línea en el eje y, en este caso 150.
`x2="600"` x2 son las coordenadas del final y situa la línea en el eje x, en este caso 600.
`y2="150"` y2 son las coordenadas del final y situa la línea en el eje y, en este caso 150.
`stroke="red"` determina el color de la elipse, en este caso red.
`stroke-width="10"` determina el grosor del borde de la elipse, en este caso 10 pixeles.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/linea.html">VER EJEMPLO!</a>
</button>

## POLILÍNEAS

Para generar una polilínea con **SVG** utilizaremos la etiqueta `polyline`

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="1198" height="398" >

<polyline points="0,40 40,40 40,80 80,80 80,120"
fill="none" stroke="red" stroke-width="10" />

</svg>{% endhighlight %}

A la etiqueta `polyline` le asignamos los siguientos atributos:
`points="0,40 40,40 40,80 80,80 80,120"` utilizaremos pares de coordenadas separadas por comas, donde el primer número corresponde a la coordenada x y el segundo número corresponde a la coordenada y. Para llevara a cabo una polilínea necesitaremos al menos dos pares de coordenadas, es decir `points="0,40 40,40"`
`fill="none"` determina el color de la elipse, en este caso ninguno.
`stroke="red"` determina el color de la elipse, en este caso red.
`stroke-width="10"` determina el grosor del borde de la elipse, en este caso 10 pixeles.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/polilinea.html">VER EJEMPLO!</a>
</button>

## POLIGONOS

Para generar una poligono con **SVG** utilizaremos la etiqueta `polygon`

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="1198" height="398" >

<polygon points="200,100 250,180 160,210"
fill="black" stroke="red" stroke-width="4" />

</svg>{% endhighlight %}

A la etiqueta `poligono` le asignamos los siguientos atributos:
`points="200,100 250,180 160,210"` en este caso con el atributo points asignaremos el número de lados que queramos que tenga el poligono, sera definido por números de pares, donde el primer número corresponde a la coordenada x, y el segundo número corresponde a la coordenada y. En este caso hemos utilizado tres pares por lo tanto obtendremos un triángulo.
`fill="black"` determina el color del poligono, en este caso black.
`stroke="red"` determina el color del poligono, en este caso red.
`stroke-width="10"` determina el grosor del borde del poligono, en este caso 4 pixeles.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/formassvg/poligono.html">VER EJEMPLO!</a>
</button>