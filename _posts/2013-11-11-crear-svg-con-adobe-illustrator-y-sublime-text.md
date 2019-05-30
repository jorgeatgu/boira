---
title: Crear SVG con Adobe Illustrator y Sublime Text
author: Jorge Aznar
layout: post
permalink: /crear-svg-con-adobe-illustrator-y-sublime-text/
comments: true
dsq_thread_id:
  - 2100141429
tags:
  - Adobe Illustrator
  - SVG
  - tutorial
---
Cuando exportamos un SVG con Adobe Illustrator el siguiente paso suele ser olvidarnos de el, confiamos en Illustrator y no tocamos el código que genera a la hora de exportar, esto es un error ya que Illustrator como muchos programas genera código <a href="http://jorgeatgu.com/blog/optimizar-svg-illustrator/" target="_blank">que no sirve para nada</a> y en el caso de los SVG abusa de la etiqueta `path` para trazar multitud de objetos que se pueden conseguir con menos líneas de código.

<!--more-->

En este post vamos a ver como el propio Illustrator nos va a servir de guía para generar nuestro propio SVG, vamos a prescindir del paso de exportar desde Illustrator.

Para este caso en particular voy a utilizar el logo de Codepen, y es que el otro día buscando el logo de codepen para añadirlo a mi <a href="http://jorgeatgu.com/blog/cmyk-free-icons-social-media-vector-svg/" target="_blank">pack de iconos gratuitos</a> me encontre con este pen de Chris Coyier(uno de los fundadores de Codepen), a continuación podemos ver el código.

{% highlight HTML linenos %}
<svg class="logo"><g><path class="outer-ring" d="M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z"/><path class="inner-box" d="M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z"/></g></svg>
{% endhighlight %}

Vemos esto y seguramente la mayoría nos perdemos en el galimatías de coordenadas que tienen los dos `path` que ha generado Adobe Illustrator. Este código nos servirá de guía a la hora de rehacer el logo con menos código.

Ahora lo que vamos a hacer es crear un nuevo archivo en nuestro editor de texto, en mi caso utilizo Sublime Text 2. Vamos a la pestaña View > Syntax y seleccionamos XML

![syntax xml][1]

### Etiqueta SVG

Lo siguiente será añadir la etiqueta SVG, en width y height le indicamos el tamaño, en el ejemplo utilizaremos un documento de 800 x 600 pero podéis utilizar el tamaño que mas os convenga siempre que no sea mas pequeño que el propio logo.

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px"
	width="800px" height="600px"
	viewBox="0 0 800 600">
</svg>
{% endhighlight %}

Ahora copiamos el código correspondiente al logo de Codepen(el que esta al principio del post) y lo pegamos en nuestro editor de texto, el archivo debería de quedar así

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px"
	width="800px" height="600px"
	viewBox="0 0 800 600">

	<path fill="black" d="M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z"/>

    <path fill="black" d="M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z"/>

</svg>
{% endhighlight %}

Lo guardamos añadiéndole la extensión .svg `codepen.svg` y una vez guardado lo abrimos con Adobe Illustrator, también mantenemos abierto el mismo archivo en nuestro editor de código.

### Etiqueta Polygon

Vamos a empezar a crear de nuevo el logo, para ello en nuestro editor de código a continuación del código del logo de codepen abrimos y cerramos una etiqueta `g`, con un `transform="translate(150)` para mover hacia la derecha nuestro código, dentro de la etiqueta `g` añadimos la etiqueta `polygon`

{% highlight HTML linenos %}
<g transform="translate(150)">

    	<polygon points="" stroke="" stroke-width="" fill=""/>

</g>
{% endhighlight %}

En Adobe Illustrator nos vamos a Ventana y pinchamos en información, solo necesitaremos este inspector así que el resto lo podemos cerrar. Ahora seleccionamos la herramienta de selección directa y nos vamos a la esquina superior del logo y apuntamos las coordenadas X e Y que salen en el inspector de información.

![primer punto coordenadas][2]

Hacemos lo propio con las siguientes esquinas del logo y obtendremos las siguientes coordenadas

![segundo punto coordenadas][3]

Ahora añadiremos la siguiente información a la etiqueta `polygon` en el apartado `points`, también le diremos que no queremos relleno en el apartado `fill` y añadiremos el color de la línea en el apartado `stroke`, para conseguir que las esquinas seas redondeadas añadiremos `stroke-linejoin="round"`, por último añadimos el grosor de la línea en `stroke-width`.

Para poder visualizar nuestros avances en un navegador vamos a añadirle la etiqueta de `HTML5` al documento y lo guardamos como .html

En el siguiente código falta la parte del logo original de codepen, lo he suprimido para que no ocupara tanto espacio.

{% highlight HTML linenos %}
<!DOCTYPE html>
  <body>

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px"
    width="800px" height="600px"
    viewBox="0 0 800 600">

    <g transform="translate(150)">

        <polygon
        points="60.16,22.93 23.36,47 60.16,73.45 96.96,47"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        fill="none"/>

    </g>

</svg>

  </body>
</html>
{% endhighlight %}

El resultado que deberíamos ver en el navegador es el siguiente

![resultado final imagen codepen][4]

Ahora vamos a aprovechar el trabajo realizado hasta este punto, a nuestra etiqueta `polygon` le añadimos un `id="parte"` y abrimos una etiqueta `use` para aprovechar el primer polygon, a esta etiqueta le añadiremos un `transform="translate(0,26)"` para desplazar hacia abajo la figura.

El código debería de quedar de la siguiente manera

{% highlight HTML linenos %}
<polygon
        id="parte"
        points="60.16,22.93 23.36,47 60.16,73.45 96.96,47"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        fill="none"/>

        <use
        xlink:href="#parte"
        transform="translate(0,26)"
        />
{% endhighlight %}

También tenemos otra opción, la cúal es copiar y pegar toda la etiqueta `polygon` y sumar 26 a la coordenada `Y`, el resultado es el mismo.

{% highlight HTML linenos %}
<polygon
        points="60.16,22.93 23.36,47 60.16,73.45 96.96,47"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        fill="none"/>

        <polygon
        points="60.16,48.93 23.36,73 60.16,99.45 96.96,73"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        fill="none"/>
{% endhighlight %}

![use polygon svg][5]

### Etiqueta Line

Ya solo nos faltan las líneas y el círculo para terminar. Vamos a añadir cuatro etiquetas `line`

{% highlight HTML linenos %}
<line x1="" y1="" x2="" y2="" stroke="black" stroke-width="5"/>
<line x1="" y1="" x2="" y2="" stroke="black" stroke-width="5"/>
<line x1="" y1="" x2="" y2="" stroke="black" stroke-width="5"/>
<line x1="" y1="" x2="" y2="" stroke="black" stroke-width="5"/>
{% endhighlight %}

Y vamos a aprovechar las coordenadas de los `polygon` para situar las líneas.

Tanto `x1` como `x2` llevaran la coordenada de la `x` del primer `polygon`, en este caso `x1="60.16" x2="60.16"`
La `y1` llevara la coordenada de la `y`, en este caso `y1="22.93"`
La `x2` llevara la coordenada de la `y` mas la suma de 26, lo cual da el resultado de `y2="48.93"`

{% highlight HTML linenos %}
<line x1="60.16" y1="22.93" x2="60.16" y2="48.93" stroke="black" stroke-width="7"/>
{% endhighlight %}

Repetimos la operación con las tres líneas siguientes y nos dara este resultado:

{% highlight HTML linenos %}
<g transform="translate(150)">

        <polygon
        points="60.16,22.93 23.36,47 60.16,73.45 96.96,47"
        stroke="black"
        stroke-width="7"
        stroke-linejoin="round"
        fill="none"/>

        <polygon
        points="60.16,48.93 23.36,73 60.16,99.45 96.96,73"
        stroke="black"
        stroke-width="7"
        stroke-linejoin="round"
        fill="none"/>

        <line x1="60.16" y1="22.93" x2="60.16" y2="48.93" stroke="black" stroke-width="7"/>
        <line x1="23.36" y1="47" x2="23.36" y2="73" stroke="black" stroke-width="7"/>
        <line x1="60.16" y1="73" x2="60.16" y2="99.45" stroke="black" stroke-width="7"/>
        <line x1="96.96" y1="47" x2="96.96" y2="73" stroke="black" stroke-width="7"/>

    </g>
{% endhighlight %}

Las líneas quedaban un pelín delgadas así que he cambiado el `stroke-width="7"`

![sin circulo][6]

### Etiqueta Circle

Y ya lo último es añadir el círculo

{% highlight HTML linenos %}
<circle cx="60" cy="58" r="58" stroke="black" stroke-width="9" fill="none"/>
{% endhighlight %}

Resultado final

![resultado final][7]

El código completo

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px"
    width="800px" height="600px"
    viewBox="0 0 800 600">

    <path fill="black" d="M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z"/>

    <path fill="black" d="M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z"/>

    <g transform="translate(150,5)">

        <polygon
        points="60.16,22.93 23.36,47 60.16,73.45 96.96,47"
        stroke="black"
        stroke-width="7"
        stroke-linejoin="round"
        fill="none"/>

        <polygon
        points="60.16,48.93 23.36,73 60.16,99.45 96.96,73"
        stroke="black"
        stroke-width="7"
        stroke-linejoin="round"
        fill="none"/>

        <line x1="60.16" y1="22.93" x2="60.16" y2="48.93" stroke="black" stroke-width="7"/>
        <line x1="23.36" y1="47" x2="23.36" y2="73" stroke="black" stroke-width="7"/>
        <line x1="60.16" y1="73" x2="60.16" y2="99.45" stroke="black" stroke-width="7"/>
        <line x1="96.96" y1="47" x2="96.96" y2="73" stroke="black" stroke-width="7"/>

        <circle cx="60" cy="58" r="58" stroke="black" stroke-width="9" fill="none"/>

    </g>

</svg>
{% endhighlight %}

El original ocupa 3kB.
El nuevo ocupa 1kb.
Si en el nuevo usamos la etiqueta `use` ocupa 930 bytes.

En Codepen podéis ver un ejemplo parecido, está con otros tamaños y también he añadido una animación

{% codepen GtiBv jorgeatgu [result] [400] %}


 [1]: http://jorgeatgu.com/blog/img/2013/11/syntax.png
 [2]: http://jorgeatgu.com/blog/img/2013/11/primer-punto.png
 [3]: http://jorgeatgu.com/blog/img/2013/11/coordenadas.png
 [4]: http://jorgeatgu.com/blog/img/2013/11/visualizacion-1024x506.png
 [5]: http://jorgeatgu.com/blog/img/2013/11/use-o-polygon-1024x512.png
 [6]: http://jorgeatgu.com/blog/img/2013/11/sin-circulo-1024x507.png
 [7]: http://jorgeatgu.com/blog/img/2013/11/resultado-final-800x500.png