---
title: Fildrop nueva version de SVG Filters
author: Jorge Aznar
layout: post
permalink: /fildrop-svg-filter-effects/
comments: true
tags:
  - SVG
  - Filters
  - Gulp
---

Después de unas cuantas semanas trabajando en la nueva versión de [SVG-Filter](http://jorgeatgu.github.io/svg-filters/) ya por fin esta disponible.

<!--more-->

Además de cambiar el nombre a Fildrop. En esta nueva version he añadido la posibilidad de modificar en tiempo real los valores de algunos filtros a través de diferentes sliders. Todos aquellos filtros en los que el botón tiene un icono con forma de rueda pueden ser modificados y ver los efectos al instante sobre la fotografía que hace de ejemplo o sobre la fotografía que hayas subido mediante la opción de drag&drop.

En esta version además de modificar los valores de los filtros también puedes copiar al portapapeles el código del filtro con los valores modificados. Así puedes llevartelo donde quieras.

También puedes descargarte el CSS y SVG para poder usarlo donde quieras. Lo que tienes que hacer es añadir el archivo ```filters.css``` a tu proyecto

{% highlight HTML %}
<link rel="stylesheet" href="path/to/filter.css">
{% endhighlight %}

También tienes que añadir el archivo ```filters.svg```a tu proyecto dependiendo de su ubicación deberás modificar la ruta de los filtros en el CSS.

{% highlight HTML %}
.saturate {
    -webkit-filter: url("tu/ruta/filters.svg##saturate");
            filter: url("tu/ruta/filters.svg##saturate");
}
{% endhighlight %}

Otra opción es pegar directamente todo el código de ```filters.svg``` en tu HTML y así no tener que modificar el archivo CSS. Mucho cuidado que a Firefox este método no le gusta.

Muchas gracias a [Lionel](https://twitter.com/elrumordelaluz) y [Kseso](https://twitter.com/kseso) por el feedback :)


<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.github.io/svg-filters/">FILDROP!</a>
</button>



