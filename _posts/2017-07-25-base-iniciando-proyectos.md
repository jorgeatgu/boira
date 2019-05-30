---
title: Base, iniciando proyectos desde cero
author: Jorge Aznar
layout: post
permalink: /iniciando-proyectos-con-base/
comments: true
tags:
  - Bash
  - CSS
  - Gulp
  - postCSS
---

Hace unos meses escribí un artículo donde explicaba como con una función
de **bash** había conseguido automatizar la creación de la estructura de
un proyecto desde cero, el artículo se llama [iniciando proyectos desde
cero](http://jorgeatgu.com/blog/iniciando-proyectos-desde-cero/)

<!--more-->

 voy a explicar todo lo que uso para mis proyectos.

### Base

[Base](http://github.com/jorgeatgu/base) es el nombre del repositorio
que utilizo para alojar toda mi configuración de trabajo. Cuando lanzo
mi función de
[initCSS](https://github.com/jorgeatgu/setup/blob/master/dotfiles/func/functions.zsh#L38)
la función se descarga desde este repositorio todo lo necesario para
empezar a trabajar. A continuación vamos a ver todo lo que utilizo para
trabajar.

### Estructura

Aquí toda la estructura que genero con la función de `initCSS`

    ├─ src/              # Master
    │  ├─ css/           # Estilos
    │  ├─ img/           # Imágenes
    │  └─ js/            # JavaScript
    │
    ├─ css/              # CSS minificado y purificado para producción
    ├─ js/               # JavaScript para producción
    ├─ img/              # Imágenes optimizadas para producción
    ├─ .gitignore        # Lista de archivos excluidos en Git
    ├─ .stylelintignore  # Lista de archivos que no serán linteados por Stylelint
    ├─ .stylelintrc      # Linteando en modo espartano
    ├─ index.html        # HTML básico
    ├─ gulpfile.js       # Gulp!
    └─ package.json      # Dependencias

### Stylelintignore

Es básicamente lo mismo que un .gitignore pero aplicado a **Stylelint**,
aquí incluyo los archivos que no quiero que sean linteados, en este caso
solamente tengo incluido el reset.css

### Stylelintrc

Es el archivo de configuración de **Stylelint**. En el incluyo las
reglas y excepciones que usa **Stylelint** a la hora de lintear mis
**CSS**. En [Esparta utilizaría
Stylelint](http://octuweb.com/esparta-utilizaria-stylelint/) hable
detalladamente de como configurar **Stylelint**.

### Index

Un simple archivo de **HTML** con una estructura básica, lo más
destacable es que el atributo `<link>` contiene el tag inline, el cual
me sirve para sustituir con Gulp el propio atributo link por `<style>`.

### Variables

Un archivo de **CSS** para guardar las variables usando las
`custom-properties`, ya tengo predefinidas tres variables para usar las
**fuentes del sistema**.

    :root {
      --fontSystem: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, sans-serif;
      --monospace: 'SFMono-Regular', Consolas, Menlo, Courier, monospace;
    }

### Gulpfile

Voy a explicar las dos tareas que utilizo en mi **Gulpfile**. La primera
de ellas es la default, que se lanza escribiendo simplemente Gulp.

La tarea por defecto compila **CSS** con postCSS, y minifica cualquier
tipo de imagen. Lanza un servidor con browserSync. Siempre que se hace
algún cambio en la carpeta de **JS**, **CSS** o cualquier **HTML** se
refresca la página. También paso por un linter los **CSS** con una serie
de directrices que puedes ver comentadas en el archivo `.stylelintrc`.
Antes de subir los cambios a Git con lint-staged compruebo que los
**CSS** cumplen a rajatabla todas las reglas de **Stylelint**, en el
momento que no cumpla una regla no me deja comitear a mi repositorio de
Git. Un poco de rectitud no viene mal.

Para acabar y antes de subir los cambios ejecuto la tarea build. La
tarea primero comprime las **CSS** y **JS** con las tareas minify y
compress. Lo siguiente es remover el **CSS** que no estoy usando. A
continuación lo meto en línea, esto no le gustara a todo el mundo pero
mis **CSS**(en mis proyectos personales) no suelen ocupar mucho tamaño,
así que prefiero ahorrarme una petición metiendo todo en línea. La
siguiente tarea da para un otro artículo, es transformar todas las
imágenes a tamaños que se adapten al dispositivo, es decir, no servir la
misma imagen para todos los dispositivos y redimensionarla para no
mostrar imágenes enormes en contenedores pequeños. Y por último,
transformar las imágenes a formato **WebP** para que aquellos
navegadores que dan soporte a este formato sirvan este tipo de imágenes,
las cuales ocupan mucho menos.

[Y aquí el repositorio donde esta todo
almacenado](http://github.com/jorgeatgu/base)
