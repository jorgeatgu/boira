---
title: Exportando SVG desde Sketch con opciones ocultas
author: Jorge Aznar
layout: post
permalink: /opciones-ocultas-exportar-svg-sketch/
comments: true
tags:
  - SVG
  - Sketch
---

El otro día los chicos de [Bohemian Coding](http://bohemiancoding.com/sketch/){:target="_blank"} publicaban la version 3.1 de **Sketch**.

Ni que decir tiene que **Sketch** exportando **SVG** es el mejor en el mercado. No nos inunda con un menú gigante con un montón de opciones que no vamos a tocar ya que en el fondo no nos ofrecen ninguna ayuda. Tampoco tiene rival a la hora de exportar sin decimales, hasta ahora **Sketch** es capaz de exportar todas las coordenadas y medidas con números enteros, esto solamente lo logramos con **Sketch**.

El otro día a través de su cuenta de twitter lanzaron el siguiente tweet


{% tweet 522702281201188864 %}

En el [link](http://bohemiancoding.com/sketch/support/documentation/13-preferences/){:target="_blank"} nos indican dos opciones para exportar **SVG**. Vamos a verlas.

## exportCompactSVG

Con esta opción vamos a exportar **SVG** desde **Sketch** sin los metadata. Ya nos advierten de que si activamos esta opción tenemos que estar seguros de que luego no vamos a volver a abrir este **SVG** con **Sketch**. Está opción la podemos activar y desactivar desde el propio Terminal.

Abrimos el Terminal y vamos a escribir lo siguiente para desactivar la opción

{% highlight BASH %}
sudo defaults write com.bohemiancoding.sketch3 exportCompactSVG -bool no
{% endhighlight %}

A continuación nos mostrará un mensaje, por desgracia como ya active está funcion ya no me muestra el mensaje de advertencia.

El resultado a la hora de exportar con el comando activado es el siguiente.

{% highlight HTML %}

<svg width="294px" height="294px" viewBox="0 0 294 294" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="sincomando" transform="translate(-9.000000, -9.000000)" fill="#10D6F0" stroke="#D01111">
            <g id="Page-1">
                <rect id="Rectangle-1" x="0" y="0" width="312" height="312" rx="8"></rect>
            </g>
        </g>
    </g>
</svg>
{% endhighlight %}

Ahora vamos a ver el mismo **SVG** pero con el comando desactivado

{% highlight HTML %}

<svg width="292px" height="292px" viewBox="0 0 292 292" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <!-- Generator: Sketch 3.1 (8751) - http://www.bohemiancoding.com/sketch -->
    <title>Slice 2</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <rect id="Rectangle-1" stroke="#D01111" fill="#10D6F0" sketch:type="MSShapeGroup" x="-10" y="-10" width="312" height="312" rx="8"></rect>
    </g>
</svg>
{% endhighlight %}

Para no ir jugando a encuentra las diferencias entre los códigos aquí voy a mostrar que suprime **Sketch** a la hora de activar este *feature*.

{% highlight HTML %}
xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
<!-- Generator: Sketch 3.1 (8751) - http://www.bohemiancoding.com/sketch -->
    <title>Slice 2</title>
    Created with Sketch.
    sketch:type="MSPage"
    sketch:type="MSShapeGroup"
{% endhighlight %}

Por cierto **Sketch** vuelve a abrir sin problemas los archivos que no tienen metadata. Aunque no lo he probado seguramente si volvemos a exportar con el comando desactivado nos vuelve a añadir los metadata.

## svgExportSkipAssignIdToLayerName

Esta opción no me gusta. Si le damos un nombre a las capas es para encontrarlas con más facilidad. Así que esos nombres nos pueden servir de ayuda si después de exportar con **SVG** vamos a modificar esos archivos.

Al igual que el anterior vamos a activar y desactivar el comando desde el Terminal.

{% highlight BASH %}
defaults write com.bohemiancoding.sketch3 svgExportSkipAssignIdToLayerName -bool no
{% endhighlight %}

Y desactivar

{% highlight BASH %}
defaults write com.bohemiancoding.sketch3 svgExportSkipAssignIdToLayerName -bool yes
{% endhighlight %}

