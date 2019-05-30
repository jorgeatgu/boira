---
title: jQuery ya soporta addClass en SVG
author: Jorge Aznar
layout: post
permalink: /jquery-svg-addclass/
comments: true
tags:
  - jQuery
  - SVG
---

El 14 de enero **jQuery** [cumplió una década](http://ejohn.org/blog/10th-anniversary-of-jquery/), casi nada. Y unos días antes se liberó la version 2.2 y 1.12 con una gran novedad para **SVG**.

<!--more-->

En más de una ocasión he echado mucho de menos el addClass de jQuery en **SVG**, en lugar de ello para añadir una clase a un **SVG** teníamos que recurrir a lo siguiente.

{% highlight JavaScript %}
$('#tu-svg').attr('class', 'foo');
{% endhighlight %}

Y para elimnar la clase

{% highlight JavaScript %}
$('#tu-svg').attr('class', '');
{% endhighlight %}

Pero con esta nueva version de **jQuery** ya podemos utilizar métodos como ```addClass```, ```removeClass()```, ```.toggleClass()``` y ```.hasClass()```.

[El resto de los cambios de esta version](http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/)



