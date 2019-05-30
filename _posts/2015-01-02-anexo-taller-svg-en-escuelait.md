---
title: Anexo al taller de SVG en EscuelaiT
author: Jorge Aznar
layout: post
permalink: /anexo-taller-svg-en-escuelait/
comments: true
tags:
  - Cursos
  - SVG
---

El fin de semana del 20 y 21 de diciembre estuve junto a [Wakkos](http://twitter.com/Wakkos){:target="_blank"} dando un taller sobre **SVG** en [EscuelaiT](http://escuelait.com){:target="_blank"}. En el taller surgieron algunas preguntas que se quedaron en el aire. En este post voy a solventar esas dudas y preguntas.

<!--more-->

## Estilos a través de XML

Una de las cosas que se quedo en el aire(no funcionaba) era el dar estilos **CSS** llamando a la hoja de estilos a través de una etiqueta **XML**.

No hubo manera de que cogiera la hoja de estilos ya que estábamos trabajando en local. Si subimos a un servidor el **SVG** y el **CSS** los estilos se aplican.

Aquí el **SVG** y al principio la llamada al **CSS**.

{% highlight XML %}

<?xml-stylesheet type="text/css" href="style.css" ?>
<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" aria-labelledby="title desc">

        <title id="title">Estilos a través de la etiqueta XML</title>
        <desc id="desc">Aplicando una hoja de estilos externa a través de XML</desc>


		<g id="rectangulo">
			<rect x="10" y="10" width="50" height="50"/>
		</g>
		<g id="circulo">
			<circle r="30" cx="50" cy="100"/>
		</g>

		<g id="redondeado">
			<rect x="10" y="100" width="50" height="50" rx="5"/>
		</g>


</svg>

{% endhighlight %}

Aquí el **CSS**

{% highlight CSS %}
#rectangulo {
	fill: crimson;
	stroke: black;
}

#circulo {
	fill: beige;
	stroke: black;
}

#redondeado {
	fill: cyan;
	stroke: orange;
}
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/xmlstyle/stylesheet.svg">EJEMPLO!</a>
</button>

También he estado probando si esto funciona con un **SVG** al cuál hemos llamado desde una etiqueta ``use`` pero no pilla los estilos que le damos a través del CSS. He probado varios métodos sin éxito alguno.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/xmlstyle/index-style.html">EJEMPLO!</a>
</button>

## Aplicando color a un SVG

En el taller también surgió la duda de si podíamos aplicar **RGBA** a un **SVG**. En principio estaba apuntado como una novedad en **SVG2** pero el otro día charlando con [Nando Muñoz en Twitter](https://twitter.com/silencespainter/status/549974843169701889){:target="_blank"} decidí hacer unas pruebas y resulto que si que podemos determinar el color de ``fill`` o ``stroke`` a través de **RGBA** y **HSL**. También funciona en IE9!!!

Aquí un ejemplo dando color a un ``fill`` y ``stroke`` con RGB, RGBA, HSL, HEXA y KEYWORD.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/xmlstyle/index-color.html">EJEMPLO!</a>
</button>

Me queda por comentar [SVGInjector](https://github.com/iconic/SVGInjector){:target="_blank"} que me paso un alumno del taller, pero eso lo veremos en otro artículo.

Muchas gracias a todos los alumnos del Taller de SVG!

