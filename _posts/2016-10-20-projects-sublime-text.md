---
title: Gestionando los projects de Sublime Text
author: Jorge Aznar
layout: post
permalink: /projects-sublime-text/
comments: true
tags:
  - Sublime Text
---

Me ha costado un rato editar la ubicación de los projects y workspace de Sublime Text así que voy a escribir sobre ello por si alguien se vuelve loco.

<!--more-->

Tengo la impresión de que los projects de Sublime son un gran desconocido que tiene un gran potencial. Eso sí, la gestión es un tanto pésima.

Los projects como su nombre indica sirven para guardar un proyecto en concreto. Para crear un project basta con irnos al menú Project y seleccionar add folder to project, elegimos la carpeta del proyecto y esta se nos abrirá en el sidebar. Ahora vamos a guardar el project, volvemos al menú project y seleccionamos save project as, se abrirá un menú y salvamos el project con el nombre más adecuado, una vez guardado se guardará también con el mismo nombre un workspace. El workspace es la vista de los archivos que tenemos abiertos en ese momento en el project, imaginemos que tenemos un archivo JavaScript, otro de CSS y otro de HTML el workspace hará una foto de esto para que cuando volvamos abrir ese project se nos abra con estos archivos que teníamos abiertos en el momento de cerrar Sublime.

Ahora vamos a ir guardando diferentes projects de todos los proyectos en los que estamos trabajando. Una vez guardados vamos a poder ir saltando entre los diferentes projects desde el menú project y luego desde quick switch project, mucho más fácil desde el atajo de teclado ctrl + ⌘ + P en Mac y ctrl + alt + p desde Windows.

La ventaja es que cada proyecto en el que estamos trabajando guardará en el workspace los archivos que tenemos abiertos en ese proyecto, así cuando cambiemos a otro y volvamos a este todo estará tal cual lo hemos dejado. También podemos usar de manera ágil el go to anything para buscar archivos o cualquier otra cosa solamente en ese proyecto. Si hacemos esto en una carpeta con muchísimos archivos(NPM y sus trillones de dependencias no ayudan a ello) la búsqueda se ralentiza hasta tal punto que parece que estamos usando Atom en lugar de Sublime :trollface:

Ya por último vamos a modificar la ubicación de los projects y workspaces que es lo que quería explicar. Cuando guardamos un project en mi caso siempre los guardaba en la carpeta de descargas sin orden ni control. Como me cansaba de verlos a diario en esa carpeta al final decidí crear una carpeta llamada projects-sublime donde los guarde todos. Sublime no indexa las nuevas ubicaciones y muestra las anteriores, estupido. Así que para decirle donde están ubicados nuestros projects hay que editar a mano un archivo llamado sublime_session. Para acceder a este archivo vamos a Sublime Text > Preferences > Browse Packages, ahora subimos un nivel a la carpeta Sublime Text 3, vamos a la carpeta local y encontramos el archivo sublime session pero ojo este archivo no lo podemos editar desde Sublime, lo vamos a editar desde otro editor de texto ya que si lo hacemos desde Sublime los cambios que hagamos no se verán reflejados. Una vez abierto con otro editor de texto en la parte final del archivo encontramos la sección workspaces y workspaces recents, aquí es donde vamos a poner la nueva ruta del workspace, ahora guardamos el archivo y volvemos a abrir Sublime, cuando cambiemos entre proyectos veremos que la ubicación ha sido actualizada. Si desde el principio guardamos todo en una carpeta nos evitaremos este paso farragoso.
