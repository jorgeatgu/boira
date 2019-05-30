---
title: Responsive Inspector, extensión para ver los media-queries de un sitio web
author: Jorge Aznar
layout: post
permalink: /responsive-inspector-extension-para-ver-los-media-queries-de-un-sitio-web/
comments: true
dsq_thread_id:
  - 2099998440
tags:
  - CSS3
  - Diseño Web
  - Responsive Web Design
---
A la hora de probar nuestras webs en **RWD(Responsive Web Design)** casi todos redimensionamos nuestros navegadores a ojo de buen cubero para ver como se va acomodando el diseño a los media-queries, vaya por delante que el único metodo practicamente infalible es probar la web en el dispositivo y en sus diferentes navegadores ya sea un ordenador, smartphone o tablet, pero claro ¿quien dispone de todos? : D!<!--more-->


Así que solemos recurrir a herramientas ya sean extensiones como <a href="https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh" target="_blank">window-resizer</a>, webs como <a href="http://www.responsinator.com/" target="_blank">responsinator</a> o la que para mi hasta ahora era la mejor opción, <a href="http://lab.maltewassermann.com/viewport-resizer/" target="_blank">Viewport Resizer</a>.
El puesto de Resizer por ahora lo acaba de ganar [Responsive Inspector][1] una extensión todavía en beta para Google Chrome, **Responsive Inspector ha sido creado por Peter Walczyszyn**([web][2] &#8211; [twitter][3]) y **Filip Łysyszyn**([web][4] &#8211; [behance][5]), vamos a ver que opciones tiene esta herramienta.

Una vez descargada la extensión de la [Chrome Web Store][6] vamos a una web hecha en responsive, en mi caso vamos a mi <a href="http://jorgeatgu.com" target="_blank">web</a> y veremos lo siguiente:

<a href="http://jorgeatgu.com/blog/img/2013/04/primer-menu.png" rel="lightbox" title="my caption"><img rel="lightbox" src="http://jorgeatgu.com/blog/img/2013/04/primer-menu.png" alt="menu responsive inspector" /></a>

Nada mas hacer click veremos los media-queries que se han empleado en la página, en este caso hay tres, cada uno de ellos consta de un **min-width a 30em, 48em y 64em**. La razón por la que utilizo EM en lugar de pixeles ya lo comente en otro post, pero si no lo has leído te enlazo el artículo que me hizo cambiar a EM, aquí el artículo de <a href="http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/" target="_blank">Cloud Four Blog</a>.

Si nos ponemos encima de la regla nos saldrá un globo con tres opciones, en primer lugar nos indica en pixeles en la posición en la que estamos, en la parte inferior disponemos de dos iconos.

<a href="http://jorgeatgu.com/blog/img/2013/04/regla.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/regla.png" alt="regla responsive inspector" /></a>

El primer icono sirve para ajustar el documento a la medida en la que estemos, simplemente hacemos click y el navegador se ajustara a la medida que hayamos seleccionado en la regla.

<a href="http://jorgeatgu.com/blog/img/2013/04/otra-imagen-1024x818.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/otra-imagen-1024x818.png" alt="resize browser" /></a>

El segundo icono lo utilizaremos para sacar un snapshot de la web, una vez que hagamos click en el tendremos tres opciones.

<a href="http://jorgeatgu.com/blog/img/2013/04/sanpshot.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/sanpshot.png" alt="snapshot" /></a>

La primera de ellas sera guardar una imagen en formato .PNG de todo el ancho y largo que ocupe la página en ese momento.
La segunda opción sera publicar la imagen en **Behance**, simplemente deberemos autorizar a la extensión y una vez autorizada iremos a Behance donde tendremos la opción de publicar la imagen.
La tercera opción sera para descartar la imagen.

<a href="http://jorgeatgu.com/blog/img/2013/04/behance.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/behance.png" alt="behance responsive inspector" /></a>

Ahora nos iremos al primer menú si hacemos click en la extensión y nos posicionamos encima de uno de los media-queries veremos como al final a la derecha salen dos llaves encerradas en un círculo.

<a href="http://jorgeatgu.com/blog/img/2013/04/css.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/css.png" alt="css responsive inspector" /></a>

Si hacemos click en el círculo se abrira una nueva pestaña en nuestro navegador y en ella podremos examinar el archivo .**css** que se ha empleado en ese **media-querie**, en este caso el **.css** corresponde al **media-querie min-width 30EM**. Y así con los diferentes **media-queries** que se han empleado en la construcción del sitio.

<a href="http://jorgeatgu.com/blog/img/2013/04/media-querie-30em.png" rel="lightbox" title="my caption"><img src="http://jorgeatgu.com/blog/img/2013/04/media-querie-30em.png" alt="media querie responsive inspector" /></a>

Seguiremos informando según vayan actualizando : )

 [1]: http://outof.me/responsive-inspector-beta-released/
 [2]: http://outof.me/
 [3]: https://twitter.com/outof_me
 [4]: http://filip.lysyszyn.pl/
 [5]: http://www.behance.net/lysyszyn
 [6]: https://chrome.google.com/webstore/detail/responsive-inspector-beta/memcdolmmnmnleeiodllgpibdjlkbpim