---
title: Exportar SVG
author: Jorge Aznar
layout: post
permalink: /exportar-svg/
comments: true
dsq_thread_id:
  - 2098763529
tags:
  - Adobe Illustrator
  - SVG
---
A la hora de exportar **SVG** con **Adobe Illustrator** tenemos varias opciones para elegir, anteriormente había recomendado dejar por defecto todos los valores hasta que el otro día me encontré con este artículo <a href="http://creativedroplets.com/export-svg-for-the-web-with-illustrator-cc/" target="_blank">Export SVG for the web with Illustrator CC</a> de <a href="http://creativedroplets.com/michael-chaize/" target="_blank">Michaël Chaize</a>, en el cual nos dan una serie de recomendaciones a la hora de exportar **SVG** con **Adobe Illustrator**, aunque se centra en la última versión de **Illustrator **estas recomendaciones se pueden aplicar sin problemas en otras versiones de Illustrator**. En este post solo me voy a centrar en el tema de los decimales.

<!--more-->


### DECIMALES


Por defecto en el menú de Illustrator **esta opción tiene un valor de 3**, esto significa que a la hora de crear las coordenadas de los diferentes elementos estas tendrán hasta 3 decimales &#8211; se pueden obtener hasta 7 decimales &#8211; **lo cual genera códigos bastante amplios** como este:

{% highlight HTML linenos %}
<path fill="#FFFFFF" d="M79.381,106.235c-0.506,0-0.821,0.274-0.821,0.996v1.082h-1.502v-0.981c0-1.615,0.809-2.539,2.366-2.539
				c1.561,0,2.366,0.922,2.366,2.539c0,3.319-3.447,4.459-3.145,6.234h3.002v1.441h-4.589v-1.239c0-2.974,3.146-3.464,3.146-6.378
				C80.203,106.48,79.886,106.235,79.381,106.235z"/>
{% endhighlight %}

Ahora multiplica este código por todos los elementos que tengas en tu archivo, obtendremos un SVG mas pesado, y a la hora de abrirlo en un editor nos encontraremos con una maraña de coordenadas.

Si a la hora de exportar cambiamos los tres decimales por tan solo un decimal podemos observar en el código inferior que **obtenemos archivos mas ligeros**, lo agradeceremos sobre todo a la hora de modificar el código del **SVG** y también **aliviaremos la carga de los usuarios** que accedan a nuestra web.

{% highlight HTML linenos %}
<path fill="#FFFFFF" d="M635.1,177.6c-0.8,0-1.4,0.5-1.4,1.7v1.8h-2.5v-1.6c0-2.7,1.4-4.2,4-4.2c2.6,0,4,1.5,4,4.2 c0,5.5-5.8,7.5-5.3,10.4h5v2.4h-7.7v-2.1c0-5,5.3-5.8,5.3-10.7C636.5,178,635.9,177.6,635.1,177.6z"/>
{% endhighlight %}

La calidad no se resiente si exportamos los **SVG** con un decimal en lugar de con tres decimales.

En esta imagen podemos ver los **SVG** que ilustran mi web con tres decimales.

![svg tres decimales](http://jorgeatgu.com/blog/img/2013/07/tres-decimales-svg-400x456.png)


En esta otra imagen podemos ver los mismos **SVG** pero con un decimal.

![svg un decimal](http://jorgeatgu.com/blog/img/2013/07/un-decimal-svg.png)


La reducción se hace mas visible en los SVG que son mas grandes(*captain obvius*), pero si ademas de esto <a href="http://jorgeatgu.com/blog/optimizar-svg-illustrator/" target="_blank">optimizamos mas el SVG</a> su reducción sera mas considerable y la carga en la web sera menor.