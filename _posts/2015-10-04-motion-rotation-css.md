---
title: Motion path disponible en Chrome 46 y Opera 33
author: Jorge Aznar
layout: post
permalink: /motion-path-css/
comments: true
tags:
  - CSS
  - Animaciones
  - SVG
---

Esta semana llego una nueva actualización de **Google Chrome**. Está nueva version(46) llega con un nuevo método para animar a través de **CSS**. Este nuevo método se llama [**Motion path**](https://drafts.fxtf.org/motion-1/). Aquellos pocos que hayan tenido el placer de animar **SVG** con **SMIL** conocerán este método ya que es una parte de la propiedad ``animateMotion`` de **SMIL**.

<!--more-->

### AnimateMotion

En su día ya hable de animateMotion en un [artículo del blog](http://jorgeatgu.com/blog/animaciones-con-animatemotion-en-svg/)

También hable sobre ello en un hangout de [VectoresIO](https://www.youtube.com/watch?v=vZef4HhybhQ)

### Motion path

Con este nuevo método vamos a animar objetos a lo largo de un path. [Un path es un elemento de SVG](http://jorgeatgu.com/blog/elemento-path-svg/) con el que podemos trazar las formas que a nosotros se nos ocurran. Los múltiples comandos que tenemos disponibles para dibujar con path nos dan una libertad absoluta para hacer lo que queramos, eso sí, esta libertad tiene un precio la dificultad extrema de dibujar con ella. Así que como siempre digo este trabajo lo hacen a la perfección programas vectoriales como **Illustrator**, **Sketch** o **Inkscape**.

La propiedad principal para animar es **motion-path**, a la cual le vamos a pasar las coordenadas del path por el cual queremos que fluya nuestro objeto. Su uso es bastante sencillo, declaramos la propiedad, a continuación va path y entre paréntesis y comillas las coordenadas del path.

{% highlight CSS %}
motion-path: path('M-42,238l310-9h268');
{% endhighlight %}

### Motion offset

Una propiedad que representa la distancia del path descrita en la longitud o porcentajes del path. Si le pasamos un valor de 50% la animación comenzará en la mitad del path.


### Motion rotation

Esta propiedad sirve para dotar de rotación a nuestro objeto. Una de sus propiedades es reverse, con ella vamos a dar la vuelta al objeto que estamos animando, desde mi punto de vista poca utilidad. También le podemos pasar un valor en grados, bastante más útil que la anterior.

### DEMOS

Motion path con reverse
{% codepen meqOgp jorgeatgu [result] [400] %}

Vamos a ver un par de demos para ver los efectos de las tres propiedades. Para ello voy a aprovechar una parte de una animación que hice en su día [City & Clock](http://codepen.io/jorgeatgu/details/qvzLm/). Vamos a animar a lo largo de un path un sol y un par de nubes creados con **SVG**.

Para los tres objetos a animar voy a utilizar la misma animación. Utilizando la propiedad ```motion-offset``` le indicamos que la animación comience(0%) al principio(0%) del path, a la mitad(50%) de la animación llegará al final(100%) del path, y al final(100%) de la animación llegará de nuevo al principio(0%) del path.


{% highlight CSS %}
@keyframes rotando {

  0% {
    motion-offset: 0%;
  }

  50% {
    motion-offset: 100%;
  }

  100% {
    motion-offset: 0%;
  }

}
{% endhighlight %}

Para el sol he dibujado un path con forma de parabola. Ese path lo vamos a pasar a través del motion-path. La animación durará 20 segundos, con un easing ease-in y se repetirá infinitamente.

{% highlight CSS %}
.sol {
  motion-path: path('M-43,389c192.8-230.5,382.2-177.7,570,0');
  animation-name: rotando;
  animation-duration: 20s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
}
{% endhighlight %}

Para las nubes he dibujado dos path casi en línea recta. A la nube alta le añado también la propiedad ```motion-rotation: reverse;``` para que veáis el efecto. A la nube baja le añado también el ```motion-rotation: 4deg;```

{% highlight CSS %}
.nube-alta {
  motion-path: path('M-42,238l310-9h268');
  animation-name: rotando;
  animation-duration: 20s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  motion-rotation: reverse;
}

.nube-baja {
  motion-path: path('M-34,283h292h262');
  animation-name: rotando;
  animation-duration: 20s;
  animation-delay: 2s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  motion-rotation: 4deg;
}
{% endhighlight %}

Motion path con rotation
{% codepen xwPRNO jorgeatgu [result] [400] %}

### Convirtiendo a path en Illustrator

Pongamonos en el caso de que queremos animar un objeto alrededor de una forma básica como puede ser un rectángulo, círculo o cuadrado. A la hora de exportar como SVG si utilizamos algunas de estas formas vamos a obtener etiquetas como ```rect```, ```circle``` o ```ellipse```. Para convertir estas formas en un ```path``` simplemente vamos a Illustrator nos posicionamos sobre la forma y dando al botón derecho sobre la forma le damos a la opción de crear trazado compuesto. Ahora volvemos a exportar como SVG y veremos una etiqueta ```path``` la cúal ya podemos utilizar con ```motion-path```.

Todo el código está disponible en [GitHub](https://github.com/jorgeatgu/jorgeatgu.github.io/tree/master/motion-path)


Más demos usando motion-path

[Spiral](http://codepen.io/danwilson/pen/ZGmeRO)

[Heart](http://codepen.io/yisi/pen/zGzJYd)

[Triangle](http://codepen.io/ericwilligers/pen/zGRdxQ)

[Scissors](http://codepen.io/ericwilligers/pen/pJarJO)

[Eyes](http://jsfiddle.net/ericwilligers/v79bdL3p/)


