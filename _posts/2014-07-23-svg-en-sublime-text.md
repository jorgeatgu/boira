---
title: SVG en Sublime Text
author: Jorge Aznar
layout: post
permalink: /svg-en-sublime-text/
comments: true
dsq_thread_id:
  - 2866118167
tags:
  - Sublime Text
  - SVG
---
Desde hace un tiempo vengo utilizando una serie de *snippets* a la hora de escribir SVG en Sublime Text.

<!--more-->

Para el que lo desconozca un *snippet* es un trozo de código que activamos con una palabra clave que nosotros hemos predefinido anteriormente.

{% highlight html linenos %}
<snippet>
	<content><![CDATA[<use xlink:href="#$1" x="$2" y="$3"/>]]></content>
	<description>SVG - DRY: use</description>
	<tabTrigger>use</tabTrigger>
	<scope>text.html, text.xml</scope>
</snippet>
{% endhighlight %}

El código que queremos que muestre lo incluímos dentro de `content![CDATA[ aquí tu código ]]/content`
Añadimos una descripción en `description`
El `tabTrigger` es la palabra clave que activará nuestro *snippet*, para ello también tendremos que darle al tabulador
Por último con el `scope` le decimos los archivos donde va actuar.

## SVG-Snippets

Bueno pues como tenía un montón de *snippets* creados para escribir SVG, decidí ayer crear unos cuantos mas(38 en total), cree un repositorio en GitHub y lo subí para que estuvieran disponibles a través del [package control][1] de Sublime Text.

Ahora vais a Sublime Text y en mac le dais a `comando+mayus+p` o en win `ctrl+mayus+p` os saldrá el *command palette* ahora tan solo hay que escribir y seleccionar Install Package, por último escribid SVG y os saldra SVG-Snippets le dais y ya está instalado.

Todas las palabras clave están en el repositorio de [SVG-Snippets en GitHub][2]

El funcionamiento es sencillo, escribimos la palabra clave, le damos al tabulador y saldrá el trozo de código correspondiente.

Si por ejemplo escribimos re y presionamos ctrl+barra espaciadora nos saldrá todos los *snippets* que contenga re y una pequeña descripción de cada *snippet*.

Si le vamos dando al tabulador nos irá llevando a las zonas que tenemos que rellenar, por ejemplo a la coordenada x, a la coordenada y, al width etc&#8230;

![svg-snippets][3]

Por último os dejo un vídeo utilizando el package

<iframe src="http://player.vimeo.com/video/101490820" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/101490820">SVG-Snippets</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

 [1]: https://sublime.wbond.net/installation "package control"
 [2]: https://github.com/jorgeatgu/SVG-Snippets
 [3]: http://jorgeatgu.com/blog/img/wordpress/svg-snippets.png