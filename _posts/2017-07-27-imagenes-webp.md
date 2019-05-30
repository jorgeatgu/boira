---
title: Imágenes responsive y WebP
author: Jorge Aznar
layout: post
permalink: /responsive-webp-gulp/
comments: true
tags:
  - Responsive
  - Gulp
---

En este artículo vamos a ver como automatizar con Gulp el proceso de
generar imágenes para diferentes dispositivos. Y también vamos a
prepararlas en formato WebP.

<!--more-->

Antes de empezar con todo el proceso os recomiendo leer estos artículos
para entender todo el proceso correspondiente a WebP, srcset y demás
[Imágenes
responsive](http://trip2themoon.com/guia-imagenes-responsive/),
[WebP](http://trip2themoon.com/imagenes-webp/) y [Guía responsive
image](https://escss.blogspot.com/2014/10/responsive-images-picture-srcset.html).
Gracias [Felix!](http://twitter.com/flodar) y
[Kseso](http://twitter.com/kseso).

Una aclaración, el formato WebP solo esta soportado en los navegadores
que usan Blink, es decir, Chrome y Opera. El soporte en Firefox está
todavía en pruebas y en Safari solo estuvo operativo en una beta, a la
siguiente lo quitaron. WebP es una gran oportunidad para acelerar la
carga y disminuir el tamaño de la web. Podemos seguir minificando CSS,
JS y usar SVG para iconos, pero la web aumenta con imágenes sin
optimizar y con tamaños superiores a los mostrados en la web, ejemplo,
JPG 4000 x 2000 y limitamos su vista a través de **CSS** a 600 x 300,
perfecto.

### Gulp responsive

Crear una imagen para diferentes tamaños es infame. Yo antes utilizaba
[responsivebreakpoints](http://www.responsivebreakpoints.com) hasta que
el otro día descubrí este paquete de **NPM** que hace parte del trabajo
sucio.

Lo primero que vamos a hacer es instalar [Gulp
responsive](https://github.com/mahnunchik/gulp-responsive) a través de
**NPM**.

    npm i gulp-responsive --save-dev

Ahora vamos a configurar la tarea en el **Gulpfile**. Los comentarios en
el código.

    gulp.task('imgrwd', function () {
        //Le pasamos ruta donde están nuestras imágenes
      return gulp.src('src/img/*.{png,jpg}')
        .pipe(responsive({
          '*.png': [{
            //Le indicamos el tamaño al que queremos la imagen
            width: 300,
            rename: {
                //Le añadimos un subfijo para diferenciarla
              suffix: '-300px',
              extname: '.jpg',
            },
          //Elegimos el formato
            format: 'jpeg',
          }, {
            width: 600,
            rename: {
              suffix: '-600px',
              extname: '.jpg',
            },
          }, {
            width: 1200,
            rename: {
              suffix: '-1200px',
              extname: '.jpg',
            }
          }],
        }, {
          quality: 75,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false,
        }))
        //La ruta donde va a dejar las imágenes con los diferentes tamaños
        .pipe(gulp.dest('img'));
    });

Lanzamos la tarea y ya tenemos las imágenes en diferentes tamaños para
todos los dispositivos.

### WebP

Una vez que tenemos las imágenes en diferentes tamaños vamos a
convertirlas a **WebP**.

Para convertirlas vamos a usar otro paquete de **NPM**. Vamos a
instalarlo.

    npm i gulp-webp --save-dev

Ahora vamos a configurar la tarea en el **Gulpfile**. Los comentarios en
el código.

    gulp.task('webp', () =>
        //Le pasamos la ruta donde hemos dejado nuestras imágenes optimizadas
        gulp.src('img/*.jpg')
            .pipe(webp())
            //Y que las cree en la misma carpeta pero esta vez en formato WebP
            .pipe(gulp.dest('img'))
    );

### Picture

Ahora viene lo feo, vamos a incluir toda la parafernalia para cargar
todas las imágenes en el **HTML**. Para ello nos vamos a valer de la
etiqueta `<picture>` y `<source>`. Como incluir esto cada vez que
tenemos una imagen es simplemente un infierno, lo vamos a simplicar, he
creado un snipptet con toda la estructura, así solamente vamos a tener
que escribir el nombre de la foto, nada más. El snippet es para Sublime
Text.

    <snippet>
        <content><![CDATA[<picture>
                <source sizes="(max-width: 1366px) 100vw, 1366px" type="image/webp" srcset="
                        img/$1-300px.webp 320w,
                        img/$1-600px.webp 739w,
                        img/$1-1200px.webp 1110w" />
                <img sizes="(max-width: 1366px) 100vw, 1366px" class="zaragoza-img" srcset="
                img/$1-300px.jpg 320w,
                img/$1-600px.jpg 739w,
                img/$1-1200px.jpg 1110w" src="$1.jpg" alt="Aquí va un texto lo suficientemente descriptivo">
            </picture>]]>
    </content>
        <description>Incluyendo toda la movida para las imágenes responsive</description>
        <tabTrigger>responsiveWebp</tabTrigger>
        <scope>text.html</scope>
    </snippet>

### Demo

Vamos a ver el resultado en una demo. Son dos webs que son casi iguales,
la única diferencia es que una tiene las imágenes sin optimizar, las
fotografías están tal cual las tome en su día, la otra web tiene las
fotos en diferentes tamaños y en formato WebP.

La prueba la he hecho con Chrome.

Aquí el tiempo de carga de la web con las imágenes optimizadas,
**586ms**.

![Aquí va un texto lo suficientemente
descriptivo](http://jorgeatgu.com/blog/img/2017/07/optimizando-a-fuego-1200px.jpg)

Aquí el tiempo de carga de la web con las imágenes tal cual, **7.5s**

![Aquí va un texto lo suficientemente
descriptivo](http://jorgeatgu.com/blog/img/2017/07/optimizar-claro-que-si-guapi-1200px.jpg)

El tiempo de carga habla por si solo.
