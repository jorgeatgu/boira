---
title: Como ve tu web un daltónico
author: Jorge Aznar
layout: post
permalink: /colorblind-postcss/
comments: true
tags:
  - Accesibilidad Web
  - postCSS
---

En este artículo voy a tratar un tema que rara vez entra en los presupuestos de un proyecto web. Mientras se emplean cantidades ingentes de tiempo y dinero en dar soporte a navegadores **totalmente** obsoletos se da con la puertas en las narices al tema de la [accesibilidad web](http://jorgeatgu.com/blog/archivo/#accesibilidad-web).

<!--more-->

Antes de seguir voy a recordar la definión de daltonismo según la [Wikipedia](https://es.wikipedia.org/wiki/Daltonismo).

<blockquote>
El daltonismo es un defecto genético que ocasiona dificultad para distinguir los colores. La palabra daltonismo proviene del químico y matemático John Dalton que padecía este trastorno.1 El grado de afectación es muy variable y oscila entre la falta de capacidad para discernir cualquier color (acromatopsia) y un ligero grado de dificultad para distinguir algunos matices de rojo, verde y ocasionalmente azul. A pesar de que la sociedad en general considera que el daltonismo pasa inadvertido en la vida diaria, supone un problema para los afectados en ámbitos tan diversos como: valorar el estado de frescura de determinados alimentos, identificar códigos de colores de planos o elegir determinadas profesiones para las que es preciso superar un reconocimiento médico que implica identificar correctamente los colores (militar de carrera, piloto, capitán de marina mercante, policía, árbitro de fútbol, etc.)
</blockquote>

Con el plugin [postcss-colorblind](https://github.com/btholt/postcss-colorblind) vamos a ver nuestras webs con los ojos de una persona que sufre los diferentes tipos de daltonismo.

Con este plugin tenemos los siguientes métodos:

- protanomaly


- protanopia


- deuteranomaly


- deuteranopia


- tritanomaly


- tritanopia


- achromatomaly


- achromatopsia

Ahora vamos a instalar el plugin a traves de **NPM**

{% highlight BASH %}
npm i postcss-colorblind --save-dev
{% endhighlight %}

También nos va a hacer falta otra dependencia de **NPM** para que funcione el plugin

{% highlight BASH %}
npm i hexa-color-regex --save-dev
{% endhighlight %}

Una vez instaladas las dependencias vamos a nuestro ```gulpfile.js``` para configurar las diferentes tareas. Como tenemos varias opciones vamos a crear una tarea por cada tipo de daltonismo. Como voy a crear uno por cada tipo voy a añadir a cada **CSS** el sufijo del tipo de daltonismo que es.

{% highlight JavaScript %}
gulp.task('blind', function() {
    var processors = [colorblind({
        method: 'achromatopsia'
    })];
    return gulp.src('./css/styles.css')
        .pipe(postcss(processors))
        .pipe(rename({
            suffix: '.achromatopsia'
        }))
        .pipe(gulp.dest('./css'));
});
{% endhighlight %}

Pódeis consultar el resto de tareas que he creado en el ```gulpfile.js``` en [GitHub](https://github.com/jorgeatgu/gulp-postCSS/blob/master/color-blind/gulpfile.js#L105-L187)

Para ilustrar el artículo he creado un **HTML** con colores como el verde, azul y amarillo, los que no aprecian las personas con daltonismo. Vamos a compararlos con el **HTML** original.

### Achromatomaly

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Achromatomaly**
![](http://jorgeatgu.com/ejemplos/colorblind/achromatomaly.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-achromatomaly.html">IR AL EJEMPLO</a>
</button>

### Achromatopsia

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Achromatopsia**
![](http://jorgeatgu.com/ejemplos/colorblind/achromatopsia.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-achromatopsia.html">IR AL EJEMPLO</a>
</button>

### Deuteranomaly

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Deuteranomaly**
![](http://jorgeatgu.com/ejemplos/colorblind/deuteranomaly.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-deuteranomaly.html">IR AL EJEMPLO</a>
</button>

### Deuteranopia

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Deuteranopia**
![](http://jorgeatgu.com/ejemplos/colorblind/deuteranopia.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-deuteranopia.html">IR AL EJEMPLO</a>
</button>

### Protanomaly

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Protanomaly**
![](http://jorgeatgu.com/ejemplos/colorblind/protanomaly.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-protanomaly.html">IR AL EJEMPLO</a>
</button>

### Protanopia

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)

**Protanopia**
![](http://jorgeatgu.com/ejemplos/colorblind/protanopia.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-protanopia.html">IR AL EJEMPLO</a>
</button>

### Tritanomaly

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)
**Tritanomaly**
![](http://jorgeatgu.com/ejemplos/colorblind/tritanomaly.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-tritanomaly.html">IR AL EJEMPLO</a>
</button>

### Tritanopia

**Original**
![](http://jorgeatgu.com/ejemplos/colorblind/original.png)
**Tritanopia**
![](http://jorgeatgu.com/ejemplos/colorblind/trinatopia.png)

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/colorblind/index-tritanopia.html">IR AL EJEMPLO</a>
</button>

Todo el código a vuestra disposición en [GitHub](https://github.com/jorgeatgu/gulp-postCSS)