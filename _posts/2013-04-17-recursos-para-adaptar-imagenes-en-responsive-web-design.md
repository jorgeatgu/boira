---
title: Recursos para adaptar imágenes en Responsive Web Design
author: Jorge Aznar
layout: post
permalink: /recursos-para-adaptar-imagenes-en-responsive-web-design/
comments: true
dsq_thread_id:
  - 2099406939
tags:
  - Diseño Web
  - HTML5
  - Responsive Web Design
---
Por el momento no tenemos ninguna etiqueta en **HTML** que sirva para adaptar las imágenes a las diferentes resoluciones y dispositivos que pueblan el mercado,<!--more--> ya sean smartphones, tabletas o monitores. En

<a href="http://responsiveimages.org/" target="_blank"><strong>RICG</strong></a>(**Responsive Images Comunity Group**) han propuesto una etiqueta y un atributo para adaptar las imágenes pero las cosas de palacio van despacio, muy despacio.

# ETIQUETA PICTURE

{% highlight HTML linenos %}<picture>
  <source media="(min-width: 40em)" srcset="big.jpg 1x, big-hd.jpg 2x">
  <source srcset="small.jpg 1x, small-hd.jpg 2x">
  <img src="fallback.jpg" alt="">
</picture>
{% endhighlight %}

# ATRIBUTO SRCSET

{% highlight HTML linenos %}<img src="fallback.jpg" alt="" srcset="small.jpg 640w 1x, small-hd.jpg 640w 2x, med.jpg 1x, med-hd.jpg 2x ">
{% endhighlight %}

Si alguien esta interesado en seguir la evolución puede apuntarse a la lista de correo: http://list.responsiveimages.org

Mientras se busca una solución para servir imágenes según la resolución del dispositivo podemos aprovechar los diferentes recursos gratuitos de los que disponemos.

# **Picturefill** por **Scott Jehl**

Cuando me ha hecho falta adaptar las imágenes siempre he recurrido a <a href="https://github.com/scottjehl/picturefill" target="_blank">Picturefill </a>para mí es la mejor solución y su puesta en funcionamiento es bastante sencilla.

Lo primero una aclaración, cuando nos descargamos **Picturefill** de **GitHub** incluso en la propia página el ejemplo va en pixeles, yo prefiero utilizar EM, si alguien quiere seguir utilizando pixeles para el Responsive le invito a que se lea este <a href="http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/" target="_blank">artículo de CloudBlog</a> y seguro que cambia de opinión.

Antes de nada tenemos que tener preparadas nuestras imágenes para las diferentes medidas, estas medidas que pongo son perfectamente modificables para el caso y gusto de cada uno.

Para el data-media=&#8221;(min-width:30em) utilizaremos &#8220;fondomedium.jpg&#8221; 500 × 156 pixeles.<br/>
Para el data-media=&#8221;(min-width:48em) utilizaremos &#8220;fondolarge.jpg&#8221; 800 × 250 pixeles.<br/>
Para el data-media=&#8221;(min-width:64em) utilizaremos &#8220;fondojorgeatgu.jpg&#8221; 1024 × 319 pixeles.<br/>

En el caso de que ningún dispositivo sea superior a 30em se servirá &#8220;fondosmall.jpg&#8221;

Ahora vamos a incluir este código en nuestro **HTML **.

{% highlight HTML linenos %}<div data-picture data-alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
        <div data-picture data-alt="portada JORGEATGU">
      <div data-src="img/fondosmall.jpg"></div>
      <div data-src="img/fondomedium.jpg" data-media="(min-width:30em)"></div>
      <div data-src="img/fondolarge.jpg" data-media="(min-width:48em)"></div>
      <div data-src="img/fondojorgeatgu.jpg" data-media="(min-width:64em)"></div>

      <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
      <noscript><img src="img/fondojorgeatgu.jpg" alt="portada JORGEATGU"></noscript>
</div>{% endhighlight %}

En el atributo data-src indicaremos la ruta que lleva a nuestra imagen.
En el data-media indicaremos la medida en **EM**. Con un mind-width: 30em le estamos diciendo que sirva la imagen a los dispositivos que tengan mas de 30em, y lo mismo para el resto de data-media.

También hay soporte para IE8 pero no malgastare mucho tiempo, si alguien quiere implementarlo puede acceder a la información en la página de **Picturefill**.

Aquí podemos ver el ejemplo que hemos hecho, simplemente redimensionar vuestro navegador y veremos como la imagen se va modificando.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/picturefill/picturefill.html">VER EJEMPLO!</a>
</button>

En la [web de Scott][1] podemos ver **Picturefill** en funcionamiento, simplemente redimensionar vuestro navegador y veremos como la imagen se va modificando.

# **Adaptive Images** por **Matt Wilcox**.

Es otra solución para servir imágenes según la resolución del dispositivo, en este recurso a parte de utilizar **JavaScript** también modificaremos el .htacces y añadiremos un archivo .php el proceso no requiere mayor complejidad y en la propia página nos indica perfectamente los pasos a seguir para su puesta en funcionamiento.

<a href="http://adaptive-images.com/" target="_blank">Adaptive Images Web</a>

 [1]: http://scottjehl.github.io/picturefill/