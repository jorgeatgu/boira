---
title: Optimizando el logo SVG de la App Store
author: Jorge Aznar
layout: post
permalink: /optimizando-el-logo-svg-de-la-app-store/
comments: true
dsq_thread_id:
  - 3026141403
tags:
  - Adobe Illustrator
  - SVG
---
Desde la página de Apple developer podemos descargar el famoso badge con la frase &#8220;Download on the App Store&#8221;. Este badge viene en formato SVG. Pero por desgracia Apple no hizo nada más después de exportar como SVG desde Adobe Illustrator.

<!--more-->

Así que como ellos no hicieron nada vamos a utilizar las famosas etiquetas `defs` y `use` para hacer que el badge ocupe menos espacio.

Antes de empezar desde la App Store nos advierten que: *Never create your own App Store badge or alter the artwork in any way.* Así que me abstendré de subir el archivo final.

Vamos a bajarnos el badge desde este [enlace][1], si lo descomprimimos podemos observar que su tamaño es de 12kb, si le echamos un ojo al código se puede ver que han exportado con tres decimales lo cual ya genera mas espacio sin obtener ninguna ventaja. Así que lo primero va a ser abrir el archivo y lo vamos a guardar solamente con un decimal. Solo con esto el archivo ya ocupa 9kb.

Ahora vamos a limpiar todo el código basura que genera Adobe Illustrator y que no sirve para nada

{% highlight HTML linenos %}<
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">{% endhighlight %}

Ahora vamos con la etiqueta principal, vamos a quitar lo siguiente: version=&#8221;1.1&#8243; id=&#8221;US\_UK\_Download\_on\_the&#8221;, x=&#8221;0px&#8221; y=&#8221;0px&#8221;, enable-background=&#8221;new 0 0 135 40&#8243; xml:space=&#8221;preserve&#8221;. También podemos prescindir de px ya que al ser la unidad por defecto en SVG si no la indicamos siempre la va a utilizar.

{% highlight HTML linenos %}<svg version="1.1" id="US_UK_Download_on_the" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" width="135px" height="40px" viewBox="0 0 135 40" enable-background="new 0 0 135 40" xml:space="preserve">{% endhighlight %}

Ahora vamos a empezar con las etiquetas, de primeras nos encontramos con dos `path` los cuales representan el cuadrado de fondo con bordes redondeados, como hemos visto en otros artículos Adobe Illustrator todavía es incapaz de exportar cuadrados con bordes redondeados en SVG así que siempre los transforma en `path`. Los vamos a sustituir por dos cuadrados. El primero de ellos sera de color gris oscuro y ocupará todo el ancho y largo del documento, el segundo sera negro y medirá dos pixels menos. Los dos tendrán los bordes redondeados.

{% highlight HTML linenos %}<rect width="135" height="40" fill="#A6A6A6" rx="4"/>
 <rect x="1" y="1" width="133" height="38" fill="black" rx="4"/>{% endhighlight %}

Ahora vamos a empezar a utilizar `defs` y `use` con las letras que se repiten. Siguiendo el orden del código nos encontramos con p de App en el código está representada por el siguiente `path`

{% highlight HTML linenos %}<path id="p" fill="#FFFFFF" d="M64.7,26.6c0,1.6-0.4,2.9-1.3,3.9c-0.8,0.8-1.8,1.3-2.9,1.3c-1.3,0-2.2-0.5-2.7-1.4h0v5.1h-2.1V25.1 c0-1,0-2.1-0.1-3.2h1.9l0.1,1.5h0c0.7-1.1,1.8-1.7,3.2-1.7c1.1,0,2.1,0.4,2.8,1.3C64.3,23.9,64.7,25.1,64.7,26.6z M62.5,26.7 c0-0.9-0.2-1.7-0.6-2.3c-0.5-0.6-1.1-0.9-1.9-0.9c-0.5,0-1,0.2-1.4,0.5c-0.4,0.4-0.7,0.8-0.8,1.4c-0.1,0.3-0.1,0.5-0.1,0.6v1.6 c0,0.7,0.2,1.3,0.6,1.8s1,0.7,1.7,0.7c0.8,0,1.4-0.3,1.9-0.9C62.3,28.5,62.5,27.7,62.5,26.7z"/>{% endhighlight %}

Este código lo vamos a incluir al principio entre las etiquetas `defs` con un id=&#8221;p&#8221; para luego poder utilizarla. Ahora vamos a utilizar con `use`

{% highlight HTML linenos %}<use xlink:href="#p"/>{% endhighlight %}

Ahora vamos a volver a utilizar con la siguiente p de App, la vamos a tener que mover hacia la derecha 11 pixels

{% highlight HTML linenos %}<use xlink:href="#p" x="11"/>{% endhighlight %}

Ahora vamos a hacer lo mismo con las letras o y n de la frase **Download on the**

La primera o esta representada por el siguiente `path`

{% highlight HTML linenos %}<path fill="#FFFFFF" d="M54.9,11c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1-0.6-1.7 c0-0.7,0.2-1.3,0.6-1.8s1-0.7,1.7-0.7c0.7,0,1.2,0.2,1.7,0.7C54.7,9.8,54.9,10.3,54.9,11z M53.8,11.1c0-0.4-0.1-0.8-0.3-1.1 c-0.2-0.4-0.5-0.6-0.9-0.6c-0.4,0-0.7,0.2-1,0.6c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.4,0.1,0.8,0.3,1.1c0.2,0.4,0.5,0.6,1,0.6 c0.4,0,0.7-0.2,0.9-0.6C53.7,11.9,53.8,11.5,53.8,11.1z"/>{% endhighlight %}

El cual vamos a incluir entre las etiquetas `defs` con un id=&#8221;o&#8221;. Para volver a utilizarlo volvemos a recurrir a `use`

{% highlight HTML linenos %}<use xlink:href="#o"/>{% endhighlight %}

Ahora vamos a hacer lo mismo con la letra n. La cual esta representada por el siguiente `path`

{% highlight HTML linenos %}<path fill="#FFFFFF" d="M68.2,13.4h-1v-2.7c0-0.8-0.3-1.2-0.9-1.2c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v2.8h-1v-3.4 c0-0.4,0-0.9,0-1.3H65l0,0.7h0c0.1-0.2,0.3-0.4,0.5-0.6c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.8,0.1,1.1,0.4c0.4,0.3,0.5,0.9,0.5,1.6 V13.4z"/>{% endhighlight %}

Vamos a sustituir el resto de `path` de las letras o y n por el siguiente código

{% highlight HTML linenos %}<use xlink:href="#o" x="22"/>
      <use xlink:href="#o" x="43"/>
      <use xlink:href="#n" x="35"/>{% endhighlight %}

Por último y como todos los elementos en esta ocasión comparten el mismo color vamos a borrar el atributo fill=&#8221;#FFFFF&#8221; de todos ellos. Ahora vamos a meter todos los `path` y `use` dentro de un grupo, y a ese grupo le daremos un fill=&#8221;white&#8221; así vamos a pintar todos los elementos que están dentro del grupo del mismo color.

{% highlight HTML linenos %}<g fill="white">
    ->>> Aquí los <path> y <use>
</g>{% endhighlight %}

El tamaño final es de 6KB, así que hemos reducido su tamaño a la mitad en muy poco tiempo.

![svg badge app store][2]

 [1]: https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
 [2]: http://jorgeatgu.com/blog/img/wordpress/svg-badge.png