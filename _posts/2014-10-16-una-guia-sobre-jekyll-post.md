--- title: Una guía sobre Jekyll - configurando los post
author: Jorge Aznar
layout: post
permalink: /una-guia-sobre-jekyll-configuracion-post/
comments: true
tags:
  - Diseño Web
  - Jekyll
---

En este post vamos a ver el código que necesitamos para configurar los **layouts de default y post** que vimos en la [segunda parte de la guía](http://jorgeatgu.com/blog/una-guia-sobre-jekyll-configuracion/){:target="_blank"}.

Para ello voy a utilizar el código **HTML** que viene por defecto con la instalación de **Jekyll**.

## Default

Bueno lo primero vamos con el **layout de default**.

{% highlight HTML linenos %}
<!DOCTYPE html>
<html>

  {{ "{% include head.html " }}%}

  <body>

    {{ "{% include header.html " }}%}

    <div class="page-content">
      <div >
        {{ "{{ content " }}}}
      </div>
    </div>

    {{ "{% include footer.html " }}%}

  </body>

</html>

{% endhighlight %}

Lo más importante es la variable `{{ "{{ content " }}}}` con esta variable vamos a incluir todo el contenido que tenemos alojado en los post.

Los includes de `header.html head.html footer.html` como vimos anteriormente los utilizamos para incluir porciones de código que se van a ir repitiendo constantemente a lo largo de nuestro tema.

## post

Ahora vamos a ver todo lo que incluye nuestro **layout post**. Hay que tener en cuenta que este layout implementa a través del **front matter** el **layout default**. Así que todo lo que viene en el layout default es utilizado por el layout post. A continuación el **front matter** de post.

{% highlight HTML linenos %}
---
layout:default
---
{% endhighlight %}

A continuación el layout de post que viene por defecto con **Jekyll**.

{% highlight HTML linenos %}
<div class="post">

  <header class="post-header">
    <h1 class="post-title">{{ "{{ page.title " }}}}</h1>
    <p class="post-meta">{{ "{{  page.date | date: "%b %-d, %Y" " }}}} {{ "{% if page.author " }}%} • {{ "{{ page.author " }}}} {{ "{% endif " }}%} {{ "{% if page.meta " }}%} • {{ "{{ page.meta " }}}}{{ "{% endif " }}%}</p>
  </header>

  <article class="post-content">
     {{ "{{ content " }}}}
  </article>
</div>

{% endhighlight %}

Con `{{ "{{ page.title " }}}}` obtenemos el nombre que tenga la página, esto se lo daremos en el **front matter**.

### Fecha y autor

Lo siguiente es la manera de obtener la fecha y autor. A mi este método que trae por defecto **Jekyll** no me gusta así que os voy a mostrar el que utilizo en el blog.

{% highlight HTML linenos %}

        Por {{ "{{ page.author " }}}} el
          {{ "{{  page.date | date: '%-d' " }}}} de
            {{ "{% assign m = page.date | date: '%-m' " }}%}
            {{ "{% case m " }}%}
              {{ "{% when '1' " }}%}enero
                {{ "{% when '2' " }}%}febrero
                {{ "{% when '3' " }}%}marzo
                {{ "{% when '4' " }}%}abril
                {{ "{% when '5' " }}%}mayo
                {{ "{% when '6' " }}%}junio
                {{ "{% when '7' " }}%}julio
                {{ "{% when '8' " }}%}agosto
                {{ "{% when '9' " }}%}septiembre
                {{ "{% when '10' " }}%}octubre
                {{ "{% when '11' " }}%}noviembre
                {{ "{% when '12' " }}%}diciembre
            {{ "{% endcase " }}%}
            de
            {{ "{{  page.date | date: '%Y' " }}}}

{% endhighlight %}

Lo primero que vemos es `{{ "{{ page.author " }}}}` con ella vamos a obtener el nombre del autor.

Con la variable `{{ "{{  page.date | date: '%-d' " }}}}` vamos a obtener el día en el que se publicó el artículo.

Con la variable `{{ "{% assign m = page.date | date: '%-m' " }}%}` vamos a obtener el mes en el que se publicó el artículo. Por defecto **Jekyll** viene con los meses en inglés así que vamos a utilizar un `case` para cambiar el nombre de los meses.

Abrimos el `case` y le añadimos el valor `m` que es el que representa a los meses.

{% highlight HTML linenos %}
{{ "{% case m " }}%}
{% endhighlight %}

Lo siguiente es utilizar `when` y la posición del mes. Así el valor 1 corresponde a enero.

{% highlight HTML linenos %}
{{ "{% when '1' " }}%}enero
{% endhighlight %}

Así que con este trozo de código le decimos que en caso de que sea `m` sustituya los valores por los nombres en castellano de los meses. Recordad que los nombres de los meses van en minúscula.

Por último con la variable `{{ "{{  page.date | date: '%Y' " }}}}` vamos a obtener el año en el que se publicó el artículo.

Así que todo este código al final da como resultado lo siguiente

{% highlight HTML linenos %}
Por {{ page.author }} el
          {{ page.date | date: "%-d" }} de
            {% assign m = page.date | date: "%-m" %}
            {% case m %}
              {% when '1' %}enero
                {% when '2' %}febrero
                {% when '3' %}marzo
                {% when '4' %}abril
                {% when '5' %}mayo
                {% when '6' %}junio
                {% when '7' %}julio
                {% when '8' %}agosto
                {% when '9' %}septiembre
                {% when '10' %}octubre
                {% when '11' %}noviembre
                {% when '12' %}diciembre
            {% endcase %}
            de
            {{ page.date | date: "%Y" }}
{% endhighlight %}

### Artículo anterior y posterior

Ahora vamos a añadir un par de botones para facilitar la navegación entre artículos.

Con el siguiente código le vamos a decir con un `if` que nos añada un enlace y que la url sea la siguiente al artículo donde estamos. El orden será por fecha.

{% highlight HTML %}
{{ "{% if page.next " }}%}
  <a href="{{ "{{  site.baseurl " }}}}{{ "{{  page.next.url " }}}}">Artículo posterior</a>
{{ "{% endif " }}%}
{% endhighlight %}

Para obtener el artículo anterior lo haremos con el siguiente código que en este caso obtendrá la url del artículo anterior.

{% highlight HTML %}
{{ "{% if page.previous " }}%}
  <a href="{{ "{{  site.baseurl " }}}}{{ "{{  page.previous.url " }}}}">Artículo anterior</a>
{{ "{% endif " }}%}
{% endhighlight %}

Ahora solo hace aplicarle unos estilos a través de **CSS** y ya tenemos un par de botones que irán de artículo en artículo.

### Comentarios

Y ya para acabar con el layout de post vamos a incluir los comentarios. Como ya dije anteriormente yo utilizó los comentarios de [Disqus](http://disqus.com){:target="_blank"}.

No tiene mayor complicación que añadir un `if` con page.comments y dentro de el incluir el código que nos proporciona Disqus.

{% highlight Javascript %}
{% if page.comments %}
    <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'aqui-tu-nombre-de-disqus'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
           dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
           (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
       })();
   </script>
  {% endif %}
{% endhighlight %}

Y todo esto da como resultado está página que ahora mismo estáis leyendo.



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