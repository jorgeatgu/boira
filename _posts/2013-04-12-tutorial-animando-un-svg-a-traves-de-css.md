---
title: 'Tutorial &#8211; Animando un SVG a través de CSS'
author: Jorge Aznar
excerpt: 'Vamos a animar un SVG con CSS para ello vamos a utilizar dos recursos <strong>open source</strong>.'
layout: post
permalink: /tutorial-animando-un-svg-a-traves-de-css/
comments: true
dsq_thread_id:
  - 2099699501
tags:
  - CSS3
  - Diseño Gráfico
  - HTML5
  - SVG
  - tutorial
---
Vamos a animar un SVG con CSS para ello vamos a utilizar dos recursos **open source**.

El primero se llama **<a href="http://wagerfield.github.io/flat-surface-shader/" target="_blank">Flat Surface Shader</a>**, creado por <a href="https://twitter.com/mwagerfield" target="_blank">Matthew Wagerfield</a> y <a href="https://twitter.com/schneidertobias" target="_blank">Tobias Schneider</a>, lo vamos a utilizar para generar el **SVG** que mas tarde animaremos con **CSS**.

<!--more-->

Sus creadores nos explican su funcionamiento:

> FFS is a small side project to explore the possibilities to make art with code.
>
> Admit it, 3D is cool. But, you know what&#8217;s cooler? 2D.
> I love WebGL, but unfortunately it doesn&#8217;t work everywhere.
>
> This lighting simulation can be configured to use either the 2D context of a canvas element or an array of SVG polygons to draw the triangles. It also utilises native Float32Arrays to store numerical data for highly optimised calculations.
>
> This is a collaborative effort between
> Matthew Wagerfield and Tobias van Schneider – a couple of pandas trying to make the web a more magical place.

El menú de **Flat Surface Shader** es bastante sencillo de utilizar, jugando con el podemos ir viendo al instante los cambios que vamos haciendo. En el **<a href="https://github.com/wagerfield/flat-surface-shader" target="_blank">GitHub </a>**de **Flat Surface Shader** nos explican las funciones de cada opción.

Los valores que he utilizado para este ejemplo.

![flat surface shader][1]

He reducido el número de *slices* y *segments* ya que si no el **SVG** adquiere un tamaño bastante considerable.

Antes de exportar nos aseguramos de que en la pestaña de *render *hemos seleccionado **SVG**. Cuando le damos a exportar nos abre una pestaña con la imagen, simplemente le damos botón derecho, le damos a guardar y ya tenemos nuestro **SVG**.

El siguiente paso lo podemos hacer en Sublime o en Illustrator, yo prefiero hacerlo en Illustrator. Lo que vamos a hacer es abrir el **SVG **y renombrar cada elemento, en este caso tenemos 48 polígonos o capas, así que las vamos a renombrar en orden numérico. Una vez completado este paso nos disponemos a abrir el **SVG** en Sublime y veremos este código:

{% highlight HTML linenos %}
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
<polygon id="cuarentayocho" fill="#C13745" stroke="#C13745" stroke-linejoin="round" stroke-miterlimit="1" points="
	280.085,185.834 247.564,257.504 280.085,257.504 "/>
<polygon id="cuarentaysiete" fill="#861845" stroke="#861845" stroke-linejoin="round" stroke-miterlimit="1" points="
	247.564,185.834 247.564,257.504 280.085,185.834 "/>
<polygon id="cuarentayseis" fill="#931E45" stroke="#931E45" stroke-linejoin="round" stroke-miterlimit="1" points="
	280.085,114.166 247.564,185.834 280.085,185.834 "/>
<polygon id="cuarentaycinco" fill="#B63145" stroke="#B63145" stroke-linejoin="round" stroke-miterlimit="1" points="
	247.564,114.166 247.564,185.834 280.085,114.166 "/>
<polygon id="cuarentaycuatro" fill="#B12E45" stroke="#B12E45" stroke-linejoin="round" stroke-miterlimit="1" points="
	280.085,42.497 247.564,114.166 280.085,114.166 "/>
<polygon id="cuarentaytres" fill="#D64245" stroke="#D64245" stroke-linejoin="round" stroke-miterlimit="1" points="
	247.564,42.497 247.564,114.166 280.085,42.497 "/>
<polygon id="cuarentaydos" fill="#9A2245" stroke="#9A2245" stroke-linejoin="round" stroke-miterlimit="1" points="
	247.564,185.834 215.042,257.504 247.564,257.504 "/>
<polygon id="cuarentayuno" fill="#B32F45" stroke="#B32F45" stroke-linejoin="round" stroke-miterlimit="1" points="
	215.042,185.834 215.042,257.504 247.564,185.834 "/>
<polygon id="cuarenta" fill="#D13F45" stroke="#D13F45" stroke-linejoin="round" stroke-miterlimit="1" points="247.564,114.166
	215.042,185.834 247.564,185.834 "/>
<polygon id="treintaynueve" fill="#E14845" stroke="#E14845" stroke-linejoin="round" stroke-miterlimit="1" points="
	215.042,114.166 215.042,185.834 247.564,114.166 "/>
<polygon id="treintayocho" fill="#DE4645" stroke="#DE4645" stroke-linejoin="round" stroke-miterlimit="1" points="247.564,42.497
	215.042,114.166 247.564,114.166 "/>
<polygon id="treintaysiete" fill="#E54A45" stroke="#E54A45" stroke-linejoin="round" stroke-miterlimit="1" points="
	215.042,42.497 215.042,114.166 247.564,42.497 "/>
<polygon id="treintayseis" fill="#962045" stroke="#962045" stroke-linejoin="round" stroke-miterlimit="1" points="
	215.042,185.834 182.521,257.504 215.042,257.504 "/>
<polygon id="treintaycinco" fill="#BC3445" stroke="#BC3445" stroke-linejoin="round" stroke-miterlimit="1" points="
	182.521,185.834 182.521,257.504 215.042,185.834 "/>
<polygon id="treintaycuatro" fill="#DD4645" stroke="#DD4645" stroke-linejoin="round" stroke-miterlimit="1" points="
	215.042,114.166 182.521,185.834 215.042,185.834 "/>
<polygon id="treintaytres" fill="#FF5E45" stroke="#FF5E45" stroke-linejoin="round" stroke-miterlimit="1" points="
	182.521,114.166 182.521,185.834 215.042,114.166 "/>
<polygon id="treintaydos" fill="#FF6045" stroke="#FF6045" stroke-linejoin="round" stroke-miterlimit="1" points="215.042,42.497
	182.521,114.166 215.042,114.166 "/>
<polygon id="treintayuno" fill="#FF5B45" stroke="#FF5B45" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,42.497
	182.521,114.166 215.042,42.497 "/>
<polygon id="treinta" fill="#B53045" stroke="#B53045" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,185.834
	150,257.504 182.521,257.504 "/>
<polygon id="veintinueve" fill="#D64245" stroke="#D64245" stroke-linejoin="round" stroke-miterlimit="1" points="150,185.834
	150,257.504 182.521,185.834 "/>
<polygon id="veintiocho" fill="#FF6045" stroke="#FF6045" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,114.166
	150,185.834 182.521,185.834 "/>
<polygon id="veintisiete" fill="#FF6D45" stroke="#FF6D45" stroke-linejoin="round" stroke-miterlimit="1" points="150,114.166
	150,185.834 182.521,114.166 "/>
<polygon id="veintiseis" fill="#FF8A45" stroke="#FF8A45" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,42.497
	150,114.166 182.521,114.166 "/>
<polygon id="veinticinco" fill="#FF9245" stroke="#FF9245" stroke-linejoin="round" stroke-miterlimit="1" points="150,42.497
	150,114.166 182.521,42.497 "/>
<polygon id="veinticuatro" fill="#C33845" stroke="#C33845" stroke-linejoin="round" stroke-miterlimit="1" points="150,185.834
	117.479,257.504 150,257.504 "/>
<polygon id="veintitres" fill="#D24045" stroke="#D24045" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,185.834
	117.479,257.504 150,185.834 "/>
<polygon id="veintidos" fill="#FF5945" stroke="#FF5945" stroke-linejoin="round" stroke-miterlimit="1" points="150,114.166
	117.479,185.834 150,185.834 "/>
<polygon id="veinteuno" fill="#FF8045" stroke="#FF8045" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,114.166
	117.479,185.834 150,114.166 "/>
<polygon id="veinte" fill="#FFFC45" stroke="#FFFC45" stroke-linejoin="round" stroke-miterlimit="1" points="150,42.497
	117.479,114.166 150,114.166 "/>
<polygon id="diecinueve" fill="#FFA845" stroke="#FFA845" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,42.497
	117.479,114.166 150,42.497 "/>
<polygon id="dieciocho" fill="#BB3345" stroke="#BB3345" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,185.834
	84.957,257.504 117.479,257.504 "/>
<polygon id="diecisiete" fill="#C93B45" stroke="#C93B45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,185.834
	84.957,257.504 117.479,185.834 "/>
<polygon id="dieciseis" fill="#F55345" stroke="#F55345" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,114.166
	84.957,185.834 117.479,185.834 "/>
<polygon id="quince" fill="#FF6545" stroke="#FF6545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,114.166
	84.957,185.834 117.479,114.166 "/>
<polygon id="catorce" fill="#FFB245" stroke="#FFB245" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,42.497
	84.957,114.166 117.479,114.166 "/>
<polygon id="trece" fill="#FF8545" stroke="#FF8545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,42.497
	84.957,114.166 117.479,42.497 "/>
<polygon id="doce" fill="#B12E45" stroke="#B12E45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,185.834
	52.437,257.504 84.957,257.504 "/>
<polygon id="once" fill="#BD3545" stroke="#BD3545" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,185.834
	52.437,257.504 84.957,185.834 "/>
<polygon id="diez" fill="#E64A45" stroke="#E64A45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,114.166
	52.437,185.834 84.957,185.834 "/>
<polygon id="nueve" fill="#D44145" stroke="#D44145" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,114.166
	52.437,185.834 84.957,114.166 "/>
<polygon id="ocho" fill="#FA5545" stroke="#FA5545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,42.497
	52.437,114.166 84.957,114.166 "/>
<polygon id="siete" fill="#FF5A45" stroke="#FF5A45" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,42.497
	52.437,114.166 84.957,42.497 "/>
<polygon id="seis" fill="#AD2C45" stroke="#AD2C45" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,185.834
	19.915,257.504 52.437,257.504 "/>
<polygon id="cinco" fill="#A82945" stroke="#A82945" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,185.834
	19.915,257.504 52.437,185.834 "/>
<polygon id="cuatro" fill="#C13745" stroke="#C13745" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,114.166
	19.915,185.834 52.437,185.834 "/>
<polygon id="tres" fill="#E64B45" stroke="#E64B45" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,114.166
	19.915,185.834 52.437,114.166 "/>
<polygon id="dos" fill="#FF5945" stroke="#FF5945" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,42.497
	19.915,114.166 52.437,114.166 "/>
<polygon id="uno" fill="#A62845" stroke="#A62845" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,42.497
	19.915,114.166 52.437,42.497 "/>
</svg>
{% endhighlight %}

Ahora vamos a animar el **SVG**, y para ello vamos a utilizar <a href="http://daneden.me/animate/" target="_blank">animate.css</a> creado por <a href="http://twitter.com/_dte" target="_blank">Dan Eden</a>

> animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

Podemos bajarnos el archivo completo desde **GitHub** o podemos generar nuestro propio archivo, para ello vamos a *create custom build* y seleccionamos las animaciones que nos gusten, para ver en que consiste cada animación bastara con ponernos encima de ella y esperar a que se ejecute el efecto. En esta ocasión solamente nos vamos a quedar con *bounceInRight *y *bounceInLeft*, le damos a *build it* y ya tendremos listo para descargar nuestro archivo **CSS**.

{% highlight css linenos %}
.animated {
-webkit-animation-fill-mode:both;
-moz-animation-fill-mode:both;
-ms-animation-fill-mode:both;
-o-animation-fill-mode:both;
animation-fill-mode:both;
-webkit-animation-duration:4s;
-moz-animation-duration:4s;
-ms-animation-duration:4s;
-o-animation-duration:4s;
animation-duration:4s;
}

.animated.hinge
{-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;-o-animation-duration:2s;animation-duration:2s;}

@-webkit-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-2000px);
	}	60% {
		opacity: 1;
		-webkit-transform: translateX(30px);
	}

	80% {
		-webkit-transform: translateX(-10px);
	}

	100% {
		-webkit-transform: translateX(0);
	}
}

@-moz-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-moz-transform: translateX(-2000px);
	}

	60% {
		opacity: 1;
		-moz-transform: translateX(30px);
	}

	80% {
		-moz-transform: translateX(-10px);
	}

	100% {
		-moz-transform: translateX(0);
	}
}

@-o-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-o-transform: translateX(-2000px);
	}

	60% {
		opacity: 1;
		-o-transform: translateX(30px);
	}

	80% {
		-o-transform: translateX(-10px);
	}

	100% {
		-o-transform: translateX(0);
	}
}

@keyframes bounceInLeft {
	0% {
		opacity: 0;
		transform: translateX(-2000px);
	}

	60% {
		opacity: 1;
		transform: translateX(30px);
	}

	80% {
		transform: translateX(-10px);
	}

	100% {
		transform: translateX(0);
	}
}

.bounceInLeft {
	-webkit-animation-name: bounceInLeft;
	-moz-animation-name: bounceInLeft;
	-o-animation-name: bounceInLeft;
	animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
	0% {
		opacity: 0;
		-webkit-transform: translateX(2000px);
	}

	60% {
		opacity: 1;
		-webkit-transform: translateX(-30px);
	}

	80% {
		-webkit-transform: translateX(10px);
	}

	100% {
		-webkit-transform: translateX(0);
	}
}

@-moz-keyframes bounceInRight {
	0% {
		opacity: 0;
		-moz-transform: translateX(2000px);
	}

	60% {
		opacity: 1;
		-moz-transform: translateX(-30px);
	}

	80% {
		-moz-transform: translateX(10px);
	}

	100% {
		-moz-transform: translateX(0);
	}
}

@-o-keyframes bounceInRight {
	0% {
		opacity: 0;
		-o-transform: translateX(2000px);
	}

	60% {
		opacity: 1;
		-o-transform: translateX(-30px);
	}

	80% {
		-o-transform: translateX(10px);
	}

	100% {
		-o-transform: translateX(0);
	}
}

@keyframes bounceInRight {
	0% {
		opacity: 0;
		transform: translateX(2000px);
	}

	60% {
		opacity: 1;
		transform: translateX(-30px);
	}

	80% {
		transform: translateX(10px);
	}

	100% {
		transform: translateX(0);
	}
}

.bounceInRight {
	-webkit-animation-name: bounceInRight;
	-moz-animation-name: bounceInRight;
	-o-animation-name: bounceInRight;
	animation-name: bounceInRight;
}
{% endhighlight %}

Ahora que tenemos todo preparado tan solo nos queda animar el **CSS**. A las capas o polígonos pares le vamos a dar un *bounceInRight* y a las impares *bounceInLeft*.

Para no ir añadiendo la clase una a una a los diferentes polígonos que tiene el **SVG** podemos hacer lo siguiente y ahorrar tiempo, en Sublime nos vamos a *Find* y luego a *Replace*(comando + H en Mac &#8211; crtl + H en windows).

En *Find What* escribimos: < polygon (quitad el espacio anterior a polygon)
Y en *Replace Width*: < polygon class="animated bounceInRight" (quitad el espacio anterior a polygon)

![replace][2]

Le damos a Replace All y ya tenemos todas nuestros polígonos con la clase *animated* y *bounceInRight*, pero ahora esta todo con *bounceInRight* y como hemos dicho anteriormente solo los pares van a tener el efecto *bounceInRight*, así que ahora repetimos la anterior operación pero ahora en *Find What* pondremos: *bounceInRight* y en *Replace Width* pondremos *bounceInLeft* ahora vamos a utilizar *Replace* en lugar de *Replace All*, y solamente lo aplicaremos a los polígonos con número impar. Alternando clicks en *Replace* y *Find* completaremos fácilmente la operación.

Este es el código resultante:

{% highlight HTML linenos %}
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
<polygon class="animated bounceInRight" id="cuarentayocho" fill="#C13745" stroke="#C13745" stroke-linejoin="round" stroke-miterlimit="1" points="
  280.085,185.834 247.564,257.504 280.085,257.504 "/>
<polygon class="animated bounceInLeft" id="cuarentaysiete" fill="#861845" stroke="#861845" stroke-linejoin="round" stroke-miterlimit="1" points="
  247.564,185.834 247.564,257.504 280.085,185.834 "/>
<polygon class="animated bounceInRight" id="cuarentayseis" fill="#931E45" stroke="#931E45" stroke-linejoin="round" stroke-miterlimit="1" points="
  280.085,114.166 247.564,185.834 280.085,185.834 "/>
<polygon class="animated bounceInLeft" id="cuarentaycinco" fill="#B63145" stroke="#B63145" stroke-linejoin="round" stroke-miterlimit="1" points="
  247.564,114.166 247.564,185.834 280.085,114.166 "/>
<polygon class="animated bounceInRight" id="cuarentaycuatro" fill="#B12E45" stroke="#B12E45" stroke-linejoin="round" stroke-miterlimit="1" points="
  280.085,42.497 247.564,114.166 280.085,114.166 "/>
<polygon class="animated bounceInLeft" id="cuarentaytres" fill="#D64245" stroke="#D64245" stroke-linejoin="round" stroke-miterlimit="1" points="
  247.564,42.497 247.564,114.166 280.085,42.497 "/>
<polygon class="animated bounceInRight" id="cuarentaydos" fill="#9A2245" stroke="#9A2245" stroke-linejoin="round" stroke-miterlimit="1" points="
  247.564,185.834 215.042,257.504 247.564,257.504 "/>
<polygon class="animated bounceInLeft" id="cuarentayuno" fill="#B32F45" stroke="#B32F45" stroke-linejoin="round" stroke-miterlimit="1" points="
  215.042,185.834 215.042,257.504 247.564,185.834 "/>
<polygon class="animated bounceInRight" id="cuarenta" fill="#D13F45" stroke="#D13F45" stroke-linejoin="round" stroke-miterlimit="1" points="247.564,114.166
  215.042,185.834 247.564,185.834 "/>
<polygon class="animated bounceInLeft" id="treintaynueve" fill="#E14845" stroke="#E14845" stroke-linejoin="round" stroke-miterlimit="1" points="
  215.042,114.166 215.042,185.834 247.564,114.166 "/>
<polygon class="animated bounceInRight" id="treintayocho" fill="#DE4645" stroke="#DE4645" stroke-linejoin="round" stroke-miterlimit="1" points="247.564,42.497
  215.042,114.166 247.564,114.166 "/>
<polygon class="animated bounceInLeft" id="treintaysiete" fill="#E54A45" stroke="#E54A45" stroke-linejoin="round" stroke-miterlimit="1" points="
  215.042,42.497 215.042,114.166 247.564,42.497 "/>
<polygon class="animated bounceInRight" id="treintayseis" fill="#962045" stroke="#962045" stroke-linejoin="round" stroke-miterlimit="1" points="
  215.042,185.834 182.521,257.504 215.042,257.504 "/>
<polygon class="animated bounceInLeft" id="treintaycinco" fill="#BC3445" stroke="#BC3445" stroke-linejoin="round" stroke-miterlimit="1" points="
  182.521,185.834 182.521,257.504 215.042,185.834 "/>
<polygon class="animated bounceInRight" id="treintaycuatro" fill="#DD4645" stroke="#DD4645" stroke-linejoin="round" stroke-miterlimit="1" points="
  215.042,114.166 182.521,185.834 215.042,185.834 "/>
<polygon class="animated bounceInLeft" id="treintaytres" fill="#FF5E45" stroke="#FF5E45" stroke-linejoin="round" stroke-miterlimit="1" points="
  182.521,114.166 182.521,185.834 215.042,114.166 "/>
<polygon class="animated bounceInRight" id="treintaydos" fill="#FF6045" stroke="#FF6045" stroke-linejoin="round" stroke-miterlimit="1" points="215.042,42.497
  182.521,114.166 215.042,114.166 "/>
<polygon class="animated bounceInLeft" id="treintayuno" fill="#FF5B45" stroke="#FF5B45" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,42.497
  182.521,114.166 215.042,42.497 "/>
<polygon class="animated bounceInRight" id="treinta" fill="#B53045" stroke="#B53045" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,185.834
  150,257.504 182.521,257.504 "/>
<polygon class="animated bounceInLeft" id="veintinueve" fill="#D64245" stroke="#D64245" stroke-linejoin="round" stroke-miterlimit="1" points="150,185.834
  150,257.504 182.521,185.834 "/>
<polygon class="animated bounceInRight" id="veintiocho" fill="#FF6045" stroke="#FF6045" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,114.166
  150,185.834 182.521,185.834 "/>
<polygon class="animated bounceInLeft" id="veintisiete" fill="#FF6D45" stroke="#FF6D45" stroke-linejoin="round" stroke-miterlimit="1" points="150,114.166
  150,185.834 182.521,114.166 "/>
<polygon class="animated bounceInRight" id="veintiseis" fill="#FF8A45" stroke="#FF8A45" stroke-linejoin="round" stroke-miterlimit="1" points="182.521,42.497
  150,114.166 182.521,114.166 "/>
<polygon class="animated bounceInLeft" id="veinticinco" fill="#FF9245" stroke="#FF9245" stroke-linejoin="round" stroke-miterlimit="1" points="150,42.497
  150,114.166 182.521,42.497 "/>
<polygon class="animated bounceInRight" id="veinticuatro" fill="#C33845" stroke="#C33845" stroke-linejoin="round" stroke-miterlimit="1" points="150,185.834
  117.479,257.504 150,257.504 "/>
<polygon class="animated bounceInLeft" id="veintitres" fill="#D24045" stroke="#D24045" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,185.834
  117.479,257.504 150,185.834 "/>
<polygon class="animated bounceInRight" id="veintidos" fill="#FF5945" stroke="#FF5945" stroke-linejoin="round" stroke-miterlimit="1" points="150,114.166
  117.479,185.834 150,185.834 "/>
<polygon class="animated bounceInLeft" id="veinteuno" fill="#FF8045" stroke="#FF8045" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,114.166
  117.479,185.834 150,114.166 "/>
<polygon class="animated bounceInRight" id="veinte" fill="#FFFC45" stroke="#FFFC45" stroke-linejoin="round" stroke-miterlimit="1" points="150,42.497
  117.479,114.166 150,114.166 "/>
<polygon class="animated bounceInLeft" id="diecinueve" fill="#FFA845" stroke="#FFA845" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,42.497
  117.479,114.166 150,42.497 "/>
<polygon class="animated bounceInRight" id="dieciocho" fill="#BB3345" stroke="#BB3345" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,185.834
  84.957,257.504 117.479,257.504 "/>
<polygon class="animated bounceInLeft" id="diecisiete" fill="#C93B45" stroke="#C93B45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,185.834
  84.957,257.504 117.479,185.834 "/>
<polygon class="animated bounceInRight" id="dieciseis" fill="#F55345" stroke="#F55345" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,114.166
  84.957,185.834 117.479,185.834 "/>
<polygon class="animated bounceInLeft" id="quince" fill="#FF6545" stroke="#FF6545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,114.166
  84.957,185.834 117.479,114.166 "/>
<polygon class="animated bounceInRight" id="catorce" fill="#FFB245" stroke="#FFB245" stroke-linejoin="round" stroke-miterlimit="1" points="117.479,42.497
  84.957,114.166 117.479,114.166 "/>
<polygon class="animated bounceInLeft" id="trece" fill="#FF8545" stroke="#FF8545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,42.497
  84.957,114.166 117.479,42.497 "/>
<polygon class="animated bounceInRight" id="doce" fill="#B12E45" stroke="#B12E45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,185.834
  52.437,257.504 84.957,257.504 "/>
<polygon class="animated bounceInLeft" id="once" fill="#BD3545" stroke="#BD3545" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,185.834
  52.437,257.504 84.957,185.834 "/>
<polygon class="animated bounceInRight" id="diez" fill="#E64A45" stroke="#E64A45" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,114.166
  52.437,185.834 84.957,185.834 "/>
<polygon class="animated bounceInLeft" id="nueve" fill="#D44145" stroke="#D44145" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,114.166
  52.437,185.834 84.957,114.166 "/>
<polygon class="animated bounceInRight" id="ocho" fill="#FA5545" stroke="#FA5545" stroke-linejoin="round" stroke-miterlimit="1" points="84.957,42.497
  52.437,114.166 84.957,114.166 "/>
<polygon class="animated bounceInLeft" id="siete" fill="#FF5A45" stroke="#FF5A45" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,42.497
  52.437,114.166 84.957,42.497 "/>
<polygon class="animated bounceInRight" id="seis" fill="#AD2C45" stroke="#AD2C45" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,185.834
  19.915,257.504 52.437,257.504 "/>
<polygon class="animated bounceInLeft" id="cinco" fill="#A82945" stroke="#A82945" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,185.834
  19.915,257.504 52.437,185.834 "/>
<polygon class="animated bounceInRight" id="cuatro" fill="#C13745" stroke="#C13745" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,114.166
  19.915,185.834 52.437,185.834 "/>
<polygon class="animated bounceInLeft" id="tres" fill="#E64B45" stroke="#E64B45" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,114.166
  19.915,185.834 52.437,114.166 "/>
<polygon class="animated bounceInRight" id="dos" fill="#FF5945" stroke="#FF5945" stroke-linejoin="round" stroke-miterlimit="1" points="52.437,42.497
  19.915,114.166 52.437,114.166 "/>
<polygon class="animated bounceInLeft" id="uno" fill="#A62845" stroke="#A62845" stroke-linejoin="round" stroke-miterlimit="1" points="19.915,42.497
  19.915,114.166 52.437,42.497 "/>
</svg>{% endhighlight %}

Si ejecutamos el **HTML** en el navegador vamos a ver que la animación es demasiado rápida. Así que vamos a corregir el tiempo en el **CSS**, simplemente vamos a .animated y sustituimos 1s por el tiempo que nosotros queramos, en este caso lo cambiaremos por 4s.

{% highlight css linenos %}
.animated {
-webkit-animation-fill-mode:both;
-moz-animation-fill-mode:both;
-ms-animation-fill-mode:both;
-o-animation-fill-mode:both;
animation-fill-mode:both;
-webkit-animation-duration:4s;
-moz-animation-duration:4s;
-ms-animation-duration:4s;
-o-animation-duration:4s;
animation-duration:4s;
}
{% endhighlight %}

Y ya tenemos lista nuestra animación, aquí podéis ver el resultado final.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animacion.html">VER EJEMPLO!</a>
</button>

Un último apunte final, podemos modificar el tamaño del SVG en cualquier momento y sin riesgo a perder calidad, tan solo tenemos que modificar el width y el height en el HTML.

{% highlight HTML linenos %}
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
{% endhighlight %}

Enlaces de interés:

<a href="http://wagerfield.github.io/flat-surface-shader/" target="_blank">Flat Surface Shader</a><br/>
<a href="http://daneden.me/animate/" target="_blank">Animate.css</a><br/>
<a href="https://github.com/daneden/animate.css" target="_blank">GitHub animated.css</a><br/>
<a href="https://github.com/wagerfield/flat-surface-shader" target="_blank">GitHub flat-surface-shade</a><br/>

 [1]: http://jorgeatgu.com/blog/img/2013/04/flat-surface.png
 [2]: http://jorgeatgu.com/blog/img/2013/04/replace.png