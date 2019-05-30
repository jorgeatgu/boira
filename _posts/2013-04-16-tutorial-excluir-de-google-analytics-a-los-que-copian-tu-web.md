---
title: 'Tutorial &#8211; Excluir de Google Analytics a los que copian tu web'
author: Jorge Aznar
layout: post
permalink: /tutorial-excluir-de-google-analytics-a-los-que-copian-tu-web/
comments: true
dsq_thread_id:
  - 2159967900
tags:
  - Google Analytics
  - tutorial
---
Hace unos meses me dedique a publicar mi web en varias galerías de **CSS**, todo transcurría con normalidad hasta que un buen día <!--more-->entre en

**Google Analytics** y me di cuenta de que aparecían varias visitas con una **URL compartida** que no era la mía, investigando un poco resulto ser que la web era de una empresa turca que se dedica a hacer muebles, parece ser que a su diseñador web le gusto tanto mi diseño que copio y pego TODO el código, si, todo pero todo todo todo el código, ya que copias al menos ten el detalle de limpiar un poco el código, cambia el nombre, borra el **script de Analytics**, pero parece ser que ya puestos a ahorrar trabajo decidió dejar todo tal cuál lo copio. Me puse en contacto con ellos a través de **Twitter** para que borraran el script pero no hubo manera alguna de que lo borraran así que me tuve que buscar la vida para que sus visitas no se reflejaran en mi cuenta de **Google Analytics**.

![copiando código][1]

# Crear el filtro en Google Analytics

Ahora vamos a lo que nos interesa, y es crear un filtro para que **Google Analytics** deje de contabilizar las visitas ajenas.

Lo primero es ir a nuestra página de **Google Analytics**, una vez en ella nos vamos a la pestaña de Administrador.

![administrador analytics][2]

Ahora seleccionamos nuestra cuenta.

![cuenta analytics][3]

Ahora seleccionamos la pestaña de filtros.

![pestaña filtro Google Analytics][4]

Ahora vamos a crear un filtro con las siguientes características.

![crear filtro Google Analytics][5]

Nombre del filtro: turcos
Filtro predefinido
Primera pestaña: excluir
Segunda pestaña: Tráfico al nombre del host
Tercera pestaña: que contienen
Nombre del host: ideamania.net

Seleccionamos nuestro perfil y le damos a añadir, ahora le damos a guardar y ya tenemos nuestro filtro.

Y para asegurarme de que ya no se iban a contabilizar sus visitas en mi cuenta de **Google Analytics** cree dos filtros mas para bloquear el tráfico que venía de sus subdirectorios.

![filtro Google Analytics][6]

![filtro Google Analytics][7]

Y ya para acabar, lo primero antes de ponerte a hacer filtros es ponerte en contacto con ellos, alguna vez funciona, por ejemplo hace un mes me volvió a pasar lo mismo, esta vez un chaval de Canadá se dedicó a copiarme todo el código, me puse en contacto con el a través de **Facebook** diciéndole que hiciera el favor de borrar el script de **Analytics** que el resto me daba igual y al final borro toda la web.

 [1]: http://jorgeatgu.com/blog/img/2013/04/A8zIcFnCQAA-pMe.png
 [2]: http://jorgeatgu.com/blog/img/2013/04/administrador-1024x33.png
 [3]: http://jorgeatgu.com/blog/img/2013/04/administraci%C3%B3n-de-cuentas.png
 [4]: http://jorgeatgu.com/blog/img/2013/04/filtros.png
 [5]: http://jorgeatgu.com/blog/img/2013/04/filtro-turcos.png
 [6]: http://jorgeatgu.com/blog/img/2013/04/filtro-turcos-2.png
 [7]: http://jorgeatgu.com/blog/img/2013/04/filtro-turcos-3.png