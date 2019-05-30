---
title: 'Mis notas sobre SVG (III) &#8211; Escalar objetos desde el centro'
author: Jorge Aznar
layout: post
permalink: /mis-notas-sobre-svg-iii-escalar-objetos-desde-el-centro/
comments: true
dsq_thread_id:
  - 2117083422
tags:
  - SVG
  - tutorial
---
Mientras trabaja en reproducir con SVG la animación que tiene iOS7 me encontré con el problema de que al utilizar `animateTransform attributeName="scale"` los objetos a los que aplicaba esta animación se escalaban desde las coordenadas `x=0` e `y=0` por un lado conseguía el efecto de escalar pero no desde el punto que deseaba.

<!--more-->

**EJEMPLO**

{% highlight HTML linenos %}<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1280px" height="800px" viewBox="0 0 1280 800">


<g id="mensajes">
            <linearGradient id="SVGID_61_" gradientUnits="userSpaceOnUse" x1="510.1909" y1="161.0786" x2="510.1909" y2="214.9416">
                        <stop offset="0" style="stop-color:#8EFF76"/>
                        <stop offset="0.5284" style="stop-color:#45E740"/>
                        <stop offset="0.9455" style="stop-color:#09D413"/>
            </linearGradient>
            <g>
            <animateTransform attributeName="transform" attributeType="XML"
                    type="scale" from="0" to="1" dur="2s"
                    fill="freeze"/>
            <rect x="483" y="160" width="56" height="56" fill="url(#SVGID_61_)" rx="13"/>
            <path fill="#FFFFFF" d="M510.4,169.8c-11.3,0-20.5,7.6-20.5,17c0,6.3,4.1,11.8,10.2,14.7c-0.2,0.7-0.7,2.6-2.7,4.4 c0,0,4.8,0,6.6-3c2,0.5,4.1,0.8,6.3,0.8c11.3,0,20.5-7.6,20.5-17C530.9,177.4,521.8,169.8,510.4,169.8z"/>
        </g>
    </g>

</svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/scale/scale.html">VER EJEMPLO!</a>
</button>

**Solución**

Al final encontré dos métodos alternativo en el grupo de SVG-Developers de Yahoo en un **mensaje de Mathias Fatene del **año 2003**!!!!!**

El primer metodo consiste en añadir a `scale` dos `animate`, el primero a la coordenada `X` y el segundo a la coordenada `Y`, con esto corregimos que scale empieze desde (0,0) y le podemos añadir la coordenada que nosotros queramos.

{% highlight HTML linenos %}<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
<rect id="Container" x="37.5" y="42.5" width="90" height="70"
fill="rgb(0,204,153)" />
<rect x="60" y="60" width="45" height="35" fill="rgb(231,15,15)">
<animateTransform dur="1" fill="freeze" type="scale"
attributeName="transform" from="1,1" to="2,2" />
<animate dur="1" fill="freeze" attributeName="x" from="60"
to="18.75" />
<animate dur="1" fill="freeze" attributeName="y" from="60"
to="21.25" />
</rect>
</svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/scale/solucion1.html">VER EJEMPLO!</a>
</button>

Como podemos ver en el ejemplo ya hemos corregido las coordenadas de inicio de `scale` pero la animación no queda del todo fina, así que vamos con el otro método que a mi personalmente es el que mas me ha gustado y el que al final he utilizado.

La segunda solución consiste en sustituir `scale` por cuatro `animate`, dos irán a las coordenadas `X` e `Y` y los otros dos a `width` y `height`.

{% highlight HTML linenos %}<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
<rect id="Container" x="37.5" y="42.5" width="90" height="70"
fill="rgb(0,204,153)" />
<rect x="60" y="60" width="45" height="35" fill="rgb(231,15,15)">
<animate dur="1s" fill="freeze" attributeName="x" from="60" to="37.5"
calcMode="linear"/>
<animate dur="1s" fill="freeze" attributeName="y" from="60" to="42.5"
calcMode="linear"/>
<animate dur="1s" fill="freeze" attributeName="width" from="45" to="90"
calcMode="linear"/>
<animate dur="1s" fill="freeze" attributeName="height" from="35" to="70"
calcMode="linear"/>
</rect>
</svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/scale/solucion2.html">VER EJEMPLO!</a>
</button>

Como podemos apreciar la animación queda mucho mejor utilizando este segundo método.

<a href="http://groups.yahoo.com/neo/groups/svg-developers/conversations/topics/35863" target="_blank">Post original de SVG-developers</a>

<a href="http://cdpn.io/pvzlj" target="_blank">Aquí la animación SMIL SVG donde aplique el método</a>