---
title: Nueva version de Bislai
author: Jorge Aznar
layout: post
permalink: /retro-bislai/
comments: true
tags:
  - Bislai
  - opendata
---

Unas cuantas notas sobre la nueva versión de [Bislai](http://bislai.co).

<!--more-->

Esta es la versión que me hubiera gustado sacar el año pasado. Me puse de tope hasta el verano pero me puse a jugar con los datos abiertos de la AEMET y me pase buena parte del verano con d3.js de aquello nació [FORNO](http://jorgeatgu.com/forno/).

Me han encantado esta definición de Bislai

{% tweet 954452914533265410 %}

## Diseño

En esta nueva version he cambiado el aspecto visual de casi todo. Aprovechando que [Astral](https://github.com/jorgeatgu/astral) se basa en un [sistema de 8](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632) lo he aprovechado a la hora de rediseñar. Así que todos margenes, padding, tamaños de letras(aquí no siempre), y distancias se han basado en este sistema. 

Me hubiera gustado poder emplear alguna de las fotos que encontré en el archivo fotográfico de Zaragoza. Tienen fotos increíbles de la llegada de la democracia a Zaragoza. Eso sí, cuesta horrores encontrarlas. Y estaría genial que de primeras te informarán de si se están libres de derechos. Es de locos que en los tiempos actuales alguien tenga que presentarse de cuerpo presente para intentar utilizar una foto. Y si, al final unsplash. En este tema, no quiero olvidarme de Chunta Aragonesista, los únicos que comparten todo en Flickr bajo licencia CC.

## Datos

Lo primero y principal están todos las mociones que se han presentado en esta legislatura. Y nunca más dejaré que se acumule más de una, sobre todo por mi salud. Y es que la extracción de datos sigue siendo mucho más laboriosa de lo que yo creía. En este último tramo he conseguido automatizarlo y ahorrar algo de tiempo. Aún así la peor parte es la incluir los datos, es la única parte que no me gusta del proyecto, es casi tan horrible como hacer una landing y usar bootstrap. Siempre tuve la idea de montar todo con Jekyll y crearme plantillas como las de este blog, es más, cree alguna pero en alguna momento estupido decidí que iba a perder más tiempo y continue por el camino equivocado. Quizás sea buen momento de probar Hugo o aprovechar todo lo que se sobre Jekyll.

<blockquote>Si vas a copiar algo al menos intenta mejorarlo.</blockquote>

### Mociones.json

A la vez que avanzaba con esta versión he ido recopilando todas las votaciones(de las mociones) que se han llevado a cabo en el pleno. [He creado un JSON con diferentes apartados](https://github.com/jorgeatgu/bislai/blob/master/mociones.json). Si alguien quiere utilizarlo para lo que sea que se le ocurra, todo el proyecto esta bajo licencia [CC 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Lo he revisado tres veces, y en cada revisión he ido encontrando fallos, en la última solo encontré un par, así que es posible que al ser tantos datos se haya colado algún error.

```
"fecha": "27-07-2015",
"presentada": "C'S",
"resultado": "ganada",
"a_favor": "PP + ZEC + PSOE + C'S + CHA",
"votos_contra": 31,
"unanimidad": "si",
"numero": 30
```

El día del pleno.
Quien la presento.
El resultado, aquí hay tres opciones, ganada, perdida y retirada.
Quien vota a favor.
Quien vota en contra.
Quien se abstiene.
El número de votos a favor.
El número de votos en contra.
El número de abstenciones.
Si la moción se vota por unanimidad.
Y por último el número de moción.

También he actualizado los [datos con las diferentes estadísticas](https://github.com/jorgeatgu/bislai/blob/master/datos-votaciones-2015-2016-2017.md). Solo están los resultados. El que quiera que los utilice.

### Mapa

Anteriormente para mostrar los datos de las elecciones del 2015 cree una gráfica animada con mo.js. Ahora la he sustituido por un mapa de Mapbox, y por encima he pintado una capa con d3.js con los diferentes distritos electorales. Quería mostrar mas datos pero aquí cada organismo trocea la ciudad como le da la gana.

{% tweet 930916273210437632 %}

## Partidos

Esto es algo que tenía en mente desde casi el principio pero la falta de tiempo me ha hecho ir troceando todo por versiones. En la primera versión saque una parte de ello con las estadísticas generales. Ahora lo he ampliado a cada partido. He sacado gráficas con los votos de cada partido, ¿quién vota en su contra? ¿quién vota a su favor? ahora con todos los datos divididos por partido ves cosas muy curiosas.

{% tweet 954368931480985600 %}


### Ayuntamiento

**¡Por fin!** En noviembre de 2017 sacaron un buscador de mociones :) Es una de las razones por las que me líe la manta a la cabeza y decidí crear [Bislai](http://bislai.co). Es un buen paso por parte de la oficina electrónica del Ayuntamiento, pero sigue siendo un paso pequeño, solamente deja buscar en las mociones del 2017, y la pagina de resultados es muy mejorable.

## Gracias

A todos por los ánimos y los agradecimientos. Si alguien es capaz de no perder dos días de su vida(es el tiempo que invertí en encontrar la moción que inspiro todo esto) en encontrar el resultado de una votación me doy por satisfecho.

Mención especial para [Ricardo](https://twitter.com/PallasR) por interesarse siempre por como va la *movida*. Y por la siempre generosa ayuda creando funciones complicadas y puras con JavaScript. Y a [Jesús](https://twitter.com/eckelon) y [Mónica](https://twitter.com/misstechin) por el feedback y como recopilador de votos para los premios de Aragón en la red. 
