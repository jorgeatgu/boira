---
title: SVG CSS layout properties en WebKit Nightly
author: Jorge Aznar
layout: post
permalink: /svg-css-layout-properties-en-webkit-nightly/
comments: true
dsq_thread_id:
  - 2949164641
tags:
  - CSS3
  - SVG
---
La semana pasada se actualizó WebKit Nightly con una propiedad bastante interesante para modificar SVG a través de CSS.

<!--more-->

Lo primero es tener actualizado WebKit Nightly, lo podéis descargar desde este [enlace][1].

Ahora vamos a poder modificar a través de CSS los siguientes atributos de SVG como **x, y, cx, cy, r, rx, ry, width y height.**

En el ejemplo que vamos a ver a continuación tenemos cuatro rectángulos en un SVG

{% highlight HTML linenos %}<rect id="uno" x="50" y="100" width="75" height="75" fill="crimson" stroke="darkorange" stroke-width="5" rx="2"/>
<rect id="dos" x="50" y="200" width="75" height="75" fill="crimson" stroke="darkorange" stroke-width="5"/>
<rect id="tres" x="50" y="300" width="75" height="75" fill="crimson" stroke="darkorange" stroke-width="5"/>
<rect id="cuatro" x="50" y="400" width="75" height="75" fill="crimson" stroke="darkorange" stroke-width="5"/>{% endhighlight %}

A través de CSS vamos a modificar los bordes redondeados del primer rectángulo

{% highlight css linenos %}#uno:hover {
    rx: 250px;
}{% endhighlight %}

Al segundo rectángulo le vamos a modificar el width y el height

{% highlight css linenos %}#dos:hover {
    width: 250px;
    height: 15px;
}{% endhighlight %}

Al tercer rectángulo le vamos a modificar su posición en la coordenada vertical

{% highlight css linenos %}#tres:hover {
    y: 600px;
}{% endhighlight %}

Al cuarto rectángulo le vamos a modificar su posición en la coordenada horizontal

{% highlight css linenos %}#cuatro:hover {
    x: 250px;
}{% endhighlight %}

Por último vamos a añadir la duración de la transición y su *timing*

{% highlight css linenos %}rect {
  transition-duration: 2s;
  transition-timing-function:cubic-bezier(.17,.67,.83,.67);
}{% endhighlight %}

A continuación os dejo un vídeo con todos los efectos del ejemplo

<iframe src="http://player.vimeo.com/video/104089554" width="500" height="451" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/104089554">WebKit Layout Properties</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Por último os dejo la demo que publicó Adobe Web Platform en CodePen

{% codepen DdLvi adobe [result] [400] %}


 [1]: https://www.webkit.org/