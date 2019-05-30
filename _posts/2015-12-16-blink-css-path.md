---
title: Blink implementa path en CSS
author: Jorge Aznar
layout: post
permalink: /blink-path-css/
comments: true
tags:
  - SVG
  - CSS
  - Chrome
---

Hace unas horas [Erik Dahlström](https://twitter.com/erikdahlstrom/) [twitteaba](https://twitter.com/erikdahlstrom/status/676659751435042816) que Blink acababa de implementar el atributo d:path en [Chromium](https://download-chromium.appspot.com/). El atributo ```d``` se utiliza en el elemento ```<path>``` de **SVG** para trazar todas aquellas formas que son imposibles de hacer con las formas básicas como ```<polygon>``` ```<rect>``` ```<circle>``` ```<line>```.

<!--more-->

Para aquellos que no estén familirizados con el elemento ```<path>``` os dejo este [enlace](https://github.com/jorgeatgu/scalable/blob/master/capitulo4/chapter4.md#path) al capítulo de mi libro [SCALABLE, un libro sobre SVG](https://leanpub.com/scalable/).

Lo primero y aviso para todos, esta propiedad solo esta disponible en [Chromium](https://download-chromium.appspot.com/). Una vez descargado tendrás que ir a chrome://flags y activar los experimentos de Web Platform. Así que la cosa esta muy pero que muy verde. Hay que tener en cuenta que el commit y la versión de Chromium es de hace unas horas. Y que la propuesta para implementar ```d:path``` en **CSS** parte del grupo de **SVG en septiembre de 2015**.

## d:path

Para empezar a utilizar este atributo vamos a crear un **SVG** con un path al que solamente le vamos a dar un ```stroke-width="20px"```. El resto lo vamos a hacer con **CSS**.

{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="400">
<path id="path" stroke-width="20"/>
</svg>
{% endhighlight %}

Ahora vamos a utilizar el atributo ```d:path```, al cual le vamos a pasar las coordenadas del trazado que queremos mostrar.

{% highlight CSS %}
#path {
  d: path('M425,225 L475,275 L575,175 L675,275 L775,175 L875,275 L925,225');
  stroke: #1EFE64;
  fill: none;
}
{% endhighlight %}

## Animando el path con CSS

### Actualización

Esta madrugada ha salido un [nuevo commit y version de Chromium](https://chromium.googlesource.com/chromium/src.git/+/5994f089fd585f4ac9629b3f52db05044db55592) que también implementa las animaciones CSS.

Este atributo también se puede animar con animaciones **CSS**, por desgracia el resultado **todavía** dista mucho de ser el mismo que con **SMIL**.

Vamos a crear los @keyframes necesarios para animar el ```path```

{% highlight CSS %}
@keyframes path {

  0% {
     d: path('M425,225 L475,275');
  }

  25% {
     d: path('M425,225 L475,275 L575,175');
  }

  50% {
     d: path('M425,225 L475,275 L575,175 L675,275');
  }

  75% {
     d: path('M425,225 L475,275 L575,175 L675,275 L775,175');
  }

  90% {
     d: path('M425,225 L475,275 L575,175 L675,275 L775,175 L875,275');
  }

  100% {
     d: path('M425,225 L475,275 L575,175 L675,275 L775,175 L875,275 L925,225');
  }
}
{% endhighlight %}

{% codepen bEEemM jorgeatgu [result] [400] %}

Adjunto vídeo para aquellos que no quieran hacer todo la movida de descargarse Chromium y activar los experimentos.

<iframe src="http://player.vimeo.com/video/149000855" width="500" height="286" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

A diferencia de **SMIL** por ahora con **CSS** no tenemos que pasarle todas las coordenadas que tiene el ```path``` para que este se pueda animar. Esto hace que la animación sea muy brusca y carezca de fluidez, simplemente va de un nodo a otro.

**Actualizacion 17 de diciembre. Ahora si le pasamos a la animación todos los nodos la animación es tan fluída como con SMIL**

<iframe src="http://player.vimeo.com/video/149338498" width="500" height="286" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### SMIL vs CSS

No podía faltar la comparación entre estos dos métodos de animación. Para ello voy a utilizar un pen que esta mañana ha creado [Lionel](https://twitter.com/elrumordelaluz).

{% codepen BjjQyX elrumordelaluz [result] [400] %}

Adjunto vídeo para ver las diferencias

<iframe src="http://player.vimeo.com/video/149063045" width="500" height="286" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Si inspeccionamos el código vemos como el método animate de **SMIL** necesita todos los nodos que componen un ```path``` para que este se pueda animar.

{% highlight HTML %}
values="
        M449.5 449.5L134.1 378.9 350 350 378.9 134.1;
        M171 171L134.1 378.9 134.1 134.1 378.9 134.1;
        M449.5 449.5L134.1 378.9 350 350 378.9 134.1"
{% endhighlight %}

Habrá que darle tiempo a los chicos de Blink para que las animaciones vayan tan finas como con **SMIL**.

**Actualizacion 17 de diciembre. Ahora si le pasamos a la animación todos los nodos la animación es tan fluída como con SMIL**

<iframe src="http://player.vimeo.com/video/149338499" width="500" height="286" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>