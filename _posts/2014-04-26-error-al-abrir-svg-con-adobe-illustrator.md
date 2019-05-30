---
title: Error al abrir SVG con Adobe Illustrator
author: Jorge Aznar
layout: post
permalink: /error-al-abrir-svg-con-adobe-illustrator/
comments: true
dsq_thread_id:
  - 2640610315
tags:
  - Adobe Illustrator
  - SVG
---
![error svg](http://jorgeatgu.com/blog/img/2014/04/error-svg.png)

Hoy ha llegado una visita desde la vecina Teruel con esta búsqueda. Así que vamos a ver que es lo que pasa cuando Illustrator nos muestra este mensaje.

<!--more-->

Este mensaje se origina al abrir un SVG que hemos o han estado estado manipulando(captain obvius), en uno de estos procesos hemos o han borrado alguna parte del código que necesita Adobe Illustrator para poder leer el código del SVG.

Para estos casos yo tengo un archivo con las etiquetas SVG que genera Adobe Illustrator CC al exportar un SVG, las medidas son las correspondientes a un archivo de 640&#215;480 pixeles. No os preocupeis por el tamaño ya que luego lo podemos modificar en las mesas de trabajo de Adobe Illustrator.

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px"
	width="640px" height="480px"
	viewBox="0 0 640 480"
	enable-background="new 0 0 640 480"
	xml:space="preserve">
{% endhighlight %}

Ahora lo que haremos será abrir en nuestro editor de código(en mi caso Sublime Text) el archivo que no podemos abrir con Illustrator, una vez abierto vamos a borrar la etiqueta de apertura y la vamos a sustituir por el código que tenemos en la parte superior. Recordad que no debe de quedar nada antes de la etiqueta de apertura de la etiqueta SVG, incluso podemos borrar el texto que añade el propio Illustrator al exportar un SVG.

Si el archivo nos sigue dando error lo mas probable es que alguna etiqueta este mal cerrada, así que vamos a tener que comprobar una a una todas las etiquetas de que abren y cierran.

Si aún así el archivo os sigue dando error podéis contactar conmigo a través de <a href="http://twitter.com/jorgeatgu" target="_blank">twitter</a> para ver si se puede arreglar el error.