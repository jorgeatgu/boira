---
title: El texto en SVG
author: Jorge Aznar
layout: post
permalink: /el-texto-en-svg/
comments: true
dsq_thread_id:
  - 2318314819
tags:
  - SVG
---
Vamos a ver como podemos añadir texto en nuestros **SVG**.

<!--more-->

Antes de empezar solamente recordar que para utilizar fuentes especificas hay que recurrir a **@font-face** o a servicios como **Google Web Fonts** o **Typekit**. Para los ejemplos de este post voy a utilizar **Verdana** que pertenece a la lista de *web safe fonts*.

## Text

Para añadir texto en SVG tenemos a nuestra disposición la etiqueta `text`. El texto lo posicionaremos con las coordenadas `x` para la horizontal y con `y` para la vertical. También podemos rotar el texto con el atributo `rotate`. Añadir espacio entre letras con `textLength` y ajustar este espacio con `lengthAdjust`.

Vamos a ver un ejemplo con todos estos atributos.

{% highlight HTML linenos %}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="1200" height="800" viewBox="0 0 1200 800">

  <text x="50" y="20"
        font-family="Verdana"
        font-size="25"
        fill="red">
    Texto sin nada.
  </text>

  <text x="50" y="60"
        font-family="Verdana"
        font-size="25"
        fill="red"
        rotate="25">
    Texto con rotate(25)
  </text>

  <text x="50" y="100"
        font-family="Verdana"
        font-size="25"
        fill="red"
        textLength="1000">
    Texto con textLength(1000)
  </text>

  <text x="50" y="140"
        font-family="Verdana"
        font-size="25"
        fill="red"
        textLength="1000"
        lengthAdjust="spacingAndGlyphs">
    Texto con textLength(1000) y lengthAdjust(spacingAndGlyphs)
  </text>
    <text x="50" y="180"
        font-family="Verdana"
        font-size="25"
        fill="red"
        textLength="1000"
        lengthAdjust="spacing">
    Texto con textLength(1000) y lengthAdjust(spacing)
  </text>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/texto/texto.html">VER EJEMPLO!</a>
</button>

La etiqueta `text` acepta mas atributos, algunos os sonaran de **CSS **: `alignment-baseline, baseline-shift, clip, clip-path, clip-rule, color, color-interpolation, color-interpolation-filters, color-profile, color-rendering, cursor, direction, display, dominant-baseline, enable-background, fill, fill-opacity, fill-rule, filter, flood-color, flood-opacity, font-family, font-size, font-size-adjust, font-stretch, font-style, font-variant, font-weight, glyph-orientation-horizontal, glyph-orientation-vertical, image-rendering, kerning, letter-spacing, lighting-color, marker-end, marker-mid, marker-start, mask, opacity, overflow, pointer-events, shape-rendering, stop-color, stop-opacity, stroke, stroke-dasharray, stroke-dashoffset, stroke-linecap, stroke-linejoin, stroke-miterlimit, stroke-opacity, stroke-width, text-anchor, text-decoration, text-rendering, unicode-bidi, visibility, word-spacing, writing-mode.`

Si queréis ver detalladamente lo que hace cada uno de ellos podéis hacerlo en <a href="http://www.w3.org/TR/SVG/text.html#TextElement" target="_blank">este link de la W3C</a>, también <a href="http://tutorials.jenkov.com/svg/text-element.html" target="_blank">en este de Jenkov</a>.

## Tspan

La etiqueta `tspan` la podemos utilizar para posicionar absolutamente o relativamente los caracteres que incluyamos dentro de la etiqueta. También para resaltar solamente un trozo de texto, cambiarlo de color o rotarlo.

Vamos a ver un ejemplo con cada una de las posibilidades.

{% highlight HTML linenos %}<text x="50" y="50"
        font-family="Verdana"
        font-size="25"
        fill="red">
    Este texto es normal.

    <tspan font-size="40" fill="olive">
    Este texto va en un tspan
  </tspan>
  </text>

  <text x="50" y="200"
        font-family="Verdana"
        font-size="25"
        fill="red">
    Este texto es normal.

    <tspan fill="blue" dx="-200" dy="50">
    Este texto va en un tspan
  </tspan>
  </text>

  <text x="50" y="500"
        font-family="Verdana"
        font-size="25"
        fill="red">
    Este texto es normal.

    <tspan fill="blue" x="30 60 100 200 250 350 400 500 550" y="550">
    Esto tspan
  </tspan>
  </text>{% endhighlight %}

En el primero cambió el color del texto y aumento el tamaño de la letra.
En el segundo modifico la posición de las coordeandas X e Y.
En el tercero modifico la posición de cada uno de los caracteres.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/texto/tspan.html">VER EJEMPLO!</a>
</div>

## textPath

Con la etiqueta `textPath` logramos que un texto fluya a lo largo del`path` que nosotros dibujemos. Es lo mismo que vimos en el post sobre <a href="http://jorgeatgu.com/blog/animaciones-con-animatemotion-en-svg/" target="_blank">animaciones con animateMotion</a>. También tenemos disponible el atributo `startoffset` para indicarle en que parte del `path` queremos que empiece a fluir el texto, por defecto viene a 0%.

Vamos a ver un par de ejemplos

{% highlight HTML linenos %}<defs>
    <path id="ejemplo"
          d="M197,167.5c0,0,433-285.5,433,0"/>
  </defs>

  <text font-family="Verdana" font-size="30" fill="red">
    <textPath xlink:href="#ejemplo">
      Este texto va dentro de un textPath
    </textPath>
  </text>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/texto/textpath.html">VER EJEMPLO!</a>
</div>

{% highlight HTML linenos %}<defs>
    <path id="ejemplo" d="M197,167.5c0,0,433-285.5,433,0"/>
  </defs>

  <text font-family="Verdana" font-size="15" fill="red">
    <textPath xlink:href="#ejemplo" startOffset="20%">
      Este texto va dentro de un textPath con startOffset(20%)
    </textPath>
  </text>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/texto/startoffset.html">VER EJEMPLO!</a>
</div>

## Tref

Por último vamos a ver el elemento `tref`, el cúal solamente esta disponible en Safari. Con este elemento lo que conseguimos es llamar a un texto que tenemos referenciado dentro de la etiqueta `defs`.

Os dejo con el ejemplo que nos proporcionan en la W3C.

{% highlight HTML linenos %}<defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>
  <desc>Example tref01 - inline vs reference text content</desc>

  <text x="100" y="100" font-size="45" fill="blue" >
    Inline character data
  </text>
  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://www.w3.org/TR/SVG/text.html#TRefElement">VER EJEMPLO!</a>
</div>