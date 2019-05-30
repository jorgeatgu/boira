---
title: Elemento path en SVG
author: Jorge Aznar
layout: post
permalink: /elemento-path-svg/
comments: true
dsq_thread_id:
  - 2125687074
tags:
  - SMIL
  - SVG
---
El elemento `path` es la piedra angular de las formas básicas en **SVG**. Vamos a ver todo su potencial a la hora de dibujar en SVG.

<!--more-->

No es fácil de usar por la cantidad de comandos que tenemos a nuestra disposición a la hora de dibujar trazados con `path`, siendo honesto he recurrido pocas veces a sus uso por la complejidad que conlleva el dibujar a mano este tipo de trazados, casi siempre prefiero dibujar los trazados en Adobe Illustrator y mas tarde exportar a **SVG **ya que con ello ahorro una gran cantidad de tiempo.

### Comando moveto

Con el comando **moveto **movemos un punto a una coordenada(x, y) sin dibujar ningún trazado.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| M             | x y                     | moveto |
| m             | x y                     | moveto |


### Comando lineto
Con el comando **lineto **creamos una línea hasta la coordenada(x y) indicada.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| L             | x y                     | lineto |
| l             | x y                     | lineto |


Vamos a ver un ejemplo.

{% highlight HTML linenos %}
<path d="M50,50 L100,100" stroke="#000"/>

    <path d="M150,150 L200,200" stroke="red" stroke-width="5"/>
{% endhighlight %}

En el primer `path` con M50,50 le indicamos que el punto comience en las coordenadas 50,50 y con L100,100 que dibuje una línea hasta las coordenadas 100,100.

En el segundo `path` añadimos grosor a la línea con `stroke-width="5"`.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/lineto.html">VER EJEMPLO!</a>
</button>

### Comando horizontal lineto

Con el comando **horizontal lineto** creamos una línea horizontal hasta la coordenada(x) indicada.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| H             | x                       | horizontal lineto |
| h             | x                       | horizontal lineto |



{% highlight HTML linenos %}
<path d="M50,50 H500" stroke="#000"/>
{% endhighlight %}

Con M50,50 le indicamos el puntos de partida y con H500 le indicamos que dibuje una línea horizontal hasta la 500. Al ser horizontal obviamente solo le tenemos que indicar la coordenada(x).

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/horizontallineto.html">VER EJEMPLO!</a>
</button>

### Comando vertical lineto

Con el comando **vertical lineto** creamos una línea vertical hasta la coordenada(y) indicada.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| V             | y                       | vertical lineto |
| v             | y                       | vertical lineto |



{% highlight HTML linenos %}
<path d="M50,50 V500" stroke="#000"/>
{% endhighlight %}

Con M50,50 le indicamos el punto de partida y con V500 le indicamos que dibuje una línea vertical hasta la 500. Al ser vertical solamente le tenemos que indicar la coordenada(y).

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/verticallineto.html">VER EJEMPLO!</a>
</button>

### Comando curveto

Con el comando **curveto **creamos un curva Bezier hasta las coordenadas(x1 y1 x2 y2 x y ) indicadas.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| C             | x y x1 y1 x2 y2                       | curveto |
| c             | x y x1 y1 x2 y2                       | curveto |



{% highlight HTML linenos %}
<path d="M230 230 C 240 240, 260 240, 270 230" stroke="black" fill="none"/>
{% endhighlight %}

El trazado comienza en 230,230. La primera coordenada de la curva corresponde a x1,y1 en este caso van hasta 240,240. La segunda coordenada corresponde a x2,y2 en este caso van hasta 260 240. La última coordenada corresponde a x,y en este caso van hasta 270 230.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/curveto.html">VER EJEMPLO!</a>
</button>

Vamos a hacer que la curva sea mas pronunciada, para ello tenemos que modificar las coordenada y1 e y2, en el anterior ejemplo llegaban hasta 240, ahora vamos a aumentar en 100 la posición de las coordenadas.

{% highlight HTML linenos %}
<path d="M230 230 C 240 340, 260 340, 270 230" stroke="black" fill="none"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/curveto2.html">VER EJEMPLO!</a>
</button>

### Comando smooth curveto

Con el comando **smooth curveto** creamos una curva(mas suave) hasta la coordenada(x y x2 y2) indicada.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| S             | x y x2 y2                       | smooth curveto |
| s             | x y x2 y2                       | smooth curveto |



Este ejemplo está disponible en la especificación <a href="http://www.w3.org/TR/SVG/paths.html" target="_blank">sobre SVG en la W3C</a>. La explicación me ha parecido lo suficientemente clara.

{% highlight HTML linenos %}
<path class="SamplePath" d="M100,200 C100,100 250,100 250,200 S400,300 400,200" />
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/smoothcurveto.html">VER EJEMPLO!</a>
</button>

### Comando quadratic Bezier curveto y smooth quadratic bezier curveto

Con el comando **quadratic Bezier curveto** creamos una curva(quadratic Bezier) hasta la coordenada(x1,y1 x,y) indicada.
Con el comando **smooth quadratic bezier curveto** creamos una curva(quadratic Bezier) suave hasta la coordenada(x,y) indicada.
Los comandos en mayúsculas indican posiciones absolutas.
Los comandos en minúsculas indican posiciones relativas.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| Q             | x y x1 y1                       | bezier curveto |
| q             | x y x1 y1                       | bezier curveto |



El trazado comienza en 200,300. La primera coordenada de Q(quadratic bezier) corresponde a x1,y1 en este caso va hasta 400,50. La segunda coordenada de Q(quadratic bezier) corresponde a x,y en este caso va hasta 600 30. La coordenada de T(smooth quadratic bezier) corresponde a x,y en este caso se prolonga hasta 1000,300.

{% highlight HTML linenos %}
<path d="M200,300 Q400,50 600,300 T1000,300" fill="none" stroke="red" stroke-width="5"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/path/quadraticbezier.html">VER EJEMPLO!</a>
</button>

### Comando closepath

El comando closepath( Z o z ) termina el trazado actual trazando una línea recta que va desde el punto actual al punto inicial del trazado.

| Comando       |    Coordenada           | Nombre |
|:-----------:  |:-----------------------:| :------|
| Z             |                        | closepath |
| z             |                        | closepath |



Este post hubiera sido imposible de escribir sin la ayuda de

<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank">Mozilla Developers</a>
<a href="http://tutorials.jenkov.com/svg/path-element.html" target="_blank">Jenkov</a>
<a href="http://www.w3.org/TR/SVG/paths.html" target="_blank">W3C SVG</a>