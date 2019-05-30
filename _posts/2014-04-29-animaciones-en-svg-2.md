---
title: Animaciones en SVG 2
author: Jorge Aznar
layout: post
permalink: /animaciones-en-svg-2/
comments: true
dsq_thread_id:
  - 2647220274
tags:
  - SMIL
  - SVG
  - SVG 2
---
No falta mucho para que la especificación de SVG2 sea una realidad, según el roadmap(actualizado por última vez en 2012) del grupo de trabajo de SVG la especificación debería de convertirse en recomendación en agosto de 2014. Aunque ya he leído que el asunto se va a retrasar hasta diciembre de 2014.

<!--more-->

El soporte según la página de <a href="http://www.chromestatus.com/features/5760616295825408" target="_blank">Chromium Dashboard</a> Chrome, Safari y Firefox están a ello, los otros a lo suyo como siempre.

![SVG2 SUPPORT][1]

Vamos a ver algunas(no todas) de las nuevas características que vamos a tener disponibles en SVG 2 a la hora de animar. Por desgracia al no estar implementando en los navegadores las características quizás no se aprecien como deberían.

## Atributo *SPEED*

Como su nombre indica este atributo incide en la velocidad que va a tener la animación. El valor se lo vamos a pasar en números, y por defecto es 1.

{% highlight HTML linenos %}<rect width="50" height="50" fill="crimson">
    <animate attributeName="x" from="0" to="300" begin="0s" dur="5s" speed="2.0" repeatCount="2"/>
</rect>{% endhighlight %}

En este ejemplo le decimos a la animación que tenga una duración `dur="5s"` pero le indicamos que la velocidad sea `speed="2"` por lo tanto ira al doble de velocidad, así que la animación y su repetición durarán 5s en lugar de 10s.

He probado el ejemplo en Chromium, Canary, Opera Next, Opera Developers, Firefox Aurora, Firefox Nightly y Webkit sin resultado alguno.

## Contenedores de tiempo SMIL

Esta nueva función importada desde la especificación de SMIL 3.0 me parece bastante interesante. Ahora vamos a poder encerrar una cantidad de etiquetas dentro de un contenedor de tiempo, a este le asignaremos un comienzo a través de `begin="aquívaeltiempoquequeramos"`.

Tenemos tres tipos de contenedores, paralelo, secuencial y exclusivo.

#### Paralelo

{% highlight HTML linenos %}<par begin="5s">
  <animate id="a" ... /> --> comienza a los 5s
  <animate begin="2s" ... /> --> comienza a los 7s
  <animate begin="1s" ... /> --> comienza a los 6s
</par>{% endhighlight %}

Lo que indicamos en la etiqueta `par` se suma a cada uno de los parámetros de las etiqueta `animate`.

#### Secuencial

{% highlight HTML linenos %}<seq begin="5s">
  <animate dur="2s" ... /> --> comienza a los 5s
  <animate dur="3s" ... /> --> comienza a los 7s (5s + 2s dur)
  <animate begin="1s" dur="2s" ... /> --> comienza a los 11s (7s + 3s dur + 1s offset)
</seq>{% endhighlight %}

Como su nombre indica se ejecuta en una secuencia, el primero comienza a los 5s y dura 2s por lo tanto el segundo comenzará a los 7s y dura 3s, por lo tanto el tercero comienza a los 11s ya que le sumamos 1s de `begin="1s"`.

#### Exclusivo

Solamente un elemento puede estar funcionado en ese momento.

{% highlight HTML linenos %}<excl>
  <animate begin="buttonA.click" ... />
  <animate begin="buttonB.click" ... />
  <animate begin="buttonC.click" ... />
</excl>{% endhighlight %}

Cuando presionamos el botón A comienza la animación.

## Definición de la base de animateTransform

Ahora podremos especificar la base sobre la que se llevará acabo la transformación por ejemplo de una rotación. Queda un poco incompleta esta definición así que lo complemento con un <a href="http://brian.sol1.net/svg/animatetransform-issues/to-animation-and-animatetransform/" target="_blank">enlace</a>.

## animateTransform matrix y animateTransform=list

Se añade el efecto matrix a animateTransform, este constaba hasta ahora de translate, rotate, scale y skeW.

También se añade el atributo type=&#8221;list&#8221; para añadir una lista con los valores de descomposición de matrix.

## Animaciones-Transiciones CSS

SVG2 soportara transiciones y animaciones CSS. La verdad es que este punto no me queda nada claro ya que no han aportado mucha mas información sobre el tema, y el <a href="http://www.w3.org/2012/01/12-svg-irc#T00-43-56" target="_blank">log del irc</a> donde se aprueba es bastante escueto.

## Añadir ritmo a la animación

Con esto vamos a conseguir añadir ritmo a la animación, el ejemplo que nos ponen desde la W3C es el siguiente `pace="10px/1s"`, lo interpreto como que el elemento en cuestión se mueva 10 pixeles en el transcurso de un 1segundo.

Y hasta aquí este repaso que como ya he dicho anteriormente se queda un poco cojo al no poder ver ejemplos en acción, he buscado como va la implementación de SVG 2 en Chrome/Safari/Opera/Firefox y tan sólo he encontrado <a href="chromestatus.com" target="_blank">Chromestatus</a> y las diferentes versiones que ha ido <a href="https://developer.mozilla.org/en-US/Firefox/Releases" target="_blank">publicando Firefox</a>, si alguien conoce algún lugar donde se pueda ir viendo se lo agradecería enormemente.

Para los que quieran ver lo que se han ido aprobando y desechando en SVG 2 aquí os dejo un enlace a la <a href="http://www.w3.org/Graphics/SVG/WG/wiki/SVG2_Requirements_Input" target="_blank">wiki del SVG GROUP. </a>

 [1]: http://jorgeatgu.com/blog/img/2014/04/SVG2.png