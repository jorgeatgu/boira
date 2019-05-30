---
title: Mis primeros pasos con postCSS
author: Jorge Aznar
layout: post
permalink: /postcss-primeros-pasos/
comments: true
tags:
  - CSS
  - postCSS
---

Desde este verano llevo utilizando **postCSS**, al principio junto a SASS y ahora casi sin el, lo de casi sin el es porque gracias a uno de los tantos plugins que tiene **postCSS** sigo utilizando la sintaxis de SASS. Si bien es cierto que por ahora solo utilizo **postCSS** en los proyectos donde trabajo solo.<!--more-->Son proyectos que tampoco llevan muchísima carga de CSS, así que mi experiencia por ahora esta limitada a este tipo de proyectos, y no a ninguno que conlleve un gran desarrollo de CSS. Y como muestra la nueva version de [SVG-FILTERS](http://jorgeatgu.github.io/svg-filters/)(que esta casi a punto de salir) en la que he escrito todo el **CSS** usando **postCSS**, también lo he utilizando en el último proyecto para un cliente que todavía no puedo hacer público pero que verá la luz en breves ;)

## ¿Que es postCSS?

El nombre de **postCSS** nos engaña, y nos lleva a pensar de que estamos ante un postprocesador o preprocesador. Simplemente es una herramienta para transformar tu CSS a través de JavaSript.

{% tweet 626046993006239744%}

## Métodos de uso

Podemos utilizar **postCSS** desde Grunt, Gulp, webpack, Broccoli, Brunch, ENB, Fly, Stylus, Meteor, Duo y Connect/Express. Aunque en este artículo me voy a centrar en la manera que lo uso, y es desde Gulp. Si esto os suena a chino, la gente de frontEndLabs tiene los mejores artículos sobre Gulp, [primeros pasos](http://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos) y [plugins y configuraciones](http://frontendlabs.io/1752--gulp-js-plugins-como-configurar-tareas).

## Modular

Lo mejor y también lo peor de **postCSS** es que te puedes construir tu propio framework como tu prefieras. Una de las razones de pasar de SASS a **postCSS** es que con SASS siempre he tenido la sensación de no utilizar ni la mitad de las cosas que me ofrece. Esto más que un problema de SASS es mi problema. La ventaja de **postCSS** es que yo elijo lo que quiero utilizar, ¿quiero utilizar la sintaxis de SASS? uso un plugin, quiero hacer hacks para dar soporte a navegadores que usan cinco personas y se comen todas la mitad de la horas de un proyecto, pues también. Pero tanta personalización también puede ser un problema cuando tu no vas ser la única persona encargada de escribir CSS en un proyecto, si son varias personas entramos en problemas, ya que cada uno tiene sus manías y sus vicios. El plugin que te a ti te puede parecer la hostia al otro le puede parecer una chatarra. Así que esto puede ser un handicap, aunque hablando se entiende la gente también hay que ser realista y pensar en el futuro.

## Rendimiento

Los números no mienten, **postCSS** simplemente vuela en comparación con prepocesadores como LESS, SASS etc...

| ------------- |:-------------:| -----:|
| PostCSS     | 40 ms |  |
| Rework      | 75 ms      |   **(1.9 times slower)** |
| libsass | 76 ms      |    **(1.9 times slower)** |
| Less |  147 ms      |    **(3.7 times slower)** |
| Stylus |  166 ms      |    **(4.1 times slower)** |
| Stylecow |  258 ms      |    **(6.4 times slower)** |
| Ruby Sass | 1042 ms      |    **(26.0 times slower)** |


Podéis ver los resultados de los *benchmark's* en el [GitHub de postCSS](https://github.com/postcss/benchmark)

## Utilizando postCSS con Gulp

Lo primero que vamos a hacer es instalar **postCSS**. Abrimos nuestro terminal en la ruta de nuestro proyecto.

{% highlight BASH %}
$ npm install --save-dev gulp-postcss
{% endhighlight %}

Una vez instalado vamos a añadir **postCSS** a nuestro gulpfile.js

{% highlight JavaScript %}
var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('wizard', function () {
    var processors = [
        //Aquí irán los diferentes plugins que vamos añadiendo
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
{% endhighlight %}

Los source maps viene desactivados por defecto. Para activarlos añadiremos dos líneas en nuestro gulpfile.js

{% highlight JavaScript %}
return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
{% endhighlight %}

## Plugins

Las posibilidades que nos ofrece **postCSS** son casi infinitas. Y otra de las cosas por las que recomiendo **postCSS** es por toda la gente que hay detrás creando plugins para todo. En [**postCSS**.parts](postcss.parts) podéis encontrar un catálogo con multitud de plugins acompañados de una breve descripción de lo que hace cada plugin.

Si dominais **JavaScript** y tenéis una idea también podeis crear [vuestros propios plugins](http://webdesign.tutsplus.com/tutorials/postcss-deep-dive-create-your-own-plugin--cms-24605).

Ahora voy a explicar cada uno de los plugins que uso.

### atImport

Para utilizar @import tanto con archivos locales, node modules o bower packages.

http://webdesign.tutsplus.com/tutorials/using-postcss-for-minification-and-optimization--cms-24568

[atImport](https://github.com/postcss/postcss-import)

### precss

Abandone SASS pero no algunas de sus cosas, esto es por lo que decía al principio del artículo que no había terminado de abandonar SASS. Con preCSS podemos utilizar variables, condicionales, mixins y muchas de las cosas que nos da SASS.

[preCSS](https://github.com/jonathantneal/precss)

### Nested

Si de SASS solo queréis usar el anidamiento de selectores este plugin es perfecto.

[nested](https://github.com/postcss/postcss-nested)

### Nesting W3C

Un plugin para anidar como el [draft de la W3C](http://tabatkins.github.io/specs/css-nesting/)

[Nesting](https://github.com/jonathantneal/postcss-nesting)

### Rucksack

Rucksack nos proporciona una cantidad de shorthand que nos facilitan la vida. Y también la poderosa y peligrosas opción de crear @alias propios. Asegurate de que nadie más tocara este CSS.

[Rucksack](http://simplaio.github.io/rucksack/)

### Autoprefixer

El archiconocido por todos autoprefixer que nos ahorra el sopor de escribir todos y cada uno de los prefijos de los navegadores.

[Autoprefixer](https://github.com/postcss/autoprefixer)

### pxtorem

Para aquellos duros de mollera como yo que siguen utilizando los pixels este plugin es simplemente perfecto. A continuación vamos a ver la configuración.

{% highlight JavaScript %}
pxtorem({
    //Definimos el valor que le queremos dar al REM
    root_value: 16,
    //La precisión decimal
    unit_precision: 2,
    //La lista de propiedades que queremos que transforme de pixels a REM.
    prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'padding']
}),
{% endhighlight %}

[pxtorem](https://github.com/cuth/postcss-pxtorem)

### stylelint + reporter

Un linter para comprobar los errores que cometemos al escribir nuestro CSS. Para ver los errores en la consola hay que utilizar [gulp-reporter](https://github.com/postcss/postcss-reporter).

Por cierto [Stylelint](http://stylelint.io) Se puede usar sin **postCSS**.

[Stylelint](http://stylelint.io/?/docs/user-guide/postcss-plugin.md)


## Sublime Text

Para que os reconozca la sintaxis que estais utilizando al escribir CSS con **postCSS** debereis descargaros desde el package control [Syntax Highlighting for PostCSS](https://github.com/hudochenkov/Syntax-highlighting-for-PostCSS).

Si utilizáis Atom también tenéis otro plugin para añadir la sintaxis de **postCSS** [Atom PostCSS language](https://atom.io/packages/language-postcss)

## CodePen

{% tweet 621013451607912448%}

Una buena manera de empezar a trastear con **postCSS** es a través de [CodePen](http://blog.codepen.io/2015/07/14/postcss-now-supported-on-codepen/). Tenemos una serie de plugins que ya vienen en la pestaña de CSS.


## Codemotion

{% tweet 668372253428576256%}

Si tenéis la suerte de ir al [Codemotion](http://2015.codemotion.es/) que se celebra el fin de semana del 27 y 28 de noviembre en Madrid. [Xaviju](https://twitter.com/xaviju) dará una charla sobre **postCSS** y **CSSnext**, en la que también vais a ver como hacer un plugin, si estáis por allí yo no me la perdería. Yo ya he enviado a un par de emisarios :)

## Probad malditos!

Si os animáis a usar **postCSS** os recomiendo que os leáis todos y cada uno de los artículos de la serie que ha publicado [Kezz Bracey](https://twitter.com/kezzbracey) en tusplus: [PostCSS Deep Dive](http://webdesign.tutsplus.com/series/postcss-deep-dive--cms-889). Simplemente brutal.

También os podéis suscribir al canal de [gitter](https://gitter.im/postcss/postcss) de **postCSS** donde os resolverán cualquier duda que planteéis y donde os enterareis de las últimas novedades tanto de **postCSS** como de plugins. También podéis seguir el proyecto en [GitHub](https://github.com/postcss/postcss) y [twitter](https://twitter.com/postcss).

En Octuweb [Marcelo Mazza](https://twitter.com/marcelomazza) también escribió una [introducción a postCSS](http://octuweb.com/introduccion-a-postcss).

Y en [Heydesigner](http://heydesigner.com/postcss/) también van recopilando los artículo que se van escribiendo sobre **postCSS**.