---
title: Mi experiencia con SVG
author: Jorge Aznar
layout: post
permalink: /mi-experiencia-con-svg/
comments: true
dsq_thread_id:
  - 2098952997
categories:
  - CSS3
  - SVG
---
La primera vez que oí hablar de **SVG** todavía estudiaba **Artes Gráficas** y de eso ya hace un tiempo, por aquel entonces la verdad es que no le preste mucha atención ya que en ese momento no le encontraba utilidad alguna, pero este interés cambio hace unos meses a raíz de un artículo que leí en sitepoint. Una vez renovado mi interés me puse a buscar información en castellano y no encontré mucha información mas allá de una <a href="http://www.desarrolloweb.com/manuales/29/" target="_blank">guía bastante antigua en desarrollo web</a> y un post bastante interesante en <a href="http://minid.net/2012/10/26/descubre-el-fabuloso-mundo-de-svg/" target="_blank">minid.net</a>, así que tras leer bastantes artículos en inglés y experimentar mucho mas con Adobe Illustrator aquí esta mi experiencia exportando **SVG**(con fuentes) para mi [web][1].

<!--more-->

# ¿QUE ES SVG?

**SVG** es el acrónimo de **Scalable Vector Graphics**, un formato para crear archivos vectoriales basado en **XML**, se convirtió en recomendación de la W3C en 2001.

## PNG vs SVG

Que mejor que un ejemplo para ver las diferencias entre estos dos formatos.

<div class="boton-centrar">
  <a target="_blank" class="boton-shortcode" href="http://jorgeatgu.com/svg.html">Ejemplo PNG vs SVG</a>
</div>

A simple vista quizás no se aprecien muchas diferencias pero si hacemos zoom en el navegador podemos observar como el **SVG** conserva la definición y el PNG la pierde. Otro dato a tener cuenta es el tamaño, y es que el **SVG** ocupa 4kb y el PNG 9kb, bastante diferencia ¿no? ahora imagínate la diferencia de tamaño y definición en archivos mas grandes.

## Soporte de SVG en los navegadores

Como podemos observar en la imagen inferior el soporte básico de **SVG** en los navegadores es bastante amplio, tan solo IE8.0 y Android Browser 2.1, 2.2 y 2.3 carecen de el, pero para Android Browser podemos solventar el problema, aquí la solución <a href="http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/03/08/dealing-with-svg-images-in-mobile-browsers/" target="_blank">artículo de adventures in web-kit land</a>.

[<img class="alignnone size-full wp-image-95" alt="SVG caniuse" src="http://jorgeatgu.com/blog/img/2013/04/Captura-de-pantalla-2013-04-10-a-las-18.29.58.png" width="725" height="398" />][2]

Podemos ver el resto de especificaciones de **SVG** soportadas por los diferentes navegadores en <a href="http://caniuse.com/#cats=SVG" target="_blank">caniuse</a>.

## Generando un SVG

A la hora de generar un **SVG** tenemos dos opciones, la primera a partir de código con **Sublime Text 2**(también con TextEdit o Notepad) y la segunda a partir de programas de edición de gráficos vectoriales como **Inskscape**(gratuito) o **Adobe Illustrator**(de pago).

### SVG generado con código


Vamos a generar un **SVG** bastante sencillo.

{% highlight HTML linenos %}
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="400" cy="80" r="70" stroke="green"
  stroke-width="5" fill="yellow"/>
</svg>
{% endhighlight %}

Este es el resultado.
![SVG][3]

### SVG generado con Adobe Illustrator


Antes de nada un pequeño recordatorio que para mí es una práctica habitual al trabajar con Adobe Illustrator y con cualquier programa, la cuál consiste en tener cada elemento de nuestro archivo en una capa diferente y esta a su vez cada capa renombrada, es decir, no dejarla con el nombre por defecto que nos proporciona Adobe Illustrator como &#8220;capa 1&#8243; y llamar a cada capa por su nombre &#8220;circulo&#8221; &#8220;letras&#8221; este método nos ahorrara en el futuro bastantes quebraderos de cabeza sobre todo si queremos tocar el código del **SVG** o animarlo.

Vamos a empezar a generar nuestro **SVG** con Adobe Illustrator el cual va a ir con una fuente que no es habitual. Podemos crear un archivo sencillo con círculos y una frase cualquiera o podemos aprovechar algún trabajo que ya tengamos hecho en Illustrator.

A la hora de exportar el **SVG** con texto tenemos dos opciones, una de ellas es pasar el texto a contornos y despreocuparnos por completo de las fuentes, simplemente nos ponemos encima del texto, botón derecho y crear contornos.

La otra opción es respetar la fuente y no contornear, insertar el **SVG** con la etiqueta svg y añadir la propiedad @font-face al **CSS**.

Una vez tengamos preparado nuestro **SVG** nos disponemos a guardar, podemos elegir entre **SVG** y **SVGZ**, este último es un **SVG** ya comprimido, en este caso nos decantaremos por el **SVG**, una vez seleccionado le damos a guardar y nos saltara este menú.

![menu svg][4]

Si ponemos el ratón encima de las diferentes opciones no saldrá una cuadro de dialogo explicándonos las diferentes opciones. En este <a href="http://help.adobe.com/es_ES/illustrator/cs/using/WS714a382cdf7d304e7e07d0100196cbc5f-6561a.html#WS714a382cdf7d304e7e07d0100196cbc5f-655ba" target="_blank">enlace </a>Adobe nos explica cada una de las propiedades que disponemos a la hora de guardar como **SVG**.

En la parte inferior del recuadro tenemos la opción de ver el código que genera el **SVG**, si pinchamos nos saltara nuestro editor de texto, en mi caso TextEdit, y allí podremos ver el código que genera el SVG.

Una vez guardado el **SVG** lo abrimos con Sublime y podemos observar todo el código que ha generado el **SVG**, aquí solamente copio el código que se refiere a la capa de texto.

{% highlight HTML linenos %}
<g id="texto">
<text transform="matrix(1 0 0 1 387.4912 209.998)" fill="#211C40"
font-family="'SlugSingle'" font-size="72.1469" letter-spacing="1">
JORGE ATGU
</text>
</g>
{% endhighlight %}

Lo importante de este código en este caso en concreto es el font-family=&#8221;&#8216;SlugSingle'&#8221;.

Ahora vamos a crear el kit de la fuente, para eso utilizamos el web font generator de <a href="http://www.fontsquirrel.com/tools/webfont-generator" target="_blank">font-squirrel</a> simplemente subimos la fuente le damos a generar nuestro kit y una vez generado los descargamos.

Una vez descomprimido el kit lo que haremos sera copiar los diferentes archivos de fuentes a nuestra carpeta de fuentes, lo siguiente sera copiar el código que ha generado el kit en nuestro archivo **CSS**, para ello utilizamos la propiedad @font-face, mucho cuidado ya que es posible que al generar el kit la fuente lleve un nombre diferente, así que hay que asegurarse que la propiedad font-family en el **SVG** y en el @font-face tengan el mismo nombre, en este caso &#8216;SlugSingle&#8217;.

{% highlight css linenos %}
@font-face {
    font-family:'SlugSingle';
    src: url('../font/slug-single-webfont.eot');
    src: url('../font/slug-single-webfont.eot?#iefix') format('embedded-opentype'),
         url('../font/slug-single-webfont.woff') format('woff'),
         url('../font/slug-single-webfont.ttf') format('truetype'),
         url('../font/slug-single-webfont.svg#SlugSingle') format('svg');
    font-weight: normal;
    font-style: normal;
}
{% endhighlight %}

Lo siguiente que haremos sera insertar nuestro **SVG** en el **HTML**, para esto tenemos diferentes opciones.

Con la etiqueta object.

{% highlight HTML linenos %}
<object type="image/svg+xml" data="tuarchivo.svg"></object>
{% endhighlight %}

Con la etiqueta img.

{% highlight HTML linenos %}
<img src="tuarchivo.svg" />
{% endhighlight %}

Con la etiqueta svg.

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink">
</svg>
{% endhighlight %}

En el caso de que nuestro **SVG** lleve fuentes sin contornear no nos quedara otra que insertarlo con la etiqueta svg, pero si hemos decidido contornear las fuentes podemos elegir cualquier etiqueta ya que no tendremos que preocuparnos por subir la fuente ni añadir a nuestro **CSS** la etiqueta @font-face.

Si quieres saber mas sobre las etiquetas disponibles a la hora de insertar un **SVG** en **HTML** en <a href="http://www.sitepoint.com/add-svg-to-web-page/" target="_blank">sitepoint</a> nos explican los pros y contras de cada una de ellas.

El siguiente post tratara sobre como animar un **SVG** con **CSS**.

Enlaces de interés:

<a href="http://www.html5rocks.com/en/tutorials/svg/mobile_fundamentals/?redirect_from_locale=es" target="_blank">Splash Vector Graphics on your Responsive Site</a><br/>
<a href="http://demosthenes.info/blog/675/Create-Adaptive-SVG-Illustrations-With-CSS" target="_blank">Create Adaptive SVG Illustrations With CSS</a><br/>
<a href="http://blog.cloudfour.com/media-queries-in-svg-images/" target="_blank">Media Queries in SVG images</a><br/>
<a href="http://www.hongkiat.com/blog/scalable-vector-graphic-css-styling/" target="_blank">Styling Scalable Vector Graphic (SVG) With CSS</a><br/>

 [1]: http://jorgeatgu.com "portfolio jorgeATGU"
 [2]: http://jorgeatgu.com/blog/img/2013/04/Captura-de-pantalla-2013-04-10-a-las-18.29.58.png
 [3]: http://jorgeatgu.com/blog/img/2013/04/SVG.png
 [4]: http://jorgeatgu.com/blog/img/2013/04/menu-svg.png