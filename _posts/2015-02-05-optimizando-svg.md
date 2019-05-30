---
title: Optimizando SVG a mano
author: Jorge Aznar
layout: post
permalink: /optimizando-svg-a-mano/
comments: true
tags:
  - SVG
  - Optimizando
  - Sublime Text
---

Hace no mucho alguien me preguntaba que quería aprender a optimizar **SVG** a mano, y justamente esta semana he estado preparando un set de iconos para un proyecto web, y lo que me he encontrado es un montón de iconos guardados como **SVG** desde Illustrator CC y ya está, mal hecho. En nuestras manos esta dejar más fino el código, entenderlo y todo ello acompañado del extra de aligerar la carga de nuestros proyectos.

<!--more-->

Para optimizar un **SVG** lo fundamental es conocer que elementos tenemos a nuestra disposición para así poder mejorar el código que generan programas como Adobe Illustrator, Sketch, Affinity o Inkscape. Y un poco de lógica. Y un documento **HMTL5** para ir viendo lo que vamos haciendo, también he utilizado [Ghostlab](http://vanamco.com/ghostlab/){:target="_blank"} para ir refrescando cada vez que guardo los cambios.

Así que aquí tenéis un vídeo que dura 11 minutos donde podeis ver como optimizo un par de iconos.

<iframe src="http://player.vimeo.com/video/118855014" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/118855014">Optimizando SVG</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a>


El código antes de optimizar el icon-list

{% highlight HTML %}
<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="150px" height="100px" viewBox="0 0 150 100" enable-background="new 0 0 150 100" xml:space="preserve">
<g>
	<path fill="#010202" d="M34.8,27.9H23.1c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6h11.7c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V29.9c0-0.5-0.2-1-0.6-1.4
		C35.7,28.1,35.3,27.9,34.8,27.9z"/>
	<path fill="#010202" d="M34.8,74.5H23.1c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6h11.7c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V76.5c0-0.5-0.2-1-0.6-1.4
		C35.7,74.7,35.3,74.5,34.8,74.5z"/>
	<path fill="#010202" d="M34.8,51.2H23.1c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6h11.7c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V53.2c0-0.5-0.2-1-0.6-1.4
		C35.7,51.4,35.3,51.2,34.8,51.2z"/>
	<path fill="#010202" d="M34.8,4.6H23.1c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6h11.7c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V6.6c0-0.5-0.2-1-0.6-1.4C35.7,4.8,35.3,4.6,34.8,4.6z"
		/>
	<path fill="#010202" d="M128,74.5H46.4c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6H128c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V76.5c0-0.5-0.2-1-0.6-1.4C129,74.7,128.5,74.5,128,74.5
		z"/>
	<path fill="#010202" d="M128,51.2H46.4c-0.5,0-1,0.2-1.4,0.6s-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4c0.4,0.4,0.8,0.6,1.4,0.6
		H128c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V53.2c0-0.5-0.2-1-0.6-1.4C129,51.4,128.5,51.2,128,51.2z"/>
	<path fill="#010202" d="M129.3,5.2c-0.4-0.4-0.8-0.6-1.4-0.6H46.4c-0.5,0-1,0.2-1.4,0.6S44.5,6,44.5,6.6v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6H128c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V6.6C129.9,6,129.7,5.6,129.3,5.2z"/>
	<path fill="#010202" d="M128,27.9H46.4c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.8-0.6,1.4v11.7c0,0.5,0.2,1,0.6,1.4
		c0.4,0.4,0.8,0.6,1.4,0.6H128c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.8,0.6-1.4V29.9c0-0.5-0.2-1-0.6-1.4C129,28.1,128.5,27.9,128,27.9
		z"/>
</g>
</svg>

{% endhighlight %}


El código después de optimizar el icon-list
{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150px" height="100px" viewBox="0 0 150 100">
	<defs>
		<g id="first-line">
			<rect x="21" y="4" width="16" height="16" fill="#000" rx="2"/>
			<rect x="45" y="4" width="85" height="16" fill="#000" rx="2"/>
		</g>
	</defs>
	<use xlink:href="#first-line"/>
	<use xlink:href="#first-line" y="23"/>
	<use xlink:href="#first-line" y="46"/>
	<use xlink:href="#first-line" y="69"/>
</svg>
{% endhighlight %}


Mucho mejor ¿no? :)


