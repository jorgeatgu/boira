---
title: Deshabilitando el teclado en iOS en un input
author: Jorge Aznar
layout: post
permalink: /input-ios-readonly/
comments: true
tags:
  - HTML
  - iOS
  - input
  - UX
---

Hace un tiempo me estuve pegando con un input vinculado a un [datepicker](http://jqueryui.com/datepicker/){:target="_blank"}. El problema se reproducía en iPad/iPhone, y es que al pinchar en el input para seleccionar una fecha el teclado del iPhone/iPad aparecía ocupando buena parte de la pantalla, un gran problema de usabilidad sobre todo en iPhone. La solución es bastante sencilla gracias al atributo readonly="readonly". Si añadimos este atributo al input el teclado no aparece a la hora de seleccionar ese input.

<!--more-->

Pero hoy estaba testeando un proyecto y me ha vuelto a pasar lo mismo. Esta vez el input con el atributo readonly="readonly" no guardaba las fechas seleccionadas. Esto solamente me pasaba en un iPad 1 con iOS 5.1.1, al cual le tenemos que dar soporte. El problema no se reproducía ni en iOS7 ni en iOS8. El problema venía por culpa de un type="datetime", es más, con este atributo saca el calendario propio de iOS, por lo tanto si ese input esta vinculado a un datepicker el usuario se va a armar un lío al ver dos calendarios y un teclado. Así que prescindid del datetime que además tiene muy [poco soporte](http://caniuse.com/#search=datetime){:target="_blank"}.

Aquí un ejemplo con input y varias opciones.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/readonly/index.html">EJEMPLO!</a>
</button>

Un apunte, según la web [developers Apple](https://developer.apple.com/support/appstore/){:target="_blank"} los dispositivos con una versión anterior a iOS 7 solamente representan el 3%.