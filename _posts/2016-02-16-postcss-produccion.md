---
title: ¿postCSS en producción?
author: Jorge Aznar
layout: post
permalink: /postcss-produccion/
comments: true
tags:
  - postCSS
  - CSS
---

El viernes pasado [Nabaroa](https://twitter.com/nabaroa) lanzo un [tweet](https://twitter.com/nabaroa/status/698159445130551299) que genero una gran conservación que congrego a un montón de gente(Daniel, Diana, Joan, Xavi etc...) que se [extendió hasta el domingo](https://twitter.com/nabaroa/status/698892561012891648). Muy recomendable la lectura de los dos hilos, incluso alguien soltó el típico *[bait](http://i.imgur.com/1R7XXkJ.png)*.

<!--more-->

La conversación del domingo termino con la pregunta de [Naiara](https://twitter.com/nabaroa)

{% tweet 698936808881713153%}

Y a continuación **mi respuesta**, la cuál es simplemente una opinión formada en base a lo que he experimentado estos últimos meses utilizando **postCSS**.

La principal razón del cambio fue la modularidad, solo voy a utilizar lo que yo necesito, ni más ni menos. Tener la oportunidad de personalizar la herramienta con la que trabajas es algo fantástico. La rapidez en la que compila también es otro punto a favor. El tener la posibilidad de empezar a usar propiedades como las [custom-properties](https://escss.blogspot.com/2016/02/css-custom-properties-no-variables.html) gracias a [cssnext](http://cssnext.io/) sin esperar a la larga travesía de la implementación de cada navegador es otro punto a favor, para mí es adelantar trabajo.

Estas razones me han llevado a pasar de **SASS** a **postCSS** en todos mis proyectos a nivel personal. El primero de ellos fue [Fildrop](http://jorgeatgu.github.io/svg-filters/), y en proceso están este blog y mi web. Las ideas locas privadas y públicas que están en **GitHub** también. En producción se va a poner dentro de nada un proyecto que he hecho como freelance en el que he utilizado **postCSS**. Ninguno de estos proyectos contiene un **CSS** como el que puede llevar un **ecommerce**. Y en todos estoy **solamente** yo, así que todo queda en casa.

En cambio en la empresa donde trabajo sigo utilizando **SASS**. Hemos comentado la posibilidad de intentar utilizar **postCSS** en algún proyecto pequeño para ver que tal la experiencia, y a partir de la experiencia decidir el que hacer.

Antes de que me desvíe mas voy a responder a a la pregunta de Naiara. Mi respuesta es que si que deberíamos de dar el paso de utilizarlo en producción. Todo lo que he visto hasta ahora de **postCSS** me hace pensar que es una herramienta que esta madura, ya ha cumplido [dos años](https://evilmartians.com/chronicles/postcss-second-birthday) y detrás tiene una gran comunidad publicando plugins, puliendo la herramienta y dando soporte a todo el que lo necesita desde el canal de **postCSS** en [Gitter](https://gitter.im/postcss/postcss). Ya no es una idea/proyecto loco/a que nació en Rusia, ahora es una herramienta que ya utilizan en **Google**, **Twitter**, **Alibaba** y **Shopify**. No es algo que se vaya a quedar en agua de borrajas.

El cambio no es duro, la curva de aprendizaje es suave, recuerda que tu eres el que pones tus limites al ir construyendo tu mismo tu herramienta. Si la transición se hace desde algún preprocesador la curva se suaviza, y si además ya utilizas algún *task runner* como **Gulp** o **Grunt** el camino se allana más todavía. Si hay algo duro y tedioso es configurar todo por primera vez.

Y recordad al final del todo lo que queda no es Kinglon, simplemente es **CSS**.