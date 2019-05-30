---
title: Animando path con SMIL SVG
author: Jorge Aznar
layout: post
permalink: /animando-path-con-smil-svg/
comments: true
dsq_thread_id:
  - 2100143633
tags:
  - SMIL
  - SVG
---
Acabo de hablar de <a href="http://jorgeatgu.com/blog/elemento-path-svg/" target="_blank">la etiqueta path</a> y todo el potencial que tiene, ahora que ya conocemos todos sus comandos vamos a animarlos con SMIL.

<!--more-->

Por desgracia si queremos animar trazados con SMIL tenemos que recurrir a `path`, ya que por ahora <a href="http://jorgeatgu.com/blog/animando-polyline-y-polygon-en-svg/" target="_blank">polygon y polyline no tienen soporte en WebKit</a>(Chrome, Safari y Opera).

Vamos a utilizar como ejemplo la animación que ilustra la cabecera de mi web. La cual esta disponible en CodePen.


{% codepen cpgDL jorgeatgu [result] [400] %}


Antes de comenzar he de decir que intentando animar mi logo me di cuenta de que WebKit no soporta la animación en polygon y polyline. Después de descubrir que no funcionaba en WebKit intente animarlo con `path` y mientras erraba en el concepto &#8211; intentaba animar el conjunto del poligono a la vez &#8211; recurrí a animar las coordenadas(x y) de`line` y la cosa funciono así que me olvide de `path`, ahora vamos a buscar el mismo resultado con `path`.

El camino equivocado con path

{% highlight HTML linenos %}<g id="logo" fill-opacity="1">
            <path fill="#C0392B" d="M585.6,116.3l41.3-33.8l22.7,62.2l9.9,29.3H616L585.6,116.3z">
                <animate attributeName="d" begin="0s" dur="5s"
                from="M631.658,174h20.092h4.703h3.047H616H631.658z"
                to="M585.6,116.3l41.3-33.8l22.7,62.2l9.9,29.3H616L585.6,116.3z"/>
            </path>
            <path fill="#16A085" d="M661.7,66.1l58.5,34.6L675.6,174h-47.7L661.7,66.1z">
                <animate attributeName="d" begin="0s" dur="5s"
                from="M640.079,174h33.971h1.55h-47.7H640.079z"
                to="M661.7,66.1l58.5,34.6L675.6,174h-47.7L661.7,66.1z"/>
            </path>
        </g>{% endhighlight %}

El camino correcto con line

{% highlight HTML linenos %}<g id="turquesa">
                <line fill="none" stroke="#c0392b" x1="616" y1="174" x2="616" y2="174">
                    <animate id="primeraT" attributeName="x1" from="616" to="585.6" begin="1s" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="174" to="116.3" begin="1s" dur="2s" fill="freeze"/>
                </line>
                <line fill="none" stroke="#c0392b" x1="585.6" y1="116.3" x2="585.6" y2="116.3">
                    <animate id="segundaT" attributeName="x1" from="585.6" to="626.9" begin="primeraT.end" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="116.3" to="82.5" begin="primeraT.end" dur="2s" fill="freeze"/>
                </line>
                <line fill="none" stroke="#c0392b" x1="626.9" y1="82.5" x2="626.9" y2="82.5">
                    <animate id="terceraT" attributeName="x1" from="626.9" to="659.5" begin="segundaT.end" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="82.5" to="174" begin="segundaT.end" dur="2s" fill="freeze"/>
                </line>
        </g>
        <g id="rojo">
                <line fill="none" stroke="#16a085" x1="627.9" y1="174" x2="627.9" y2="174">
                    <animate id="primeraR" attributeName="x1" from="627.9" to="661.7" begin="1s" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="174" to="66.1" begin="1s" dur="2s" fill="freeze"/>
                </line>
                <line fill="none" stroke="#16a085" x1="661.7" y1="66.1" x2="661.7" y2="66.1">
                    <animate id="segundaR" attributeName="x1" from="661.7" to="719" begin="primeraR.end" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="66.1" to="102" begin="primeraR.end" dur="2s" fill="freeze"/>
                </line>
                <line fill="none" stroke="#16a085" x1="719" y1="102" x2="719" y2="102">
                    <animate id="terceraR" attributeName="x1" from="719" to="675.6" begin="segundaR.end" dur="2s" fill="freeze"/>
                    <animate attributeName="y1" from="102" to="174" begin="segundaR.end" dur="2s" fill="freeze"/>
                </line>
        </g>{% endhighlight %}

Como se puede observar la animación con `line` genera mucho mas código. Vamos a intentar crear la misma animación con menos código gracias a lo aprendido con <a href="http://jorgeatgu.com/blog/elemento-path-svg/" target="_blank">elemento path en SVG</a>

Lo primero, vamos a utilizar el código del logo como guía para crear el path y su animación. Vamos primero con el rojo.

{% highlight HTML linenos %}<polygon id="rojo" fill="#C0392B" points="585.6,116.3 626.9,82.5 659.5,174 616,174"/>{% endhighlight %}

Por si alguien no esta acostumbrado a descifrar las coordenadas vamos con una imagen y también le recomiendo la lectura de <a href="http://jorgeatgu.com/blog/crear-svg-con-adobe-illustrator-y-sublime-text/" target="_blank">Crear SVG con Adobe Illustrator y Sublime Text</a>.

![coordenadas svg][1]

La primera corresponde con 585.6,116.3<br/>
La segunda corresponde con 626.9,82.5<br/>
La tercera corresponde con 659.5,174<br/>
La cuarta corresponde con 616,174<br/>

Con estas coordenadas vamos a empezar a crear el `path`. Lo primero la etiqueta `path fill="none" stroke="#C0392B"`. Sin relleno y con el borde de color &#8220;rojo-granate-loquemuestretumonitor&#8221;.

Ahora vamos a empezar a animarlo, dentro de `path` colocamos la etiqueta `animate attributeName="d" begin="0s" dur="5s" values="" fill="freeze"`. La animación comenzara nada mas cargar, durara cinco segundos y el efecto será permanente, para que el efecto desaparezca tendríamos que sustituir *freeze* por *remove*.

Vamos a ver el código completo y luego la explicación de los `values`.

{% highlight HTML linenos %}<path id="trazando" fill="none" stroke="#C0392B">
      <animate attributeName="d" begin="0s" dur="5s"
      values="
      M616,174 L616,174 L616,174 L616,174;
      M616,174 L585.6,116.3 L585.6,116.3 L585.6,116.3;
      M616,174 L585.6,116.3 L626.9,82.5 L626.9,82.5;
      M616,174 L585.6,116.3 L626.9,82.5 L659.5,174;
      M616,174 L585.6,116.3 L626.9,82.5 L659.5,174z;"
      fill="freeze"/>
  </path>{% endhighlight %}

La primera línea de *values* `M616,174 L616,174 L616,174 L616,174;`, iniciamos el trazado con la creación de un punto con M616,174, los siguiente valores L616,174 estarán en la misma posición esperando a que llegue su turno.

La segunda línea de *values* `M616,174 L585.6,116.3 L585.6,116.3 L585.6,116.3;`, el trazado sigue con su punto de partida con M616,174, ahora los valores progresan hasta L585.6,116.3.

La tercera línea de *values* `M616,174 L585.6,116.3 L626.9,82.5 L626.9,82.5;`, el primer(M616,174) y segundo valor(L585.6,116.3) mantienen su posición, el tercero y el cuarto progresan hasta L626.9,82.5.

La cuarta línea de *values* ` M616,174 L585.6,116.3 L626.9,82.5 L659.5,174;`, tanto el primer(M616,174) como segundo valor(L585.6,116.3) y tercer valor(L626.9,82.5) mantienen su posición, y el último progresa hasta L659.5,174.

La última línea es una repetición de la cuarta con el único añadido de la letra z al último valor para así cerrar el trazado.

![svg coordenadas][2]

Para colorear el `path` añadimos el siguiente código, simplemente creamos el `path` entero pero le decimos que tenga opacidad 0 y que en el momento que la animación del trazado finalice la opacidad del `path` pase de 0 a 1.

{% highlight HTML linenos %}<path fill-opacity="0" fill="#C0392B" d="M616,174 L585.6,116.3 L626.9,82.5 L659.5,174z">
    <animate attributeName="fill-opacity" attributeType="CSS" from="0" to="1" begin="trazando.end-0.2s" dur="0.1s" fill="freeze"/>
  </path>{% endhighlight %}

Por último un ejemplo con todos los pasos que hemos ido dando hasta llegar a completar la animación.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animatepath/animatepathrojo.html">VER EJEMPLO!</a>
</button>

Vamos con la otra parte del logo.

{% highlight HTML linenos %}<polygon id="turquesa" fill="#16A085" points="661.7,66.1 720.2,100.7 675.6,174 627.9,174"/>{% endhighlight %}

Vamos a seguir el mismo método, vamos a ver el código completo y luego la explicación de los `values`.

{% highlight HTML linenos %}<path id="trazandoturquesa" fill="none" stroke="#16A085">
      <animate attributeName="d" begin="0s" dur="5s"
      values="
      M627.9,174 L627.9,174 L627.9,174 L627.9,174;
      M627.9,174 L661.7,66.1 L661.7,66.1 L661.7,66.1;
      M627.9,174 L661.7,66.1 L720.2,100.7 L720.2,100.7;
      M627.9,174 L661.7,66.1 L720.2,100.7 L675.6,174;
      M627.9,174 L661.7,66.1 L720.2,100.7 L675.6,174z;"
      fill="freeze"/>
  </path>{% endhighlight %}

La primera línea de *values* `M627.9,174 L627.9,174 L627.9,174 L627.9,174;`, iniciamos el trazado con la creación de un punto con >M627.9,174, los siguiente valores L627.9,174 estarán en la misma posición esperando a que llegue su turno.

La segunda línea de *values* `M627.9,174 L661.7,66.1 L661.7,66.1 L661.7,66.1;`, el trazado sigue con su punto de partida con M627.9,174, ahora los valores progresan hasta L661.7,66.1.

La tercera línea de *values* `M627.9,174 L661.7,66.1 L720.2,100.7 L720.2,100.7;`, el primer(M627.9,174) y segundo valor(L661.7,66.1) mantienen su posición, el tercero y el cuarto progresan hasta L720.2,100.7.

La cuarta línea de *values* ` M627.9,174 L661.7,66.1 L720.2,100.7 L675.6,174;`, tanto el primer(M627.9,174) como segundo valor(L661.7,66.1) y tercer valor(L720.2,100.7) mantienen su posición, y el último progresa hasta L675.6,174.

La última línea es una repetición de la cuarta con el único añadido de la letra z al último valor para así cerrar el trazado.

![coordenadas svg turquesa][3]

Para colorear el `path` añadimos el siguiente código, simplemente creamos el `path` entero pero le decimos que tenga opacidad 0 y que en el momento que la animación del trazado finalice la opacidad del `path` pase de 0 a 1.

{% highlight HTML linenos %}<path fill-opacity="0" fill="#16A085" d="M627.9,174 L661.7,66.1 L720.2,100.7 L675.6,174z">
    <animate attributeName="fill-opacity" attributeType="CSS" from="0" to="1" begin="turquesa.end-0.2s" dur="0.1s" fill="freeze"/>
  </path>{% endhighlight %}

Por último un ejemplo con todos los pasos que hemos ido dando hasta llegar a completar la animación.

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/animatepath/animatepathturquesa.html">VER EJEMPLO!</a>
</div>

Y hasta aquí.

 [1]: http://jorgeatgu.com/blog/img/2013/12/coordenadas-800x453.png
 [2]: http://jorgeatgu.com/blog/img/2013/12/coordenadasnumericas-1024x550.png
 [3]: http://jorgeatgu.com/blog/img/2013/12/turquesa-coordenadas-1024x441.png