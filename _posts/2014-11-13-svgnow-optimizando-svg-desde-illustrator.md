---
title: optimizando SVG desde Adobe Illustrator
author: Jorge Aznar
layout: post
permalink: /optimizando-svg-desde-adobe-illustrator/
comments: true
tags:
  - SVG
  - Adobe Illustrator
---

Adobe acaba de publicar la beta de [SVGNOW](https://github.com/davidderaedt/SVG-NOW){:target="_blank"}, una extensión para optimizar los **SVG** directamente desde **Adobe Illustrator**.

Recordad que en blog ya he tocado varias veces este tema:

[Optimizar SVG Illustrator](http://jorgeatgu.com/blog/optimizar-svg-illustrator/index.html){:target="_blank"}

[Optimizar SVG con SVGO](http://jorgeatgu.com/blog/optimizar-svg-con-svgo/index.html){:target="_blank"}

[Optimizar SVG con SVGCleaner](http://jorgeatgu.com/blog/optimizar-svg-con-svgcleaner/index.html){:target="_blank"}

[SVGNOW](https://github.com/davidderaedt/SVG-NOW){:target="_blank"} está disponible para descargar(para los usuarios de Creative Cloud) desde la página de *addons* de [Creative Cloud](https://creative.adobe.com/addons/products/4272#.VGSW8VPF8Q4){:target="_blank"}. Una vez descargado hay que abrir Adobe Illustrator, vamos al menú ventana y nos aparecerá en la sección de extensiones.

## Opciones disponibles

Por ahora el *addon* solamente dispone de cuatro opciones, y una de ellas esta(y debería de estar siempre) capada, es la de mantener el archivo original. El resto de opciones son *outline fonts*, *convert style to attributes* y *convert path to data*.

![Opciones SVGNOW](http://jorgeatgu.com/blog/img/2014/11/svgnow-opciones.png)

### Outline fonts

Con esta opción vamos a convertir en trazado todo el texto.


### Convert style to attributes

Esta opción inserta los atributos directamente en las etiquetas de nuestro **SVG**, esto es lo normal cuando exportamos desde **Adobe Illustrator**.

Si dejamos esta opción sin seleccionar los estilos van a ser incluidos en una etiqueta `<style type="text/css">`

{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 138.4" style="enable-background:new 0 0 246 138.4;"><style type="text/css">.st0{fill:#D8D212;stroke:#E6007E;stroke-width:3;stroke-miterlimit:10;} .st1{fill:#E2DD1B;}</style><path class="st0" d="M94.3,90.5H45.4c-6.6,0-12-5.4-12-12V29.6c0-6.6,5.4-12,12-12h48.9c6.6,0,12,5.4,12,12v48.9 C106.3,85.1,100.9,90.5,94.3,90.5z"/><path class="st1" d="M136.3 31.3H218.8V113.8H136.3z"/></svg>
{% endhighlight %}

A continuación el mismo código con la opción seleccionada

{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 138.4" enable-background="new 0 0 246 138.4"><path fill="#D8D212" stroke="#E6007E" stroke-width="3" stroke-miterlimit="10" d="M94.3,90.5H45.4c-6.6,0-12-5.4-12-12V29.6 c0-6.6,5.4-12,12-12h48.9c6.6,0,12,5.4,12,12v48.9C106.3,85.1,100.9,90.5,94.3,90.5z"/><path fill="#E2DD1B" d="M136.3 31.3H218.8V113.8H136.3z"/></svg>
{% endhighlight %}


### Convert path to data

Con esta opción vamos a convertir todas las etiquetas que tiene nuestro **SVG** en `<path>`. A mi esta opción no me termina de convencer, es una opción que está disponible en **SVG CLEANER** y que **yo personalmente** no recomiendo.


A los **SVG** exportados desde **SVGNOW** se le añade al nombre del archivo un *-opt*.

Lo mejor de **SVGNOW** es que elimina las dos primeras líneas tan características de **Adobe Illustrator**.

{% highlight HTML %}
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
{% endhighlight %}

También elimina varios atributos totalmente innecesarios que se añaden a la etiqueta principal de **SVG**.

{% highlight HTML %}
SIN SVGNOW
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 246 138.4" enable-background="new 0 0 246 138.4" xml:space="preserve">

CON SVGNOW
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 138.4" enable-background="new 0 0 246 138.4">
{% endhighlight %}

Yo eliminaría `enable-background` y añadiría el `width` `height`.

Por último aquí esta el repositorio de [SVGNOW en GitHub](https://github.com/davidderaedt/SVG-NOW){:target="_blank"}.