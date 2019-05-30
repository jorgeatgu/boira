---
title: Fallback en JavaScript para SVG inline
author: Jorge Aznar
layout: post
permalink: /fallback-javascript-svg-inline/
comments: true
tags:
  - SVG
  - Fallback
  - Javascript
---

Aunque **SVG** tiene un soporte bastante amplio, **Android 2.3+ e IE9+**. Si tienes que dar soporte a estos navegadores y quieres seguir usando todo el potencial de **SVG** [Chris Coyier](https://twitter.com/chriscoyier/){:target="_blank"} ha creado un pequeño script en **JavaScript**.

<!--more-->

Cuando el navegador no soporta **SVG** el script añade un ``<span>`` y a este se le añade una clase que contiene un ``background-image`` con la misma imagen en formato **PNG**. Como veis es bastante simple y una solución bastante limpia.

A continuación el pen que ha creado **Chris Coyier** en **CodePen**

{% codepen qEmpMx chriscoyier [result] [400] %}

Y como **Chris Coyier** añade el fallback a un **SVG** que se ha creado a través de la etiqueta ``use`` he modificado un poco el código para que el fallback se aplique sobre un **SVG** *a pelo*.

{% codepen LEydVY jorgeatgu [result] [400] %}

En el tweet que ha publicado Chris Coyier podéis ver en la imagen que el fallback funciona perfectamente sobre Internet Explorer 8 en Windows XP

{% tweet 557605362543886337  %}

Recordar que existen tras soluciones de la que he hablado anteriormente en el blog para dar soporte a **SVG** en navegadores antiguos como [SVGeezy](http://jorgeatgu.com/blog/svgeezy-plugin-javascript-para-sustituir-svg-por-png/){:target="_blank"} y [SVGMagic](http://jorgeatgu.com/blog/svgmagic-fallback-para-sustituir-svg-por-png/){:target="_blank"}.