---
title: SASS, Bourbon, Jekyll y Homebrew en El Capitan
author: Jorge Aznar
layout: post
permalink: /sass-bourbon-compass-el-capitan-osx/
comments: true
tags:
  - SASS
  - OSX
  - Jekyll
---

Como buen *early adopter* no tarde nada en instalar la nueva version de OSX llamada **El Capitan**. Todo iba bien hasta que decidi lanzar **SASS** desde mi Terminal(con iTerm2) y la terminal escupió: *command not found*. Buscando un poco me entere de que esta nueva version incluye *SIP(System Integrity Protection)* el cual no deja escribir en  **/System, /bin, /sbin and /usr**. Pero si que deja escribir en **/usr/local**. Así que vamos a volver a instalar las gemas de **SASS, Bourbon y Compass** en **/usr/local**. La solución la encontre en el repositorio de **SASS**.

{% highlight BASH %}
sudo gem install -n /usr/local/bin SASS
sudo gem install -n /usr/local/bin Bourbon
sudo gem install -n /usr/local/bin Compass
{% endhighlight %}

Mi querido **Jekyll** también ha tenido problemas. En el repositorio de **Jekyll** en **GitHub** nos dan una [pautas a seguir](https://github.com/chrisfinazzo/jekyll/blob/9c9481a8a99bd3bbee10bb9f9feca23f97b9a30d/site/_docs/troubleshooting.md)

Lo mismo pasa con **Homebrew**. En el repositorio de **Homebrew** también nos dan unas [pautas a seguir](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md#if-usrlocal-does-not-exist)

A disfrutar de Split View :)