---
title: Animation SMIL SVG
author: Jorge Aznar
layout: post
permalink: /animation-smil-svg/
comments: true
dsq_thread_id:
  - 2131342185
tags:
  - SMIL
  - SVG
---
**SMIL** es el acrónimo de *Synchronized Multimedia Integration Language*, **SMIL es un estándar de la W3C desde 1998**, es uno de los métodos que tenemos disponibles para animar nuestros archivos **SVG**.

<!--more-->

### SOPORTE

Antes de seguir hablando sobre **SMIL** lo mejor es saber que navegadores a día de hoy dan soporte a **SMIL**.

![soporte navegadores smil][1]

Mas o menos lo esperado, así que **lo mejor sera tomárselo con un poco de humor.**

![nulo soporte ie][2]

### ANIMANDO ELEMENTOS SVG

SVG es compatible con los siguientes elementos de animación que se definen en la especificación de SMIL.

*   animate<br/>
*   set<br/>
*   animateMotion<br/>
*   animateColor<br/>

**Mucho cuidado con utilizar `animateColor` ya que dejara de estar disponible en SVG 2.**

**SVG** también incluye las siguientes extensiones compatibles con **SMIL**.

*   animateTransform<br/>
*   path<br/>
*   mpath<br/>
*   keyPoints<br/>
*   rotate<br/>

### EJEMPLOS

A continuación podéis ver un par de animaciones SMIL que he hecho.

**SVG ICONS 32&#038;64 px**


{% codepen fmoex jorgeatgu [result] [400] %}



**iPhone 5 &#8211; iOS 7 Animate SVG**

{% codepen pvzlj jorgeatgu [result] [400] %}



**City &#038; Clock &#8211; SVG**

{% codepen qvzLm jorgeatgu [result] [400] %}


Mas adelante intentare explicar detalladamente el código de cada una de estas animaciones.

### Enlaces de interés

<a href="http://www.w3.org/TR/SVG/animate.html" target="_blank">W3C SVG ANIMATE</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL" target="_blank">Mozilla Developers SVG animation with SMIL</a>

 [1]: http://jorgeatgu.com/blog/img/2013/11/SVG-SMIL-ANIMATION.png
 [2]: http://jorgeatgu.com/blog/img/2013/11/troll-ie.jpg