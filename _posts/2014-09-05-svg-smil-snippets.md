---
title: SVG SMIL Snippets
author: Jorge Aznar
layout: post
permalink: /svg-smil-snippets/
comments: true
dsq_thread_id:
  - 2990173100
tags:
  - SMIL
  - Sublime Text
  - SVG
---
Ya está disponible para descargar el nuevo package que he creado para Sublime Text 2/3. Al igual que el [anterior](http://jorgeatgu.com/blog/svg-en-sublime-text/) es una colección de snippets que nos ahorrará bastante tiempo a la hora de animar **SVG** con **SMIL**.

<!--more-->

Para instalar el package simplemente tenéis que ir a Sublime Text y si utilizáis Mac le dais a `comando+mayus+p` si estáis en windows `ctrl+mayus+p` os saldrá el *command palette* ahora tan solo hay que escribir y seleccionar Install Package, por último escribid **SVG** y os saldrá SVG-SMIL-Snippets le dais y ya está instalado.

Todas las palabras clave están en el repositorio de [SVG-SMIL-Snippets en GitHub](https://github.com/jorgeatgu/SVG-SMIL-Snippets).

El funcionamiento es sencillo, escribimos la palabra clave, le damos al tabulador y saldrá el trozo de código correspondiente.

Si por ejemplo escribimos anim y presionamos ctrl+barra espaciadora nos saldrá todos los *snippets* que contenga anim y una pequeña descripción de cada *snippet*.

Si le vamos dando al tabulador nos irá llevando a las zonas que tenemos que rellenar, por ejemplo values=&#8221;&#8221;, begin=&#8221;&#8221;, dur=&#8221;&#8221; etc&#8230;

Para que funcione el autocompletado os tenéis que asegurar de que en vuestros Settings &#8211; User tenéis lo siguiente: ` "auto_complete_selector": "source, text" `

Por último os dejo un vídeo utilizando el package

<iframe src="http://player.vimeo.com/video/105240549" width="500" height="303" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/105240549">SVG SMIL SNIPPETS</a> from <a href="http://vimeo.com/jorgeatgu">Jorge Aznar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>