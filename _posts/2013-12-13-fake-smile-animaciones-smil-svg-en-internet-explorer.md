---
title: Animaciones SMIL SVG en Internet Explorer con Fake Smile
author: Jorge Aznar
layout: post
permalink: /fake-smile-animaciones-smil-svg-en-internet-explorer/
comments: true
dsq_thread_id:
  - 2143248167
tags:
  - Javascript
  - SMIL
  - SVG
---
Fake Smile se creo en 2008, básicamente es un *fallback *que da respaldo a las animaciones realizadas con **SMIL **en Internet Explorer.

<!--more-->

![svg smil caniuse][1]

Como vemos en la imagen no todos los navegadores soportan **SMIL**, en el caso de **Internet Explorer ninguna de sus versiones** ya sean pasadas o futuras soportan **SMIL**, y en <a href="http://tavmjong.free.fr/SVG/ANIMATION/" target="_blank">palabras de Taj Jamovah</a> uno de los desarrolladores de <a href="http://inkscape.org/es/" target="_blank">Inkscape</a>, SMIL nunca tendrá soporte en IE.

> Not natively supported by IE (and never will be)

El soporte que nos brinda Fake Smile **es parcial**, en esta página <a href="http://leunen.me/fakesmile/status.html" target="_blank">fake smile </a>podemos ver que atributos tienen soporte y cuales no.

En <a href="http://bazaar.launchpad.net/~smilteam/smil/MAIN/revision/52?start_revid=52" target="_blank">Launchapd </a>podemos estar al tanto de las nuevas versiones, la última versión publicada de Fake Smile es de Octubre de 2012.

La implementación es bastante sencilla, como podemos ver en el ejemplo simplemente añadimos el código entre las etiquetas SVG.

{% highlight HTML linenos %}
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="550" height="150" viewBox="0 0 150 40" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace" smiling="fake"><script/>

<script type="text/ecmascript" xlink:href="smil.user.js"/>


</svg>
{% endhighlight %}

Y por último, una vez implementado es primordial comprobar como van a ver las animaciones los usuarios de Internet Explorer, en algunos casos va a ser preferible no utilizar el *fallback* como en el ejemplo que os pongo a continuación

<iframe src="http://player.vimeo.com/video/81697134" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/81697134">Fake Smile en IE9</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

 [1]: http://jorgeatgu.com/blog/img/2013/11/SVG-SMIL-ANIMATION.png