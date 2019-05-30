---
title: Mi experiencia en el Congreso Web 2016
author: Jorge Aznar
layout: post
permalink: /mi-experiencia-congreso-web-zaragoza/
comments: true
tags:
  - postCSS
  - Eventos
  - Zaragoza
---

El fin de semana de 3, 4 y 5 de junio se celebró en Zaragoza el Congreso Web. Aquí mi experiencia como ponente y asistente a los talleres. No pude asistir a ninguna charla de las *fuertes*.

<!--more-->

## postCSS Revolution

[Las slides de la charla](http://jorgeatgu.github.io/slides/#/)

  ![](http://jorgeatgu.com/blog/img/2016/6/postcss.png)

El viernes me estrene como ponente con la charla de **postCSS Revolution**. La charla que más había preparado y quizás con la que peor sabor de boca me he quedado. Una vez pasada quizás en lugar de 2 horas el taller debería de haber durado 4 horas.

Aunque llegue con tiempo y bastante tranquilidad esta se empezó a quebrar al ver que el proyector solo tenía entrada VGA, y yo solo llevaba DVI y HDMI. Justo antes de empezar conseguí un adaptador VGA(cortesía de Ricardo Pallás).

Ya con todo montado y 'funcionando' comenzó la charla, con mucha más gente de la que esperaba. La primera media hora los nervios me hicieron ir más deprisa de lo que me hubiera gustado y pase por alto y di por entendido algunos términos que merecían mucha más explicación. Creo que la mejor parte fue la de **cssnext** y todas las novedades de las **custom properties(css variables)**, **custom media queries** y **custom selector** que podemos utilizar con **cssnext**. Recordad que si lo usamos sin **postCSS** solamente tienen soporte en navegadores modernos.

La parte práctica comenzó antes de lo que tenía previsto pero no contaba(más bien no quería) con los problemas a la hora de instalar Node.js y NPM. Nos salió un Mac rebelde al cuál cuando le decías de actualizar NPM el prefería borrarlo. También un windows con el nombre de usuario con la 'ñ' nos dio un poco de guerra. Al final todo funciono exceptuando el Mac de Antonio Elias, ya lo siento :( Agradecer la ayuda de [Paul](https://twitter.com/PolloBrav0) y [Jesus](https://eckelon.net) dando soporte al resto de asistentes con la instalación.

Una vez todo instalado nos pusimos con el primer ejercicio bastante básico para aquellos que no conocían **NPM** ni **Gulp**. El ejercicio consistía en iniciar un repo con un package.json e instalar las diferentes dependencia de **postCSS** que íbamos a utilizar a posteriori. Con todo iniciado me dedique a explicar por parte como trabaja **Gulp** y las diferentes tareas que podemos crear.

En el segundo ejercicio ya nos pusimos a tocar **postCSS**. El ejercicio consistía en utilizar las custom properties y custom selector en un **CSS básico** .

El último ejercicio consistía en modificar las **custom properties** en los **media queries** pero cometí el tremendo error de subir la solución al **CSS** del ejercicio. Un fallo de novato, lo siento.

Se me olvido comentar que para aquellos que querían algo visual para empezar con **postCSS** pueden utilizar [CodePen](http://codepen.io). En la sección de **CSS** sin pinchan en *settings* en el desplegable de prepocesadores(no es un preprocesador pero bueno) puedes elegir **postCSS** con unos cuantos plugins ya instalados.

Aunque la charla/taller no fue del todo como me hubiera gustado el *feedback* que fui recogiendo después de la charla me dejo buen sabor de boca.

Muchísimas gracias a todos los que asistieron :)

Un apunte, me sorprendió lo poco familiarizada que esta la gente con el Terminal. Para bien o para mal se ha añadido a nuestro sistema de trabajo. Quizás al principio pueda asustar y no entendamos todo lo que hace pero cuando coges ritmo te sorprendes de todo lo que te has estado perdiendo al no utilizarla. Así que volví a casa pensando que el año que viene si nos dejan sería bueno dar una charla de introducción al uso del Terminal. Ya he engañado a [Jesus](https://twitter.com/eckelon) para que se una :)

## iOs y Diseño Web

Después de dar la charla acudí a la charla de Alejandro sobre iOS. Entre que llegue un poco tarde y que cometí la imprudencia de no tener ese monstruo llamado Xcode instalado perdí el hilo de la charla, así que antes de ser una molestia decidir ir a ver la charla de mi compañera María que trataba sobre la iniciación al diseño y maquetación web, por desgracia en la charla de al lado alguien utilizaba micrófono y me entere más de como montar una tienda en Wordpress que de la propia charla.

## Sublime y Emmet

  ![](http://jorgeatgu.com/blog/img/2016/6/sublime-emmet.png)

[Las slides de la charla de Sublime](http://jorgeatgu.github.io/slides-sublime/#/)
[Las slides de la charla de Emmet](http://jorgeatgu.github.io/slides-emmet/#/)

Estas dos charlas la di la mañana del sábado junto a mi compañera de trabajo [Abril](http://twitter.com/AbrilRob).

Ya con la lección aprendida del día anterior esta vez no hubo problemas con los cables. El único problema fue con la iluminación de la sala que se junto con el proyector estaba en las últimas(por la tarde paso a mejor vida) y daba una muy mala calidad a la hora de ver el código en la pantalla.

Quizás por el horario y que coincidía con otras charlas la asistencia a las que podía ir el público al que estaba enfocado la charla la asistencia fue menor de la que esperábamos. Eso sí, nos quedamos encantados con los asistentes que hicieron mucho más dinámicas las charlas.

Tanto la charla de Sublime como la de Emmet la enfocamos con muy poca teoría y con muchos ejercicios prácticos que facilitaron que las cuatro horas se nos pasaran volando.

En el taller de Sublime vimos como nos podía facilitar múltiples tareas tediosas a la hora de utilizarlo como editor de texto. También enseñamos un montón de comandos que nos ahorra mucho tiempo. Nos adentramos en lo que hace que Sublime sea el mejor editor, y no es otra cosa que el Package Control para poder añadir infinidad de plugins que nos facilitan el trabajo dependiendo de los lenguajes que utilicemos en el día a día.

En el taller de Emmet vimos como facilitar la creación de estructuras HTML. También nos dio tiempo a ver toda la parte de CSS que nos ahorra horas y horas de tedioso trabajo.

El poco feedback que recogimos fue genial. Y es que a la hora que acababa la charla el hambre ya apretaba y la gente salió disparaba a reponer energías para las charlas de por la tarde.

Muchas gracias a todos los que asistieron a las dos charlas :)

## Introducción a la programación funcional con JavaScript

  ![](http://jorgeatgu.com/blog/img/2016/6/pure-javascript.png)

La charla a la que le tenía más ganas del congreso fue la que nos dio el sábado por la tarde [Ricardo Pallas](http://rpallas92.github.io/). Probablemente la persona que conozco que más sabe sobre JavaScript.

La charla era ambiciosa, quizás demasiado. Aunque teníamos por delante 4 horas de charla al final todos nos quedamos con la sensación de que esta charla debería de ser convertida en un curso de una semana. Así que **por favor**. a quién corresponda o alguien que se anime a hacer esto realidad.

La primera parte de la charla nos enseño un buen puñado de buenas prácticas a la hora de trabajar con **JavaScript**, todo aderezado con las gaviotas y la corrupción en JavaScript a través de prácticas impuras, todo muy bien hilado.

La segunda parte después del descanso se me hizo muy cuesta arriba, el cansancio, la comida y el **beerworking** que nos esperaba me hicieron desconectar en varios puntos de la charla. En esta segunda parte hicimos una práctica la cuál consistía en hacer un buscador de vídeos de YouTube con **React**. Me sorprendió la velocidad a la que buscaba, **++pure**.

Un buen resumen de la charla en forma de tweet:

{% tweet  739160230764896256%}

[El repo de la charla](https://github.com/RPallas92/congreso-web-2016)

Desde mi punto de vista el WTC desluce un poco el congreso por el tema del espacio, comparando las ediciones anteriores a las que he asistido me quedo con el palacio de congresos de la Expo como escenario ideal para el Congreso Web.

Muchísimas gracias la organización por estar todo el rato pendiente de nosotros, un diez para todos :)
