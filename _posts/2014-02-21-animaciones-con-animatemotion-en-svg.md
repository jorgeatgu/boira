---
title: Animaciones SVG con animateMotion
author: Jorge Aznar
layout: post
permalink: /animaciones-con-animatemotion-en-svg/
comments: true
dsq_thread_id:
  - 2297780271
tags:
  - SMIL
  - SVG
---
Vamos a ver `animateMotion`, y es que no solo de `animate` viven las animaciones SVG a través de SMIL.

<!--more-->

Con `animateMotion` tenemos varias opciones para animar el elemento, podemos pasar los valores o rutas a través de los ya conocidos `from` y `to`, `values` y también los no tan conocidos `path` y `mpath`. A continuación vamos a ver cada uno de los metodos.

## FROM y TO

Simplemente le tenemos que pasar dos valores, el primero es para la coordenada `x` y el segundo para la coordenada `y`.

Vamos a ver un ejemplo.

{% highlight HTML linenos %}<circle fill="#F7931E" r="20">
    <animateMotion dur="3s" from="500,0" to="400,500" repeatCount="indefinite"/>
  </circle>
  <circle fill="#F7931E" r="20">
    <animateMotion dur="3s" from="300,0" to="400,500" repeatCount="indefinite"/>
  </circle>
  <circle fill="#F7931E" r="20">
    <animateMotion dur="3s" from="100,0" to="400,500" repeatCount="indefinite"/>
  </circle>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animateMotion/fromyto.html">VER EJEMPLO!</a>
</button>

## VALUES

A values también le tenemos que pasar dos valores, el primero es para la coordenada `x` y el segundo para la coordenada `y`, las parejas de coordeandas irán separadas una de otra por punto y coma.

Vamos a ver un ejemplo.

{% highlight HTML linenos %}<circle fill="#F7931E" r="20">
    <animateMotion dur="10s" values="40,40; 100,200; 400,100; 40,40" repeatCount="indefinite"/>
  </circle>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animateMotion/values.html">VER EJEMPLO!</a>
</button>

## PATH

Podemos hacer que los elementos se animen a través del atributo `path` siguiendo el trazado que le indicamos en el atributo. No viene mal recordar el <a href="http://jorgeatgu.com/blog/elemento-path-svg/" target="_blank">post sobre el elemento path</a>.

Vamos a ver un ejemplo.

{% highlight HTML linenos %}<circle fill="#F7931E" r="8">
    <animateMotion dur="10s" path="M197,167.5c0,0,433-285.5,433,0" fill="freeze" />
  </circle>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animateMotion/path.html">VER EJEMPLO!</a>
</button>

Si queremos ganar tiempo podemos crear el trazado que queramos animar en Adobe Illustrator, una vez creado hay que convertirlo en contorno para que a la hora de exportar en SVG el trazado este en `d=""` y no en `points=""`.

## MPATH

Con este método lo que hacemos es animar un elemento aprovechándonos de un trazado que ya tenemos definido en el documento, simplemente lo invocamos a través de `xlink:href=`. No hay que olvidarse de que el elemento que invocamos tiene que estar referenciado con un `id=""`.

Vamos a ver un ejemplo.

{% highlight HTML linenos %}<path id="recorrido" fill="none" stroke="black" d="M197,167.5c0,0,433-285.5,433,0"/>


  <text fill="red" font-size="28">HOYGAN!
    <animateMotion dur="10s" repeatCount="indefinite">
        <mpath xlink:href="#recorrido"/>
    </animateMotion>
  </text>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animateMotion/mpath.html">VER EJEMPLO!</a>
</button>

### Atributo ROTATE

Con este atributo vamos a lograr que el elemento que animamos tenga diferentes efectos, podemos pasarle tres valores, los cuales son auto, auto-reverse y un valor numérico. Para ver que se consigue con cada uno de ellos vamos a ver un ejemplo.

El rectángulo azul tiene `rotate="auto"`.
El rectángulo rojo tiene `rotate="auto-reverse"`.
El rectángulo verde tiene `rotate="200"`.

{% highlight HTML linenos %}<rect x="0" y="0" width="70" height="20" stroke="#F7931E" fill="blue" r="8">
    <animateMotion dur="10s" path="M197,167.5c0,0,433-285.5,433,0" rotate="auto" fill="freeze"/>
  </rect>
  <rect x="0" y="0" width="70" height="20" stroke="#F7931E" fill="red" r="8">
    <animateMotion dur="10s" path="M197,167.5c0,0,433-285.5,433,0" rotate="auto-reverse" fill="freeze"/>
  </rect>
  <rect x="0" y="0" width="70" height="20" stroke="#F7931E" fill="green" r="8">
    <animateMotion dur="10s" path="M197,167.5c0,0,433-285.5,433,0" rotate="200" fill="freeze"/>
  </rect>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animateMotion/rotate.html">VER EJEMPLO!</a>
</button>

## calcMode, keySplines y keyTimes

Estos tres atributos dan mucho de si, dan tanto que les dedique un post solamente a ellos. Así que mejor ir al post que copiar y pegar todo aquí.

Solamente añadir que en `animateMotion` el calcMode por defecto es PACED.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/blog/mis-notas-sobre-svg-iv-calcmode-keytimes-y-keysplines/">IR AL POST</a>
</button>