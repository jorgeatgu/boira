---
title: Animaciones SVG que contienen números en su ID no funcionan en Firefox
author: Jorge Aznar
layout: post
permalink: /svg-firefox-error-id-utilizan-numeros/
comments: true
dsq_thread_id:
  - 2148275034
tags:
  - SMIL
  - SVG
---
Mientras colaboraba con <a href="http://thenounproject.com/" target="_blank">The Noun Project</a> en la conversión de un GIF a formato **SVG** me di cuenta de que una parte de la animación no funcionaba en Mozilla Firefox.

<!--more-->

Después de quitar, poner y cambiar buena parte del código al fin encontré la solución. Si el atributo `id=""` de la animación contiene un número esta no comenzara su carga.

Para el siguiente ejemplo he utilizado una animación que proviene de <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin" target="_blank">Mozilla Developers</a>

Esto no funcionara en Firefox

{% highlight HTML linenos %}
<rect x="10" y="35" height="15" width="0">
        <animate id="1"
                 attributeType="XML"
                 attributeName="width"
                 to="50"
                 dur="4s"
                 begin="0s;3.end" />
    </rect>

    <rect x="60" y="60" height="15" width="0">
        <animate id="2"
                 attributeType="XML"
                 attributeName="width"
                 to="25"
                 dur="2s"
                 begin="1.end" />
    </rect>

    <rect x="85" y="85" height="15" width="0">
        <animate id="3"
                 attributeType="XML"
                 attributeName="width"
                 to="25"
                 dur="2s"
                 begin="2.end" />
    </rect>

    <!-- steps -->

    <text x="10" y="20" text-anchor="middle">0s</text>
    <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
    <text x="35" y="20" text-anchor="middle">2s</text>
    <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
    <text x="60" y="20" text-anchor="middle">4s</text>
    <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
    <text x="85" y="20" text-anchor="middle">6s</text>
    <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
    <text x="110" y="20" text-anchor="middle">8s</text>
    <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

    <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
    <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
    {% endhighlight %}

Esto si que funcionara

{% highlight HTML linenos %}
rect x="10" y="35" height="15" width="0">
        <animate id="first"
                 attributeType="XML"
                 attributeName="width"
                 to="50"
                 dur="4s"
                 begin="0s;third.end" />
    </rect>

    <rect x="60" y="60" height="15" width="0">
        <animate id="second"
                 attributeType="XML"
                 attributeName="width"
                 to="25"
                 dur="2s"
                 begin="first.end" />
    </rect>

    <rect x="85" y="85" height="15" width="0">
        <animate id="third"
                 attributeType="XML"
                 attributeName="width"
                 to="25"
                 dur="2s"
                 begin="second.end" />
    </rect>

    <!-- steps -->

    <text x="10" y="20" text-anchor="middle">0s</text>
    <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
    <text x="35" y="20" text-anchor="middle">2s</text>
    <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
    <text x="60" y="20" text-anchor="middle">4s</text>
    <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
    <text x="85" y="20" text-anchor="middle">6s</text>
    <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
    <text x="110" y="20" text-anchor="middle">8s</text>
    <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

    <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
    <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
    {% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/mozillanumeros/mozillaanimate.html">VER EJEMPLO!</a>
</button>

Y ya por último mi contribución a The Noun Project


{% codepen romkF jorgeatgu [result] [400] %}
