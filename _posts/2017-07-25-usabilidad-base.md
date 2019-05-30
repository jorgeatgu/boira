---
title: Un poco de usabilidad para base
author: Jorge Aznar
layout: post
permalink: /iniciando-proyectos-con-base-usabilidad/
comments: true
tags:
  - Bash
  - UX
---

Cuando te cuesta usar algo que tu mismo has creado.

<!--more-->

Voy a volver a hablar sobre base y la función que automatiza todo.

En un principio la usaba cuando ya había creado la carpeta del proyecto.
Así que en la terminal usaba
`mkdir nombredelproyecto && cd nombredelproyecto && initCSS`. Así en
primera instancia creaba la carpeta, luego me metía dentro y por último
ejecutaba la función que descarga todo el contenido de base. Pero si nos
ponemos a automatizar vamos a hacerlo bien. Así que simplemente clone la
función y le añadí el `mkdir $1 && cd $1`. Así con `$1` le digo a la
función que espere un parámetro, y ese parámetro en este caso el nombre
del proyecto. Para diferenciar una función de otra añadí `-wf`,
intentando entender a mi yo del pasado creo que quise decir *with
folder*, pero desde entonces siempre he dudado de a cual tengo que
llamar, siempre acabo liándola y al final termino entrando en mi archivo
de functions.zsh para ver que hace cada una. Un pequeño fail que ahora
voy a subsanar.

Lo primero que hago nada mas encender el portátil es llamar a una
función que se llama
[buendia](https://github.com/jorgeatgu/setup/blob/master/dotfiles/func/buendia.zsh),
es algo simple, si es entre semana me abre los programas con los que
suelo trabajar, y si es fin de semana me abre otros. Y a que viene esto,
pues muy sencillo, esta función usa un `if else` y si se cumple la
condición ejecuta una cosa u otra, así que se me ha ocurrido que podía
hacer lo mismo con la función que inicia base.

Así que lo que he hecho es lo siguiente

    function initCSS() {
        echo -n "\e[94m\e[1mVamos a lanzar base ¿ya has creado una carpeta? (s/n): "
        read answer
            if echo "$answer" | grep -iq "^s" ;
        then
            echo "Perfecto, vamos a comenzar con Base"
            initConCarpeta;
        else
            echo -n "Pues elige el nombre de tu proyecto: "
            read var_name &&
            mkdir $var_name &&
            cd $var_name &&
            Aquí el resto de la función...
    }

Lo primero es preguntar si ya tengo una carpeta o no. Si ya tengo creada
la carpeta ejecuta la función y ya está. En el caso de que responda que
no esta creada la carpeta me vuelve a preguntar que nombre quiero
elegir, una vez introducido lo guarda, y ahora ejecuta la función
creando la carpeta con el nombre que he elegido. Mucho mejor así ¿no?
