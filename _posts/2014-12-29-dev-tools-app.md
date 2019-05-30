---
title: Utilizando las developer tools de Chrome por separado
author: Jorge Aznar
layout: post
permalink: /app-developer-tools/
comments: true
tags:
  - developer
  - Chrome
---

Me acabo de encontrar hace unas horas con una app totalmente independiente basada en las developer tools de Google Chrome. Es la primera versión pero la app funciona perfectamente. El concepto es claro, inspeccionar una web desde una app independiente con todas las funciones de las developer tools. Impresionante!

<!--more-->

Lo primero que tenemos que hacer es descargar desde el [repositorio de GitHub la App](https://github.com/auchenberg/chrome-devtools-app){:target="_blank"}. Una vez descargada abrimos la app.

Ahora lo que vamos a hacer es abrir Chrome con remote debugging esto lo podemos hacer desde el terminal. Desde la última versión de Chrome me salta un error de *websocket_closed* así que yo lo hago desde Canary. Pongo los dos comandos del terminal. Recordad que antes de ejecutar el comando desde el terminal debéis de tener Chrome cerrado.

*Google Chrome*

{% highlight BASH %}
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --reme-debugging-port=9222
{% endhighlight %}

*Google Chrome Canary*

{% highlight BASH %}
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --remote-debugging-port=9222
{% endhighlight %}

Ahora vamos a la página que queremos inspeccionar y automáticamente se os refrescará la app. En el apartado *pages* os aparecerá la página o las páginas que podemos inspeccionar.

<a class="primera-imagen" href="http://jorgeatgu.com/blog/img/2014/12/developer-tools-inicio.png" title="Inicio developer tools Google Chrome">
	<img src="http://jorgeatgu.com/blog/img/2014/12/developer-tools-inicio.png" width="75" height="75">
</a>

Ahora le damos a GO y nos llevará directamente al inspector. Una vez allí podemos inspeccionar igual que hacemos desde Google Chrome


<a class="segunda-imagen" href="http://jorgeatgu.com/blog/img/2014/12/developer-tools-inspector.png" title="Inspector developer tools Google Chrome">
	<img src="http://jorgeatgu.com/blog/img/2014/12/developer-tools-inspector.png" width="75" height="75">
</a>


[El artículo del creador de la app donde también encontrareis un par de vídeos.](https://kenneth.io/blog/2014/12/28/taking-chrome-devtools-outside-the-browser/){:target="_blank"}




