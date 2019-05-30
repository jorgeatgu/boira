---
title: Animaciones SVG con animate
author: Jorge Aznar
layout: post
permalink: /animaciones-svg-con-animate/
comments: true
dsq_thread_id:
  - 2266235532
tags:
  - SMIL
  - SVG
---
Voy a compartir la chuleta que me cree hace no mucho con varios de los `attributeName` que podemos animar con SMIL en SVG a través de la etiqueta `animate`. No están todos ya que la etiqueta tiene muchas posibilidades y no todas funcionan en todos los navegadores, para empezar **ninguna funciona en Internet Explorer** ya que Microsoft no da soporte a SMIL.

<!--more-->

He incluido las version `from="" to=""` y `values=""`, soy partidario de utilizar `values=""` en la mayoría de los casos ya que para mi ofrece muchas mas posibilidades.

He preferido no añadir los atributos `keyTimes`, `keySplines` y `calcMode` ya que no siempre se usan.

{% highlight HTML linenos %}<!-- TRANSLATE VERSION FROM TO-->
<animateTransform attributeName="transform" type="translate" begin="" dur="" from="" to="" fill=""/>

<!-- TRANSLATE VERSION VALUE-->
<animateTransform attributeName="transform" type="translate" begin="" dur="" values="" fill=""/>

<!-- ROTACIÓN  VERSION FROM TO-->
<animateTransform attributeName="transform" type="rotate" from="" to="" dur="" begin="" fill=""/>

<!-- ROTACIÓN  VERSION FROM TO-->
<animateTransform attributeName="transform" type="rotate" values="" dur="" begin="" fill=""/>

<!-- ESCALA  VERSION FROM TO-->
<animateTransform attributeName="transform" type="scale" from="" to="" dur="" begin="" fill=""/>

<!-- ESCALA  VERSION FROM TO-->
<animateTransform attributeName="transform" type="scale" values="" dur="" begin="" fill=""/>

<!-- SKEWX  VERSION FROM TO-->
<animateTransform attributeName="transform" type="skewX" from="" to="" dur="" begin="" fill=""/>

<!-- SKEWX  VERSION FROM TO-->
<animateTransform attributeName="transform" type="skewX" values="" dur="" begin="" fill=""/>

<!-- SKEWY  VERSION FROM TO-->
<animateTransform attributeName="transform" type="skewY" from="" to="" dur="" begin="" fill=""/>

<!-- SKEWY  VERSION FROM TO-->
<animateTransform attributeName="transform" type="skewY" values="" dur="" begin="" fill=""/>

<!-- CAMBIAR COLOR FONDO -->
<animate attributeName="fill" dur="" values="" begin=""/>

<!-- CAMBIAR COLOR LÍNEA -->
<animate attributeName="stroke" dur="" values="" begin="" fill=""/>

<!-- OPACIDAD COLOR FONDO -->
<animate attributeName="fill-opacity" attributeType="CSS" from="" to="" begin="" dur="" fill=""/>

<!-- OPACIDAD LÍNEA -->
<animate attributeName="stroke-opacity" attributeType="CSS" from="" to="" begin="" dur="" fill=""/>

<!-- COORDENADA X1 Y1 --- VERSION FROM TO-->
<animate attributeName="x1" from="" to="" begin="" dur="" fill=""/>
<animate attributeName="y1" from="" to="" begin="" dur="" fill=""/>

<!-- COORDENADA X1 Y1 --- VERSION VALUES-->
<animate attributeName="x1" values="" begin="" dur="" fill=""/>
<animate attributeName="y1" values="" begin="" dur="" fill=""/>

<!-- COORDENADA X Y --- VERSION FROM TO-->
<animate attributeName="x" from="" to="" begin="" dur="" fill=""/>
<animate attributeName="y" from="" to="" begin="" dur="" fill=""/>

<!-- COORDENADA X Y --- VERSION VALUES-->
<animate attributeName="x" values="" begin="" dur="" fill=""/>
<animate attributeName="y" values="" begin="" dur="" fill=""/>

<!-- WIDTH HEIGHT --- VERSION FROM TO-->
<animate attributeName="width" from="" to="" begin="" dur="" fill=""/>
<animate attributeName="height" from="" to="" begin="" dur="" fill=""/>

<!-- WIDTH HEIGHT --- VERSION VALUES-->
<animate attributeName="width" from="" to="" begin="" dur="" fill=""/>
<animate attributeName="height" from="" to="" begin="" dur="" fill=""/>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/doc/animateElement.zip">DOWNLOAD!</a>
</button>

<a href="http://www.w3.org/TR/SVG/animate.html#AnimateElement" target="_blank">Atributos animateElement</a>

<a href="http://svg-whiz.com/svg/colorKeywords.svg" target="_blank">ColorsKeywords</a>