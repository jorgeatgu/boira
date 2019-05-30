---
title: Pack de iconos gratuitos, animados a través de SVG
author: Jorge Aznar
layout: post
permalink: /pack-de-iconos-gratuitos-animados-en-svg/
comments: true
dsq_thread_id:
  - 2102955034
tags:
  - Diseño Gráfico
  - Diseño Web
  - SVG
---
Aquí va nueva version del **pack de iconos** que <a href="http://jorgeatgu.com/blog/cmyk-free-icons-social-media-vector-svg/" target="_blank">publique hace casi dos meses</a>, esta vez los **iconos** tienen dos **animaciones**. En su día ya hablamos de como <a href="http://jorgeatgu.com/blog/tutorial-animaciones-nativas-en-svg/" target="_blank">animar nativamente un SVG</a> y también <a href="http://jorgeatgu.com/blog/tutorial-animando-un-svg-a-traves-de-css/" target="_blank">como animar a través de CSS</a>. En este caso vamos a **animar los iconos nativamente**.

<!--more-->

**ANIMACIONES**

La primera animación consiste en cambiar el color del **icono** a través de la propiedad `animate`, cuando nos posicionamos encima del icono este cambiar de color, la transición de color es azul-negro como se puede observar en el código.

{% highlight HTML linenos %}<animate attributeName=&quot;fill&quot;
                          dur=&quot;1s&quot;
                          values=&quot;blue;black;&quot;
                          repeatCount=&quot;1&quot;
                          begin=&quot;mouseover&quot; />
{% endhighlight %}

La segunda animación consiste en hacer rotar sobre su mismo eje al cuadrado, para ello utilizamos la propiedad `animateTransform`.

La rotación del elemento puede ir de 0 a 360 grados, en este caso en el from indicaremos 0 y en to 360, así completaremos toda la rotación.
El centro de la rotación estara determinado por el segundo y el tercer valor que tenemos en `from `y `to`.
En `dur `indicaremos el tiempo que dura la animación, en este caso 3 segundos.
En `repeatDur `indicaremos cuantas veces queremos que se repita la animación, podemos indicarle segundo y decimales, también la podemos hacer que la animación sea infinita con `infinite`.
Por último en `begin `le diremos a la animación que solo se iniciara en el momento que el ratón se pose sobre los diferentes elementos que tiene la animación.
También disponemos de `end `para indicarle a la animación cuando debe de terminar.

{% highlight HTML linenos %}<animateTransform attributeName=&quot;transform&quot;
                                  type=&quot;rotate&quot;
                                  from=&quot;0 16 16&quot;
                                  to=&quot;360 16 16&quot;
                                  dur=&quot;1s&quot;
                                  repeatDur=&quot;1&quot;
                                  begin=&quot;mouseover&quot; />{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/iconosSVG/animacion.html">VER EJEMPLO!</a>
</button>

**EXTRA**

Y una **animación** extra por si alguien quiere incluirla en el **SVG**.

{% highlight HTML linenos %}<animateTransform attributeType=&quot;xml&quot; attributeName=&quot;transform&quot;
                                                  type=&quot;translate&quot;
                                                  from=&quot;0&quot;
                                                  to=&quot;360&quot;
                                                  begin=&quot;0&quot;
                                                  dur=&quot;5s&quot;
                                                  repeatCount=&quot;1&quot;
                                                  begin=&quot;click&quot; />{% endhighlight %}

Lo que conseguimos con esta animación es que al hacer click en el **icono** se active la **animación** `translate` que consta de un movimiento de **traslación**, con ella conseguimos que el **icono** se desplace y de la sensación de desaparecer durante unos segundos.

**DESCARGA**

La **descarga** tan solo cuesta un **tweet** o un comentario en **Facebook**.

<img src="http://jorgeatgu.com/blog/img/2013/04/download.png" width="145" height="24" border="0" title="Download for free if you pay with a Tweet!" alt="Download for free if you pay with a Tweet!" />