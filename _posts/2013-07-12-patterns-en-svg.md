---
title: Patterns en SVG
author: Jorge Aznar
layout: post
permalink: /patterns-en-svg/
comments: true
dsq_thread_id:
  - 2099556635
tags:
  - Diseño Web
  - SVG
---
Hoy vamos a ver los *patterns* o patrones en **SVG**. Con los *patterns* conseguimos repetir una imagen, objeto, recuadro a lo largo de nuestro **SVG** sin tener que estar repitiendo continuamente el mismo código.

<!--more-->

Los *patterns* siempre deberán ir dentro de la etiqueta `defs`, y se declaran con la etiqueta `pattern` dentro de esta etiqueta incluiremos los objetos que vayamos a utilizar en nuestro *pattern*.

Para los ejemplos de los *patterns* voy a utilizar los de <a href="http://philbit.com/svgpatterns/" target="_blank">Philip Rogers</a>, que a su vez se inspiro en los patterns que creo <a href="http://lea.verou.me/css3patterns/" target="_blank">Lea Verou</a> solamente con CSS.

Si observamos los patterns de **Philip Rogers** veremos que ha utilizado **JavaScript** para conseguir que sean compatibles con todos los navegadores.

**EJEMPLOS**

En los ejemplos vamos a ver como añadir el **SVG** a través de la etiqueta `object` `img` `inline` y con `background-image`. Cada uno va dentro de una etiqueta `article` para darle a todos la misma medida aunque como observareis no todos respetan el tamaño, tan solo he tenido que darle estilos a la etiqueta `img` ya que el `height` se desboca, tengo que investigar cual es el motivo.

### Horizontal Stripes

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

      <defs>
        <pattern id="textura" width="30" height="30"
        patternUnits="userSpaceOnUse">
          <rect width='30' height='30' fill='#00a9f1'/>
          <rect width='30' height='18' fill='#26baf4'/>
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

  </svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/horizontal-stripes.html">VER EJEMPLO!</a>
</button>

### Green Stripes

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

      <defs>
        <pattern id="textura" width="70" height="70"
        patternUnits="userSpaceOnUse">
        <rect width='70' height='70' fill='#bbd817'/>
        <g transform='rotate(45)'>
          <rect width='99' height='25' fill='#a9ce00'/>
          <rect y='-50' width='99' height='25' fill='#a9ce00'/>
        </g>
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

  </svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/green-stripes.html">VER EJEMPLO!</a>
</button>

### Honeycomb

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

      <defs>
         <pattern id="textura" width="56" height="100"
        patternUnits="userSpaceOnUse">
        <rect width='70' height='70' fill='#bbd817'/>
        <rect width='56' height='100' fill='#f8d203'/>
        <path d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='#fff629' stroke-width='2'/>
        <path d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='#ffe503' stroke-width='2'/>
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

  </svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/honeycomb.html">VER EJEMPLO!</a>
</button>

### Chevrons

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

  <defs>
    <pattern id="textura" width="60" height="30"
        patternUnits="userSpaceOnUse">
      <rect id='r' width='30' height='15' fill='#bb085f' stroke-width='2.5' stroke='#7a054d'/>
      <g id='p'>
      <use xlink:href='#r'/>
      <use y='15' xlink:href='#r'/>
      <use y='30' xlink:href='#r'/>
      <use y='45' xlink:href='#r'/>
      </g>
      <use xlink:href='#p' transform='translate(0 -25) skewY(40)'/>
      <use xlink:href='#p' transform='translate(30 0) skewY(-40)'/>
    </pattern>
  </defs>

  <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

</svg>{% endhighlight %}

Este patrón no se puede añadir a través de las etiquetas `object`, `img` ni con `background` ya que al usar etiquetas `use` dentro de `pattern` el **SVG** da error.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/chevrons.html">VER EJEMPLO!</a>
</button>

### Carbon Fiber

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

  <defs>
    <pattern id="textura" width="15" height="15"
        patternUnits="userSpaceOnUse">
        <rect width='50' height='50' fill='#282828'/>
        <circle cx='3' cy='4.3' r='1.8' fill='#393939'/>
        <circle cx='3' cy='3' r='1.8' fill='black'/>
        <circle cx='10.5' cy='12.5' r='1.8' fill='#393939'/>
        <circle cx='10.5' cy='11.3' r='1.8' fill='black'/>
    </pattern>
  </defs>

  <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

</svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/carbon-fiber.html">VER EJEMPLO!</a>
</button>

### Thin Stripes

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

      <defs>
        <pattern id="textura" width="5" height="5"
        patternUnits="userSpaceOnUse">
          <rect width='5' height='5' fill='#9e9e9e'/>
          <path d='M0 5L5 0ZM6 4L4 6ZM-1 1L1 -1Z' stroke='#888' stroke-width='1'/>
        </pattern>
      </defs>


      <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

  </svg>{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/thin-stripes.html">VER EJEMPLO!</a>
</button>

### Speclked Noise

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
   width="100%" height="100%" viewBox="0 0 100% 100%"
   enable-background="new 0 0 100% 100%" xml:space="preserve">

      <defs>
        <pattern id="textura" width="300" height="300"
        patternUnits="userSpaceOnUse">
        <filter id='n' x='0' y='0'>
        <feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='10' stitchTiles='stitch'/>
        </filter>
        <rect width='300' height='300' fill='#000'/>
        <rect width='300' height='300' filter="url(#n)" opacity='0.4'/>
        </pattern>
      </defs>


      <rect x="0" y="0" width="100%" height="100%" fill="url(#textura)"/>

  </svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/patterns/speckled-noise.html">VER EJEMPLO!</a>
</button>

Aquí os dejo todos los archivos para descargar

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/doc/patterns.zip">DESCARGAR!</a>
</button>