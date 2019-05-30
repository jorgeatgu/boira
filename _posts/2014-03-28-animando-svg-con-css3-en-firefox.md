---
title: Animando SVG con CSS3 en Firefox
author: Jorge Aznar
layout: post
permalink: /animando-svg-con-css3-en-firefox/
comments: true
dsq_thread_id:
  - 2532140188
tags:
  - CSS3
  - SVG
---
Este post es para documentar la conversación que mantuvimos ayer por Twitter <a href="https://twitter.com/elrumordelaluz" target="_blank">Lionel</a> y un servidor buscando la solución al efecto que genera Firefox con `transform-origin:`

<!--more-->

Cuando intentamos animar un SVG con CSS3 y utilizamos la propiedad `transform-origin: center center;` como podemos ver a continuación el resultado que obtenemos en Firefox no es ni parecido al que obtenemos en Chrome.

![rotacion CSS3 firefox](http://jorgeatgu.com/blog/img/2014/03/firefoxvschrome1.gif)

La ventana de la izquierda es de Firefox y la derecha pertenece a Google Chrome.

Aquí podéis ver el pen que dio comienzo a todo

{% codepen fInpG jorgeatgu [result] [400] %}

Como mucho de nuestros problemas con CSS, SVG y JS la solución se encuentra como no en <a href="http://stackoverflow.com/questions/18938331/transform-origin-for-css-animation-on-svg-working-in-chrome-not-ff/18943090#18943090" target="_blank">Stackoverflow</a>. El problema radica en que en Firefox no aplica la traslación a los elementos de SVG, este problema se repite si utilizamos `rect`, `polygon` o cualquiera de las formas básicas que tenemos disponibles en SVG.

La solución-fix consiste en envolver el objeto que va a ser animado en un `g` y a este le vamos a aplicar una clase con el siguiente código

{% highlight css linenos %}
.corregir {
    transform: translate(200px,200px);
}
{% endhighlight %}

Los valores van a depender de la posición del elemento al que aplicamos la transformación.

También vamos a aplicar otra clase al elemento que recibe la transformación, en este caso es un path.

{% highlight HTML linenos %}
path {
transform: translate(-200px,-200px);
}
{% endhighlight %}

Lo mismo que antes, los valores van a depender del elemento al que aplicamos la transformación.

Aquí podemos ver el resultado del fix:

{% codepen uEaDF jorgeatgu [result] [400] %}

Y aquí el resultado final ajustando los pixeles por Lionel:

{% codepen gpsoL elrumordelaluz [result] [400] %}
