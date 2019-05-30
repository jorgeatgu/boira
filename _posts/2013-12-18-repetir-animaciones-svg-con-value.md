---
title: Animaciones SVG con value
author: Jorge Aznar
layout: post
permalink: /repetir-animaciones-svg-con-value/
comments: true
dsq_thread_id:
  - 2169679172
tags:
  - SMIL
  - SVG
---
Por norma general cuando utilizo `animate animateTransform="translate"` suelo emplear `from=""` y `to=""`, pero a la hora de que la animación se repita constantemente he encontrado un método que utiliza menos código y con el que la repetición de la animación no queda tan falsa, simplemente utilizo `value=""` en lugar de `from=""` y `to=""`.

<!--more-->

Como siempre las cosas se ven y explican mejor con un ejemplo práctico. Para este ejemplo he cogido una parte de una animación que hice en su día y que se llama City &#038; Clock, <a href="http://codepen.io/jorgeatgu/pen/qvzLm" target="_blank">esta disponible en CodePen</a>.

En este ejemplo lo que buscamos es que las dos nubes recorran el escenario *ad infinitum*, para ello podemos utilizar `from=""` y `to=""`, le indicamos con una primera animación que vaya desde la coordenada `from="1"` hasta `to="200"` y justo cuando esta termine que se inicie otra animación que vaya desde `from="200"` hasta `to="-50"`, el código quedaría de la siguiente manera.

{% highlight HTML linenos %}
<animateTransform attributeName="transform" type="translate" from="1" to="200" begin="0s" dur="10s"/>
    <animateTransform attributeName="transform" type="translate" from="200" to="-50" begin="10s" dur="10s"/>
    <animateTransform attributeName="transform" type="translate" from="-50" to="200" begin="20s" dur="10s"/>
    <animateTransform attributeName="transform" type="translate" from="200" to="-50" begin="30s" dur="54s"/>
    <path id="unanube" fill="#FFFFFF" d="M782.4,209.7c-5.1,0-56.7,1.1-57.8,0c-30.9-13.2-7.5-39.9,6.4-35c3.5-22.1,27.5-13.8,29.3-2.6 c14.4-8.9,25,10.4,19.3,15.4C800.8,187.3,791,211.9,782.4,209.7z"/>
    <path id="segundanube" fill="#FFFFFF" d="M952.4,288.7c-5.1,0-56.7,1.1-57.8,0c-30.9-13.2-7.5-39.9,6.4-35c3.5-22.1,27.5-13.8,29.3-2.6 c14.4-8.9,25,10.4,19.3,15.4C970.8,266.3,961,290.9,952.4,288.7z"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/value/sinvalue.html">VER EJEMPLO!</a>
</button>

Pero estos cuatro `animateTransform` que utilizamos para llevar a cabo la animación los podemos simplificar en uno solo, para ello utilizamos `value=""`, dentro del atributo indicamos las coordenadas, primero la coordenada `x` y en segunda posición la coordenada `y`, se añade un punto y coma para separar las coordenadas y el código quedara de la siguiente manera `values="0 0; 200 0; -50 0; 200 0; -50 0"`, la animación comienza en 0, avanza hasta 200, retrocede hasta -50, avanza hasta 200 y por último vuelve a retroceder hasta -50.

{% highlight HTML linenos %}
<animateTransform
    attributeName="transform"
    type="translate"
    values="0 0; 200 0; -50 0; 200 0; -50 0"
    begin="0s" dur="40s"
    repeatcount="2"/>
    <path id="unanube" fill="#FFFFFF" d="M782.4,209.7c-5.1,0-56.7,1.1-57.8,0c-30.9-13.2-7.5-39.9,6.4-35c3.5-22.1,27.5-13.8,29.3-2.6 c14.4-8.9,25,10.4,19.3,15.4C800.8,187.3,791,211.9,782.4,209.7z"/>
    <path id="segundanube" fill="#FFFFFF" d="M952.4,288.7c-5.1,0-56.7,1.1-57.8,0c-30.9-13.2-7.5-39.9,6.4-35c3.5-22.1,27.5-13.8,29.3-2.6 c14.4-8.9,25,10.4,19.3,15.4C970.8,266.3,961,290.9,952.4,288.7z"/>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/value/convalue.html">VER EJEMPLO!</a>
</button>

Mucho mejor ¿no? además si queremos que esta animación sea infinita simplemente añadimos un `repeatCount="indefinite"` y las nubes estarán moviéndose hasta el infinito y mas allá.

También podemos dotar a la animación de mas velocidad con <a href="http://jorgeatgu.com/blog/mis-notas-sobre-svg-iv-calcmode-keytimes-y-keysplines/" target="_blank">calcMode, keySpline y keyTimes</a>.