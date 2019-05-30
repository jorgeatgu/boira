---
title: Cambios en el blog
author: Jorge Aznar
layout: post
permalink: /cambios-blog/
comments: true
tags:
  - Jekyll
  - Blog
---

Ya tocaba renovar un poco el blog. Aunque esta vez casi todos los cambios son en el back de **Jekyll**.

<!--more-->

Lo primero he actualizado **Jekyll** a su última version, en estos momentos la **3.1.2**

El sistema de archivo daba pena verlo y usarlo así que lo he cambiado a fondo. Ahora hay una sección de archivo conforme es debido. En la cabecera hay una sección con un link a cada una de las categorías donde he ido archivando todos los artículos. También se refleja la categoría en los propios artículos.

El buscador dejo de funcionar por arte de magia, así que lo he suprimido. He estado buscando alternativas pero ninguna me ha terminado de convencer. Así que el blog va a estar un tiempo(espero que poco) sin buscador. Si alguien tiene alguna sugerencia es más que bienvenida.

He pasado todo el **CSS** a **postCSS** :)

Y a nivel visual/diseño he prescindido de las webfonts a través de typekit, y por primera vez en mucho tiempo el blog he dejado de utilizar mi queridísima y trilladisima **Proxima Nova**. Llevo usando Typekit muchísimo tiempo y siempre me ha desquiciado un poco el entrar al blog y que al tiempo se cargarán las fuentes, el efecto era feo y queda bastante mal. Además llevaba un tiempo queriendo probar en el blog lo que leí en el artículo del blog de WebKit: [Using the system font in web content](https://webkit.org/blog/3709/using-the-system-font-in-web-content/). Lo que he hecho es que la fuente del blog es la que utiliza cada sistema operativo. En el caso de que estés leyendo el blog desde iOS9 ó desde OSX 10.11 la fuente para los párrafos sera la **San Francisco** y para los títulos **Helvetica Neue**.

El blog carga en menos de un segundo **fiiiiuuuu!**

OSX 10.11 El Capitán

![](http://jorgeatgu.com/blog/img/2016/3/osx-el-capitan.png)

Developer tools Chrome

![](http://jorgeatgu.com/blog/img/2016/3/dev-tools-chrome-san-francisco.png)

Windows 10 Gracias [Jose Dongil](https://twitter.com/jdonsan/) por la captura de pantalla.

![](http://jorgeatgu.com/blog/img/2016/3/windows-10.jpg)

[Otro artículo sobre el tema del font-family: -apple-system;](http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/)

También he vuelto a poner los botones para compartir en redes sociales. La última vez que los tuve este blog corría sobre **WordPress** y los quite ya que el plugin metía un montón de basura. Me he basado en este [artículo](https://superdevresources.com/share-buttons-jekyll/) la mar de sencillo.

Si alguien esta interesado en el código de **Jekyll** lo tenéis a vuestra disposición en [GitHub](https://github.com/jorgeatgu/boira)