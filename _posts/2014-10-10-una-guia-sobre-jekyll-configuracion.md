---
title: Guía sobre Jekyll - configuración
author: Jorge Aznar
layout: post
permalink: /una-guia-sobre-jekyll-configuracion/
comments: true
tags:
  - Diseño Web
  - Jekyll
---

El otro día vimos el primer post de la guía sobre **Jekyll**. En el vimos como [instalar todo lo necesario para empezar a trabajar con Jekyll](http://jorgeatgu.com/blog/una-guia-sobre-jekyll/){:target="_blank"}.

Nos quedamos con la estructura que viene por defecto al instalar **Jekyll**.

![Estructura de Jekyll](http://jorgeatgu.com/blog/img/2014/10/guia-jekyll-estructura-ampliada.png)

Ahora vamos a ver las diferentes carpetas y archivos que vienen en la instalación.

## _includes

Aquí irán nuestras porciones de código que se suelen repetir en nuestras páginas, los cuales vamos a ir añadiendo con **includes** en nuestros layouts. Por defecto **Jekyll** nos crea `footer.html head.html header.html` ya será cuestión de cada uno ir creando nuestros propios **includes** con nuestro propio código.

Como ejemplo os dejo el que utilizo para mi header.html`

{% highlight HTML %}
<header>
    <nav class="proxima-nova">
      <ul class="menu-principal">
        <li><a href="http://jorgeatgu.com/index">INICIO</a></li>
        <li><a href="http://jorgeatgu.com/trabajos">TRABAJOS</a></li>
        <li><a href="http://jorgeatgu.com/contacto">CONTACTO</a></li>
        <li><a href="http://jorgeatgu.com/blog/">BLOG</a></li>
      </ul>
    </nav>
    <ul class="social-header">
                <a target="_blank" href="https://twitter.com/jorgeATGU" title="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
                        <use xlink:href="/img/social-sprite.svg#twitter"/>
                    </svg>
                </a>
                <a target="_blank" href="http://codepen.io/jorgeatgu" title="codepen">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
                        <use xlink:href="/img/social-sprite.svg#codepen"/>
                    </svg>
                </a>
                 <a target="_blank" href="https://github.com/jorgeatgu" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
                        <use xlink:href="/img/social-sprite.svg#github"/>
                    </svg>
                </a>
                <a target="_blank" href="http://be.net/jorgeatgu" title="behance">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
                        <use xlink:href="/img/social-sprite.svg#behance"/>
                    </svg>
                </a>
    </ul>
  </header>
{% endhighlight %}

## _layouts

Lo que vienen a ser las plantillas. Por defecto **Jekyll** crea `default.html page.html post.html` al igual que con los **includes** aquí podemos crear tantas plantillas como queramos para facilitarnos el trabajo. Para llamar a un **layout** deberemos incluir lo siguiente en la **cabecera de nuestro HTML**

{% highlight HTML %}
---
layout: default
---
{% endhighlight %}

Por ejemplo mi **layout** default tiene la siguiente estructura.

{% highlight HTML %}
<!DOCTYPE html>
<html>

{{ "{% include head.html " }}%}

  <body>

    {{ "{% include header.html " }}%}

    <article >
        {{ "{{ content " }}}}
    </article>

    {{ "{% include footer.html " }}%}

  </body>

</html>
{% endhighlight %}

Como veis aquí ya hago uso de los **includes** que he mencionado anteriormente. Y con muy pocas líneas ya tengo montada la estructura de la página.

Luego a mi **layout** de `post.html` le incluyo la parte de la paginación, la fecha, autor del post y los comentarios de disqus. En este **layout** hago una llamada al **layout** default y por mi parte ya solo falta escribir el contenido de un post y que **Jekyll** compile todo para convertirlo en una página como esta que estáis leyendo ahora mismo.

## _posts

No tiene mayor misterio que guardar aquí los artículos que vamos escribiendo. Lo único es que hay que ser muy estricto con el nombre del archivo. Este siempre va a empezar con la fecha en este orden **AÑO-MES-DIA-nombre-del-articulo.md** así este artículo tiene este nombre **2014-10-10-una-guia-sobre-jekyll-configuracion.md**

## _sass

Esta carpeta tampoco tiene mayor misterio. Aquí vamos a incluir nuestros archivos `.scss` y Jekyll se encargará de compilarlos y mandarlos a la carpeta CSS de nuestro _site. En **GitHub** podemos ver un [ejemplo sobre Jekyll y SASS](https://github.com/jekyll/jekyll-sass-converter/tree/master/example){:target="_blank"}


## Creando carpetas

Vamos a crear unas cuantas carpetas que desde mi punto de vista son útiles y necesarias.

### _drafts

Como su nombre indica aquí irán nuestros drafts o borradores de artículos que por el motivo que sea todavía no están listos para publicar. Está carpeta no se compila por Jekyll **a no ser que nosotros se lo digamos a través de un comando**. Y este comando solo mostrará el borrador en local.

### _assets _img _js

Aquí ya que impere el orden o el caos que cada uno lleva en sus proyectos. Si somos ordenados nos creamos una carpeta donde dentro irán los scripts de Javascript, otra para las imágenes y también incluimos la de CSS. Si lo que nos gusta es el caos y la destrucción pues las creamos por separado sin problemas.

### _plugins

Aquí es donde van nuestros [plugins de Jekyll](http://jekyllrb.com/docs/plugins/){:target="_blank"}. Esta carpeta se tiene que llamar así, si le cambiamos el nombre no funcionará ningún plugin. Todavía es pronto para hablar de plugins así que lo vamos a dejar para el final ya que tampoco encierra ningún misterio y por ahora no son vitales para el desarrollo de nuestro sitio.


## Lanzando el servidor con Jekyll

En nuestra carpeta de **Jekyll** vemos un `index.html`. Como su nombre indica y como todos sabemos es la página principal. Por defecto nos viene con una configuración que recomiendo que todavía no borréis para así poder ver en funcionamiento **Jekyll**.

### Server

Para poder ver nuestros cambios y progresos que vamos haciendo en Jekyll tenemos un comando desde el Terminal que nos lanza un server en local.

Lo primero es abrir el Terminal y posicionarnos en la carpeta de nuestro proyecto, en este caso vamos a Dropbox y a la carpeta proyecto-jekyll

{% highlight bash %}
cd dropbox/proyecto-jekyll
{% endhighlight %}

Ahora vamos a lanzar el server desde el Terminal

{% highlight bash %}
sudo jekyll serve -w
{% endhighlight %}

Nos saldrá el siguiente mensaje

{% highlight bash %}
proyecto-jekyll $ sudo jekyll serve -w
Configuration file: /Users/jorgeat/Dropbox/proyecto-jekyll/_config.yml
            Source: /Users/jorgeat/Dropbox/proyecto-jekyll
       Destination: /Users/jorgeat/Dropbox/proyecto-jekyll/_site
      Generating...
                    done.
 Auto-regeneration: enabled for '/Users/jorgeat/Dropbox/proyecto-jekyll'
Configuration file: /Users/jorgeat/Dropbox/proyecto-jekyll/_config.yml
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
{% endhighlight %}

Ahora copiamos y pegamos en nuestro navegador la dirección de **server address:** http://0.0.0.0:4000/ y veremos lo siguiente

![Index de Jekyll](http://jorgeatgu.com/blog/img/2014/10/index-jekyll-serve.png)

Está es la configuración por defecto del `index.html` que trae **Jekyll**.

### _site

Lanzar el servidor hace que **Jekyll** compile todo y nos cree una carpeta llamada _site donde nuestro sitio ya está todo montado y listo para subir a nuestro servidor.

Cada post irá en una carpeta individual con el nombre del post y dentro de ella un `index.html`.

![Nueva carpeta _site](http://jorgeatgu.com/blog/img/2014/10/jekyll-site.png)

Podemos compilar todo sin necesidad de lanzar el servidor local, lo vamos a hacer con este comando a través del Terminal

{% highlight bash %}
sudo jekyll build
{% endhighlight %}

Para lanzar el servidor en local y poder ver nuestros drafts o borradores lo haremos con el siguiente comando

{% highlight bash %}
sudo jekyll serve --drafts
{% endhighlight %}

Y así podemos ver como va quedando nuestro artículo en el servidor local. Como ya he dicho anteriormente esto no va a la carpeta de _site hasta que nosotros no guardemos el artículo en la carpeta de _posts.

En la documentación de Jekyll nos [enseñan más comando básicos](http://jekyllrb.com/docs/usage/){:target="_blank"}.

Y por último nos queda el archivo de configuración `_config.yml` pero eso será en el próximo post ya que este archivo da mucho de si.

Como ya dije en el primer post yo solo conocía YAML y LIQUID de pasada, conforme iba construyendo mi tema de **Jekyll** iba leyendome la documentación que hay sobre ellos. Así que le podéis pegar un repaso a la documentación de [YAML](http://www.yaml.org/){:target="_blank"} y de [LIQUID](http://docs.shopify.com/themes/liquid-documentation/basics){:target="_blank"}. También a la de [Jekyll](http://jekyllrb.com/docs/home/){:target="_blank"}.



<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/blog/una-guia-sobre-jekyll/"> PRIMERA PARTE DE LA GUÍA</a>
</button>
<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/blog/una-guia-sobre-jekyll-configuracion-yaml/"> TERCERA PARTE DE LA GUÍA</a>
</button>
<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/blog/una-guia-sobre-jekyll-configuracion-wordpress/"> CUARTA PARTE DE LA GUÍA</a>
</button>
<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/blog/una-guia-sobre-jekyll-configuracion-post/"> QUINTA PARTE DE LA GUÍA</a>
</button>