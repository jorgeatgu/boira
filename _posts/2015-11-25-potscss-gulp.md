---
title: Configurando postCSS en Gulp
author: Jorge Aznar
layout: post
permalink: /configurando-gulp-postcss/
comments: true
tags:
  - CSS
  - postCSS
  - Gulp
---

Ayer contaba mi corta pero exitosa historia con **postCSS**. En el artículo comentaba que utilizo **postCSS** con Gulp. En este artículo voy a profundizar en como añadir **postCSS** a **Gulp** desde el principio hasta el final. Si ya has trabajado con **Gulp** seguramente todo esto te resultará familiar.

<!--more-->

Soy usuario de OSX así voy a hacer todo tirando de [iTerm2](https://www.iterm2.com/).

## Creando el proyecto y su estructura

Voy a empezar creando el proyecto con todos sus directorios. Lo podéis hacer a manopla creando carpeta y archivos. Yo lo voy a hacer a lo viejuno(también es más rápido) tirando de cli.

{% highlight BASH %}
mkdir gulp-postcss

cd gulp-postcss

mkdir dist

mkdir src

touch index.html

touch gulpfile.js

cd dist

mkdir css

cd css

touch styles.css

cd ..

cd ..

cd src

mkdir css

cd css

touch styles.css

{% endhighlight %}

## Npm

Vamos a empezar a instalar todo lo necesario. Para aquellos que no tengan instalado Gulp, vamos a instalarlo de forma global, para ello vamos a escribir en el terminal

{% highlight BASH %}
npm install -g gulp
{% endhighlight %}

Ahora nos vamos a la carpeta que hemos creado y vamos a escribir lo siguiente

{% highlight bash %}
npm init
{% endhighlight %}

En el terminal nos va a ir saliendo una serie de campos que vamos a ir rellenando y que más tarde se verán reflejados en el ```package.json``` que nos ha creado el ```npm init```

Ahora vamos a empezar a instalar dependencias. La primera de ellas Gulp

{% highlight bash %}
npm install --save-dev gulp
{% endhighlight %}

Escribiendo ```–save-dev``` agregará este paquete como un dependencia a nuestro proyecto, y también lo añadirá al ```package.json```

## Gulpfile

Ahora vamos a abrir Gulpfile.js con un IDE, en mi caso Sublime Text 3. Una vez abierto vamos a escribir lo siguiente

{% highlight JavaScript %}
var gulp = require('gulp');
{% endhighlight %}

## gulp-postcss

Ahora vamos a instalar gulp-postcss. Volvemos a nuestra ventana del terminal

{% highlight BASH %}
npm install --save-dev gulp-postcss
{% endhighlight %}

Y en nuestro gulpfile.js añadimos lo siguiente

{% highlight JavaScript %}

var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    var processors = [
        //Aqui irán los plugins que vayamos instalando
    ];
    //Aquí la ruta de donde coge nuestros css
    return gulp.src('./src/css/styles.css')
        .pipe(postcss(processors))
        //Aqui la ruta de destino
        .pipe(gulp.dest('./dist/css'));
});
{% endhighlight %}

Vamos a instalar todos los paquetes que vamos a utilizar del tirón. Y luego lo vamos a añadir todo a nuestro gulpfile.js

{% highlight BASH %}
npm install --save-dev gulp-autoprefixer

npm install --save-dev postcss-pxtorem

npm install rucksack-css --save-dev

npm install --save-dev postcss-nested

npm install --save-dev postcss-simple-vars
{% endhighlight %}

Ahora vamos a volver a abrir nuestro gulpfile.js y vamos a ir añadiendo todos los paquetes que hemos instalado anteriormente. A algunos plugins les podemos pasar opciones, en este caso vamos configurar **pxtorem**, que el valor de root sea 16, que lo transforme solo con dos decimales, y que solo transforme de px a rem las propiedades: ```font-size``` ```line-height``` ```padding```


{% highlight JavaScript %}
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var vars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var rucksack = require('gulp-rucksack');
var pxtorem = require('postcss-pxtorem');

gulp.task('css', function() {
    var processors = [
        vars,
        nested,
        rucksack,
        pxtorem({
            root_value: 16,
            unit_precision: 2,
            prop_white_list: ['font-size', 'line-height', 'padding'],
            replace: true,
            media_query: false
        }),
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];
    //Aquí la ruta de donde coge nuestros css
    return gulp.src('./src/css/styles.css')
        .pipe(rucksack())
        .pipe(postcss(processors))
        //Aqui la ruta de destino
        .pipe(gulp.dest('./dist/css'));
});
{% endhighlight %}



Y ya por último vamos a instalar y activar los sourcemaps.

{% highlight BASH %}
npm install --save-dev gulp-sourcemaps
{% endhighlight %}

Vamos a nuestro gulpfile.js y vamos a añadir dos .pipe()

{% highlight Javascript %}

return gulp.src('./src/css/styles.css')
    .pipe(rucksack())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));

{% endhighlight %}

## Comenzando a escribir

Ahora vamos al terminal y escribimos lo siguiente

{% highlight BASH %}
gulp css
{% endhighlight %}

Si esta todo bien nos debería de salir el siguiente mensaje en el terminal

{% highlight BASH %}
Starting 'css'...
Finished 'css' after 14 ms
{% endhighlight %}

Ahora vamos a nuestro ```styles.css``` y por fin empezamos a escribir líneas de **CSS** :d

Vamos a utilizar el plugin de las variables como SASS

{% highlight CSS %}
//Utilizando las variables
$color-background: #001F3F;
$color-texto: #FFDC00;
{% endhighlight %}

Vamos a crear @alias con Rucksack. Uno para la propiedad background-color y otro para el box-sizing. Esta funcionalidad del plugin es difícil de utilizar para aquellos que somos adictos a emmet y todos sus shorthands.

{% highlight CSS %}
//Creando alias con rucksack
@alias {
  bgc: background-color;
  bxz: box-sizing;
  bbx: border-box;
}

body {
    //Utilizando un alias creado con rucksack, también una variable
    bgc: $color-background;
}
{% endhighlight %}

Los valores de las siguientes propiedades serán transformados de pixel a REM.

{% highlight CSS %}
//El pixel del padding se transformara en REM
padding: 0 20px;
//El pixel del font-size se transformara en REM
font-size: 16px;
//El pixel del line-height se transformara en REM
line-height: 20px;
{% endhighlight %}

Y ya por último vamos a anidar como SASS

{% highlight CSS %}
//Nested como SASS & pxtorem
section {
    width: 80%;
    margin: 0 auto;
    font-size: 0;
    article {
        width: 50%;
        display: inline-block;
        //Utilizando un alias creado con rucksack
        bxz: bbx;
        //El pixel del padding se transformara en REM
        padding: 0 20px;
        font-family: Arial, sans-serif;
        //El pixel del font-size se transformara en REM
        font-size: 16px;
        //El pixel del line-height se transformara en REM
        line-height: 20px;
        color: $color-texto;
    }
}
{% endhighlight %}

## IO

Ahora vamos a ver las diferencias entre lo que hemos escrito en nuestro ```src/css/styles.css``` y lo que ha generado **postCSS** en ```dist/css/styles.css```

```src/css/styles.css```

{% highlight CSS %}
//Utilizando las variables
$color-background: #001F3F;
$color-texto: #FFDC00;

//Creando alias con rucksack
@alias {
  bgc: background-color;
  bxz: box-sizing;
  bbx: border-box;
}

body {
    //Utilizando un alias creado con rucksack, también una variable
    bgc: $color-background;
}


//Nested como SASS & pxtorem
section {
    width: 80%;
    margin: 0 auto;
    font-size: 0;
    article {
        width: 50%;
        display: inline-block;
        //Utilizando un alias creado con rucksack
        bxz: bbx;
        //El pixel del padding se transformara en REM
        padding: 0 20px;
        font-family: Arial, sans-serif;
        //El pixel del font-size se transformara en REM
        font-size: 16px;
        //El pixel del line-height se transformara en REM
        line-height: 20px;
        color: $color-texto;
    }
}
{% endhighlight %}


```dist/css/styles.css```

{% highlight CSS %}
body {
    background-color: #001F3F;
}

section {
    width: 80%;
    margin: 0 auto;
    font-size: 0;
}

section article {
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 1.25rem;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #FFDC00;
}

{% endhighlight %}


Todo el código del artículo lo tenéis a vuestra disposición en [GitHub](https://github.com/jorgeatgu/gulp-postCSS)