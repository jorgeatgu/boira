---
title: 'Mis notas sobre SVG (IV) &#8211; calcMode, keyTimes y keySplines'
author: Jorge Aznar
layout: post
permalink: /mis-notas-sobre-svg-iv-calcmode-keytimes-y-keysplines/
comments: true
dsq_thread_id:
  - 2225066791
tags:
  - Adobe Illustrator
  - SMIL
  - SVG
---
Los atributos `calcMode`, `keyTimes` y `keySplines` son los encargados de definir los valores de una animación a través del tiempo que dure la misma. Estos atributos se pueden usar en los elementos `animate`, `animateColor`, `animateMotion` y `animateTransform`.

<!--more-->

### calcMode

Este atributo especifica el modo de interpolación para la animación. Tiene cuatro *value*, **discrete**, **linear**, **paced **y **spline**. El *value *por defecto es **linear**, pero si el atributo no admite **linear**, este se ignora y se utiliza **discrete**.

Discrete
La animación saltara de un valor a otro sin ningún efecto.

Lineal
La interpolación lineal simple entre los valores se utiliza para calcular la función de animación. Es el valor por defecto excepto en `animatemotion`.

Paced
Define la interpolación para producir un ritmo incluso de cambio a lo largo de la animación. Solamente es compatible con los valores que definen a un rango numérico lineal, y para el cual se puede calcular alguna noción de &#8220;distancia&#8221; entre los puntos (por ejemplo, posición, anchura, altura, etc.). Si utilizamos *paced* cualquier keyTimes o keySplines no será tomado en cuenta. Es el valor por defecto para `animatemotion`.

Spline
Interpolación que se crea desde una lista de valores según una función de tiempo definido por una línea cúbica de Bézier. Los puntos se definen en keyTimes, y los puntos de control para cada intervalo se definen en keySplines.

En el siguiente ejemplo vamos a ver la misma animación con los diferentes *values*

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/keyTimes/calcMode.html">VER EJEMPLO!</a>
</button>

### keyTimes

El atributo keyTimes se utiliza para controlar el ritmo de una animación, cada valor definido debe ser igual o mayor que el anterior. La lista de valores dependerá del value seleccionado en calcMode.

Para **linear** y **spline**, el primer valor de la lista debe ser 0 y el último valor debe ser 1. El momento clave asociada a cada valor define cuando se establece el valor, los valores son interpolados entre los momentos clave.
Para **discrete**, el primer valor de la lista debe ser 0. El tiempo asociado con cada valor define cuando se establece el valor; la función de animación usa ese valor hasta la próxima vez que se define en keyTimes .
Para **paced** la lista de valores no es tomada en cuenta.

Para el ejemplo he corregido el código de una animación que ya tengo hecha.


{% codepen qvzLm jorgeatgu [result] [400] %}



Para el ejemplo solo vamos a tocar este trozo de código

{% highlight HTML linenos %}<animate id="amanixer"
            attributeName="fill"
            dur="144s"
            values="#2c3e50;#2c3e50;#364c5e;#364c5e;#445f75;#445f75;#4b6a82;#4b6a82;#f1c40f;#3498db;
            #3498db;#3498db;#3498db;#3498db;#3498db;#f39c12;#f39c12;#f39c12;#e67e22;#e67e22;#34495e;
            #34495e;#34495e;#34495e"
            begin="1s"/>
{% endhighlight %}

El objetivo de la animación era representar las 24 horas del días en 144 segundos, así que cada hora equivale a 6 segundos de la animación por la tanto hice un apaño un tanto trapero el cual consiste en utilizar 24 colores y así cada color representa una hora.

Pero si utilizamos el atributo `keyTimes` en la animación conseguimos reducir el número de colores a 10, y por obligación(ya que si no la animación no funcionara) tendremos que utilizar 10 values dentro de `keyTimes`. Por lo tanto en el `keyTimes` cada 0.1 equivale a 14,4 segundos. Así escrito la verdad es que resulta un tanto lioso quizás en la siguiente imagen sea mas fácil de entender.

![keytimes svg][1]

Y el código queda de la siguiente manera

{% highlight HTML linenos %}<animate
            id="amanixer"
            calcMode="linear"
            attributeName="fill"
            dur="144s"
            values="#2c3e50;#364c5e;#445f75;#4b6a82;#f1c40f;
            #3498db;#f39c12;#e67e22;#34495e;#2c3e50"
            keyTimes="0; 0.1; 0.15; 0.2; 0.3; 0.4; 0.7; 0.8; 0.85; 1"
            begin="1s"/>
{% endhighlight %}

Ahora vamos a ver un ejemplo con estos dos código funcionando a la vez cada uno en una animación. He reducido el tamaño para que se puede ver la reproducción de las dos animaciones a la vez.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/keyTimes/keyTimes.html">VER EJEMPLO!</a>
</button>

### keySpline

Este atributo solo funciona si utilizamos `calcMode="spline"`.

Con keySplines definimos la velocidad de la animación a través de una curva Bezier. Para definir cada punto de control utilizamos cuatro valores: `x1` `x2` `y1` `y2`, todos estos valores tienen que estar entre el 0 y el 1.

Os dejo tres links para que veáis varios ejemplos interactivos.

<a href="http://www.carto.net/papers/svg/samples/keysplines.svg" target="_blank">http://www.carto.net/papers/svg/samples/keysplines.svg</a>

<a href="http://brian.sol1.net/svg/tests/keysplines.html" target="_blank">http://brian.sol1.net/svg/tests/keysplines.html</a>

<a href="http://www.bogotobogo.com/SVG/svg_source/keyspline.svg" target="_blank">http://www.bogotobogo.com/SVG/svg_source/keyspline.svg</a>

 [1]: http://jorgeatgu.com/blog/img/2013/11/keytimes.png