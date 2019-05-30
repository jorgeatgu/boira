---
title: Optimizando SVG con Grunt
author: Jorge Aznar
layout: post
permalink: /optimizando-svg-con-grunt/
comments: true
tags:
  - Grunt
  - SVG
---

Esta semana hemos estado en el trabajo implementando Grunt para todos nuestros proyectos. No voy a hablar de todas las tareas que hemos implementado para eso y para aquellos a que les suene raro esto de Grunt [Felix Ortega](https://twitter.com/flodar){:target="_blank"} ha escrito un [artículo](http://trip2themoon.com/primeros-pasos-con-grunt-para-disenadores-web/){:target="_blank"} con una gran introducción a Grunt.

<!--more-->

## Grunt-svgmin

Lo primero que vamos a hacer es instalar [svgmin](https://github.com/sindresorhus/grunt-svgmin){:target="_blank"} desde el terminal.

{% highlight bash %}
$ npm install --save-dev grunt-svgmin
{% endhighlight %}

## Plugins

Ahora vamos a incluir la tarea en nuestro archivo `gruntfile.js`

{% highlight JavaScript %}
            svgmin: {
                 options: {
                     plugins: [

                     ]
                 },
                 dist: {
                     files: []
                }
             },
{% endhighlight %}

Ahora vamos a configurar los plugins a nuestra tarea. A nuestra disposición tenemos todos los [plugins de SVGO](https://github.com/svg/svgo/tree/master/plugins){:target="_blank"}, esto ya es configurable por cada uno, la lista de plugins es bastante extensa, a continuación los que yo he implementado.

### removeViewBox

Para que no elimine el atributo viewBox.

### removeTitle y removeDesc

Para mí estos dos plugins son los más importantes. Si queremos que Google muestre un título y una descripción de nuestro SVG debemos de añadir las etiquetas `<title>` y `<desc>` para que lo muestre en los resultados. Con este plugin en `false` *SVGO* no eliminará estas dos etiquetas.

### removeUselessStrokeAndFill

Para que elimine los `stroke` y `fill` que no tengan valor alguno.

### cleanupIDs

Para que elimine los IDs que no contengan ningún script o estilo.

### removeEditorNSData

Para que elimine los **namespaces** que se crean al exportar desde Illustrator, Sketch y Inkscape

### cleanupNumericValues

Para que elimine las unidades por defecto. Si a los atributos no les asignamos ninguna unidad de medidad *SVG* tomará la unidad por defecto, la cual es el pixel. Así que no sirve de nada escribir `px`.

### convertColors

Para que convierta los colores en *RGB y keywords* a su valor hexadecimal,en caso de que el que color se pueda representar con tres valores(por ejemplo #000000 #ffffff) hexadecimales el plugin hará la conversión.


## Files

Por último vamos a configurar las rutas donde tiene que coger nuestros archivos y optimizarlos

{% highlight JavaScript %}
    dist: {
         files: [{
        expand: true,
          cwd: 'images/',  //La ruta donde se alojan nuestros archivos
          src: ['**/*.svg'],     //El * indica que optimize todos los archivos con extensión .svg
          dest: 'dist/images',  // La carpeta donde guardara nuestros archivos ya optimizados.
          ext: '.svg'
        }]
    }
{% endhighlight %}

Podéis consultar todo el código en el siguiente [Gist en mi cuenta de GitHub](https://gist.github.com/jorgeatgu/a0656c47a11e741befb2){:target="_blank"}



