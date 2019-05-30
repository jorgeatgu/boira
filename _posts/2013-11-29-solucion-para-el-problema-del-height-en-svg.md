---
title: Solución para el problema del height en SVG
author: Jorge Aznar
layout: post
permalink: /solucion-para-el-problema-del-height-en-svg/
comments: true
dsq_thread_id:
  - 2109461521
tags:
  - CSS3
  - Diseño Web
  - SMIL
  - SVG
---
El problema principal viene a la hora de insertar SVG a través de las etiquetas `object` o `img`, la cuestión es que navegadores como IE9, IE10 y Safari para iOS5.1 añaden mas *height* a los archivos, así que una vez insertados nos encontramos con archivos excesivamente altos.

<!--more-->


Esta captura de pantalla esta hecha antes de la última actualización de Safari la cual corrige el error.
![safari height svg][1]

En esta imagen se puede ver como IE9 y IE10 añaden mas altura al SVG.
![height svg internet explorer][2]

En esta imagen se puede ver como en iOS se crea un height de 456395px.
![ios max height][3]

Una locura a la hora de hacer scroll como podemos ver en el siguiente vídeo

<iframe class="vine-embed" src="https://vine.co/v/hPWMjA2PmzI/embed/simple" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>

El problema con el *height* se ha ido subsanando en Chrome, Opera y Firefox en diferentes actualizaciones, Safari ha sido el último en corregir el problema pero **el problema sigue en IE9, IE10 y iOS 5.1,** este último afecta sobre todo afecta a los que tenemos el primer modelo de iPad, el cual se quedo fuera del ciclo de actualizaciones de Apple y **vivirá para siempre con iOS 5.1**.

**SOLUCION**

La solución al problema es bastante sencilla, **simplemente tenemos que añadir a nuestro SVG una clase que tenga `max-height`** con la altura que nosotros queramos y así conseguimos limitar el *height* del SVG.

**Safari iOS5.1**
![maxheight ios][4]

**Internet Explorer 10**
![maxheight internet explorer][5]

**Internet Explorer 9**
![maxheight internet explorer 9][6]

 [1]: http://jorgeatgu.com/blog/img/2013/11/heightsafarinormaljunio.png
 [2]: http://jorgeatgu.com/blog/img/2013/11/iesinmaxheight.png
 [3]: http://jorgeatgu.com/blog/img/2013/11/sinmaxheightIOS2.png
 [4]: http://jorgeatgu.com/blog/img/2013/11/maxheight-iOS.png
 [5]: http://jorgeatgu.com/blog/img/2013/11/ie10conmaxheightwindows8.png
 [6]: http://jorgeatgu.com/blog/img/2013/11/iemaxheight.png
