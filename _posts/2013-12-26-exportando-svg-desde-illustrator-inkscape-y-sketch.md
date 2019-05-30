---
title: Exportar SVG desde Illustrator, Inkscape y Sketch
author: Jorge Aznar
layout: post
permalink: /exportando-svg-desde-illustrator-inkscape-y-sketch/
comments: true
dsq_thread_id:
  - 2098697335
tags:
  - Adobe Illustrator
  - Inkscape
  - Sketch
  - SVG
---
Hasta ahora solo había hablado sobre como exportar SVG desde Adobe Illustrator(<a href="http://jorgeatgu.com/blog/exportar-svg/" target="_blank">aquí</a>),(<a href="http://jorgeatgu.com/blog/optimizar-svg-illustrator/" target="_blank">aquí</a>) y (<a href="http://jorgeatgu.com/blog/mi-experiencia-con-svg/" target="_blank">aquí</a>). Hoy voy a hacer una pequeña comparación en la que vamos a ver que código genera Illustrator, Inkscape y Sketch a la hora de exportar en formato SVG, antes de nada **recordar que solamente Inkscape es gratuito**.

<!--more-->

El ejemplo es básico, esta formado por un cuadrado, círculo, pentágono y cuadrado con las esquinas redondeadas.

## ILLUSTRATOR

Aquí podemos ver el menú que disponemos a la hora de <a href="http://jorgeatgu.com/blog/exportar-svg/" target="_blank">exportar un SVG</a> con Illustrator, sin duda alguna es el mas completo de los tres.

![svg illustrator][1]

Aquí podemos ver el código que ha generado a la hora de exportar.
En la etiqueta de apertura nos sobra el `id=""`, el atributo `xml:space=` y `enable-background`. Ha respetado el círculo, pentágono y cuadrado pero a la hora de exportar el cuadrado con bordes redondeados ha generado un `path` cuando lo ideal hubiera sido añadir al cuadrado el atributo `rx=""` que es con el que conseguimos redondear las esquinas. También añade `stroke-miterlimit`, podemos prescindir de este atributo sin ningún problema.

{% highlight HTML linenos %}<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve">
<rect x="99.5" y="100.5" fill="#FF0000" stroke="#000000" stroke-miterlimit="10" width="200" height="200"/>
<path fill="#FF0000" stroke="#000000" stroke-miterlimit="10" d="M526.5,297.8c0,2.6-2.1,4.7-4.7,4.7H331.2c-2.6,0-4.7-2.1-4.7-4.7
	V107.2c0-2.6,2.1-4.7,4.7-4.7h190.6c2.6,0,4.7,2.1,4.7,4.7V297.8z"/>
<circle fill="#FF0000" stroke="#000000" stroke-miterlimit="10" cx="661.1" cy="204.8" r="100"/>
<polygon fill="#FF0000" stroke="#000000" stroke-miterlimit="10" points="132.6,525.5 94.4,408.1 194.4,335.6 294.4,408.1
	256.2,525.5 "/>
</svg>
{% endhighlight %}

## Inkscape

Aquí podemos ver el cuadro a la hora de exportar **SVG **desde **Inkscape**, como se puede observar no da lugar a modificar ninguna opción.

![inkscape svg][2]

El código que genera para mi es un caos. La etiqueta de apertura SVG lleva muchísimos atributos que no nos sirven para nada, omite la etiqueta `viewBox` lo cual nos puede crear problemas a la hora de insertar **SVG **en el **HMTL**. Crea una etiqueta `defs` a la que no le encuentro ningún tipo de sentido. Los atributos de las formas los da a través de estilos CSS cuando se puede utilizar `fill` para el color y `stroke-width` para el grosor. El círculo y el pentágono en lugar de crearlos con etiquetas `circle` y `polygon` se crean con la etiqueta `path` lo cual genera mas código. En cambio el rectángulo redondeado se crea a la perfección, cosa que no es capaz de hacer Illustrator.

{% highlight HTML linenos %}<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="210mm"
   height="297mm"
   id="svg2"
   version="1.1"
   inkscape:version="0.48.2 r9819"
   sodipodi:docname="plano.svg">
  <defs
     id="defs4">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 526.18109 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="744.09448 : 526.18109 : 1"
       inkscape:persp3d-origin="372.04724 : 350.78739 : 1"
       id="perspective2987" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.7161909"
     inkscape:cx="392.75591"
     inkscape:cy="743.92974"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="1920"
     inkscape:window-height="950"
     inkscape:window-x="1680"
     inkscape:window-y="22"
     inkscape:window-maximized="0" />
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#0000ff;fill-rule:evenodd;stroke:#000000;stroke-width:0.83983207px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       id="rect2985"
       width="199.16017"
       height="199.16017"
       x="85.634201"
       y="167.56781" />
    <path
       sodipodi:type="arc"
       style="fill:#ff0000;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       id="path3003"
       sodipodi:cx="487.14285"
       sodipodi:cy="296.64789"
       sodipodi:rx="130"
       sodipodi:ry="130"
       d="m 617.14285,296.64789 a 130,130 0 1 1 -260,0 130,130 0 1 1 260,0 z"
       transform="matrix(0.76628352,0,0,0.76628352,114.78188,36.974356)" />
    <path
       sodipodi:type="star"
       style="fill:#ffff00;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       id="path3007"
       sodipodi:sides="5"
       sodipodi:cx="160"
       sodipodi:cy="535.21936"
       sodipodi:r1="151.42857"
       sodipodi:r2="122.50829"
       sodipodi:arg1="-1.5707963"
       sodipodi:arg2="-0.9424778"
       inkscape:flatsided="true"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 160,383.79079 144.01713,104.63457 -55.00965,169.30229 -178.014966,0 -55.009644,-169.3023 z"
       inkscape:transform-center-y="-10.00583"
       transform="matrix(0.69195948,0,0,0.69195948,124.76935,211.33222)" />
    <rect
       style="fill:#0000ff;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       id="rect3009"
       width="200"
       height="200"
       x="419.62878"
       y="472.9021"
       rx="8"
       ry="8" />
  </g>
</svg>
{% endhighlight %}

## Sketch

Aquí podemos ver el menú para exportar **SVG **desde **Sketch**, desde el menú podemos modificar el `width` y `height` del documento y excluir objetos. Nada más.

![sketch svg][3]

Con Sketch la etiqueta de apertura de **SVG **es casi perfecta, solamente sobra `xmlns:sketch="http://www.bohemiancoding.com/sketch/ns`, publicidad y tal. Nos crea las etiquetas `title` y `description` que nos ahorra trabajo a la hora de titular y añadir una descripción del archivo. Crea también una etiqueta `defs` sin contenido, en este caso no vamos a utilizar. A la hora de exportar las formas sin duda alguna es el mejor ya que no utiliza `path` para sustituir a las etiquetas originales. Lo peor sin duda es que añade `sketch:type="MSShapeGroup"` y que utiliza hasta cinco decimales en las coordenadas y esto hará que nuestro archivo aumente considerablemente de tamaño.

{% highlight HTML linenos %}<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1075px" height="238px" viewBox="0 0 1075 238" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <title>Slice 1</title>
    <description>Created with Sketch (http://www.bohemiancoding.com/sketch)</description>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <rect id="Rectangle-1" stroke="#979797" fill="#D0011B" sketch:type="MSShapeGroup" x="0" y="0" width="222" height="222"></rect>
        <circle id="Oval-1" stroke="#979797" fill="#D0011B" sketch:type="MSShapeGroup" cx="407" cy="123" r="109"></circle>
        <rect id="Rectangle-2" stroke="#979797" fill="#D0011B" sketch:type="MSShapeGroup" x="552" y="6" width="232" height="232" rx="8"></rect>
        <polygon id="Polygon-1" stroke="#979797" fill="#D0011B" sketch:type="MSShapeGroup" points="965.5 13 1074.39597 92.1175541 1032.80141 220.132446 898.198589 220.132446 856.604029 92.1175541 "></polygon>
    </g>
</svg>{% endhighlight %}

Enlaces de interés:

<a href="http://jorgeatgu.com/blog/optimizar-svg-illustrator/" target="_blank">Optimizar SVG </a>
<a href="http://jorgeatgu.com/blog/crear-svg-con-adobe-illustrator-y-sublime-text/" target="_blank">Crear SVG con Illustrator y Sublime Text</a>

 [1]: http://jorgeatgu.com/blog/img/2013/12/illustrator.png
 [2]: http://jorgeatgu.com/blog/img/2013/12/inkscape-800x558.png
 [3]: http://jorgeatgu.com/blog/img/2013/12/sketch-800x524.png