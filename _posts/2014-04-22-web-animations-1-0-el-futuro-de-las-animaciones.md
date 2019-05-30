---
title: 'Web Animations 1.0  ¿El futuro de las animaciones?'
author: Jorge Aznar
layout: post
permalink: /web-animations-1-0-el-futuro-de-las-animaciones/
comments: true
enclosure:
  - |
    |
        http://replay-progressive.ethz.ch/h264-medium.http/10.3930/ETHZ/AV-f8a1c756-a4de-4e64-98f5-c2c0b90bc9af/20120913_1100_HILE3_SVG_Danilo_2-dm.m4v
        281002993
        video/mp4

dsq_thread_id:
  - 2630027170
tags:
  - CSS3
  - SMIL
  - SVG
  - Web Animations
---
La unión hace la fuerza, y eso es lo que se pretende conseguir desde la W3C con Web Animations 1.0.

<!--more-->

El origen de todo esto lo podemos centrar en la cabezonería de una persona, <a href="http://brian.sol1.net/svg/" target="_blank">Brian Birtles</a> de Mozilla Japón, que desde hace un tiempo lleva proponiendo varias opciones para ir un paso adelante en el tema de las animaciones en la web ( <a href="http://www.w3.org/Graphics/SVG/WG/wiki/F2F/Seattle_2011/Agenda/Animations/Harmonisation" target="_blank">Seattle 2011</a> &#8211; <a href="http://brian.sol1.net/svg/pres/SVG%202%20Animation.html#(1)" target="_blank">Auckland 2011</a> y <a href="http://www.w3.org/Graphics/SVG/WG/wiki/F2F/Sydney_2012/Agenda/Animations/WebAnimations" target="_blank">Sydney 2012</a>). Según sus propias palabras las animaciones CSS3 y las animaciones SVG(SMIL :_( ) tienen varios problemas.

> On the Web today we have CSS Animation (including Transitions) and SVG Animation and they both have their problems. For example, CSS is so simple it doesn’t even support synchronization and SVG is pretty hairy when it comes to interval negotiation and syncbase timing—and it’s SVG-only. Most of all though, they’re completely separate.

La idea es reunir en una sola especificación las animaciones de CSS3 y Animation SVG. La imagen resume lo que quieren conseguir con Web Animations.

![web animations][1]

Por ahora tenemos el primer <a href="http://www.w3.org/TR/web-animations/" target="_blank">Working Draft publicado en Junio de 2013</a>, también el ultimo <a href="http://dev.w3.org/fxtf/web-animations/" target="_blank">editor Draft del 18 de abril de 2014</a>. Lo cual nos hace ver que esto esta muy pero que muy reciente.

La especificación se esta discutiendo y por ahora se esta implementando en Blink, Gecko esta trabajando en ello y por ahora podemos probar Web Animations con un polyfill de JS que ha creado la gente de <a href="polymer-project.org" target="_blank">Polymer</a>, para estar al día lo mejor es seguir todos los repositorios de Web-Animation-JS que hay en <a href="https://github.com/web-animations" target="_blank">Github</a>.

Mucho cuidado ya que todo va cambiando y quizás lo que funcione hoy ya no funcione el día que veas esto, así que quizás este ejemplo que voy a poner ahora no funcione dentro de un tiempo.

{% highlight HTML linenos %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 800">

<rect width="2000" height="800" fill="crimson"/>

<polygon id="uno" fill="#F0DBA5" points="948.742,46.109 923.149,90.439 897.556,46.109"/>

<polygon id="dos" fill="#E7C267" points="923.149,90.439 948.742,46.109 974.337,90.439"/>

<polygon id="tres" fill="#E1AF11" points="999.931,46.109 974.337,90.439 948.742,46.109"/>

<polygon id="cuatro" fill="#DEAC12" points="974.337,90.439 999.931,46.109 1025.523,90.439"/>

<polygon id="cinco" fill="#E1AF11" points="1051.117,46.109 1025.523,90.439 999.931,46.109"/>

<polygon id="seis" fill="#E7C36B" points="1025.523,90.439 1051.117,46.109 1076.712,90.439"/>

<polygon id="siete" fill="#F1DCA9" points="1102.306,46.109 1076.712,90.439 1051.117,46.109"/>

<polygon id="ocho" fill="#EDC44F" points="923.149,90.439 897.556,134.77 871.962,90.439"/>

<polygon id="nueve" fill="#E8BA2B" points="897.556,134.77 923.149,90.439 948.742,134.77"/>

<polygon id="diez" fill="#EEBE0F" points="974.337,90.439 948.742,134.77 923.149,90.439"/>

<polygon id="once" fill="#EAB90C" points="948.742,134.77 974.337,90.439 999.931,134.77"/>

<text id="doce" x="920" y="626" fill="white">Web Animations 1.0</text>

</svg>

<script>

            var tiempo = {direction: 'both', duration: 2, iterations: 2 };
            var animacion = new AnimationGroup ([

                new Animation(uno, [{transform: 'translateY(15px)', opacity: '.3'}, {transform: 'translateY(0px)', opacity: '1'}], tiempo),
                new Animation(doce, [{opacity: '.1', fill: 'white'}, {opacity: '1', fill: 'purple'}], tiempo),
                new Animation(dos, [{transform: 'rotate(-40deg)'}, {transform: 'rotate(53deg)'}], tiempo),
                new Animation(tres, [{transform: 'rotate(-30deg)'}, {transform: 'rotate(0deg)'}], tiempo),
                new Animation(cuatro, [{transform: 'rotate(53deg)'}, {transform: 'rotate(-40deg)'}], tiempo),
                new Animation(cinco,[{transform: 'rotate(0deg)'}, {transform: 'rotate(-30deg)'}], tiempo),
                new Animation(seis, [{transform: 'rotate(35deg)'}, {transform: 'rotate(-30deg)'}], tiempo),
                new Animation(siete, [{transform: 'rotate(0deg)'}, {transform: 'rotate(20deg)'}], tiempo),
                new Animation(ocho, [{transform: 'rotate(-110deg)'}, {transform: 'rotate(-90deg)'}], tiempo),
                new Animation(nueve, [{transform: 'rotate(-30deg)'}, {transform: 'rotate(35deg)'}], tiempo),
                new Animation(diez, [{transform: 'rotate(20deg)'}, {transform: 'rotate(0deg)'}], tiempo),
                new Animation(once, [{transform: 'rotate(-90deg)'}, {transform: 'rotate(-110deg)'}], tiempo)
            ], {iterations: Infinity});

            document.timeline.play(animacion);

</script>
{% endhighlight %}

<button class="boton-centrar">
  <a target="_blank" class="btn" href="http://jorgeatgu.com/ejemplos/webanim/webanim.html">EJEMPLO</a>
</button>

A continuación os dejo con el enlace de un vídeo donde <a href="http://replay-progressive.ethz.ch/h264-medium.http/10.3930/ETHZ/AV-f8a1c756-a4de-4e64-98f5-c2c0b90bc9af/20120913_1100_HILE3_SVG_Danilo_2-dm.m4v" target="_blank">Brian Birties y Alex Danilo presentan Web Animations 1.0</a>

Una presentación sobre Web Animations en la Linux Conference de 2014 en Australia

<iframe width="560" height="315" src="http://www.youtube.com/embed/F6gXkHM-gPU?list=PLmiuOcBMoxjfeNAuAAJEeLvc3TDqjaC1E" frameborder="0" allowfullscreen></iframe>

Una demo de Brian Birties

<iframe width="420" height="315" src="http://www.youtube.com/embed/VvNQNtIfXXI" frameborder="0" allowfullscreen></iframe>

La sección de <a href="http://www.polymer-project.org/platform/web-animations.html" target="_blank">Web Animations en Polymer</a>

Para estar al día sobre Web Animations os recomiendo que os suscribáis a la <a href="http://lists.w3.org/Archives/Public/public-fx/" target="_blank">lista de FX de la W3C</a>, a veces es un pelín tedioso y enrevesado pero así es la W3C.

También os dejo el blog de <a href="http://brian.sol1.net/svg/" target="_blank">Brian Birties</a>

Y recordad que el asunto esta verde, pero aunque este verde y nadie sepa si su futuro sera *recomendation* o *deprecated*, desde aquí seguiré informando.

 [1]: http://jorgeatgu.com/blog/img/2014/04/CSS-SVG-Web-Animations-500.png