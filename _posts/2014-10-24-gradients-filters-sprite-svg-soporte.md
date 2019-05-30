---
title: Gradients y filters a través de un sprite con SVG
author: Jorge Aznar
layout: post
permalink: /gradients-filters-sprite-svg-soporte/
comments: true
tags:
  - SVG
  - Sprites
---

Las conversaciones con [Lionel](https://twitter.com/elrumordelaluz/){:target="_blank"} a través de twitter suelen ser [bastante fructiferas](http://jorgeatgu.com/blog/animando-svg-con-css3-en-firefox/){:target="_blank"} y dan lugar a pequeñas investigaciones para ver los problemas que nos vamos encontrando con **SVG** y el diferente soporte que le dan los navegadores.

Hace poco publiqué un artículo en [octuweb](http://octuweb.com){:target="_blank"} donde hablaba sobre como utilizar los [sprites](http://octuweb.com/sprites-con-svg){:target="_blank"} a través de **SVG**. En el artículo ya advertía que si el sprite lleva un filtro este no se va a mostrar. Si es un degradado solo va a mostrar la forma o figura que lleve el degradado pero los colores pasarán a ser negros. Esto último como vamos a ver a lo largo del post no pasa en todos los navegadores.

Para ver el soporte he creado un pequeño sprite que contiene dos **SVG** con un filtro cada uno(feTurbulence y feGaussianBlur), un **SVG** normal con dos rectángulos y por último un **SVG** con un linearGradient sin muchas complicaciones.

### Google Chrome 38

![Google Chrome 38](http://jorgeatgu.com/blog/img/2014/10/Chrome-38.png)

### Opera Developer 26

![Opera Developer 26](http://jorgeatgu.com/blog/img/2014/10/Opera-Developer-26.png)

### Safari 8

![Safari 8](http://jorgeatgu.com/blog/img/2014/10/Safari-8.png)

### Firefox 33

![Firefox 33](http://jorgeatgu.com/blog/img/2014/10/Firefox-33.png)

Como podeis apreciar solo Firefox muestra los filtros y degradados a través de SVG-SPRITES. Bien por Mozilla!

### Chrome Canary 40

Y la sorpresa final

![Chrome Canary 40](http://jorgeatgu.com/blog/img/2014/10/Canary-40.png)

No muestra los **SVG** que contienen un degradado. Esto hay que tomarlo con cautela ya que Canary es el banco de pruebas que utiliza Chrome para ir incorporando y quitando cosas. Eso sí habrá que ver como va evolucionando el soporte.


## ¿Solución?

Bueno voy a llamarlo solución o apaño, vaya por delante que no me termina de convencer.

Lo que podemos hacer es incluir el archivo de `sprite-images.svg` dentro del HTML, es decir inline. Y luego la llamada la hacemos igual pero sin la ruta del archivo. El código quedaría de la siguiente manera.

{% highlight HTML %}
<svg viewBox="0 0 595.3 299" class="recuadro">
    <use xlink:href="#turbulence"/>
</svg>
{% endhighlight %}

### DEMO SVG SPRITES

La demo de SVG con sprites.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/svg-sprites-gradients-filters/sprites.html">DEMO!</a>
</button>

### DEMO SVG SPRITES

La demo con el svg-sprites inline dentro del HTML.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/svg-sprites-gradients-filters/sprites-inline.html">DEMO!</a>
</button>

