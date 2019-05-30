---
title: Women Techmakers
author: Jorge Aznar
layout: post
permalink: /mulleres-tech-evento/
comments: true
tags:
  - Eventos
  - Zaragoza
---

Vamos a hacer un *poquico* de SPAM sobre lo que están organizando las
*mulleres* del ámbito tecnológico de Zaragoza.

<!--more-->

Aclarar que no voy a indagar en la especificación. Si queréis aprender
**Grid Layout** ya existen un montón de recursos a vuestra disposición.
Voy a dejarlos al final del artículo.

Supports
--------

La función de `@supports` es sencilla. Si un navegador soporta la
propiedad que hemos definido entre los paréntesis, el navegador
ejecutará el código que hay entre las llaves.

    Si no soporta Grid Layout se ejecutará esto.
    .container {
        display: table;
    }


    @supports (display: grid) {
        
        //Si soporta Grid Layout ejecutará esto
        .container {
            display: grid;
        }

    }

Si el navegador soporta **Grid Layout**, container tendrá un
`display: grid;`, en caso contrario, tendrá un `display: table;`.

Hay que recordar que `@supports` no tiene soporte en **ninguna** versión
de Internet Explorer. Si que tiene soporte en Edge.

Algo parecido pasa con **Grid Layout**. Desde IE10 soporta una versión
antigua de la especificación, y todo bajo prefijos. Se supone que la
próxima versión de Edge ya no necesitará prefijos. Prefiero no usar los
prefijos y hacer el grid a mano. Quizás a ti te sirva usar los prefijos.

¿En producción?
---------------

Siempre estamos esperando nuevas funcionalidades. Solamente para
lamentarnos de no poder usarlas(en producción), como mínimo hasta dentro
de cinco años.

La única pega de usar **Grid Layout** y @supports es que vamos a
trabajar un poco más. Es posible que dependiendo de la situación esto no
te compense.

Vamos a ver como crear un layout simple de tres columnas, con un título
al 100%. Y que funcione también en Internet Explorer.

    <section class="grid-container">
        <h3 class="grid-title">COMBINACIONES ACCESIBLES</h3>
        <article class="grid-element uno">
            <p class="grid-element-text">UNO</p>
        </article>
        <article class="grid-element dos">
            <p class="grid-element-text">DOS</p>
        </article>
        <article class="grid-element tres">
            <p class="grid-element-text">TRES</p>
        </article>
        <article class="grid-element cuatro">
            <p class="grid-element-text">CUATRO</p>
        </article>
        <article class="grid-element cinco">
            <p class="grid-element-text">CINCO</p>
        </article>
        <article class="grid-element seis">
            <p class="grid-element-text">SEIS</p>
        </article>
    </section>

Vamos primero con el `grid-container`. Para que quede claro, los
navegadores que soporten **Grid Layout** heredarán el
`max-width: 60vw; margin: 0 auto; font-size: 0;`. Si algo esta hecho
específicamente para IE, y no nos sirve para el resto de navegadores, lo
podemos sobreescribir en @supports. En @supports vamos a crear nuestro
Grid de tres columnas con una separación de 20px.

    .grid-container {
        max-width: 60vw;
        margin: 0 auto;
        font-size: 0;
    }

    @supports (display: grid) {

        .grid-container {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
            //Ejemplo: para los navegadores que soporten grid quiero más margin
            margin: 10vh auto;
        }

    }

Ahora vamos a ver lo que ejecuta cada navegador.

Internet Explorer:
![](http://jorgeatgu.com/blog/img/2017/08/grid-edge.png)

Opera: ![](http://jorgeatgu.com/blog/img/2017/08/grid-opera.png)

Vamos con los `grid-element`. Aquí el trabajo queda para la parte que no
soporta **Grid Layout**, tenemos que definir el Grid artesano en los
elementos. El **@support** lo utilizamos para sustituir todas las
propiedades que hemos usado para hacer el Grid artesano.

    .grid-element {
        font-size: 16px;
        font-weight: bold;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        display: inline-block;
        width: 32%;
        &:not(:nth-of-type(3n)) {
            margin-right: 2%;
        }

    }

    @supports (display: grid) {

        .grid-element {
            width: auto;
            margin-bottom: 0;
            &:not(:nth-of-type(3n)) {
                margin-right: 0;
            }
        }

    }

El código lo tenéis a vuestra disposición en
[GitHub](https://github.com/jorgeatgu/ejemplos-blog/tree/master/css-grid)

Y aquí la [demo](http://jorgeatgu.com/ejemplos/css-grid/).

Si queréis inspeccionar **Grid Layout** conforme es debido os recomiendo
[FirefoxNightly](https://www.mozilla.org/en-US/firefox/57.0a1/releasenotes/).

Por último los artículos sobre **Grid Layout**.

-   [Using Feature Queries in
    CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
-   [Grid by example](https://gridbyexample.com)
-   [Múltiples artículos de
    Kseso](https://escss.blogspot.com.es/search/label/Css%20Grid%20Layout)
-   [How the minmax() Function
    Works](https://bitsofco.de/how-the-minmax-function-works/)
-   [A Complete Guide to Grid - CSS
    tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [A Complete Guide to Grid
    Codrops](https://tympanus.net/codrops/css_reference/grid/)
-   [Griddy](http://griddy.io)
-   [EscuelaiT Taller de Grid
    Layout](https://escuela.it/cursos/taller-de-css-grid-layout)
