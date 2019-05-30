---
title: Lanzando postCSS con scripts de NPM
author: Jorge Aznar
layout: post
permalink: /postcss-npm/
comments: true
tags:
  - postCSS
  - NPM
---

En un artículo anterior vimos como lanzar [**postCSS** acompañado de **Gulp**](http://jorgeatgu.com/blog/configurando-gulp-postcss/). En esta ocasión vamos a prescindir de cualquier *tasker runner* y vamos a lanzar **postCSS** con scripts de **NPM**. Vamos a ver dos métodos, el primero de ellos es aprovechando la propia API de JS que tiene **postCSS**. El segundo método será a través de un script de NPM llamado **postcss-cli**.

<!--more-->

Aunque vamos a aprovechar los propios scripts de NPM no nos vamos a librar de los archivos de configuración. En estos archivos es donde vamos a pasarle todos los plugins de postCSS que vamos a utilizar, en ellos también incluiremos la configuración de cada plugin.

## Instalando dependencias

Antes de nada y como vimos en el anterior artículo vamos a instalar **postCSS** y todos los plugins a través de **NPM**. Antes de nada un ```npm init``` para configurar nuestro propio ```package.json```.

Vamos a nuestro terminal y vamos a instalar todas las dependencias

{% highlight BASH %}
//Instalamos postCSS
npm install postcss --save-dev

//Ahora vamos con los plugins
npm install postcss-import --save-dev
npm install postcss-nested --save-dev
npm install postcss-pxtorem --save-dev
npm install postcss-simple-vars --save-dev
npm install postcss-sorting --save-dev
{% endhighlight %}

## postCSS JS API

Una vez instaladas todas las dependencias vamos a crear un archivo JavaScript al que vamos a llamar ```index.js```. En este archivo vamos a configurar todos los plugins, el archivo que vamos a crear es bastante parecido al de **Gulp** pero no será tan largo.

Lo primero que vamos a hacer es declarar las variables con todas nuestras dependencias/plugins

{% highlight JavaScript %}
var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var vars = require("postcss-simple-vars")
var nested = require("postcss-nested")
var pxToRem = require("postcss-pxtorem")
var sorting = require("postcss-sorting")
var devtools = require('postcss-devtools')

//Aqui la ruta donde están ubicados nuestro CSS
var css = fs.readFileSync("src/css/styles.css", "utf8")
{% endhighlight %}

Ahora vamos a procesar el **CSS** con **postCSS**, vamos a utilizar los plugins a través de ```.use()``` y entre los paréntesis el nombre del plugin. En el caso de que queramos modificar las opciones predefinidas de cualquier plugin vamos a pasar estas opciones entre llaves. Esto como ya hemos visto en otros artículos dependerá de cada plugin.

{% highlight JavaScript %}
postcss()
	.use(devtools())
	.use(atImport())
	.use(vars())
	.use(nested())
	//pasamos las opciones al plugin
	.use(pxToRem({
		root_value: 16,
		unit_precision: 2,
		prop_white_list: ['font-size', 'line-height', 'padding'],
		replace: true,
		media_query: false
	}))
	.use(sorting())
	.process(css, {
		//La ruta donde se alojan nuestros CSS
		from: "./src/css/styles.css",
		//La ruta donde vamos a dejar el CSS
		to: "./css/styles.css",
		//Vamos a desactivar los source maps inline
		map: {
			inline: false
		},
	})
	.then(function(result) {
		fs.writeFileSync('./css/styles.css', result.css);
		//Si desactivamos los source maps inline vamos a escribir la ruta donde queremos que cree el .map
		if (result.map) fs.writeFileSync('./css/styles.css.map', result.map);
	});
{% endhighlight %}

Tenemos otro camino para configurar el ```index.js```. Vamos a utilizar menos líneas de código pero desde mi punto de vista es menos legible. Lo que vamos hacer es no declarar variables con cada plugin, las vamos a declarar directamente en ```postcss()``` como vamos a ver en el siguiente código.

{% highlight JavaScript %}
postcss([require('autoprefixer'), require('postcss-import'), require('postcss-simple-vars'), require('postcss-nested'), require('postcss-pxtorem')({
	root_value: 16,
	unit_precision: 2,
	prop_white_list: ['font-size', 'line-height', 'padding'],
	replace: true,
	media_query: false
}), require('postcss-sorting'), require('postcss-devtools')])
{% endhighlight %}

Ahora vamos a nuestro ```package.json``` a la sección de scripts. Y vamos a crear uno con el nombre de ```build:css``` lo vamos a acompañar de [watch](https://www.npmjs.com/package/watch) para que este constantemente vigilando la carpeta donde vamos a ir guardando el **CSS**. Así nuestro script quedaría así

+ **Watch:** para vigilar los cambios

+ **'node index.js':** para cargar la configuración que hemos creado anteriormente

+ **src/css**: la carpeta donde watch vigila los cambios


{% highlight JavaScript %}
"scripts": {
  "build:css": "watch 'node index.js' src/css/"
}
{% endhighlight %}

Ahora vamos al terminar y vamos a lanzar el script con ```npm run```

{% highlight bash %}
npm run build:css
{% endhighlight %}

El resultado que obtenemos será el siguiente:

![npm run](http://jorgeatgu.com/blog/img/2016/2/npm-run-build-css.png)

## postCSS CLI

Vamos a ver otro método para lanzar **postCSS** con un script de **NPM**. Para ello vamos a instalar [postcss-cli](https://github.com/postcss/postcss-cli).

{% highlight BASH %}
npm install postcss-cli --save-dev
{% endhighlight %}

Con este método también necesitamos un archivo de configuración. Vamos a crear el archivo, lo vamos a llamar ```config-postcss.js```

Una vez creado vamos a hacer referencia a los plugins que vamos a cargar a traves de use: []

{% highlight JavaScript %}
var postcss = require('postcss')

module.exports = {
	//Cargamos los plugins
  use: [
    "postcss-devtools",
    "postcss-import",
    "postcss-inline-comment",
    "postcss-nested",
    "postcss-pxtorem",
    "postcss-simple-vars",
    "postcss-sorting"
  ],
  //Configuración personalizada de cada plugin
  "postcss-pxtorem": {
    root_value: 16,
    unit_precision: 2,
    prop_white_list: ['font-size', 'line-height', 'padding'],
    replace: true,
    media_query: false
  },
  //Carpeta donde esta nuestro CSS
  "input": 'src/css/styles.css',
  //Carpeta donde alojamos nuestro CSS
  "output": "css/styles.css"
}
{% endhighlight %}


Ahora vamos a nuestro ```package.json``` a la sección de scripts. Y vamos a crear un script con el nombre de ```build:css``

 {% highlight BASH %}
	"scripts": {
	  "build:css": "postcss -c config-postcss.js -w --no-map.inline"
	}
 {% endhighlight %}

 Vamos a diseminar el script:

* **postcss:** llamamos a postCSS

* **-c config-postcss.js**: Utilizamos -c acompañado del nombre de nuestro archivo de configuración

* **-w:** para que vigile los cambios que vamos haciendo en nuestro src/css/styles.css

* **--no-map.inline:** para que en lugar de generar en línea el source-map lo genere en un archivo aparte.



 El resultado que obtenemos en nuestro terminal sera el siguiente:

 ![npm run](http://jorgeatgu.com/blog/img/2016/2/npm-run-build-css-cli.png)

Todo el código esta a vuestra disposición en [GitHub](https://github.com/jorgeatgu/gulp-postCSS)