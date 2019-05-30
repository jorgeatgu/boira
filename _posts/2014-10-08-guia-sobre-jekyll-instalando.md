---
title: Guía sobre Jekyll - Instalación
author: Jorge Aznar
layout: post
permalink: /una-guia-sobre-jekyll/
comments: true
tags:
  - Blog
  - Jekyll
---

En una serie de post voy a relatar a modo de guía todo lo aprendido estas últimas semanas con **Jekyll**.

<!--more-->

Como soy usuario de **OSX** voy a utilizar el Terminal para ejecutar una serie de comandos que son necesarios para poder instalar **Jekyll** en nuestro ordenador. Aquellos que le tengáis miedo al Terminal o no os guste utilizarlo no os asustéis ya que son unos comandos bastante sencillos.

Lo primero que vamos a hacer es abrir el Terminal.

Ahora vamos a instalar [RVM](http://rvm.io/){:target="_blank"}

{% highlight bash %}
curl -sSL https://get.rvm.io | bash -s stable
{% endhighlight %}

Ahora para asegurarnos de que hemos instalado RVM vamos a hacer lo siguiente

{% highlight bash %}
Open ~/.bash_profile
{% endhighlight %}

Este comando nos abre un documento en Texedit en el que vamos a pegar lo siguiente

{% highlight bash %}
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
{% endhighlight %}

Una vez guardado y cerrado el archivo vamos a reiniciar el Terminal.

Ahora vamos a instalar Ruby. Para saber si ya lo tenemos instalado podemos escribir lo siguiente en el Terminal

{% highlight bash %}
ruby -v
{% endhighlight %}

En mi caso que ya lo tengo instalado me dice lo siguiente

{% highlight bash %}
ruby 2.1.3p242 (2014-09-19 revision 47630) [x86_64-darwin13.0]
{% endhighlight %}

En caso de que no lo tengáis instalado vamos a ello

{% highlight bash %}
rvm install 2.1.3
{% endhighlight %}

Ahora vamos a actualizar ***Ruby Gems***

{% highlight bash %}
gem update --system
{% endhighlight %}

Y ahora por fin vamos a instalar **Jekyll**

{% highlight bash %}
gem install jekyll
{% endhighlight %}

Ahora vamos a instalar un proyecto en la carpeta de Dropbox, así vamos a poder acceder al proyecto desde el dispositivo que queramos.

{% highlight bash %}
cd dropbox
{% endhighlight %}

Ahora vamos a instalar el nuevo proyecto

{% highlight bash %}
jekyll new proyecto-jekyll
{% endhighlight %}

La instalación como podéis comprobar es casi instántanea. Si hemos hecho todo bien el Terminal mostrará el siguiente mensaje

{% highlight bash %}
New jekyll site installed in aqui/la-ruta/donde-hemos-instalado-el-proyecto
{% endhighlight %}

A continuación una imagen con la estructura por defecto de **Jekyll**. Está estructura la iremos modificando en los siguientes post que iremos viendo sobre **Jekyll**.

![Estructura de Jekyll](http://jorgeatgu.com/blog/img/2014/10/estructura-jekyll.png)

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