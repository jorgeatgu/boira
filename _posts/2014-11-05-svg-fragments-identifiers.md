---
title: Sprite SVG con fragments identifiers
author: Jorge Aznar
layout: post
permalink: /svg-fragments-identifiers/
comments: true
tags:
  - SVG
  - Sprites
---

Este artículo se puede consultar en [SCALABLE, un libro sobre SVG](http://leanpub.com/scalable){:target="_blank"}. Me gusta este método así que creo que también debe de estar en el blog.

Vamos a ver otro método para añadir al **HTML** fragmentos que tenemos en un **SVG**. Esto lo podemos hacer a través del **HTML** y del **CSS**.

Ademas de hacer la llamada al fragmento también lo podemos modificar con lo siguientes atributos. Todos ellos los vamos a incluir entre paréntesis.

*ViewBoxParams*: corresponde al atributo viewBox.
*AspectParams*: corresponde al atributo preserveAspectRatio.
*TransformParams*: corresponde a la transformación y todos los métodos que podemos aplicar a través de ella.
*ZoomAndPanParams*: corresponde al atributo zoomAndPan. Tiene dos valores *magnify* y *disable*.

Si queremos utilizar mas de un atributo simplemente lo separaremos con un punto y coma.

Ahora vamos a ver como tenemos que preparar nuestro **SVG**. Vamos a crear un archivo con cinco iconos, cada icono es de 32 por 32 pixels. Lo importante es crear una etiqueta `view` por cada icono, en la etiqueta vamos a indicar un ID para diferenciar cada icono y a través del `viewBox` la posición que ocupa el icono.

Vamos a ver primero el código del **SVG** donde tenemos todos nuestros iconos.

{% highlight XML %}
<g id="codepen">
   <!-- AQUÍ VA EL CODIGO DEL ICONO -->
</g>
<g id="twitter" transform="translate(0 32)">
    <!-- AQUÍ VA EL CODIGO DEL ICONO -->
</g>
<g id="github" transform="translate(0 64)">
    <!-- AQUÍ VA EL CODIGO DEL ICONO -->
</g>
<g id="dribbble" transform="translate(0 96)">
   <!-- AQUÍ VA EL CODIGO DEL ICONO -->
</g>
<g id="behance" transform="translate(0 128)">
    <!-- AQUÍ VA EL CODIGO DEL ICONO -->
</g>
{% endhighlight %}

A través del `transform="translate()"` vamos colocando en nuestro **SVG** la posición que ocupa cada uno de los iconos.


Ahora viene lo importante, vamos a crear una etiqueta `view` a la cual le asignamos un ID con un nombre que se asocie al icono. Y ahora le vamos a decir a través del `viewBox` la posición y el tamaño del archivo que queremos que muestre esa etiqueta. Como he dicho anteriormente todos los iconos son de 32 por 32 pixels. Así que lo que nos interesa son las dos primeras coordenadas que corresponden a las coordenadas horizontal y vertical. El icono de twitter lo hemos movido 32 pixels en su coordenada vertical así que para asignarlo a la etiqueta `view` asignamos esa posición al `viewBox` el código queda de la siguiente manera `viewBox="0 32 32 32"` repetiremos esta operación con los iconos que nos quedan.

{% highlight HTML %}
<view id="codepen-view" viewBox="0 0 32 32"/>
<view id="twitter-view" viewBox="0 32 32 32"/>
<view id="github-view" viewBox="0 64 32 32"/>
<view id="dribbble-view" viewBox="0 96 32 32"/>
<view id="behance-view" viewBox="0 128 32 32"/>
{% endhighlight %}

## Llamada desde el HTML

Ahora vamos a llamar a los iconos desde el **HTML**. Esto lo podemos hacer de dos maneras.

La primera es a través de la etiqueta `img`, en `src` vamos a indicar la ruta donde se aloja nuestro archivo **SVG** y a continuación lo siguiente: `#svgView(viewBox(0,0,32,32))` todo esto da lugar al código que vemos a continuación.

{% highlight HTML %}
<img src="http://jorgeatgu.com/libro/ejemplos/images/iconos.svg#svgView(viewBox(0,32,32,32))" class="iconos-size">
{% endhighlight %}

El otro método que podemos utilizar es llamando al ID que hemos asignado a cada uno de los iconos.

{% highlight HTML %}
<img src="http://jorgeatgu.com/libro/ejemplos/images/iconos.svg#codepen-view" class="iconos-size">
{% endhighlight %}

### Llamada desde el CSS

Ahora vamos a llamar a los iconos desde el **CSS**. Al igual que con el HTML vamos podemos utilizar los dos métodos.

El primer método a través de una clase en **CSS** es igual que el que hemos utilizado en el **HTML** a través de la `svgView`

{% highlight CSS %}
.view {
background-image: url('http://jorgeatgu.com/libro/ejemplos/images/iconos.svg#svgView(viewBox(0,0,32,32))');
}
{% endhighlight %}

El segundo método también es igual que el que hemos utilizado en el **HTML** a través del ID que hemos asignado en el **SVG**.

{% highlight CSS %}
.view-dos {
background-image: url('http://jorgeatgu.com/libro/ejemplos/images/iconos.svg#codepen-view');
}
{% endhighlight %}


### SOPORTE

Ahora viene la peor parte, y esta vez nuestro amigo IE soporta este método en todas sus variantes.

Soporte a través del **HTML**

Soportado en Chrome, Firefox, Safari, Opera, iOS 8 e IE9+. Android Browser es el único que carece de soporte, en cambio Firefox for Android y Chrome for Android si que dan soporte.

A través del **CSS**

Solamente soportado en Firefox e I9+.

La demo en mi web: [DEMO](jorgeatgu.com/libro/ejemplos/fragments-iconos.html)

Y en **CodePen**:

{% codepen rqKBg jorgeatgu [result] [400] %}

