---
title: Creando grids con postCSS
author: Jorge Aznar
layout: post
permalink: /grid-lost-postcss/
comments: true
tags:
  - Grid
  - postCSS
---

En este artículo vamos a ver como crear grids con el plugin [Lost grid](https://github.com/peterramsing/lost). Tenemos todo un abanico de posibilidades, desde simples columnas, pasando por grid horizontales, grid verticales y con la opción de centrar y alinear.

<!--more-->

Vamos a instalar Lost Grid a través de NPM

{% highlight bash %}
npm install lost --save-dev
{% endhighlight %}

Ahora vamos a añadirlo a nuestro ```gulpfile.js```

{% highlight JavaScript %}
var lost = require('lost');
{% endhighlight %}

Y también en nuestro ```gulpfile.js``` lo añadiremos a nuestra tarea de **postCSS**

{% highlight JavaScript %}
var processors = [
	vars,
	nested,
	rucksack,
	pxtorem({
		root_value: 16,
		unit_precision: 2,
		prop_white_list: ['font-size', 'line-height', 'padding'],
		replace: true,
		media_query: false
	}),
	autoprefixer,
	sorting({
		"sort-order": ["font-family", "font-size", "font-weight", "line-height"]
	}),
	lost
];
{% endhighlight %}

## Variables

Por defecto Lost trae tres valores por defecto.

El primero de ellos es *gutter* el cual se encarga del margen entre los bloques, por defecto su valor es de 30px.


El segundo de ellos es *flexbox* por defecto su valor es no-flex.


El tercero de ellos es *cycle*, Lost por defecto aplica un ```margin-right: gutter``` a todos los elementos excepto al último de cada fila al cuál aplica un ```margin-right: 0```. Para modificar este comportamiento tenemos este valor, el cuál podemos utilizar junto a ```lost-column: 1/5 2;``` en el cual *cycle* es el último valor, o por separado con la propiedad ```lost-cycle: 2```.

Tenemos la posibilidad de modificar estas tres variables, para ello tendremos que declararlas en la parte superior de nuestro archivo **CSS**.

{% highlight CSS %}
@lost gutter 60px;
@lost flexbox flex;
@lost cycle none;
{% endhighlight %}

## Opciones y ejemplos

Vamos a ver las diferentes opciones que tenemos a nuestra disposición y algunos ejemplos para ilustrar las opciones.

### lost-column

Con esta opción vamos a crear columnas, vamos a definir su tamaño en fracciones. La fracción sera relativa al tamaño del contenedor teniendo en cuenta el *gutter*. Admite cuatro valores. El primero de ellos es la fracción. El segundo es *cycle*. El tercero es *gutter*. Y por último si queremos que el contenedor use Flexbox.

Vamos a ver un sencillo ejemplo en el que vamos a crear un grid horizontal que se divida en tres.

Para ello vamos a nuestro archivo de **postCSS** y escribimos lo siguiente

{% highlight CSS %}
.primero {
	lost-utility: clearfix;
	bgc: rgba(0, 31, 63,.8);
	color: #fff;
	article {
		lost-column: 1/3;
		bgc: #001F3F;
	}
}
{% endhighlight %}

En el contenedor padre utilizamos ```lost-utility: clearfix;``` y en los hijos utilizamos ```lost-column: 1/3;``` para dividir el contenedor en tres partes.

El resultado lo podéis ver en la siguiente demo:

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/primer-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-offset

Con esta opción vamos a dejar un margen a izquierda o derecha, abajo o arriba, esto dependerá de si pasamos un valor negativo o positivo a la fracción, y también de si el valor que utilizamos es *row* o *column*. También admite el valor *gutter*.

Vamos a ver dos ejemplos, uno utilizando un valor positivo para ```lost-offset``` y otro utilizando un valor negativo.

Al primer ejemplo le vamos a pasar un valor positivo para dejar un espacio entre los hijos.

{% highlight CSS %}
.segundo,
.segundo-negativo {
	lost-utility: clearfix;
	bgc: rgba(255, 220, 0,.5);
	color: #121;
	article {
		lost-column: 1/3;
		bgc: #FFDC00;
		&:first-child {
			lost-offset: 1/3;
		}
	}
}
{% endhighlight %}

En el segundo vamos a pasar un valor negativo para desplazar a los hijos dos fracciones a la derecha.

{% highlight CSS %}
.segundo-negativo {
	article:first-child {
		lost-offset: -2/3;
	}
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/segundo-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-center

Con esta opción vamos a centrar horizontalmente un contenedor. Admite tres valores. El primero de ellos es *max-width*, sera el ancho máximo del contenedor. El segundo de ellos es *padding*, al contenedor se le aplicará un *padding-left* y un *padding-rigth*. El tercero es *flex* o *no-flex* para determinar si el contenedor usará Flexbox o no lo usará.

Vamos a ver un ejemplo donde vamos a centrar el contenedor, el cual va a tener una anchura máxima de 900px y lo vamos a dividir en tres secciones.

{% highlight CSS %}
.tercero {
	lost-center: 900px;
	bgc: rgba(1, 255, 112, .5);
	color: #001F3F;
	article {
		lost-column: 1/3;
		bgc: rgb(1, 255, 112);
	}
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/tercer-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-flex-container

Con esta opción vamos a crear un contenedor con *flexbox*, admite dos valores. El primero de ellos es row y el último column.

### lost-align

Con esta opción vamos a alinear los hijos. Esta opción siempre se la vamos a pasar al padre. Las opciones a nuestra disposición: *reset horizontal vertical top-left top-center top top-right middle-left left middle-center center middle-right right bottom-left bottom-center bottom bottom-right*. También tenemos la opción de determinar si el contenedor usará Flexbox.

Vamos a ver un par de ejemplos. El primero lo vamos a desplazar a la parte superior izquierda.

{% highlight CSS %}
.cuarto {
	lost-align: top-left;
  	width: 100%;
  	height: 400px;
	bgc: rgba(127, 219, 255, .5);
	article {
		bgc: #7FDBFF;
		color: #121;
		width: 300px;
	  	height: 300px;
	}
}
{% endhighlight %}

El segundo lo vamos a mandar a la parte inferior derecha.

{% highlight CSS %}
.cuarto-bottom-right {
	lost-align: top-left;
  	width: 100%;
  	height: 350px;
	bgc: rgba(127, 219, 255, .5);
	article {
		bgc: #7FDBFF;
		color: #121;
		width: 300px;
	  	height: 300px;
	}
}

.cuarto-bottom-right {
	lost-align: bottom-right;
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/cuarto-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-utility

Esta opción admite dos valores. El primero de ellos es *edit*, el cual va a colorear toda la estructura del grid que vamos a crear. El segundo valor es *clearfix*, y hace exactamente lo que dice su nombre.

En el ejemplo anterior hemos utilizado uno de los dos valores de ```lost-utility```, ahora vamos a utilizar el otro valor.

Para ello simplemente vamos a escribir lo siguiente:

{% highlight CSS %}
.quinto {
	lost-utility: edit;
}
{% endhighlight %}

En la demo veréis como se colorean todos los hijos del contenedor.

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/quinto-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-row

Es igual que *lost-column* pero en lugar de columnas va a crear líneas. En este caso y como es obvio no tenemos la opción de *cycle*.

Vamos a crear un grid vertical utilizando ```lost-row```. Al padre le vamos a dar un ```height: 100%```, y vamos a dividir el grid en tres fracciones.

{% highlight CSS %}
.sexto {
	height: 100%;
	bgc: rgba(133, 20, 75,.8);
	article {
		lost-row: 1/3;
		bgc: #85144B;
		color: #fff;
	}
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/sexto-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-waffle

Con esta opción vamos a crear un grid donde los bloques tendrán *margin-right:* y *margin-bottom:*. Admite también los valores *cycle*, *gutter* y *flex*.

Vamos a crear un grid con varías líneas. Al padre le vamos a dar un ```height: 100%```, y vamos a dividir el grid en dos partes por línea.

{% highlight CSS %}
.septimo {
	height: 100%;
	bgc: #121;
	lost-utility: clearfix;
	article {
		lost-waffle: 1/2;
		bgc: #f1f1f1;
		color: red;
	}
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/septimo-ejemplo.html">IR AL EJEMPLO</a>
</button>

### lost-move

Con esta opción vamos a poder desplazar los bloques a izquierda o derecha, abajo o arriba, esto dependerá de si pasamos un valor negativo o positivo a la fracción, y también de si el valor que utilizamos es *row* o *column*. También admite el valor *gutter*.

Vamos a intercambiar el orden de los hijos.

{% highlight CSS %}
.octavo {
	article {
		lost-column: 1/2;
		&:first-child {
			lost-move: 1/2;
		}
		&:last-child {
			lost-move: -1/2;
		}
	}
}
{% endhighlight %}

<button class="boton-centrar">
  <a class="btn" href="http://jorgeatgu.com/ejemplos/lost-grid-postcss/octavo-ejemplo.html">IR AL EJEMPLO</a>
</button>

El código de los ejemplos está disponible en [GitHub](https://github.com/jorgeatgu/gulp-postCSS)