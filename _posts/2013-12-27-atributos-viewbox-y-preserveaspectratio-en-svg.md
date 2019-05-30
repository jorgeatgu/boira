---
title: Atributos viewBox y preserveAspectRatio en SVG
author: Jorge Aznar
layout: post
permalink: /atributos-viewbox-y-preserveaspectratio-en-svg/
comments: true
dsq_thread_id:
  - 2103487089
tags:
  - Diseño Web
  - SVG
---
Con el atributo `viewBox` definimos el área que queremos que sea visible dentro de un SVG.

<!--more-->

El atributo se define con cuatro valores, primero las coordenadas `min-x` y `min-`, y luego la anchura y altura con `width` y `height`. Los valores estarán separados por espacios en blanco o comas. Ni `width` ni `height` admiten valores negativos.

{% highlight HTML linenos %}viewBox="0 0 400 400"{% endhighlight %}

Vamos a ver dos ejemplos.

En el primero tenemos un `viewBox="0 0 400 400` y el documento tiene ` width="400" height="400"` por lo tanto los valores coinciden y no vemos ningún efecto en las líneas que hemos trazado.

En el segundo tenemos un `viewBox="0 0 200 200` y el documento tiene ` width="400" height="400"`, en este caso los valores no coinciden, el `viewBox` es la mitad y esto produce un efecto de ampliación, todas las medidas se multiplican por dos y la consecuencia es que varías líneas desaparecen del campo de visión.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/viewbox/viewbox.html">VER EJEMPLO!</a>
</button>

<a href="http://tutorials.jenkov.com/svg/svg-viewport-view-box.html" target="_blank">Otra forma de explicarlo</a> es que las dos primeras coordenadas en el viewBox definen las coordenadas de la esquina superior izquierda, y los dos últimos coordenadas definen las coordenadas de la esquina inferior derecha.

## preserveAspectRatio

Antes de nada hay que tener claro que el atributo `preserveAspectRatio` no se tendrá en cuenta si antes no hemos definido el atributo `viewBox`.

Cuando las medidas del atributo `viewBox` no coinciden con las del documento podemos especificar a través de `preserveAspectRatio` como va a encajar en el documento.

El atributo `preserveAspectRatio` consta de dos valores separados por un espacio. El primero esta compuesto por dos partes que indicarán como vamos a alinear el objeto en el documento, la primera para la coordenada X y la segunda para la coordenada Y.

xMin Alinea la coordenada X con la esquina superior izquierda.
xMid Alinea la coordenada X con el centro.
xMax Alinea la coordenada X con la esquina inferior izquierda.

YMin Alinea la coordenada Y con la esquina superior izquierda.
YMid Alinea la coordenada Y con el centro.
YMin Alinea la coordenada Y con la esquina inferior izquierda.

El segundo valor tiene dos opciones, una es `meet` con ella el objeto encajara dentro de las medidas y la otra es `slice` si el objeto es mayor que las medidas este se saldrá del cuadro.

Para que esto quede más claro vamos a ver el ejemplo que tenemos disponible en la <a href="http://www.w3.org/TR/SVG11/coords.html#PreserveAspectRatioAttribute" target="_blank">W3C</a>.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://www.w3.org/TR/SVG11/images/coords/PreserveAspectRatio.svg">VER EJEMPLO!</a>
</div>