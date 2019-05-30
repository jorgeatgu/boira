---
title: 'Mis notas sobre SVG (II) &#8211; Etiqueta defs'
author: Jorge Aznar
layout: post
permalink: /mis-notas-sobre-svg-ii-etiqueta-defs/
comments: true
dsq_thread_id:
  - 2145142975
tags:
  - Adobe Illustrator
  - Diseño Gráfico
  - Diseño Web
  - SVG
---
La etiqueta <defs> se emplea para alojar elementos gráficos que van a ser empleados repetidamente a lo largo de un SVG. **Su uso no es obligatorio pero la W3C la recomienda para hacer mas accesible y legible nuestro código**.

<!--more-->

Los elementos que podemos incluir dentro de la etiqueta <defs> son los siguientes:

### Animaciones

`animate` `animatecolor` `animatemotion` `animatetransform` `set`

### Descripciones

`desc` `metadata` `title`

### Formas básicas

`circle` `ellipse` `line` `path` `polygon` `polyline` `rect`

### Estructurales

`defs` `g` `svg` `symbol` `use`

### Degradados

`lineargradient` `radialgradient`

### Mas etiquetas

`a` `altglyphdef` `clippath` `color-profile` `cursor` `filter` `font` `font-face` `foreignobject` `image` `marker` `mask` `pattern` `script` `style` `switch` `text` `view`

Cualquiera de estos elementos que sea incluído dentro de `defs` no sera visible a la hora de reproducir el SVG, **para que estos elementos sean visibles tendremos que invocarlos a través de la etiqueta `use`.**

**EJEMPLO**

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%" viewBox="0 0 100% 100%"
      enable-background="new 0 0 100% 100%" xml:space="preserve">

        <defs>
          <rect id="ejemplo" x="200" y="0" width="80" height="80"
          fill="black" />
        </defs>

        <use xlink:href="#ejemplo"/>
        <use xlink:href="#ejemplo" transform="translate(100,50)"/>
        <use xlink:href="#ejemplo" transform="translate(230,30)"/>

    </svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/defs/defs.html">VER EJEMPLO!</a>
</button>

En este ejemplo simplemente incluimos un rectángulo dentro de la etiqueta defs con un `id="ejemplo"` y para que sea visible como hemos dicho anteriormente lo invocamos a través de la etiqueta `use`, si queremos mover el rectángulo a lo largo del documento lo haremos añadiendo al código lo siguiente `transform="translate(100,50)"` el primer valor que es 100 corresponde a la coordenada `x` y el segundo que es 50 corresponde a la coordenada `y`.

Como hemos dicho anteriormente utilizar la etiqueta `defs` es tan solo una recomendación, se puede trabajar sin ella, en el siguiente ejemplo lo podemos ver.

{% highlight HTML linenos %}<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%" viewBox="0 0 100% 100%"
      enable-background="new 0 0 100% 100%" xml:space="preserve">

        <rect id="ejemplo" x="200" y="0" width="80" height="80" fill="black"/>
        <use xlink:href="#ejemplo" transform="translate(100,50)"/>
        <use xlink:href="#ejemplo" transform="translate(230,30)"/>

</svg>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/defs/defs2.html">VER EJEMPLO!</a>
</button>

Como podemos observar el resultado es el mismo pero el caos se puede apoderar del código si el documento es bastante extenso, **así que aunque podamos vivir sin ella lo recomendable es usarla.**