---
title: Actualización Adobe Illustrator CC
author: Jorge Aznar
layout: post
permalink: /actualizacion-adobe-illustrator-cc/
comments: true
dsq_thread_id:
  - 2129408823
tags:
  - Adobe Illustrator
  - SVG
---

![creative cloud](http://jorgeatgu.com/blog/img/2014/01/adobe_creative_cloud_618x446.jpg)

Hace unas pocas horas <a href="http://blogs.adobe.com/creativelayer/adobe-creative-cloud-a-platform-for-innovation/" target="_blank">Illustrator, InDesign y Photoshop han recibido una actualización</a> bastante importante.

<!--more-->

Las principales novedades para Adobe Illustrator CC son las siguientes.

## Vértices interactivos

Perfeccione sus diseños de forma más directa e intuitiva. Edite y reedite de forma visual los vértices de las formas y los trazados con controles en las ilustraciones o introduciendo valores en el panel Control o en el nuevo cuadro de diálogo Vértices. Puede redondear, invertir o biselar uno o varios vértices al mismo tiempo.

## Herramienta Lápiz completamente nueva

Dibuje curvas de forma más precisa con opciones para extender trazados, dibujar líneas rectas y cerrar trazados. Utilice los ajustes preestablecidos para crear trazados más suaves con menos puntos o interpretaciones más precisas de trazos reales. Esta nueva tecnología se extiende a las herramientas Pincel, Pincel de manchas y Suavizar.

## Cambio de forma de segmentos de trazados

Arrastre con fluidez segmentos de los trazados para darles la forma que desee. La nueva tecnología de cambio de forma de trazados, disponible en las herramientas Puntos de anclaje y Selección directa y accesible desde la herramienta Pluma, proporciona una forma más directa e intuitiva de editar segmentos de los trazados.

## Integración con Typekit

Explore las fuentes de Adobe Typekit en la página web de Typekit desde los menús Texto o Familia de fuentes. Seleccione entre más de 700 fuentes de escritorio Typekit y sincronícelas con su ordenador para un acceso inmediato. Filtre las fuentes de Typekit rápidamente en el menú Fuente.

## Actualizaciones de exportación a SVG

Exporte archivos SVG ampliables y flexibles que puedan adaptarse a diferentes tamaños y resoluciones de pantalla, y edite de forma bidireccional archivos SVG que mantengan una alineación de píxeles precisa.



Si no carga el vídeo <a href="http://tv.adobe.com/watch/learn-illustrator-cc/responsive-svg-in-illustrator-cc/?go=21334" target="_blank">aquí os dejo el enlace de Adobe</a>.

<del datetime="2014-01-16T14:06:21+00:00">He estado probando la actualización que se supone que hace <strong>RESPONSIVE </strong>- para Adobe España Flexible &#8211; los SVG pero no he obtenido ningún resultado, me da lo mismo marcar la opción que no marcarla ya que como podéis observar en la imagen obtengo el mismo código.</del>

![sublime svg][2]

Si encuentro la novedad actualizare.

[alert type="info"]Actualización a las 15:09 del 16.01.2014[/alert]

Me estaba empeñando en buscar que cambiaba en las formas al exportar con Responsive y no me estaba dando cuenta de que lo que han hecho es suprimir el `width` y `height`.

Lo que ha hecho Adobe es sencillo, al pinchar en Responsive(Flexible para Adobe Spain) el SVG se guarda sin width y sin height en la etiqueta de la cabecera`SVG`

Seleccionando Responsive

{% highlight HTML linenos %}<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 480 640" enable-background="new 0 0 480 640" xml:space="preserve">

{% endhighlight %}

No seleccionando Responsive

{% highlight HTML linenos %}<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="480px" height="640px" viewBox="0 0 480 640" enable-background="new 0 0 480 640" xml:space="preserve">
{% endhighlight %}

Y como dice <a href="https://twitter.com/elrumordelaluz" target="_blank">Lionel</a> en twitter:

{% tweet 423819528561127425 %}

Se agradece que Adobe España no cuele RESPONSIVO por RESPONSIVE, aunque lo suyo hubiera sido dejar RESPONSIVE pero ya sabemos la afición tan española de traducir absolutamente todo con la excepción de los términos que utiliza la plaga de *vende humos*.

Podeis consultar todas las <a href="http://www.adobe.com/es/products/illustrator/features.html" target="_blank">novedades en la página de Adobe Illustrator</a>


 [2]: http://jorgeatgu.com/blog/img/2014/01/sublimesvg.png