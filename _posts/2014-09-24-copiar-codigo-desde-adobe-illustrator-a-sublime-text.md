---
title: Copiar código desde Adobe Illustrator a Sublime Text
author: Jorge Aznar
layout: post
permalink: /copiar-codigo-desde-adobe-illustrator-a-sublime-text/
gplus_authorship_disabled:
  - 1
comments: true
dsq_thread_id:
  - 3048816826
tags:
  - Adobe Illustrator
  - SVG
---
Un pequeño tip de **Adobe Illustrator** que yo por lo menos hasta ahora desconocía por completo.

<!--more-->

Suelo leerme todos los *changelog* de los programas que utilizo pero esta función se me había pasado por completo.

Ayer mientras leía [las notas que publico Luke W][1] sobre la charla de **Chris Coyier** sobre **SVG** me fije en un comentario que decía que desde Adobe Illustrator podíamos copiar el código y llevarlo directamente a nuestro editor de código.

El método es sencillo seleccionamos todos los elementos de nuestro SVG. Ahora nos vamos al menú edición y le damos a copiar. Ahora nos vamos a Sublime Text o nuestro editor de código y le damos a pegar. Ya tenemos todo el código sin tener que guardar el archivo en formato SVG.

Aquí un pequeño vídeo resumen

<iframe src="http://player.vimeo.com/video/107021194" width="500" height="286" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/107021194">Desde Illustrator a Sublime Text</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


El código que se genera al copiar y pegar no es el mismo que obtenemos si guardamos directamente desde **Adobe Illustrator** como **SVG**. Nos añade un par de etiquetas `defs` vacías. Y el código basura que añade al principio se ve recortado.

### Código tras copiar y pegar desde Adobe Illustrator

{% highlight HTML linenos %}
!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<defs>
</defs>
<circle cx="16" cy="16" r="16"/>
<polygon fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" points="16.2,6.2 6.2,12.8 16.2,19.6 26.4,12.8 "/>
<polygon fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" points="16.2,12.4 6.2,18.9 16.2,25.7 26.4,18.9
	"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="16.2" y1="6.2" x2="16.2" y2="13.3"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="16.2" y1="19.6" x2="16.2" y2="24.8"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="6.2" y1="12.8" x2="6.2" y2="18.6"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="26.4" y1="12.8" x2="26.4" y2="18.6"/>
</svg>
{% endhighlight %}

### Código tras guardar como SVG desde Adobe Illustrator

{% highlight HTML linenos %}
!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<defs>
</defs>
<circle cx="16" cy="16" r="16"/>
<polygon fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" points="16.2,6.2 6.2,12.8 16.2,19.6 26.4,12.8 "/>
<polygon fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" points="16.2,12.4 6.2,18.9 16.2,25.7 26.4,18.9
	"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="16.2" y1="6.2" x2="16.2" y2="13.3"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="16.2" y1="19.6" x2="16.2" y2="24.8"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="6.2" y1="12.8" x2="6.2" y2="18.6"/>
<line fill="none" stroke="#FFFFFF" stroke-width="2" x1="26.4" y1="12.8" x2="26.4" y2="18.6"/>
</svg>
{% endhighlight %}

Por cierto al copiar y pegar exporta el **SVG** con las propiedades que tengamos por defecto en el menú de exportar **SVG**. Es decir, si por defecto tenemos que exporte con 3 decimales hará lo mismo a la hora de copiar y pegar.

Como bien me apunta [Lionel desde Twitter][2], si solo seleccionamos y copiamos una parte del **SVG**, el `viewBox, width y height` harán referencia a esa parte y no a la del documento entero.

Por ejemplo si solo seleccionamos la parte superior del logo de CodePen y lo pegamos en Sublime Text el código que obtenemos será el siguiente.

{% highlight HTML linenos %}
!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="22.2px" height="15.4px" viewBox="0 0 22.2 15.4" enable-background="new 0 0 22.2 15.4"
	 xml:space="preserve">
<defs>
</defs>
<polygon fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" points="11,1 1,7.6 11,14.4 21.2,7.6 "/>
</svg>
{% endhighlight %}

Como podemos observar el `viewBox, width y height` su tamaño es mas pequeño que el que obtenemos al copiar todo el logo.

El viewBox, height y width copiando todo el logo

{% highlight HTML linenos %}width="32px" height="32px" viewBox="0 0 32 32"{% endhighlight %}

El viewBox, height y width copiando una parte del logo

{% highlight HTML linenos %}width="22.2px" height="15.4px" viewBox="0 0 22.2 15.4"{% endhighlight %}

*Este método solo funciona con las versiones de Illustrator CC.*

 [1]: http://www.lukew.com/ff/entry.asp?1921
 [2]: https://twitter.com/elrumordelaluz/status/514716225386344448