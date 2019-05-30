---
title: Aumentando la compresión GZIP de CSS
author: Jorge Aznar
layout: post
permalink: /sorting-gzip-postcss/
comments: true
tags:
  - postCSS
  - GZIP
---

En este artículo vamos a ver como podemos aumentar **ligeramente** la compresión **GZIP** de nuestros archivos **CSS** con el plugin [postCSS-sorting](https://github.com/hudochenkov/postcss-sorting).

<!--more-->

Un tweet de Hugo Giraudel me ponía tras la pista de esta técnica desconocida para mi.

{% tweet 701750108778586112%}

Así que aprovechando que utilizo postCSS-sorting para ordenar mis **CSS** he decidido ponerla a prueba.

<blockquote>
Antes de continuar esta técnica no es exclusiva de **postCSS**, tenemos otros métodos para ordenar nuestros archivos **CSS**.
</blockquote>

Todo esto no sirve de nada si la compresión **GZIP** no esta activada en el servidor donde alojamos nuestra web. En este [enlace](http://www.whatsmyip.org/http-compression-test/) puedes comprobar si esta activada en tu servidor.

<blockquote>
	GZIP es un compresor genérico que se puede aplicar a cualquier flujo de bytes. Lo que hace es recordar cierto contenido visto anteriormente para después buscar y reemplazar fragmentos de datos duplicados de forma eficaz.
	<a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer?hl=es">Optimizar la codificación y el tamaño de transferencia de los recursos basados en texto</a>
</blockquote>

Vamos a instalar postcss-sorting a través de **NPM**.

{% highlight BASH %}
npm i postcss-sorting --save-dev
{% endhighlight %}

Ahora vamos a añadirlo a nuestra tarea de **postCSS** en **Gulp**.

{% highlight HTML %}
gulp.task('css', function() {
    var processors = [
        sorting({
            "sort-order": "yandex"
        })
    ];
    return gulp.src('./src/css/styles.css')
    .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});
{% endhighlight %}

Este plugin trae una ordenación por defecto que se llama *default*. También tenemos a nuestra disposición los siguientes métodos para ordenar las propiedades, los métodos son los siguientes *csscomb*, *yandex* y *zen*. Para consultar en detalle como ordenada cada una de estas opciones las propiedades de nuestros **CSS** podéis consultarlo en este [enlace](https://github.com/hudochenkov/postcss-sorting/tree/master/configs).

Para este artículo he utilizado un **CSS** con un tamaño descomunal y fuera de toda lógica alguna como es el que proporciona el por desgracia conocido como bootstrap.

Y a continuación los resultados.

**CSS** sin ordenar: 19.690 bytes

**CSS** ordenado con csscomb: 19.429 bytes

**CSS** ordenado con yandex: 19.427 bytes

**CSS** ordenado con zen: 19.470 bytes

Así que simplemente por ordenar nuestros archivos con el método de **Yandex** hemos reducido un 1.34%(263 bytes) el archivo de **CSS**.

He de decir que he hecho otras pruebas con diferentes **CSS** y el método de **CSSCOMB** daba mejor resultado, y como podéis ver en el caso de bootstrap solamente se diferencia en 2 bytes.

El código como siempre esta disponible en [GitHub](https://github.com/jorgeatgu/gulp-postCSS/tree/master/gzip-postcss-sorting)