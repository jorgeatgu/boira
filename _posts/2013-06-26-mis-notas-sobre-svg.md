---
title: 'Mis notas sobre SVG &#8211; Mouseover animate'
author: Jorge Aznar
layout: post
permalink: /mis-notas-sobre-svg/
comments: true
dsq_thread_id:
  - 2120876559
tags:
  - Diseño Gráfico
  - Diseño Web
  - SVG
---
Empiezo una nueva serie de entradas donde iré relatando los problemas que voy encontrando mientras utilizo **SVG**, y las soluciones a estos problemas. Lo llamare solución por llamarlo de alguna manera, ya que la solución a algunos problemas es directamente no utilizar ciertas cosas, y es que como viene siendo costumbre en este mundo nada funciona de la misma manera si lo vemos en Chrome, Safari, Firefox, Opera o IE.

<!--more-->

## **Mouseover en animate**

En el proceso de rediseño de mi web(si, estoy trabajando en una nueva versión) me decidí a incluir una animación en **SVG** que ocupara una buena parte de la cabecera, la idea era y es no tener que recurrir a **JavaScript** y conseguir todos los efectos con **SVG**, y para que la animación funcione poner todas y cada una de las animaciones en el **HTML**.

La parte principal de la animación consta de 288 polígonos a través de la etiqueta `polygon`, cada uno de ellos con sus respectivas animaciones a través de la etiqueta `animate`, cuando conseguí implementar todas las ideas que tenía para la animación me di cuenta de que aquello se me había ido completamente de las manos, la animación ocupaba mas o menos el 90% del HTML con un total de 1700 líneas, lo cual es una barbaridad y hace que el tamaño de un simple HTML alcance un peso de 158KB, así que me puse a buscar alguna solución para aquellas animaciones que eran iguales y se repetían continuamente en cada uno de los polígonos.

Si en lugar de tener un `animate `tenemos un `linearGradient `o un `filter `tenemos la etiqueta `defs` para almacenar los efectos, simplemente le colocamos un `id `y luego lo invocamos a través de la etiqueta `filter` o con el atributo `url`, para hacer lo mismo pero con las animaciones ya sea `animate `o `animateTransform`(no pongo `animateColor `ya que se ha desestimado para SVG 2) no disponemos de la etiqueta `defs `para almacenar las animaciones.

Como había dicho anteriormente tengo 288 polígonos, y muchos de ellos reciben la misma animación, asi que vamos a intentar ahorrar código. Lo primero es declarar al principio un `polygon `y dentro de las etiquetas cada una de nuestras animaciones a través de la etiqueta `animate`, luego lo invocamos con la etiqueta `use` y obtendremos un polygon con la mismas medidas y con todas las animaciones que tengamos declaradas, para mover de posicion el polygon nos bastara con utilizar las coordenadas `x `e `y` dentro de la etiqueta `use`, parece fácil ¿no? pues deberemos olvidarnos de esto si a nuestra animación tiene la orden de comenzar con `begin="mouseover"`, y es que los navegadores Chrome y Opera interpretan que estas declarando la animación sobre todos y cada uno de los polígonos, así que aunque tengamos declarados 288 `use `si me posiciono en el número 1 se va a activar inmediatamente la animación en los 287 restantes y yo lo que quiero es que la animación de cada `polygon `sea individual e independiente del resto. En cambio si probamos en Firefox si que se consigue el efecto deseado, es decir cada polygon es tratado de manera individual y solo se activaran las animaciones si nos posicionamos sobre uno de ellos. En Safari ni tan siquiera veremos los polígonos. Así que llegados a este punto si queremos conservar la animación deberemos declararla dentro de cada una de las etiquetas `use `o si optamos por declarar los `polygon `por separado pues dentro de su etiqueta correspondiente.

Aquí dejo el código por si alguien encuentra una solución, quizás este haciendo algo mal y si que se puede hacer : D!

{% highlight HTML linenos %}<svg class="svgfondo" version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" width="100%" height="100%"
      viewBox="0 0 2000 800"
      enable-background="new 0 0 2000 800"
      xml:space="preserve">

        <polygon id="animacion"
          fill="#000" points="948.742,46.109 923.149,90.439 897.556,46.109">
          <animate attributeName="fill" dur="8s"
          values="#121;#EEBE0F" repeatCount="1"
          begin="4s" fill="remove" />
          <animate attributeName="fill" dur="5s"
          values="#056158" repeatCount="1"
          begin="mouseover"  />
          <animateTransform  attributeName="transform"
          type="rotate" from="0 32 32" to="-360 32 32"
          dur="15s" repeatDur="5" begin="mouseover" />
        </polygon>

        <g>
          <use xlink:href="#animacion" x="100" y="60" />
        </g>
          <use xlink:href="#animacion" x="110" y="105" />
          <use xlink:href="#animacion" x="150" y="105" />
          <use xlink:href="#animacion" x="200" y="105" />
          <use xlink:href="#animacion" x="250" y="105" />
          <use xlink:href="#animacion" x="300" y="105" />

          <polygon fill="#000"
          points="974.337,90.439 948.742,134.77 923.149,90.439  ">
            <animate attributeName="fill"  dur="8s"
            values="#121;#EEBE0F" repeatCount="1"
            begin="4s" fill="freeze" />
            <animate attributeName="fill" dur="5s"
            values="#056158" repeatCount="1" begin="mouseover" />
            <animateTransform attributeName="transform"
            type="rotate" from="0 32 32" to="-360 32 32"
            dur="15s" repeatDur="5" begin="mouseover" />
          </polygon>
        </svg>{% endhighlight %}

Aquí un vídeo donde se ve lo que hace cada navegador, el orden de aparición es: Opera, Firefox, Chrome y Safari.

<iframe class="vine-embed" src="https://vine.co/v/huhihlUxgIA/embed/simple" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>

Parece ser que es un error de los navegadores que llevan webkit, aquí una entrada de stackoverflow hablando sobre los animate en Chrome.

<a href="http://stackoverflow.com/questions/13530894/chrome-svg-animate-tag" target="_blank">http://stackoverflow.com/questions/13530894/chrome-svg-animate-tag</a>

Y el post de bugs.webkit

<a href="https://bugs.webkit.org/show_bug.cgi?id=21371" target="_blank">https://bugs.webkit.org/show_bug.cgi?id=21371</a>

<a href="http://www.w3.org/Graphics/SVG/Test/20061213/svggen/animate-elem-34-t.svg" target="_blank">Y de regalo otro SVG(creado en 2003) que tan solo funciona en Firefox. </a>