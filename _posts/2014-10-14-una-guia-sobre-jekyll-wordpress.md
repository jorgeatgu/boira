---
title: Una guía sobre Jekyll - Wordpress
author: Jorge Aznar
layout: post
permalink: /una-guia-sobre-jekyll-configuracion-wordpress/
comments: true
tags:
  - Diseño Web
  - Jekyll
---

Ahora que ya estamos más familiarizados con **Jekyll** vamos a ver como exportar todo nuestro contenido que anteriormente estaba disponible en Wordpress.

Voy a hablar sobre Wordpress ya que era el CMS que utilizaba anteriormente para publicar en mi blog. Si utilizáis otro podéis consultar la documentación de Jekyll donde explican como [migrar a Jekyll](http://import.jekyllrb.com/){:target="_blank"} desde diferentes plataformas de *blogging*.

El proceso esta bastante simplificado gracias a un plugin de Wordpress.

Lo primero es ir al [repositorio de GitHub](https://github.com/benbalter/wordpress-to-jekyll-exporter){:target="_blank"} donde esta alojado el plugin. Vamos a pinchar en el botón de **DOWNLOAD ZIP**. Muy importante, una vez descargado no lo vamos a descomprimir, lo vamos a dejar tal cual esta. Ahora vamos a Wordpress, y en la sección de plugins vamos a subir el archivo que nos hemos descargado. Una vez subido vamos a la sección de herramientas y nos debería de salir el plugin bajo el nombre *Export to Jekyll*, pinchamos y nos descargará un **.XML** con toda la información de nuestro blog.

Una vez que lo hemos descomprimido podemos ver que el resultado de la exportación, en mi caso voy a poner la cabecera que ha generado el plugin en uno de mis post.

{% highlight HTML %}
---
title: Mi experiencia con SVG
author: Jorge Aznar
layout: post
permalink: /mi-experiencia-con-svg/
dsq_thread_id:
  - 2098952997
tags:
  - CSS3
  - SVG
---
{% endhighlight %}

El plugin como podéis ver exporta titulos, autores y categorías.

En el tema del permalink no me voy a meter mucho, cada uno tiene su gusto a la hora de dar nombre a las urls, yo solo utilizó la dirección del post así que lo deje tal cual. Si alguien está interesado en la [documentación oficial nos explican cada método](http://jekyllrb.com/docs/permalinks/){:target="_blank"} que tenemos disponible.

Si utilizáis [disqus](https://disqus.com/){:target="_blank"} para los comentarios solamente tendréis que añadir al footer el código por defecto de disqus y todos los comentarios de vuestros post estarán disponibles.

{% highlight HTML %}
<div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'aqui-va-vuestro-usuario-de-disqus'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
           dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
           (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
       })();
   </script>
{% endhighlight %}

Si queréis que los comentarios estén disponibles en local deberéis de añadir la siguiente línea después de la variable `disqus_shortname`

{% highlight Javascript %}
var disqus_developer = 1;
{% endhighlight %}


Aunque el plugin consigue exportar bastante bien los post a **Markdown** no está de menos echarle un vistazo. En mi caso alguna negritas se habían perdido al dejar un espacio entre la palabra en negrita y los asteriscos. Para incluir las imágenes el plugin utiliza etiquetas **HTML** en lugar de la sintaxis de **Markdown**. Esto ya a gusto de cada uno si decide cambiar todo. Alguna ruta de imagen se había perdido por el camino pero esto ya es más culpa de utilizar *shortcodes* en **Wordpress** que del propio plugin.

Este plugin no nos va a descargar las imágenes que hemos utilizado en Wordpress. Esto por desgracia lo vamos a tener que hacer a mano, estuve buscando otras maneras de hacerlo pero no encontré absolutamente nada. **Quizás este método no le funcione a todo el mundo**. Yo accedí a través de la web al panel de control de mi hosting, luego al ftp web y una vez dentro de la ruta donde se alojan las imágenes, la cual suele ser `wp-contet/uploads/` en mi caso tenía dos carpetas, una del año 2013 y otra del año 2014 y dentro de ellas varias subcarpetas con cada mes del año. Yo comprimi cada carpeta por separado y una vez comprimidas las descargue, depende del peso esto puede llevar bastante tiempo. Una vez que hemos hecho esto con cada carpeta de imágenes ahora simplemente las vamos a colocar en nuestra carpeta de imágenes de **Jekyll**.

Y ahora muy importante, vamos a cambiar la ruta de las imágenes en todos los post donde tenemos imágenes. Esta tarea la podemos hacer rápidamente desde **Sublime Text**. Nos vamos a *Find in Files* en *Find* colocamos la ruta que queremos sustituir, en *Where* la carpeta donde están los post que queremos que cambiar y en *Replace* la nueva ruta, le damos a replace y asunto finiquitado.

[Gracias a Laura por el tip](https://twitter.com/SapphireGD){:target="_blank"} de comprimir y descargar todas las imágenes desde el ftp web.


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