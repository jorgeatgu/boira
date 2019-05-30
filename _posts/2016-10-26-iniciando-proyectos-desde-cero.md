---
title: Iniciando proyectos desde cero
author: Jorge Aznar
layout: post
permalink: /iniciando-proyectos-desde-cero/
comments: true
tags:
  - Bash
  - CSS
---

En estos últimos años en el mundo del desarrollo han ido apareciendo frameworks, herramientas, librerías que en algunos casos nos han ayudado a crear proyectos pero que han añadido una capa de dificultad a todo el proceso.

<!--more-->

En mi caso en los últimos tiempos he ido agregando a mi nueva herramientas como postCSS que ha sustituído por completo a SCSS. Y sigo manteniendo otras como Git para el control de versiones y Gulp para tareas repetitivas como optimización de imágenes, minificar CSS y JS, lanzar un servidor etc… No son muchas pero ya es algo más que aquellos tiempos en los que me bastaba con el magníficio HTML5Boilerplate y **prou**.

En mi caso todas estas novedades son bien recibidas ya que me encanta cacharrear con las cosas nuevas, intente pasar mi Gulp a NPM pero no me convenció así que me quede con Gulp.

Pero que pasa cuando tenemos que iniciar un proyecto desde cero, crear la estructura de directorios y de archivos, iniciar un package.json instalar las dependecias, actualizarlas y configurar el Gulp. Podemos escoger el camino de copiar un proyecto, copiarlo e ir limpiando todo aquello que no vamos a usar pero esto me parece una basura infame. Y no voy a utilizar Yeoman para terminar borrando la mitad de movidas que instala. Así que al final y con ayuda de Bash me he hecho algo a medida.

En mi corto pero apasionada relación con el terminal he ido automatizando todo lo que he podido a través de plugins, funciones y alias. Lo que he ido creando como siempre lo comparto en GitHub en el repo de setup En su día cree un alias para iniciar toda la estructura de un proyecto web desde cero.

{% highlight bash %}
alias initproject="mkdir css src js img && touch .gitignore && echo node_modules > .gitignore && cp ~/documents/base-astral/package.json ./ && cp ~/documents/base-astral/gulpfile.js ./ && touch index.html && cd src && mkdir css img js && cd css && touch styles.css && cd ../js && touch index.js && cd .. && cd .. && git init && git add . && git commit -m 'estructura creada' && npm i && sudo ncu -u"
{% endhighlight %}

Ahora para no tener que crear a mano la carpeta, lo he pasado todo a una función de BASH donde si que puedo pasarle parametros y crear una carpeta con el nombre que yo quiera.

Vamos a ver la función que es un poco larga y voy a ir explicando que hace cada cosas. Para invocar la función simplemente tenemos que ir al terminal, elegir la ruta donde queremos invocarla y escribir ```initcss nombredelproyecto``` y comenzará todo el proceso.

Antes de empezar a ver nada vamos con unos comandos básicos del terminal.

**mkdir foo** sirve para crear un directorio  

**cd foo/src** para ir a una ruta  

**touch foo.js** para crear un archivo  

**echo foo > foo.js** para escribir foo dentro de foo.js  

**cp /ruta/archivo/copiar /ruta/archivo/pegar/** para copiar un archivo de un directorio en otro directorio  

**mv foo.css styles.css** para renombrar un archivo   

Antes de empezar, para comprobar si hay actualizaciones para los paquetes de NPM utilizo npm-check  


Vamos a ver la función


{% highlight bash %}
function initcss() {
    
  #Creamos una carpeta con el nombre que le pasamos a la función, prueba
  mkdir $1

  #Entramos en la carpeta prueba
  cd $1
  
  #Ahora creamos las carpetas css src js img dentro de prueba
  mkdir css src js img
  
  #Creamos el archivo .gitignore
  touch .gitignore

  #Escribimos dentro de .gitignore
  echo node_modules > .gitignore

  #Descargamos la version más actualizada del package.json
  curl -O https://github.com/jorgeatgu/setup/blob/master/base/package.json

  #Descargamos la version más actualizada del gulpfile
  curl -O https://github.com/jorgeatgu/setup/blob/master/base/gulpfile.js

  #Creamos el archivo index.html
  touch index.html

  #Entramos en la carpeta src
  cd src

  #Dentro de la carpeta src creamos las carpetas css img js
  mkdir css img js

  #Entramos en la carpeta css
  cd css

  #Descargamos la version más actualizada de normalize
  curl -O https://github.com/necolas/normalize.css/blob/master/normalize.css

  #Renombramos normalize a reset.css
  mv normalize.css _reset.css

  #Creamos el styles.css
  touch styles.css

  #Escribimos dentro del style.css el @import para importar los reset.css
  echo @import 'reset' > styles.css

  #Salimos a la carpeta de js
  cd ../js

  #Creamos el archivo index.js
  touch index.js

  #Salimos un nivel
  cd ..

  #Salimos un nivel
  cd ..

  #Iniciamos GIT
  git init

  #Añadimos todo lo que hemos creado
  git add .

  #Lanzamos un commit
  git commit -m 'estructura creada'

  #Instalamos todos los paquetes de NPM
  npm i

  #Lanzamos otro commit con los cambios
  git commit -m 'dependencias instaladas'

  #Comprobamos que todos nuestros paquetes están actualizados a la última version
  npm-check -u
}
{% endhighlight %}

Y ya casi podemos empezar a trabajar. Quizás debería de crear más archivos CSS pero muchas veces cuando hago cosas rápidas me gusta trabajar de la misma manera que para proyectos largos. Cualquier corrección o sugerencia siempre es bienvenida ya que no soy un expero en BASH :)

Unos Gifs con el proceso, he cortado en el ```npm i``` por razones de tiempo. No van incrustados ya que ocupan bastante y no quiero que gasteis tarifa de datos tontamente.


[http://jorgeatgu.com/ejemplos/initcss-parte-uno.gif](http://jorgeatgu.com/ejemplos/initcss-parte-uno.gif)

[http://jorgeatgu.com/ejemplos/initcss-parte-dos.gif](http://jorgeatgu.com/ejemplos/initcss-parte-dos.gif)
