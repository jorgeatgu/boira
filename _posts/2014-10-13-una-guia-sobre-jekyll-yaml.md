---
title: Una guía sobre Jekyll - YAML
author: Jorge Aznar
layout: post
permalink: /una-guia-sobre-jekyll-configuracion-yaml/
comments: true
tags:
  - Diseño Web
  - Jekyll
---

El archivo de configuración de **Jekyll** se llama `_config.yml` esta en **YAML**. **YAML** es el acrónimo de *Ain't Markup Language*, un lenguaje de marcado con una sintaxis bastante sencilla.

[Aqui le podéis echar un vistazo a la especificación de YAML](http://www.yaml.org/spec/1.2/spec.html){:target="_blank"}

También vamos a ver cosas de [LIQUID](http://docs.shopify.com/themes/liquid-documentation/basics){:target="_blank"}, un lenguaje creado por Shopify. A continuación un par de enlaces en castellano que son de obligada lectura [Liquid para diseñadores](https://github.com/Shopify/liquid/wiki/ES-Liquid-para-dise%C3%B1adores){:target="_blank"} y [Liquid para programadores](https://github.com/Shopify/liquid/wiki/ES-Liquid-para-programadores){:target="_blank"}

Como ya he dicho anteriormente la sintaxis es bastante sencilla. Lo primero es definir una variable seguida de : y después de dejar un espacio le vamos a asignar un valor.

Un apunte antes de empezar, con **YAML no podemos usar tabulaciones**. Así que hay que utilizar los espacios normales.

{% highlight YAML %}
title: Una guía sobre Jekyll
{% endhighlight %}

Como bien supondréis **title** es la variable y **Una guía sobre Jekyll** es el valor.

Si vamos a pasar más de un valor a la variable lo podemos hacer de la siguiente manera

{% highlight YAML %}
exclude: ["config.codekit", ".sass-cache", ".gitignore" ]
{% endhighlight %}

Esta variable le dice a **Jekyll** que a la hora de compilar excluya los archivos y carpetas que le hemos indicado.

También lo podemos hacer en forma de lista por ejemplo a la hora de indicar las categorías en las que ira por ejemplo este post.

{% highlight YAML %}
tags:
  - Diseño Web
  - Jekyll
{% endhighlight %}

Esto último es parte del código que incluyo al principio de cada post.

Ahora vamos a crear un array

{% highlight YAML %}
estructura:
  post: diez
  categorias: cinco
{% endhighlight %}


## _config.yml

Ya conocemos algo más sobre **YAML** así que ahora vamos a ver mi archivo de configuración y voy a ir explicando para que utilizo cada variable en mi tema.

{% highlight YAML %}
# Inicio
name: Scalable
description: Un blog sobre SVG · CSS3 · HTML5
themeJekyll: Amanixer
version: 0.1.0
timezone: Europe/Madrid

# Configuracion
url: http://jorgeatgu.com/blog
baseurl: /blog
paginate: 5
paginate_path: "page:num"
highlighter: pygments
markdown: kramdown

# Redes Sociales
author: Jorge Aznar Tobajas
twitter: https://twitter.com/jorgeatgu
CodePen: https://codepen.io/jorgeatgu
GooglePlus: https://plus.google.com/+JorgeATGU/
GitHub: https://github.io/jorgeatgu/
Behance: https://www.behance.net/jorgeatgu
Facebook: https://facebok.com/jorgeatgu
Vimeo: https://vimeo.com/jorgeatgu
dribbble: http://www.dribbble.com/jorgeATGU

exclude: [ config.codekit ]
{% endhighlight %}

Para utilizar las variables que hemos almacenado en `config.yml` siempre las vamos a invocar en nuestros archivos a través de `site.` y seguido el nombre de la variable. Para utilizar la variable `url:` lo haremos de la siguiente manera

{% highlight LIQUID %}
{{ "{{ site.url " }}}}
{% endhighlight %}

En este caso dará este resultado

{% highlight HTML %}
{{ site.url }}
{% endhighlight %}

Sin duda alguna esta es la variable que más vamos a ir utilizando a la hora de construir nuestro tema de **Jekyll**. Así cada vez que necesitemos escribir la dirección simplemente tenemos que llamarla con site.url y así nos ahorraremos el tener que escribir la dirección de nuestra web donde se aloja **Jekyll**.

### Inicio

Vamos a ir viendo por bloques las parte de mi archivo `config.yml`. Las secciones las podéis llamar como más os apetezca. Esta sección que vamos a ver tiene partes prescindibles como **themeJekyll** y **version**


name: **el nombre de vuestro blog**


description: **la descripción de vuestro blog**


themeJekyll: **el nombre de vuestro tema**


version: **la versión de vuestro tema**


timezone: **la zona horaria en la que os encontréis. [Más información](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones){:target="_blank"}**



### Configuración

Vamos a ver la sección configuración. Aquí vamos a adjuntar la dirección de nuestro blog, y algo bastante importante como el número de post que irá en cada página.


url: **la dirección de vuestro blog**


baseurl: **nos vendrá bien cuando no tengamos que utilizar la dirección completa de nuestro blog**


paginate: **el número de post por páginas**


paginate_path: **la nomenclatura que tendrá la paginación. Por ejemplo "page:num" da como resultado: /page1/**


highlighter: **para incluir snippets de código. [Más información](http://pygments.org/languages/){:target="_blank"}**


markdown: **interprete de Markdown. Imprescindible si vas a [alojar tu blog en GitHub Pages](https://help.github.com/articles/migrating-your-pages-site-from-maruku/){:target="_blank"}**

### Redes Sociales

Aquí vamos a ir incluyendo todos los enlaces a nuestros perfiles en redes sociales. Otra buena manera de no andar repitiendo toda la dirección cuando queremos incluir un enlace a nuestro perfil.

En mi header y footer utilizo las variables con cada nombre de red social de la siguiente manera

{% highlight HTML %}

<a target="_blank" href="{{ "{{ site.twitter " }}}}" title="Twitter">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
    <use xlink:href="{{ "{{ site.urliconos " }}}}#twitter"/>
  </svg>
</a>
<a target="_blank" href="{{ "{{ site.CodePen " }}}}" title="codepen">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
    <use xlink:href="{{ "{{ site.urliconos " }}}}#codepen"/>
  </svg>
</a>
<a target="_blank" href="{{ "{{ site.GitHub " }}}}" title="GitHub">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
    <use xlink:href="{{ "{{ site.urliconos " }}}}#github"/>
  </svg>
</a>
<a target="_blank" href="{{ "{{ site.Behance " }}}}" title="behance">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="iconos-footer">
    <use xlink:href="{{ "{{ site.urliconos " }}}}#behance"/>
  </svg>
</a>

{% endhighlight %}

Cada vez que hagamos una modificación en `config.yml` tenemos que ejecutar un build para volver a compilar todo y que los cambios se hagan efectivos sobre nuestro sitio. Recordad que se ejecutaba con el siguiente comando desde el Terminal

{% highlight BASH %}
sudo jekyll build
{% endhighlight %}

Si tenéis el server en funcionamiento no hace falta cerrarlo, simplemente abrid otra ventana del Terminal y ejecutad el comando desde esa ventana.

En la documentación oficial de **Jekyll** tenemos más [variables para incluir en nuestro archivo de configuración](http://jekyllrb.com/docs/configuration/){:target="_blank"}.

Si queréis echarle un ojo a archivos de configuraciones curradisimos y de paso sacar alguna idea daros una vuelta por [Jekyll Themes](http://jekyllthemes.org){:target="_blank"}, basta con mirar en los repositorios de los temas para ver los archivos sin necesidad de tener que descargar todo el tema.


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