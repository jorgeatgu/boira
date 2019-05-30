---
title: El futuro de SMIL
author: Jorge Aznar
layout: post
permalink: /el-futuro-de-smil-svg/
comments: true
tags:
  - SVG
  - W3C
  - SMIL
---


Ayer a primera hora Erik Dahlström twiteaba lo siguiente

{% tweet 593683154902351872%}

La gente que esta desarrollando **Blink/Chromium** quiere pasar **SMIL** a deprecated. Recordad que SMIL no tiene soporte en ninguna de las versiones de Internet Explorer, aunque hasta la version de IE8 soportaba [XHTML+SMIL](http://www.w3.org/TR/XHTMLplusSMIL/){:target=“_blank”}, curioso ¿no?

<!--more-->

Estaba claro que desde que [Microsoft en 2010](http://blogs.msdn.com/b/ie/archive/2010/08/04/html5-modernized-fourth-ie9-platform-preview-available-for-developers.aspx){:target=“_blank”} decidió apoyar las animaciones CSS3 en lugar de SMIL la especificación quedaba tocada. Lo divertido de esto es que las transformaciones de CSS3 no funcionan sobre elementos de SVG en ninguna de la versiones de Internet Explorer. Así se apoya un método de animación, epic.

## La opinión del SVGWG

Ayer como todas las semanas había un Minutes del SVGWG, es una reunión semanal que llevaba acabo el grupo de SVG para tratar diferentes temas de la especificación. Una de los temas del minutes de ayer era **blink’s intent to deprecate SMIL**

Aquí os paso el enlace [Minutes, 30 April / 1 May 2015 SVG WG telcon](http://lists.w3.org/Archives/Public/www-svg/2015Apr/0058.html){:target=“_blank”}

La conversación es bastante interesante.

El resultado final es separar SMIL de SVG, para ello se va a crear una especificación donde ubicarlo. Es un mal menor, como bien dicen no tiene sentido deshacerse de SMIL cuando todavía esta muy verde WebAnimationsJS.

También se va a hacer un analisis entre SVG Animation y CSS animations/transitions.

Por su parte Brian Birties creador de WebAnimationsJS escribía un post esta mañana sobre el tema: [What do we do with SMIL?](https://birtles.wordpress.com/2015/05/01/what-do-we-do-with-smil/){:target=“_blank”}


## Mi opinión

El gran ramajero virtual me pedía mi opinión sobre el tema.

{% tweet 593725524960227328%}

Si con algo he me he divertido a la vez que lo he ido aprendiendo es con Freehand y con SMIL. Así que me da pena que termine desapareciendo. Entiendo que se quiera integrar SMIL+CSS3 en una sola especificación como WebAnimationsJS para ver si así todo el mundo da soporte de una maldita vez a un método de animaciones para la web.

- La parte de potencial que le sigo viendo a SMIL es la facilidad a la hora de concatenar animaciones.

- La posibilidad de animar casi todos los elementos que forman parte de la especificación, esto lo hacemos con **animate** y **atributeName**


{% highlight HTML %}
<animate attributeName=“” values=“” begin=“” dur=“” calcMode=“” keyTimes=“” fill=“”/>
{% endhighlight %}

- La simplicidad de incluir eventos como begin, end, click, hover a la hora de comenzar animaciones.

- La elasticidad que se le pueden dar a las animaciones haciendo un buen uso de keyTimes, keySplines.

- La sencillez a la hora de aprender.


En su día hice una *review* [comparando SMIL vs CSS3](http://jorgeatgu.com/blog/animando-svg-de-smil-a-css3/){:target=“_blank”}

### SVG
{% codepen qvzLm jorgeatgu [result] [400] %}

### CSS3
{% codepen EvyhL jorgeatgu [result] [400] %}

[Aquí una colección de CodePen con multitud de animaciones creadas principalmente con SMIL](http://codepen.io/collection/chefj/)

[También subí todo el código de todas mis animaciones a un repositorio GitHub](https://github.com/jorgeatgu/SMIL)

Y el pasado verano también cree un [pequeño plugin para Sublime Text 2/3](https://packagecontrol.io/packages/SVG-SMIL-Snippets)
