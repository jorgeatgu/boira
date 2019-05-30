---
title: Exportar SVG desde Photoshop CC
author: Jorge Aznar
layout: post
permalink: /exportar-svg-desde-photoshop-cc/
comments: true
dsq_thread_id:
  - 2181209181
tags:
  - Adobe Illustrator
  - Adobe Photoshop
  - SVG
---
Vamos a ver dos métodos para generar archivos SVG desde Adobe Photoshop CC. **Muy importante**, solo afectara a nuestras capas que estén compuestas de vectores.

<!--more-->

## Script Hacking UI

El primer metodo es utilizando el <a href="http://hackingui.com/design/export-photoshop-layer-to-svg/" target="_blank">script de Hacking UI</a>. El script es gratuito, tan sólo tenemos que darnos de alta en su newsletter.

Una vez descargado lo instalamos en OSX en la siguiente ruta **Adobe Photoshop > Presets > Scripts**

![instalar script export svg][1]

Ahora vamos a nuestro archivo con capas vectoriales. Para exportar como SVG tenemos que renombrar las capas vectoriales y añadir al final de la capa un **.SVG**

![renombrar][2]

Una vez renombradas nos vamos a Archivo > Secuencia de comandos > Save as SVG

![instalar svg export photoshop][3]

Si tenemos abierto Adobe Illustrator el proceso irá mas rápido ya que Photoshop utilizar el plugin de Illustrator para exportar como SVG.

Cuando el proceso termine obtendremos un archivo de Illustrator y un SVG.

![archivos export][4]

**El código del SVG es el horror.** Para empezar ha creado cuatro `path` para unas tristes formas básicas cuando lo mas normal y lo que hace Adobe Illustrator es utilizar la etiqueta correspondiente a la forma como vimos en <a href="http://jorgeatgu.com/blog/exportando-svg-desde-illustrator-inkscape-y-sketch/" target="_blank">Exportar SVG</a>. Lo siguiente y mas curioso es que de las cuatro figuras que hay en el documento ha decidido quitarle el color de relleno a las tres primeras figuras añadiendo en el código un `style="fill-rule:evenodd;clip-rule:evenodd;fill:none;"`, solamente vemos una de ellas puede ser que al estar en la misma capa decida ocultar el resto vaya a usted a saber el motivo.

## Exportar SVG desde Photoshop con Adobe Generator

Este método lo obtuve de <a href="http://creativedroplets.com/generate-svg-with-photoshop-cc-beta/" target="_blank">Creative Droplets</a>. Para que funcione necesitamos tener Adobe Photoshop CC 14.2.

Lo primero es crear un archivo con el nombre de generator.json y dentro de ese archivo añadimos el siguiente código

{% highlight javascript linenos %}{
    "generator-assets":  {
        "svg-enabled": true
    }
}{% endhighlight %}

Vamos a guardar el archivo en nuestra carpeta de usuario, en mi caso Mac HD > Usuarios > jorgeatgu

![export svg][5]

Ahora vamos a Archivo > Generar > Recursos de imagen

![recursos de imagen][6]

Y por último vamos a renombrar las capas vectoriales y añadimos .SVG al final de ellas, automáticamente en la carpeta donde este guardado nuestro .PSD se genera un SVG por cada capa vectorial que hemos renombrado a .SVG.

Este metódo no necesita en ningún momento la ayuda de Adobe Illustrator.
El código que volvemos a obtener sigue siendo el horror ya que vuelve a utilizar un
`path` para generar formas básicas, en este caso se agrava al agrupar las cuatro figuras en un solo `path`.

{% highlight HTML linenos %}<svg version="1.1" baseProfile="full"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:ev="http://www.w3.org/2001/xml-events" >
<path fill-rule="evenodd"  fill="rgb( 0, 150, 64 )"
 d="M727.961,548.547 C727.961,548.547 522.956,581.016 522.956,581.016 C522.956,581.016 428.726,396.079 428.726,396.079 C428.726,396.079 575.493,249.312 575.493,249.312 C575.493,249.312 760.431,343.542 760.431,343.542 C760.431,343.542 727.961,548.547 727.961,548.547 ZM517.000,259.000 C517.000,259.000 420.000,259.000 420.000,259.000 C414.477,259.000 410.000,254.523 410.000,249.000 C410.000,249.000 410.000,152.000 410.000,152.000 C410.000,146.477 414.477,142.000 420.000,142.000 C420.000,142.000 517.000,142.000 517.000,142.000 C522.523,142.000 527.000,146.477 527.000,152.000 C527.000,152.000 527.000,249.000 527.000,249.000 C527.000,254.523 522.523,259.000 517.000,259.000 ZM161.000,130.000 C161.000,130.000 343.000,130.000 343.000,130.000 C343.000,130.000 343.000,312.000 343.000,312.000 C343.000,312.000 161.000,312.000 161.000,312.000 C161.000,312.000 161.000,130.000 161.000,130.000 ZM238.500,388.000 C283.511,388.000 320.000,424.489 320.000,469.500 C320.000,514.511 283.511,551.000 238.500,551.000 C193.489,551.000 157.000,514.511 157.000,469.500 C157.000,424.489 193.489,388.000 238.500,388.000 Z"/>
</svg>{% endhighlight %}

## Conclusión

Seguire utilizando Inkscape, Illustrator o Sketch para generar SVG. **No encuentro ni una sola ventaja a la hora de exportar SVG con Adobe Photoshop.**

 [1]: http://jorgeatgu.com/blog/img/2014/01/ruta-800x467.png
 [2]: http://jorgeatgu.com/blog/img/2014/01/renombrar.png
 [3]: http://jorgeatgu.com/blog/img/2014/01/guardar-svg-photoshop-400x451.png
 [4]: http://jorgeatgu.com/blog/img/2014/01/archivos.png
 [5]: http://jorgeatgu.com/blog/img/2014/01/rutaexportar.png
 [6]: http://jorgeatgu.com/blog/img/2014/01/generar-recursos.png