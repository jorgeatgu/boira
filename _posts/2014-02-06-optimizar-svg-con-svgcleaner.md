---
title: Optimizar SVG con SVGCleaner
author: Jorge Aznar
layout: post
permalink: /optimizar-svg-con-svgcleaner/
comments: true
dsq_thread_id:
  - 2228999731
tags:
  - SVG
---
Vamos a ver otro programa para optimizar SVG, esta vez se trata de <a href="https://github.com/RazrFalcon/SVGCleaner" target="_blank">SVG Cleaner</a> del que acaba de salir su version 0.6.1.

<!--more-->

Para empezar solamente tenemos que pinchar en *Wizard*, nos saltara un menú con seis opciones, la primera para añadir los archivos que queremos optimizar y tres opciones para guardar los archivos, como ya he dicho en otras ocasiones lo mejor es pasar por el programa una copia de los archivos ya que si en el futuro queremos modificar los SVG nos vamos a encontrar con un código ingobernable.

## OPCIONES

Tenemos multitud de opciones que podemos configurar todo ello divido en cuatro paneles, ***elements*, *paths*, *attributes *y *optimizations***.

### Elements

En primer lugar tenemos los elementos, destaco sobre todo las opciones para eliminar todo el código que va relacionado con el programa que utilizamos para generar SVG ya sea Inkscape, Illustrator o Sketch.

![svg cleaner elements][1]

### Attributes

Ahora vamos con los atributos, por destacar cosas que me gustan por ejemplo que elimine todos los atributos que vengan por defecto por ejemplo las medidas en pixels. Tambien elimina los atributos `fill` y `stroke` cuando no tienen valor. En este apartado no me termina de convencer el que agrupe elementos por estilo.

![svg cleaner Attributes][2]

### Paths

Ahora vamos con esa locura de etiqueta llamada `path`, antes de ver las opciones recomiendo la <a href="http://jorgeatgu.com/blog/elemento-path-svg/" target="_blank">lectura de este post sobre la etiqueta path</a>. Vamos con las opciones, convierte las coordenadas absolutas en relativas, elimina letras innecesarias en `d=""`.

![svg cleaner paths][3]

### Optimizations

Por último vamos con las optimizaciones, simplifica colores y hace algo que no me gusta que es convertir las formas básicas en trazados pero bueno si no vamos animar nuestro SVG no pasa nada. Las últimas tres opciones nos sirven para eliminar o redondear decimales, esto nos va a servir de gran utilidad si nuestros SVG <a href="http://jorgeatgu.com/blog/exportando-svg-desde-illustrator-inkscape-y-sketch/" target="_blank">proceden de programas como Sketch o Inkscape</a> en los que no tenemos la oportunidad de seleccionar con cuantos decimales queremos que se exporte el SVG.

![svg cleaner optimizations][4]

## Comparativa

He pasado por SVGCleaner los mismos archivos que pase por <a href="http://jorgeatgu.com/blog/optimizar-svg-con-svgo/" target="_blank">SVGO</a>, vamos a ver los resultados.

![svgcleaner resultados][5]
![svg cleaner resultados dos][6]
![svgo resultados][7]

## Conclusión

Como podemos ver en la mayoría de los casos SVGO comprime mas que SVGCleaner pero a la hora de configurar las opciones gana con bastante claridad SVGCleaner. Yo voy a seguir utilizando SVGO pero los SVG que vengan de Sketch van a pasar primero por SVGCleaner así de un plumazo puedo convertir a un decimal, eliminar código publicitario y continuar trabajando con ese SVG sin necesidad de comprimir todo el archivo.

<a href="http://jorgeatgu.com/blog/optimizar-svg-con-svgo/" target="_blank">Optimizar SVG con SVGO</a>

<a href="http://qt-apps.org/content/show.php/SVG+Cleaner?content=147974" target="_blank">Esta disponible para OSX Linux y Windows<br /> </a>

 [1]: http://jorgeatgu.com/blog/img/2014/02/svg-cleaner-elements.png
 [2]: http://jorgeatgu.com/blog/img/2014/02/svg-cleaner-atributtes.png
 [3]: http://jorgeatgu.com/blog/img/2014/02/svg-cleaner-paths.png
 [4]: http://jorgeatgu.com/blog/img/2014/02/svg-cleaner-optimizations.png
 [5]: http://jorgeatgu.com/blog/img/2014/02/svg-optimizados.png
 [6]: http://jorgeatgu.com/blog/img/2014/02/svg-optimizados2.png
 [7]: http://jorgeatgu.com/blog/img/2014/01/optimizados-800x693.png