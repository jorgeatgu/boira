---
title: Animando SVG, desde SMIL a CSS3
author: Jorge Aznar
layout: post
permalink: /animando-svg-de-smil-a-css3/
comments: true
dsq_thread_id:
  - 2618900289
tags:
  - CodePen
  - CSS3
  - SMIL
  - SVG
---
El post es un pequeño relato de como pasar una animación que esta hecha con SMIL a CSS3. La cosa empezó la semana pasada con el siguiente tweet:

{% tweet 452481993901887488 %}

<!--more-->

Lo que pedía es que alguien me convenciera para utilizar animaciones CSS3 pero como nadie me respondió me puse a ello. Lo primero que hice fue ojear toda la especificación y para ello lo mejor es la web de <a href="https://developer.mozilla.org/es/docs/CSS/Usando_animaciones_CSS" target="_blank">Mozilla Developers Network</a>, buena parte de la especificación está en castellano. También me he leído el libro(está en inglés) <a href="http://valhead.com/book/" target="_blank">The CSS Animations Pocket Guide</a> es de <a href="https://twitter.com/vlh" target="_blank">Val Head</a>, una guía bastante completa con multitud de ejemplos que podemos ver en CodePen. El precio del libro lo pone cada uno a su gusto pero haced el favor de pagar algo aunque sea 1$.

Lo siguiente fue elegir una animación hecha con SVG+SMIL y pasarla a CSS3. La elegida fue &#8220;City &#038; Clock&#8221; ya que tiene animaciones con translate, rotate, opacity y cambios de color en el background.

{% codepen qvzLm jorgeatgu [result] [400] %}

La cosa empezó con un atasco bastante importante ya que Firefox ejecuta el rotate de una manera peculiar y diferente a la manera de interpretar de Chrome, Opera y Safari.

{% tweet 456036929394724864 %}


La solución es igual al problema que comentaba con <a href="http://twitter.com/elrumordelaluz" target="_blank">Lionel</a> en este post: <a href="http://jorgeatgu.com/blog/animando-svg-con-css3-en-firefox/" target="_blank">SVG+CSS3 en Firefox</a>.

A esto hay que añadirle que estoy acostumbrado al `rotate` de SMIL, el cuál desde mi humilde punto de vista es mil veces mejor al de **CSS3**, ya que en **SMIL** le podemos dar los valores de rotación y también los valores de posición de las coordenadas X e Y, así que el cambio a **CSS3** donde solo puedo añadir el valor de rotación pues es bastante jodido. No todo va a ser malo, así que también diré que el `transform:translate `de **CSS3** es mejor que el de SMIL. Los `keyframes` de **CSS3** son bastante parecidos a los `values` que tenemos en SMIL, y `keySpline` de SMIL se asemeja bastante a `cubic bezier` de **CSS3**.

Lo mas engorroso a la hora de animar con CSS3 son los prefijos que hay que añadir para que la cosa funcione en cada navegador, sencillamente TERRIBLE. Si queremos liberarnos de esto podemos utilizar <a href="https://github.com/ai/autoprefixer" target="_blank">Autoprefixer</a>, en mi caso he utilizado el package que esta disponible para <a href="https://sublime.wbond.net/packages/Autoprefixer" target="_blank">Sublime Text</a>. Así solo tenemos que escribir nuestro CSS sin prefijos y una vez terminado con un simple atajo de teclado podemos añadir todos los prefijos para Webkit, Opera y Firefox, el ahorro de tiempo es brutal. También existe la opción de <a href="http://leaverou.github.io/prefixfree/" target="_blank">Prefix-free</a> pero para que funcione en local hay que iniciar Chrome y Opera de una manera determinada lo cuál me hace perder tiempo.

No encontré mas problemas y terminé la animación, aquí podéis ver el resultado y comparar una con otra.

{% codepen EvyhL jorgeatgu [result] [400] %}

Solamente decir que hay partes de la animación que por un tema de prefijos(creo) no funcionan(inician) como deberían en Safari. Estamos trabajando en ellou.

Aquí os dejo un pen de Edgar Alexander experimentando con transform sobre SVG

{% codepen Leojg g3kdigital [result] [400] %}