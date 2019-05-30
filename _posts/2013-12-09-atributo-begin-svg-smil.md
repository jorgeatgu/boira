---
title: 'Animando SVG con SMIL &#8211; atributo begin'
author: Jorge Aznar
layout: post
permalink: /atributo-begin-svg-smil/
comments: true
dsq_thread_id:
  - 2206858907
tags:
  - SMIL
  - SVG
---
Con el atributo `begin` vamos a definir el comienzo de una animación con **SMIL** en **SVG**.

<!--more-->

Para definir el tiempo podemos utilizar las siguientes unidades:

1. **h** Horas <br/>
2. **min** Minutos <br/>
3. **s** Segundos <br/>
4. **ms** Milisegundos <br/>

La lista de elementos donde vamos a utilizar el atributo `begin` son las siguientes:

1. animate <br/>
2. animatecolor <br/>
3. animatemotion <br/>
4. animatetransform <br/>
5. mpath <br/>
6. set <br/>

A continuación vamos a ver los diferentes valores que podemos utilizar en el atributo `begin`


### Offset

El atributo `begin` es definido con el valor de la unidad de tiempo que nosotros especifiquemos, como hemos visto anteriormente la unidad puede estar en milisegundos, segundos, minutos o horas. El valor podrá ser negativo.

En el ejemplo que vamos a ver a continuación la animación comienza al segundo de cargar `begin="1s"`

{% highlight HTML linenos %}
<animateTransform
id="cerrar"
attributeName="transform"
type="translate"
from="0" to="1000"
dur="5s"
repeatDur="1"
begin="1s"
fill="freeze"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/begin/offset.html">VER EJEMPLO!</a>
</button>

### Syncbase

La animación comenzara con el inicio o final de otra animación, la cual deberá tener obligatoriamente un `ID` para así poder referenciarla. En primer lugar irá el id de la animación y a continuación `.end` o .`begin`. Utilizaremos `.end` cuando queramos que nuestra animación comience cuando termine la animación referenciada, o `.begin` cuando queramos que nuestra animación comience a la vez que la animación referenciada.
También podemos añadir tiempo extra al inicio de la animación, simplemente tenemos que hacerlo con el símbolo + acompañado del tiempo, por ejemplo `begin="cerrar.end+5s"`. La animación comenzara 5 segundos después del fin de la animación con el nombre *cerrar*.

En el ejemplo que vamos a ver a continuación la segunda parte de la animación comenzara cuando la animación con el `ID="cerrar"` termine.

{% highlight HTML linenos %}
<animateTransform id="tapa"
attributeName="transform"
type="translate"
from="0" to="1000"
dur="5s"
repeatDur="1"
begin="cerrar.end"
fill="freeze"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/begin/syncbase.html">VER EJEMPLO!</a>
</button>

### Event

El comienzo de la animación estará definido por un evento.
Los eventos que podemos emplear son los siguientes: *focusin, focusout, activate, click, mousedown, mouseup, mouseover, mousemove, mouseout, DOMSubtreeModified, DOMNodeInserted, DOMNodeRemoved, DOMNodeRemovedFromDocument, DOMNodeInsertedIntoDocument, DOMAttrModified, DOMCharacterDataModified, SVGLoad, SVGUnload, SVGAbort, SVGError, SVGResize, SVGScroll, SVGZoom, beginEvent, endEvent and repeatEvent.*

En el ejemplo que vamos a ver a continuación la animación comenzara con el evento *mouseover*, es decir, cuando el ratón pase por encima del sobre.

{% highlight HTML linenos %}
<animateTransform id="cerrar"
attributeName="transform"
type="translate"
from="0" to="1000"
dur="5s"
repeatDur="1"
begin="mouseover"
fill="freeze"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/begin/event.html">VER EJEMPLO!</a>
</button>

En este SVG que está disponible en CodePen la aplicación de los filtros a la imagen comienzan con el evento `.click`


{% codepen jyibl jorgeatgu [result] [400] %}



### Repeat

En el ejemplo que vamos a ver a continuación la animación se repite cuando la última animación llega a su fin, como se puede ver en el ejemplo los valores están separados por punto y coma `begin="1s;barra.end" `

{% highlight HTML linenos %}
<animateTransform id="cerrar"
attributeName="transform"
type="translate"
from="0" to="1000"
dur="5s"
repeatDur="1"
begin="1s;barra.end"
fill="freeze"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/begin/repeat.html">VER EJEMPLO!</a>
</button>

### AccessKey

La animación comenzara cuando el usuario presione la tecla que indiquemos, lo haremos de la siguiente forma `begin="accessKey(h)" `, entre paréntesis ira la letra. **Solo funciona en Firefox.**

En el ejemplo que vamos a ver a continuación la animación comienza cuando el usuario presione la tecla h.

{% highlight HTML linenos %}
<animateTransform id="cerrar"
attributeName="transform"
type="translate"
from="0" to="1000"
dur="5s"
repeatDur="1"
begin="accessKey(h)"
fill="freeze"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/begin/accesskey.html">VER EJEMPLO!</a>
</button>

### wallclock

La animación comenzara con el valor de un reloj de tiempo real. La sintaxis de tiempo se basa en la sintaxis definida en <a href="http://www.iso.org/iso/catalogue_detail?csnumber=40874" target="_blank">ISO8601</a>.

### indefinite

El comienzo de la animación estará determinado por un &#8220;beginElement()&#8221;

Mas información en la <a href="http://www.w3.org/TR/SVG/animate.html#BeginAttribute" target="_blank">especificación de SVG en W3C</a>.