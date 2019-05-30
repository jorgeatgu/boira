---
title: Los filtros en SVG
author: Jorge Aznar
layout: post
permalink: /los-filtros-en-svg/
comments: true
dsq_thread_id:
  - 2103027232
tags:
  - Diseño Gráfico
  - Diseño Web
  - SVG
---
Hoy vamos a hablar de los diferentes **filtros** que podemos aplicar a un **SVG**. Un efecto generado a través de un **filtro** consiste en una determinada serie de operaciones que se aplican a una fuente para conseguir un efecto diferente.

<!--more-->

Antes de hablar de los diferentes **filtros** vamos a ver la etiqueta `defs`, dentro de ella declararemos nuestros **filtros** o conjuntos de **filtros** para mas tarde poder utilizarlos en varios elementos sin tener que repetir el código de nuevo, simplemente lo invocaremos a través de `filter="url(#nombredelfiltro)`. Mas tarde veremos un ejemplo donde utilizaremos la etiqueta `defs` y `filter`.

Lo primero para luego no llevarnos sorpresas es consultar el soporte que tienen los **filtros** en **SVG** en los diferentes navegadores.

![filtros navegadores svg][1]

Ahora vamos a ver la lista de **filtros** que podemos aplicar, si consultamos la especificación de la **W3C** sobre **SVG** veremos lo que podemos hacer con cada uno de ellos.

*   feBlend <br/>
*   feColorMatrix <br/>
*   feComponentTransfer <br/>
*   feComposite <br/>
*   feConvolveMatrix <br/>
*   feDiffuseLighting <br/>
*   feDisplacementMap <br/>
*   feFlood <br/>
*   feGaussianBlur <br/>
*   feImage <br/>
*   feMerge <br/>
*   feMorphology <br/>
*   feOffset <br/>
*   feSpecularLighting <br/>
*   feTile <br/>
*   feTurbulence <br/>
*   feDistantLight <br/>
*   fePointLight <br/>
*   feSpotLight <br/>

## ATRIBUTOS

**`x, y`**<br/>
Representan las coordenadas arriba e izquierda, por defecto viene a 0.

**`width, height`**<br/>
Podemos decirle al filtro que solo se aplique a una parte de la caja, por defecto viene al 100%.

**`result`**<br/>
Aquí podemos indicar un nombre para que este efecto sea utilizado en otro filtro. No hay que confudir result con `id`, `result` solo funcionara si lo aplicamos a otro filtro.

**`in`**<br/>
Aquí indicaremos el nombre o una de las diferentes opciones donde aplicar el filtro, las opciones son, `SourceGraphic, SourceAlpha, BackgroundImage, BackgroundAlpha, FillPaint y StrokePaint `

## feOffset

Con este **filtro** conseguimos el efecto de sombra paralela. Con el atributo `dx `y `dy `conseguimos proyectar la sombra a la distancia que queramos.

## fegaussianblur

Con este **filtro** conseguimos el efecto de desenfoque gausiano, si utilizas Photoshop te sonara este filtro. Con el atributo `stdDesviation `indicamos la desviación del **filtro**, y con el atributo in donde y como se realizara aplicaremos el desenfoque.

## feMerge

Con este **filtro** combinamos varios filtros a la vez en lugar de uno de tras de otro. Para definir los filtros los colocamos en orden y los invocamos a través de la etiqueta `feMergeNode`, importante indicar con un último `feMergeNode `donde y como se realizara el filtro.

Vamos a ver un ejemplo para dejar mas claro el uso de estos tres filtros.

{% highlight HTML linenos %}<svg xmlns="http://www.w3.org/2000/svg" width="100%"
              height="100%" viewBox="0 0 100% 100%">
        <defs>
          <filter id="filtros">
            <feGaussianBlur in="SourceAlpha"
                            stdDeviation="5"
                            result="gausiano">
            </feGaussianBlur>
            <feOffset in="gausiano"
                      dx="5"
                      dy="5"
                      result="offsetfiltro">
            </feOffset>
            <feMerge>
              <feMergeNode in="offsetfiltro"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>

        <text x="620" y="250" text-anchor="middle"
              fill="red" stroke="blue"
              font-size="50"
              filter="url(#filtros)">
              Jugando con los filtros en SVG.
        </text>
    </svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/filtros/filtros.html">VER EJEMPLO!</a>
</button>

Abrimos la etiqueta `defs`, dentro de ella la etiqueta `filter `con un `id="filtros"`

Ahora abrimos la etiqueta `feGaussianBlur `en el atributo `in `le indicamos que actué sobre el canal alpha con `SourceAlpha`, en `stbDesviation `que tenga una desviación de 5 pixeles y en `result `que guarde esto bajo el nombre gausiano.

Ahora abrimos la etiqueta `feOfsset `a través al atributo `in` lo invocamos con el `result `de `feGaussianBlur ` es decir `in="gausiano"`, en `dx `y `dy` le indicamos el desplazamiento de la sombra, en este caso será de 5 pixeles, y volveremos a guardar todo con la etiqueta `result`.

Ahora abrimos la etiqueta `feMerge `y el primer `feMergeNode `obtendrá a través de `in="offsetfiltro"` el `result `que indicamos anteriormente, ahora abrimos otra etiqueta `feMergeNode `le indicamos a través de `SourceGraphic `que aplique el resultado, podemos probar con `SourceAlpha `y el resto de opciones disponibles para comprobar los diferentes resultados que podemos obtener.

Ahora cerramos las etiquetas `filter `y `defs`.

Y para terminar abrimos una etiqueta `text `y con el atributo `filter="url(#filtros)"` conseguimos aplicar los efectos de los filtros a la etiqueta `text`.

## Enlaces de interes

En esta página de Microsoft podemos ver los efectos **SVG** sobre las fotografías, <a href="http://ie.microsoft.com/testdrive/graphics/hands-on-css3/hands-on_svg-filter-effects.htm" target="_blank">enlace</a>.

La documentación de la **W3C** sobre los filtros en **SVG**, <a href="http://www.w3.org/TR/SVG/filters.html" target="_blank">enlace</a>.

En isla visual tenemos 17 pedazo de post explicandonos los filtros, un trabajo IMPRESIONANTE, <a href="http://www.islavisual.com/articulos/desarrollo_web/listado-articulos.php?cat=SVG%20Filters" target="_blank">enlace</a>. También hay mas artículos sobre SVG, hasta ahora lo mejor que he encontrado sobre SVG en castellano.

 [1]: http://jorgeatgu.com/blog/img/2013/06/filtrossvg.png