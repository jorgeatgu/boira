---
title: Animando filtros SVG con SMIL
author: Jorge Aznar
layout: post
permalink: /animando-filtros-svg-con-smil/
comments: true
dsq_thread_id:
  - 2233415711
tags:
  - SMIL
  - SVG
---
Continuo experimentando con SVG, esta vez añadiendo animaciones con SMIL a los filtros.

<!--more-->

Hace unos meses empece a experimentar con animaciones en los filtros, aprovechando un *Pen *en *CodePen* donde mostraba los efectos de los filtros **SVG **sobre las imágenes añadi una pequeña animación al filtro.


{% codepen jyibl jorgeatgu [result] [400] %}

Se aprecia mejor en <a href="http://codepen.io/jorgeatgu/pen/jyibl" target="_blank">CodePen</a>

## SMIL

Si alguien no esta familiarizado con SMIL le recomiendo antes de nada leer <a href="http://jorgeatgu.com/blog/animation-smil-svg/" target="_blank">Animation SMIL SVG</a> y también el resto de post que están en la <a href="http://jorgeatgu.com/blog/category/smil/" target="_blank">categoría SMIL</a>.

## Experimento

Para el experimento he cogido un *pattern* de <a href="http://svgeneration.com" target="_blank">SVGeneration</a>.

A continuación podéis ver el resultado.

{% codepen Ayevf jorgeatgu [result] [400] %}

### Animando feTurbulence

La primera animación recae sobre el filtro `feTurbulence` y como podeis ver en el código vamos a animar *baseFrequency* que es la frecuencia del ruido, si solo le damos un valor este se aplica para las coordenadas `X` e `Y`, si le damos dos valores el primero sera para la coordenada `X` y el segundo para la coordenada `Y`.
La siguiente animación recae sobre `numOctaves` que representa el parámetro del ruido, cuanto mas valor tenga mas estrecho y complejo sera el resultado.

Vamos a ver el código

{% highlight HTML linenos %}<animate    attributeName="numOctaves"
            values="0;5;4;3;2;7;8;9;10;1;2"
            dur="20s"
            repeatCount="indefinite"/>
<animate    attributeName="baseFrequency"
            values="0;5;4;3;2;7;8;9;10;1;2"
            dur="20s"
            repeatCount="indefinite"/>{% endhighlight %}

### Animando feMorphology

Ahora vamos con la animación que he aplicado a `feMorphology`, este filtro se utiliza para conseguir el efecto de agrandar o empequeñecer la imagen, tiene dos valores `erode `y `dilate`, en este caso he animado `radius` que se encarga del radio que se aplica al filtro.

{% highlight HTML linenos %}<animate    attributeName="radius"
            values="1;2;3;4;5;6;7;8;9;1;9;"
            dur="20s"
            repeatCount="indifinite"/>{% endhighlight %}

Si queréis obtener otro resultado simplemente tenéis que modificar los *values* de las tres animaciones. Si tenéis cuenta en <a href="http://codepen.io" target="_blank">CodePen </a>podéis hacer un *fork* y ver los resultados, si alguien se anima que me avise por <a href="http://twitter.com/jorgeatgu" target="_blank">twitter </a>y me voy añadiendo los *fork*.

Aquí os dejo el resto del código, como podéis ver son muy pocas líneas para un resultado bastante lisérgico.

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox="0 0 100% 100%">
    <filter color-interpolation-filters='sRGB' id='filter3115'>
            <feTurbulence type='fractalNoise' numOctaves='1' baseFrequency='0.9' id='feTurbulence3117'>
                <animate attributeName="numOctaves" values="0;5;4;3;2;7;8;9;10;1;2" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="baseFrequency" values="0;5;4;3;2;7;8;9;10;1;2" dur="20s" repeatCount="indefinite"/>
            </feTurbulence>
            <feColorMatrix result='result5' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -4.15' id='feColorMatrix3119'/>
            <feComposite in2='result5' operator='in' in='SourceGraphic' result='result6' id='feComposite3121' />
            <feMorphology in='result6' operator='dilate' radius='9' result='result3' id='feMorphology3123'>
                <animate attributeName="radius" values="1;2;3;4;5;6;7;8;9;1;9" dur="20s" repeatCount="indefinite"/>
            </feMorphology>
        </filter>
    <rect width='100%' height='100%' x='0' y='0' id='rect2985' fill='#000000'/>
    <rect width='100%' height='100%' x='0' y='0' id='rect2985' filter="url(#filter3115)" fill="#611748">
        <animate attributeName="width" values="90%; 80%; 50%; 60%; 80%; 10%" begin="1s" dur="10s"/>
        <animate attributeName="fill" dur="20s" values="#1abc9c; #16a085; #3498db; #2980b9; #9b59b6; #8e44ad;" begin="1s" repeatCount="indefinite"/>
    </rect>
</svg>{% endhighlight %}