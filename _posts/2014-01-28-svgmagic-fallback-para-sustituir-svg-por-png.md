---
title: SVGMagic fallback para sustituir SVG por PNG
author: Jorge Aznar
layout: post
permalink: /svgmagic-fallback-para-sustituir-svg-por-png/
comments: true
dsq_thread_id:
  - 2186450776
tags:
  - Diseño Web
  - jQuery
  - SVG
---
Vamos con <a href="http://svgmagic.bitlabs.nl/" target="_blank">SVGMagic</a> otro fallback para sustituir **SVG** por **PNG** en navegadores que no soportan **SVG**, los navegadores que no dan soporte a SVG son **Android 2.1, 2.2 y 2.3** y en esta fiesta no puede faltar nuestro *queridísimo* **Internet Explorer 8**.

<!--more-->

Esta vez el fallback emplea jQuery, lo mejor de <a href="http://svgmagic.bitlabs.nl/" target="_blank">SVGMagic</a> es que no necesitamos tener una carpeta extra con los archivos en formato PNG, el propio plugin se encarga de enviar y transformar los **SVG** en **PNG** y en caso de que el navegador no tenga soporte para mostrar **SVG** el plugin se encarga de servir los **PNG**. Excelente. También transforma los **SVG** que utilizamos como fondo en `background-image`, para ello hay que añadir un código extra que veremos a continuación.

## Instalación

La instalación es bastante sencilla, simplemente incluimos en el `header` el código que vemos a continuación.

{% highlight javascript linenos %}<script src="SVGMagic.min.js"></script>
<script>
    $(document).ready(function(){
        $('img').svgmagic();
    });
</script>{% endhighlight %}

Si utilizamos SVG en nuestros `background-image` añadimos lo siguiente.

{% highlight javascript linenos %}<script src="SVGMagic.min.js"></script>
<script>
    $(document).ready(function(){
        $('.bgimage').svgmagic({
            backgroundimage: true
        });
    });
</script>{% endhighlight %}

<a href="http://svgmagic.bitlabs.nl/demo.html" target="_blank">La demo de SVGMagic</a>

<a href="https://github.com/dirkgroenen/SVGMagic" target="_blank">El repositorio en GitHub</a>