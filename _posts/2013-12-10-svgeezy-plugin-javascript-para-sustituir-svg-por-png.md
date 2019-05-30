---
title: SVGeezy plugin JavaScript para sustituir SVG por PNG
author: Jorge Aznar
layout: post
permalink: /svgeezy-plugin-javascript-para-sustituir-svg-por-png/
comments: true
dsq_thread_id:
  - 2112394753
tags:
  - Javascript
  - SVG
---
<a href="http://benhowdle.im/svgeezy/" target="_blank">SVGeezzy </a>es un ***fallback*** para dar soporte a los navegadores que no muestran las imágenes en formato **SVG**, los cuales son IE8 y Android Browser 2.1, 2.2 y 2.3.

<!--more-->

La instalación es bastante sencilla, simplemente tendremos que añadir al **HTML** el siguiente código

{% highlight HTML linenos %}
<script src="path/to/svgeezy.js"></script>
        <script>
            svgeezy.init(false, 'png');
        </script>
{% endhighlight %}

Y por supuesto en la misma carpeta de imágenes tendremos que tener los archivos en formato **SVG **y con el mismo nombre la versión en PNG.

<a href="https://github.com/benhowdle89/svgeezy" target="_blank">SVGeezy en GitHub</a>