---
title: Testeando la accesibilidad de la web con tota11y
author: Jorge Aznar
layout: post
permalink: /tota11y-accesibilidad-web/
comments: true
tags:
  - Accesibilidad Web
  - Herramientas
---

En este artículo vamos a hablar sobre el gran olvidado en una amplía mayoría de proyectos web, la **accesibilidad**. La herramienta para testear se llama [tota11y](http://khan.github.io/tota11y/) y esta desarrollada por [Khan Academy](https://www.khanacademy.org/).

<!--more-->

[tota11y](http://khan.github.io/tota11y/) se puede usar añadiéndolo desde su web a tus marcadores, o descargándote la [última version de tota11y desde GitHub](https://github.com/Khan/tota11y/releases/latest), una vez descargado solamente tienes que incluirlo en el ```<head>``` de tu web, fácil y sencillo.

{% highlight HTML %}
<script src="tota11y.min.js"></script>
{% endhighlight %}

Una vez incluido aparece un icono en la parte inferior izquierda de la página.

![Icono de acceso a tota11y](http://jorgeatgu.com/blog/img/2016/1/acceso-tota11y.png)

Haciendo click en el icono se despliega un menú con las diferentes opciones que tiene la herramienta disponibles a día de hoy.

![Menu de opciones de tota11y](http://jorgeatgu.com/blog/img/2016/1/menu-tota11y.png)

## Headings

Con la primera de ellas vamos a comprobar el orden de las etiquetas ```<h1>```, ```<h2>```

## Contrast

Con esta opción comparamos el contraste de los colores que estamos utilizando en la web. También tiene en cuenta el tamaño de fuente que estamos utilizando.

## Link text

Esta opción identifica los enlaces que pueden dar lugar a confusión cuando una persona accede a la web con un *screen reader*.

## Labels

Identifica los ```<input>``` que contienen ```id=""``` que no están vinculados a un ```<label>``` a través del ```for=""``

## Image alt-text
Esta opción detecta todas las imágenes de la web que no tienen nada en el ```alt=""```. Sed generosos con las descripciones.

## Landmarks

Detecta todos aquellas etiquetas de **HTML** que tienen definido un atributo ```role=""```. [The Roles Model](https://www.w3.org/TR/wai-aria/roles)

## Screen reader wand

Esta última opción es experimental. Cuando la activamos se despliega una capa que emula un screen reader. Ahora podemos ir haciendo *hover* sobre los diferentes elementos de la web para ver como se muestran en un *screen reader*.

Todas estas opciones las podemos probar directamente en la web de la librería. Hay ejemplos para cada una de las opciones de la librería.

## Colorable

**Bonus!!**

Voy a hablar de [Colorable](http://jxnblk.com/colorable/demos/text/), una herramienta creada por [Brent Jackson](http://jxnblk.com/) y que se ha convertido en algo imprescindible en todos mis proyectos.

Muchas veces nos creemos que los colores que elegimos combinan a la perfección y quedan bien, al pasarlos por Colorable nos llevamos más de una sorpresa al ver que esa combinación no pasa los test de la [WCAG](https://www.w3.org/TR/WCAG20/#visual-audio-contrast). Con esta herramienta vamos a comparar de una forma rápida y sencilla el contraste del color de fondo con el color de la letra. Recordad que el contraste también depende del tamaño de letra que utilizamos.

Y aquí unas [cuantas combinaciones de colores con contraste](http://www.basscss.com/docs/reference/color-combinations/).

## SVG

En [SCALABLE](https://leanpub.com/scalable/) podéis leer el [capítulo 13](https://github.com/jorgeatgu/scalable/blob/master/capitulo13/chapter13.md) que esta dedicado a la accesibilidad en **SVG**.