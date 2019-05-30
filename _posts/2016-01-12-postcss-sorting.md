---
title: Ordenando estilos con postCSS
author: Jorge Aznar
layout: post
permalink: /postcss-sorting/
comments: true
tags:
  - postCSS
  - CSS
---

En este artículo vuelvo a hablar de otro plugin para [postCSS](https://github.com/postcss/), en esta ocasión se trata de [postCSS sorting](https://github.com/hudochenkov/postcss-sorting), desarrollado por [Aleks Hudochenkov](https://github.com/hudochenkov), la función de este plugin es la de ordenar nuestros archivos **CSS** con un orden preestablecido o como a nosotros nos venga en gana. Si eres un espartano del orden y el concierto seguramente no te haga falta.

<!--more-->

Voy a seguir con el ejemplo de proyecto que he utilizado para hablar de otros plugins, el repositorio de GitHub esta [aquí](https://github.com/jorgeatgu/gulp-postCSS).

Lo primero que vamos a hacer es instalar el plugin a través de NPM.

{% highlight BASH %}
$ npm install postcss-sorting --save-dev
{% endhighlight %}

Una vez instalado vamos a nuestro ```gulpfile.js```

{% highlight JavaScript %}
var sorting = require('postcss-sorting');
{% endhighlight %}

## Opciones

Vamos a ver las diferentes opciones que tenemos para ordenar con postCSS sorting.


### Array con las propiedades

Pasamos el orden a través de un array con las propiedades entre comillas y separadas por comas. Para ello en nuestro ```gulpfile.js``` vamos a añadir el siguiente orden

{% highlight JavaScript %}
var processors = [
  sorting({
    "sort-order": [ "font-family", "font-size", "font-weight", "line-height" ]
  })
];
{% endhighlight %}

El **CSS** en la carpeta *src*

{% highlight CSS %}
.sorting {
  line-height: 20px;
  font-family: Verdana, serif;
  font-size: 20px;
  font-weight: 800;
}
{% endhighlight %}

Y el **CSS** en la carpeta *dist*

{% highlight CSS %}
.sorting {
  font-family: Verdana, serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25rem;
}
{% endhighlight %}


### Array con las propiedades separadas por grupos

En este caso vamos a pasar un array pero tenemos la posibilidad de crear una serie de grupos, separaremos los grupos utilizando corchetes en nuestro ```gulpfile.js```

{% highlight JavaScript %}
var processors = [
  sorting({
    "sort-order": [ ["font-family", "font-size", "font-weight", "line-height"], ["margin", "padding", "width"] ]
  })
];
{% endhighlight %}

El **CSS** en la carpeta *src*

{% highlight CSS %}
.sorting-groups {
  line-height: 20px;
  width: 20%;
  font-family: Verdana, serif;
  font-size: 20px;
  margin: 0 auto;
  font-weight: 800;
  padding: 10px 20px;
}
{% endhighlight %}

Y el **CSS** en la carpeta *dist*

{% highlight CSS %}
.sorting-groups {
  font-family: Verdana, serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25rem;

  margin: 0 auto;
  padding: 0.63rem 1.25rem;
  width: 20%;
}
{% endhighlight %}

### Configuraciones predefinidas

El plugin viene con cuatro configuraciones para ordenar las propiedades.

- [CSSCOMB](https://github.com/hudochenkov/postcss-sorting/blob/master/configs/csscomb.json)

- [default](https://github.com/hudochenkov/postcss-sorting/blob/master/configs/default.json)

- [Yandex](https://github.com/hudochenkov/postcss-sorting/blob/master/configs/yandex.json)

- [Zen](https://github.com/hudochenkov/postcss-sorting/blob/master/configs/zen.json)


A mi personalmente la que más me gusta y la que utilizo es la de **CSSCOMB**.

### Propiedades que no están en la lista

Si decidimos crearnos nuestro propio orden, quizás nos dejemos alguna propiedad en la lista. Todas aquellas propiedades que no están en la lista serán incluidas al final y respetando el orden en el que están escritas en nuestro archivo **postCSS**. También tenemos la opción de incluirlas donde más nos apetezca para ubicar las propiedades que no están en la lista utilizaremos lo siguiente **[...]**

Nuestra configuración en ```gulfile.js```

{% highlight JavaScript %}
sorting({
  "sort-order": [
    ["font-family", "font-size", "font-weight", "line-height"],
    ["..."],
    ["margin", "padding", "width"]
  ]
})
{% endhighlight %}

Vamos a ver un ejemplo, el **CSS** en la carpeta *src*

{% highlight CSS %}
.sorting-forever-alone {
  line-height: 20px;
  width: 20%;
  font-family: Verdana, serif;
  font-size: 20px;
  margin: 0 auto;
  font-weight: 800;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
}
{% endhighlight %}

Y el resultado en la carpeta *dist*

{% highlight CSS %}
.sorting-forever-alone {
  font-family: Verdana, serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25rem;

  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;

  margin: 0 auto;
  padding: 0.63rem 1.25rem;
  width: 20%;
}
{% endhighlight %}

## Sublime Text

Para aquellos que usan el mejor IDE ;) existe un [plugin](https://github.com/hudochenkov/sublime-postcss-sorting) disponible a través del [package control](https://packagecontrol.io/)