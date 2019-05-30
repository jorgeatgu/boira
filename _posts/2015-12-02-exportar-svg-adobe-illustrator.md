---
title: Novedades a la hora de exportar SVG con Adobe Illustrator
author: Jorge Aznar
layout: post
permalink: /exportar-svg-adobe-illustrator/
comments: true
tags:
  - SVG
  - Adobe Illustrator
---

Los cambios anunciados por la gente de Adobe sobre el módulo que utilizan para exportar SVG ya son una realidad. Ayer se liberó la version 19.2.0 de Adobe Illustrator.

<!--more-->

{% tweet 671855761882898433%}

Antes de empezar comentar que he tenido bastantes problemas para conseguir actualizar a la última version. He tenido que ir a la web de Creative Cloud descargarme una actualización. Esta actualización no traía nada (·_·), así que he optado por desinstalar, reiniciar y volver a descargar de nuevo Illustrator desde el menú de Creative Cloud.

## Rectángulos redondeados

Llevo pidiendo esto años. Hasta ahora cuando dibujabas un cuadrado con borde redondeado Illustrator **siempre** lo transformaba en un ```<path>```. Era totalemente incapaz de exportar un ```<rect>``` con los atributos ```rx=""``` y ```ry=""```. Ahora ya si pero como vamos a ver más adelante no siempre.

## Exportando

Ahora tenemos a nuestra disposición en el menú Archivo > Exportar la opción de exportar **SVG**. Seleccionamos SVG como formato de archivo y le damos a exportar. Nos debería de salir un menú como este.

![SVG exportar](http://jorgeatgu.com/blog/img/2015/12/exportar-svg-opciones.png)

Vamos a ver las opciones más interesantes.

### Estilo

En la pestaña de estilo tenemos a nuestra disposición tres opciones.

**Atributos de presentación** con esta opción utilizamos atributos como ```fill``` y ```stroke``` directamente en el elemento.

{% highlight CSS %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.3 249.3">
  <title>logo-blanco-negro</title>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" fill="#fff"/>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" fill="none" stroke="#000" stroke-width="4"/>
  <polygon points="54.8 107.7 96.1 73.9 118.8 136.1 128.7 165.4 85.2 165.4 54.8 107.7"/>
  <polygon points="130.9 57.5 189.4 92.1 144.8 165.4 97.1 165.4 130.9 57.5"/>
  <line x1="62.5" y1="165.4" x2="182.9" y2="165.4" fill="none" stroke="#000"/>
</svg>

{% endhighlight %}


**CSS interno** con esta opción se añaden a nuestros elementos una serie de clases. El **CSS** se añade directamente dentro del propio **SVG**. Casi preferible sacar esto a nuestro propio archivo **CSS**.

{% highlight CSS %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.3 249.3">
  <defs>
    <style>
      .a {
        fill: #fff;
      }

      .b, .c {
        fill: none;
        stroke: #121;
      }

      .b {
        stroke-width: 4px;
      }
    </style>
  </defs>
  <title>logo-blanco-negro</title>
  <rect class="a" x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)"/>
  <rect class="b" x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)"/>
  <polygon points="54.8 107.7 96.1 73.9 118.8 136.1 128.7 165.4 85.2 165.4 54.8 107.7"/>
  <polygon points="130.9 57.5 189.4 92.1 144.8 165.4 97.1 165.4 130.9 57.5"/>
  <line class="c" x1="62.5" y1="165.4" x2="182.9" y2="165.4"/>
</svg>

{% endhighlight %}

**Estilo en línea** con esta opción añadirá los atributos CSS directamente en nuestros elementos.

{% highlight CSS %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.3 249.3">
  <title>logo-blanco-negro</title>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" style="fill: #fff"/>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" style="fill: none;stroke: #121;stroke-width: 4px"/>
  <polygon points="54.8 107.7 96.1 73.9 118.8 136.1 128.7 165.4 85.2 165.4 54.8 107.7"/>
  <polygon points="130.9 57.5 189.4 92.1 144.8 165.4 97.1 165.4 130.9 57.5"/>
  <line x1="62.5" y1="165.4" x2="182.9" y2="165.4" style="fill: none;stroke: #000"/>
</svg>
{% endhighlight %}

### Identificadores de objeto

En este desplegable tenemos tres opciones. La primera de ellas es **nombre de capas** y la más lógica es nombrar a cada elemento con el nombre que el hemos asignado a cada capa. La segunda es mínimo, tan mínimo que he estado haciendo pruebas y no añade nada. La última opción es único, y añade un id bastante loco: ```id="c9c9f046-dec6-492e-8dc3-58c8355c6e10"```


### Decimal

Despues de desinstalar y volver a instalar el valor por defecto es 2, antes era 3, yo siempre he dicho que deberia de estar en 1.


### Minimizar

Esta opción antes no estaba. Lo que hace es suprimir todos los espacios en blanco. Si vas a volver a modificar a mano el **SVG** mejor que no lo marques. Si no lo vas a volver a tocar marcala.

### Guardar como SVG

Si utilizamos el menú de siempre para guardar nuestros archivos **SVG** la opción de minimizar no estará disponible. También nos volverá a añadir un montón de código basura, eso si en la parte superior del menú de Guardar como SVG tenemos un atajo para ir directamente a exportar, con el lema de **para archivos SVG optimizados para la Web, use Archivo > Exportar**.

Vamos a comparar el código que obtenemos al exportar como SVG con el que obtenemos al guardar como SVG.

**Exportar como SVG**

{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.3 249.3">
  <title>logo-blanco-negro</title>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" fill="#fff"/>
  <rect x="44.3" y="47.5" width="172.3" height="172.3" transform="translate(-62.1 122.4) rotate(-45)" fill="none" stroke="#000" stroke-width="4"/>
  <polygon points="54.8 107.7 96.1 73.9 118.8 136.1 128.7 165.4 85.2 165.4 54.8 107.7"/>
  <polygon points="130.9 57.5 189.4 92.1 144.8 165.4 97.1 165.4 130.9 57.5"/>
  <line x1="62.5" y1="165.4" x2="182.9" y2="165.4" fill="none" stroke="#000"/>
</svg>
{% endhighlight %}

**Guardar como SVG**

{% highlight HTML %}
<!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="265px" height="271px" viewBox="0 0 265 271" enable-background="new 0 0 265 271" xml:space="preserve">
<title  id="title">Logo de Jorge Aznar</title>
<desc  id="desc">
	Diseñador gráfico y web en Zaragoza. Maquetación y diseño web con HTML5, CSS3, SVG, Responsive Web Design y Mobile-First.
	</desc>
<rect id="rect" x="44.3" y="47.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -56.2978 131.3884)" fill="#FFFFFF" width="172.3" height="172.3"/>
<rect x="44.3" y="47.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -56.2978 131.3884)" fill="none" stroke="#000000" stroke-width="4" width="172.3" height="172.3"/>
<polygon points="60.6,116.7 101.9,82.9 124.6,145.1 134.5,174.4 91,174.4 "/>
<polygon points="136.7,66.5 195.2,101.1 150.6,174.4 102.9,174.4 "/>
<line fill="none" stroke="#000000" x1="68.3" y1="174.4" x2="188.7" y2="174.4"/>
</svg>

{% endhighlight %}

La diferencia es más que notable. Para mi supone un ahorro de tiempo bastante considerable ya que solía borrar todo el código basura a manopla. Por cierto si os fijaís en el código ahora incluso los colores como #FFFFFF son reducidos a #FFF si utilizamos el menú de exportar.

## Exportando selección

Otra nueva funcionalidad es la de exportar selección. Si seleccionamos un elemento y vamos al menú **Archivo** veremos que se activa la opción de exportar selección, como su nombre indica(captain obvius) solo nos exporta la selección.

{% highlight HTML %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.3 107.9">
  <title>parte</title>
  <polygon points="33.8 0 92.3 34.6 47.7 107.9 0 107.9 33.8 0"/>
</svg>

{% endhighlight %}

### Consejo

Por defecto la opción de exportar no viene con un atajo de teclado asignado. Así que podeis ir a edición > métodos abreviados de teclado y añadis un atajo de teclado. Yo he utilizado el siguiente: opcion + comando + e







