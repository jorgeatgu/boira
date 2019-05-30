---
title: Optimizar SVG con SVGO
author: Jorge Aznar
layout: post
permalink: /optimizar-svg-con-svgo/
comments: true
dsq_thread_id:
  - 2152956091
tags:
  - Adobe Illustrator
  - Diseño Web
  - SVG
---
<a href="https://github.com/svg/svgo" target="_blank">SVG Optimizer</a> es una herramienta basada en Node-JS para optimizar SVG.

<!--more-->

El otro día al acabar <a href="http://jorgeatgu.com/blog/charla-sobre-svg-en-vectoresio/" target="_blank">el primer hangout de #vectoresIO</a> <a href="https://twitter.com/deltaoscargolf" target="_blank">Alejandro Bravo</a> me mandaba este tweet.

{% tweet 424149295508750336 %}


Estaba casi seguro de que había hablado de <a href="https://github.com/svg/svgo" target="_blank">SVGO</a> o al menos comentado algo por encima en <a href="http://jorgeatgu.com/blog/exportar-svg/" target="_blank">Exportar SVG</a> y <a href="http://jorgeatgu.com/blog/optimizar-svg-illustrator/" target="_blank">Optimizar SVG</a> pero va a ser que no, así que vamos a ello.

## Que hace

Cosas que me gustan

*   Convierte colores desde `rgb()` a `#rrggbb`, desde `#rrggbb` a `#rgb`.
*   Convierte estilos en atributos.
*   Elimina elementos de texto vacíos, contenedores y grupos vacíos.
Otras no me gustan

*   Elimina la etiqueta `viewBox`, aunque en las pruebas que he hecho no la elimina.
*   Convierte formas básicas en `path`.
*   Elimina el atributo `xlink:href` de la etiqueta SVG.
El resto de acciones que ejecuta están en <a href="https://github.com/svg/svgo#what-it-can-do" target="_blank">GitHub</a>.

## Probando SVGO

Para probar SVGO en la versión para OSX he elegido una parte del cartel que presente para las <a href="http://jorgeatgu.com/blog/cartel-para-la-semana-cultural-de-la-madalena-zaragoza/" target="_blank">fiestas de La Madalena</a>. He convertido a trazado las letras del cartel y también he eliminado la textura del fondo.

Este es el resultado a la hora de pasar el SVG por SVGO

![svgo][1]

Una reducción del 25% esta muy pero que muy bien. Hay que tener cuidado ya que elimina todo los espacios en blanco entre etiquetas, así que lo mejor es pasar una copia del archivo por SVGO y guardar el original por si en el futuro queremos efectuar algún cambio y no nos queremos volver locos rebuscando en el código.
También es recomendable pegarle un repaso al código ya que por ejemplo en este caso las etiquetas `enable-background` que están en los grupos no han sido eliminadas, y como siempre no os olvidéis de probar el archivo en todos los navegadores y dispositivos que tengáis a vuestro alcance.

## Probando SVGO en mi web

Ahora vamos a ver el impacto que tiene sobre mi web.

He utilizado de ejemplo la página de <a href="http://jorgeatgu.com/trabajos" target="_blank">trabajos </a>ya que es la que mas SVG contiene.
He pasado por SVGO todos los SVG de la web no solo los de la página, aquí el resultado:

![svgo optimizar][2]
![svgo optimizar2][3]

Para ver el impacto he clonado la página de trabajos y he colocado los SVG optimizados. Lo siguiente ha sido comparar las dos páginas en velocidad, para ello he utilizado <a href="http://whichloadsfaster.com/" target="_blank">whichloadsfaster </a>, que compara al mismo tiempo la velocidad de carga de dos webs. He hecho dos series para que no de lugar a dudas. La primera serie ha sido de 10 repeticiones y el resultado es que después de pasar los SVG por SVGO la página es un 56% más rápida, **impresionante**.

![resultado svgo][4]

La siguiente serie ha sido de 100 repeticiones y el resultado apenas ha variado, la página optimizada con SVGO sigue siendo un 54% más rápida.

![resultado svgo][5]

Por último he comprobado como se ve la página en las últimas versiones de Chrome, Firefox, Opera, Safari, también en Internet Explorer 10.

![chrome][6]
![firefox][7]
![opera][8]
![safari][9]
![ie10][10]

## Conclusión

Los resultados son bastante buenos, voy a añadir SVGO a mi flujo de trabajo a la hora de de optimizar SVG estáticos, va a ser el penúltimo paso ya que como he dicho anteriormente hay etiquetas que elimina que a mi me parecen esenciales.

 [1]: http://jorgeatgu.com/blog/img/2014/01/pantalla-svgo.png
 [2]: http://jorgeatgu.com/blog/img/2014/01/optimizados-800x693.png
 [3]: http://jorgeatgu.com/blog/img/2014/01/optimizados2-800x692.png
 [4]: http://jorgeatgu.com/blog/img/2014/01/10-800x496.jpg
 [5]: http://jorgeatgu.com/blog/img/2014/01/100-800x493.jpg
 [6]: http://jorgeatgu.com/blog/img/2014/01/chrome-1024x514.png
 [7]: http://jorgeatgu.com/blog/img/2014/01/firefox-1024x516.png
 [8]: http://jorgeatgu.com/blog/img/2014/01/opera-1024x512.png
 [9]: http://jorgeatgu.com/blog/img/2014/01/safari-1024x512.png
 [10]: http://jorgeatgu.com/blog/img/2014/01/ie10-800x599.png