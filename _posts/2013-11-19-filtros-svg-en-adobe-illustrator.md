---
title: Filtros SVG en Adobe Illustrator
author: Jorge Aznar
layout: post
permalink: /filtros-svg-en-adobe-illustrator/
comments: true
dsq_thread_id:
  - 2100241795
tags:
  - Adobe Illustrator
  - Diseño Gráfico
  - Diseño Web
  - SVG
---
Vamos a aplicar filtros SVG desde Adobe Illustrator, en anteriores post ya había tratado levemente el tema de los <a href="http://jorgeatgu.com/blog/los-filtros-en-svg/" target="_blank">filtros SVG</a>. Ahora vamos a ver a través de ejemplos los efectos que podemos conseguir aplicando los filtros SVG desde Adobe Illustrator.

<!--more-->

### SOPORTE EN NAVEGADORES

Lo primero es ver el soporte que tiene en los diferentes navegadores.

![soporte filtros svg navegadores][1]

Exceptuando Android Browser podemos ver en la imagen que el soporte es mayoritario en las últimas versiones de los diferentes navegadores, por desgracia no todos los usuarios utilizan estas versIonEs.

En <a href="http://caniuse.com" target="_blank">Can I use</a> nos avisan de que antiguas versiones de Google Chrome y Firefox no dan soporte a ` feConvolveMatrix`.

### Adobe Illustrator CS6

Antes de nada avisar de que estos ejemplos están realizados con la version CS6, por ahora desconozco si la última version de Illustrator que en estos momentos es CC dispone de mas filtros.

Adobe nos da la opción de añadir mas filtros SVG a Adobe Illustrator, para ello tendremos que modificar el archivo de filtros que lleva Illustrator. A continuación os copio y pego <a href="http://help.adobe.com/es_ES/illustrator/cs/using/WS714a382cdf7d304e7e07d0100196cbc5f-6360a.html#WS714a382cdf7d304e7e07d0100196cbc5f-635da" target="_blank">el texto que nos facilita Adobe en su web</a>.

>Para modificar los filtros de SVG por defecto de Illustrator, utilice un editor de texto para editar el archivo Filtros SVG Adobe.svg de la carpeta Documents and Settings/<dir_usuario>/Datos de programa/Adobe/Adobe Illustrator CS5 Settings/<ubicación>. Es posible modificar y eliminar definiciones de filtros existentes y añadir nuevas.
Ruta Mac: /Applications/Adobe Illustrator CS5/Adobe Illustrator.app/Required/Resources/es_ES/Adobe SVG Filters.svg*

También podemos utilizar filtros que estén dentro de archivos SVG, para ello hay que importar el archivo a través de Adobe Illustrator.

*Elija Efecto > Filtro SVG > Importar filtro SVG.
Seleccione el archivo SVG desde el que desee importar efectos y haga clic en Abrir.*

Y ahora vamos a ver de los filtros que disponemos por defecto en Adobe Illustrator CS6.

![filtros disponibles en Adobe Illustrator CS6][2]

En total disponemos de 11 filtros SVG, algunos de los filtros de los que disponemos en Adobe Illustrator son el resultado de una combinación de varios filtros SVG. Mas adelante veremos el código de los filtros que empleare en el ejemplo, y recordad que si queréis modificar o añadir mas tenéis que buscar en vuestra carpeta de Adobe Illustrator el archivo Adobe SVG Filters.svg

Para los ejemplos he utilizado esta foto que podéis <a href="http://www.flickr.com/photos/61749588@N05/8855522875/sizes/c/in/set-72157633739593007/" target="_blank">descargar de mi cuenta de Flickr</a>

Ahora abrimos un nuevo documento y colocamos la foto. Una vez colocada, muy importante seleccionar la capa donde tenemos la foto y a la que vamos a aplicar el filtro. Ahora vamos a Efecto > Filtros SVG > Aplicar Filtros SVG y nos saldrá esta pantalla

![aplicar filtro SVG][3]

Pinchamos en previsualizar para así poder ver al instante como afecta cada filtro a nuestra selección, lo siguiente sera seleccionar el filtro AI_Sombra2

Aquí podemos ver el resultado del filtro

![svg filtro sombra][4]

Si pinchamos en la primera opción(fX) se abrirá una pantalla con el código del filtro en la cuál tenemos la opción de modificar el código y ver los resultados de las modificaciones.

Si por ejemplo queremos alargar la sombra tan solo tenemos que ir a la línea `feOffset  dx="8" dy="8" in="blur" result="offsetBlurredAlpha"`y sustituir los valores de las coordenadas `dx` y `dy` por 20, ahora actualizamos previsualización para ver los cambios.

![svg filtro sombra veinte mas][5]

Si quisiéramos aumentar la potencia del desenfoque gausiano nos bastaría con ir a la línea de código `feGaussianBlur  stdDeviation="6" in="SourceAlpha" result="blur"` y cambiar el valor `stdDeviation="6"` por uno superior.

### Aplicar un nuevo filtro

A continuación vamos a aplicar un filtro que no esta disponible en Adobe Illustrator, para ello lo primero vamos a utilizar un recurso de Microsoft que ya he mencionando anteriormente <a href="http://ie.microsoft.com/testdrive/graphics/hands-on-css3/hands-on_svg-filter-effects.htm" target="_blank">Hands On:SVG Filter Effect</a>.

![herramienta online filtro svg microsoft][6]

Ya en la página nos vamos al selector de filtros y seleccionamos feColorMatrix-sepiatone, justo debajo de la foto aparecerá el código del filtro, nos bastara con copiar solamente lo siguiente

{% highlight HTML linenos %}<feColorMatrix type="matrix" values=".343 .669 .119 0 0 .249 .626 .130 0 0 .172 .334 .111 0 0 .000 .000 .000 1 0" />{% endhighlight %}

Ahora volvemos a Adobe Illustrator

![nuevo filtro adobe illustrator][7]

En el menú de Aplicar Filtro pinchamos en la segunda opción como muestra la imagen anterior, y una vez allí pegamos el código entre las etiquetas filter y cambiamos el id por feColorMatrix-sepiatone actualizamos previsualización y el filtro se habra aplicado sobre la foto.

![fecolormatrix sepiatone][8]

Si cerramos Adobe Illustrator el filtro se pierde, si queremos conservarlo a la hora de guardar como SVG tendremos que pinchar en &#8220;conservar capacidades de edición de Illustrator&#8221; pero el problema es que SOLO estará disponible en ese archivo, a la hora de querer aplicarlo a otro documento el filtro no esta disponible. He estado intentado añadirlo al archivo Filtros SVG Adobe.svg pero no hay manera de que salga en el menú de filtros SVG, tiene que existir algún método así que seguiré investigando y cuando lo consiga editare el post.

 [1]: http://jorgeatgu.com/blog/img/2013/11/filters-svg.png
 [2]: http://jorgeatgu.com/blog/img/2013/11/filtros-svg-adobe-illustrator.png
 [3]: http://jorgeatgu.com/blog/img/2013/11/aplicar-filtro-SVG.png
 [4]: http://jorgeatgu.com/blog/img/2013/11/filtro-svg-illustrator-sombra.png
 [5]: http://jorgeatgu.com/blog/img/2013/11/filtro-svg-illustraro-sombra-20.png
 [6]: http://jorgeatgu.com/blog/img/2013/11/Hands-On-SVG-Filter-Effect-1024x534.png
 [7]: http://jorgeatgu.com/blog/img/2013/11/nuevo-filtro.png
 [8]: http://jorgeatgu.com/blog/img/2013/11/feColorMatrix-sepiatone-800x496.png