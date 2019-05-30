---
title: Dando soporte a IE8 con postCSS
author: Jorge Aznar
layout: post
permalink: /postcss-internet-explorer-ocho/
comments: true
tags:
  - postCSS
  - IE8
---

Por desgracia no son pocos los proyectos en los que todavía se da soporte a un navegador de la década pasada como es el caso de Internet Explorer 8. Dar soporte a este navegador es un sumidero de horas, y de desesperación por parte de la gente a la que le toca lidiar con experiencias tan terribles como intentar utilizar las *developer tools* de IE8.

<!--more-->

Para ahorrarnos unas cuantas búsquedas, y unas cuantas horas tenemos una batería de plugins de **postCSS** que actúan como **fallbacks**. Como es un poco tedioso ir uno a uno instalando estos plugins [Jonanthan Neal](https://github.com/jonathantneal/) ha creado un pack llamado [oldie](https://github.com/jonathantneal/oldie) que se compone de:

- [PostCSS Calc](https://github.com/postcss/postcss-calc)

- [PostCSS UnMQ](https://github.com/jonathantneal/postcss-unmq)

- [PostCSS UnRoot](https://github.com/jonathantneal/postcss-unroot)

- [PostCSS UnNth](https://github.com/jonathantneal/postcss-unnth)

- [PostCSS UnNot](https://github.com/jonathantneal/postcss-unnot)

- [PostCSS UnOpacity](https://github.com/jonathantneal/postcss-unopacity)

- [PostCSS UnRGBA](https://github.com/jonathantneal/postcss-unrgba)

- [PostCSS Pixrem](https://github.com/robwierzbowski/node-pixrem)

- [PostCSS Pseudo Elements](https://github.com/axa-ch/postcss-pseudoelements)

## Rename

Vamos a crear un **CSS** especifico para IE8. Así que vamos a echar mano de Gulp-Rename para renombrar nuestro **CSS**.

Abrimos el terminal y vamos a escribir lo siguiente

{% highlight BASH %}
npm install --save-dev gulp-rename
{% endhighlight %}

Y vamos a añadirlo a nuestro gulpfile.js

{% highlight JavaScript %}
var rename = require('gulp-rename');
{% endhighlight %}

## oldie

Lo primero que vamos a hacer antes de nada es instalar [oldie](https://github.com/jonathantneal/oldie).

Para este artículo voy a tomar como referencia el [repositorio de GitHub](https://github.com/jorgeatgu/gulp-postCSS) que cree para el artículo de [Configurando postCSS en Gulp](http://jorgeatgu.com/blog/configurando-gulp-postcss/)

En la ruta de nuestro proyecto vamos a abrir el terminal, y vamos a escribir lo siguiente

{% highlight BASH %}
npm install --save-dev oldie
{% endhighlight %}

Ahora vamos a abrir nuestro **gulpfile.js**, y en la parte inicial vamos a declarar la variable de oldie

{% highlight JavaScript %}
var oldie = require("oldie");
{% endhighlight %}

Ahora vamos a crear una tarea específica para generar un **CSS** especifico para iE8.

{% highlight JavaScript %}
gulp.task('ie8', function() {
  var processors = [
    vars,
    nested,
    rucksack,
    oldie
  ];
  //Aquí la ruta de donde coge nuestros css
  return gulp.src('./src/css/styles.css')
    .pipe(rucksack())
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.ie8'
    }))
    .pipe(gulp.dest('./dist/css'));
});
{% endhighlight %}

Ahora lanzamos la tarea la cual nos generara el siguiente archivo: ```styles.ie8.css``

{% highlight BASH %}
gulp ie8
{% endhighlight %}



### PostCSS UnOpacity

Con este plugin vamos a dar soporte a la opacidad en IE8

{% highlight CSS %}

/* ANTES */
body {
  bgc: $color-background;
  opacity: .45;
}

/* DESPUES */
body {
  background-color: #001F3F;
  filter: alpha(opacity=45);
}

{% endhighlight %}

### PostCSS Calc

Con este plugin sustituimos calc cuando sea posible

{% highlight CSS %}

/* ANTES */
section {
  article {
    width: calc(100% / 2);
    display: inline-block;
    bxz: border-box;
    padding: 0 20px;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    line-height: 20px;
    color: $color-texto;
  }
}

/* DESPUES */
section article {
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #FFDC00;
}

{% endhighlight %}

### PostCSS REM

Con este plugin transformamos las unidades REM en pixels.

{% highlight CSS %}

/* ANTES */
section {
  article {
    width: calc(100% / 2);
    display: inline-block;
    bxz: border-box;
    padding: 0 20px;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    line-height: 20px;
    color: $color-texto;
  }
}

/* DESPUES */
section article {
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #FFDC00;
}

{% endhighlight %}


### PostCSS Pseudo-elements

Con este plugin se sustituyen los ```::``` por ```:```para hacer compatibles los pseudo-elementos con IE8.

{% highlight CSS %}

/* ANTES */
article {
  &::after {
    content: '*';
    font-size: 2rem;
    color: rgba(237, 106, 67, 0.9);
  }
}

/* DESPUES */
section article:after {
  content: '*';
  font-size: 32px;
  color: #ed6a43;
}

{% endhighlight %}

### PostCSS RGBA

Con este plugin transformamos los colores RGBA en Hexadecimal.

{% highlight CSS %}

/* ANTES */
article {
  &::after {
    content: '*';
    font-size: 2rem;
    color: rgba(237, 106, 67, 0.9);
  }
}

/* DESPUES */
section article:after {
  content: '*';
  font-size: 32px;
  color: #ed6a43;
}

{% endhighlight %}

### PostCSS nth-child

Con este plugin transformamos los nth-child para que sean compatibles. Dependiendo del nth-child la transformación sera diferente.

{% highlight CSS %}

/* ANTES */
article {
  &:nth-child(2) {
    background-color: rgba(237, 106, 67, 0.9);
    color: #fff;
  }
}

/* DESPUES */
section :first-child + article {
  background-color: #ed6a43;
  color: #fff;
}

{% endhighlight %}


### Opciones

A la tarea de oldie le podemos pasar una serie de opciones. Por ejemplo podemos desactivar cualquier de los plugins que lo componen pasándole un ```disable: true``

{% highlight JavaScript %}
var processors = [
    oldie({
    rem: {
        disable: true
    }
})
];
{% endhighlight %}

Todo el código utilizado en este artículo lo tenéis a vuestra disposición en [GitHub](https://github.com/jorgeatgu/gulp-postCSS)