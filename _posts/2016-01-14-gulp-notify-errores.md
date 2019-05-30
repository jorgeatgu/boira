---
title: Notificando errores de Gulp
author: Jorge Aznar
layout: post
permalink: /gulp-notify/
comments: true
tags:
  - Gulp
  - Javascript
  - NPM
---

Normalmente cuando estoy trabajando tengo abierto en el mismo escritorio(no soy amigo de los escritorios de OSX) Sublime Text 3, Illustrator, Sip, Chrome, Ghostlab, Mail, Slack, Terminal(iTerm) y Spotify. No soy amigo de tener las aplicaciones a pantalla completa salvo la honrosa excepción de Sublime Text 3, y Chrome con Sublime utilizando *split view*. Así que al final las tareas que estoy ejecutando en el Terminal suelen quedan enterradas en el fondo. No han sido pocas las veces que he escrito algo mal en **JavaScript** o **CSS** y me he enterado pasado un rato.

<!--more-->

Para evitar este tipo de cosas en este artículo vamos a configurar una serie de alertas con [Gulp-Notify](https://github.com/mikaelbr/gulp-notify), estas alertas nos notificarán si nuestras tareas de Gulp se han ejecutado correctamente o hemos cometido algún error.

Antes de empezar a instalar nada, el autor nos da una serie de recomendaciones dependiendo del sistema operativo que estemos utilizando.

- Mac OSX: no necesita instalar nada más si estas usando OSX 10.8 en adelante

- Linux: tienes que tener instalado [notify-send/notify-osd](http://ubuntuforums.org/showthread.php?t=1411620)

- Windows: no necesita instalar nada más si estas usando Windows 8 en adelante

- Fallback: se recomienda instalar Growl para [OSX](http://growl.info/) y [Windows](http://www.growlforwindows.com/gfw/).

Ahora vamos a instalar Gulp-Notify a través de NPM

{% highlight BASH %}
npm install gulp-notify --save-dev
{% endhighlight %}

Ahora vamos a nuestro ```gulpfile.js```

{% highlight JavaScript %}
var notify = require("gulp-notify");
{% endhighlight %}

Lo siguiente sera crear una función para configurar el mensaje y el sonido de la notificación. En este ejemplo vamos a crear una función para las tareas de **JavaScript**

{% highlight JavaScript %}
function errorAlertJS(error) {
    //Aquí configuramos el título y subtítulo del mensaje de error, también el sonido.
    notify.onError({
        title: "Gulp JavaScript",
        subtitle: "Algo esta mal en tu JavaScript!",
        sound: "Basso"
    })(error);
    //También podemos pintar el error en el terminal
    console.log(error.toString());
    this.emit("end");
};
{% endhighlight %}

El tema de los sonidos dependerá del sistema operativo. En OSX podemos ver los sonidos disponibles en preferencias del sistema > sonidos.

Ahora vamos a configurarlo para que lo muestre en la tarea. En este caso lo utilizo en gulp-uglify.

{% highlight JavaScript %}
gulp.task('compress', function() {
    return gulp.src(jsSrc)
        .pipe(uglify())
        .on("error", errorAlertJS)
        .pipe(gulp.dest(jsDist))
        .pipe(notify({
            message: 'JavaScript complete'
        }));

});
{% endhighlight %}

Muy importante añadir el mensaje de error ```.on("error", errorAlertJS)``` detrás del ```pipe```

Si cometemos algún error nos mostrará el mensaje como en la imagen

![JavaScript error](http://jorgeatgu.com/blog/img/2016/1/gulp-javascript-error.png)

En el terminal lo mostrará de la siguiente manera

{% highlight BASH %}
gulp-notify: [Gulp JavaScript] /path/to/trololololo: Unexpected token: punc (.)
Error in plugin 'gulp-uglify'
Message:
    /path/to/trololololo: Unexpected token: punc (.)
Details:
    fileName: /path/to/trololololo
    lineNumber: 15
{% endhighlight %}

Por el contrario si nos tenemos ningún error nos mostrará este mensaje

![Javascript sin error](http://jorgeatgu.com/blog/img/2016/1/gulp-javascript-complete.png)

Y el terminal lo mostrará de la siguiente manera

{% highlight BASH %}
gulp-notify: [Gulp notification] JavaScript complete
{% endhighlight %}

Una buena manera de mantenerte informado de las tareas que va ejecunto Gulp en el Terminal.