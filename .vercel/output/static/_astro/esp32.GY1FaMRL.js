import{s as c,g as l}from"./_astro_assets.DV4wNV2R.js";import{c as u,r as v,m as g}from"./instance.MjLduAVP.js";import{d as m}from"./utils.DpFHxlYG.js";import"./astro/assets-service.Dt0krELq.js";import"./index.CTjT7uj6.js";const h={src:"/_astro/fotografia-de-una-placa-de-desarrollo-esp32.eAkRePbr.png",width:894,height:608,format:"png"},y={src:"/_astro/menu-preferences-de-arduino-ide.B1D8Exaa.png",width:1300,height:775,format:"png"},E={src:"/_astro/menu-boards-manager-de-arduino-ide.E0a8pK8y.png",width:1300,height:775,format:"png"},f={src:"/_astro/seleccionar-el-modelo-de-la-placa-el-puerto.Cbm8xwL9.png",width:1300,height:775,format:"png"},b={src:"/_astro/boton-upload-de-arduino-ide.DRVOygAY.png",width:41,height:40,format:"png"},x=async function(t){const n={};{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/articles/esp32/fotografia-de-una-placa-de-desarrollo-esp32\\.png[^"]*)"',"g");let a,e=0;for(;(a=i.exec(t))!==null;){const s="@/assets/articles/esp32/fotografia-de-una-placa-de-desarrollo-esp32.png_"+e,o=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:d,...r}=o;n[s]=await l({src:h,...r}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/articles/esp32/menu-preferences-de-arduino-ide\\.png[^"]*)"',"g");let a,e=0;for(;(a=i.exec(t))!==null;){const s="@/assets/articles/esp32/menu-preferences-de-arduino-ide.png_"+e,o=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:d,...r}=o;n[s]=await l({src:y,...r}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/articles/esp32/menu-boards-manager-de-arduino-ide\\.png[^"]*)"',"g");let a,e=0;for(;(a=i.exec(t))!==null;){const s="@/assets/articles/esp32/menu-boards-manager-de-arduino-ide.png_"+e,o=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:d,...r}=o;n[s]=await l({src:E,...r}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/articles/esp32/seleccionar-el-modelo-de-la-placa-el-puerto\\.png[^"]*)"',"g");let a,e=0;for(;(a=i.exec(t))!==null;){const s="@/assets/articles/esp32/seleccionar-el-modelo-de-la-placa-el-puerto.png_"+e,o=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:d,...r}=o;n[s]=await l({src:f,...r}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/articles/esp32/boton-upload-de-arduino-ide\\.png[^"]*)"',"g");let a,e=0;for(;(a=i.exec(t))!==null;){const s="@/assets/articles/esp32/boton-upload-de-arduino-ide.png_"+e,o=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:d,...r}=o;n[s]=await l({src:b,...r}),e++}}return n};async function C(t){return x(t).then(n=>t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(i,a)=>{const e=JSON.parse(a.replace(/&#x22;/g,'"')),s=e.src+"_"+e.index;n[s].srcSet&&n[s].srcSet.values.length>0&&(n[s].attributes.srcset=n[s].srcSet.attribute);const{index:o,...d}=n[s].attributes;return c({src:n[s].src,...d})}))}const p=await C(`<p>Hace tiempo que tengo un <strong>ESP32</strong> en casa, pero lo compré más por la curiosidad que por tener algo en mente con el que usarlo. Igualmente, siempre es divertido aprender cosas de IoT y electrónica, como programador es una forma de pasar de la abstracción del código a algo tangible y aun más incromprensible como lo es el <em>mundo real</em>. AHHH, el mundo real.</p>
<p>Como es de esperar, no tengo ni idea de estas cosas, pero os quiero transmitir un poco de lo que he aprendido por si os es útil.</p>
<h2 id="el-esp32">El ESP32</h2>
<h3 id="qué-es-el-esp32">¿Qué es el ESP32?</h3>
<p>El <strong>ESP32</strong> es una serie de <em>microcontroladores SoC</em> (system-on-chip) de bajo coste y bajo consumo energético con WIFI y Bluetooth modo dual integrados. Actualmente son creados y desarrollados por la empresa china <strong>Expressif Systems</strong>.</p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-info); --callout-color-dark: var(--im-callout-info);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="callout-title-inner">Información</div></div><div class="callout-content"><p>Un <strong>SoC</strong> es un circuito integrado que integra (valga a redundancia), la mayor parte de los componentes de un ordenador (CPU, memoria, GPU…). Además, pueden enviar y recibir señales <strong>digitales</strong> y <strong>analógicas</strong>, incluso señales de radio. La famosa serie de chips <strong>Apple Silicon</strong> son SoC basados (en su mayoría) en la arquitectura <strong>ARM</strong>.</p></div></div>
<p>Esta seria es la sucesora del <strong>ESP8266</strong>. Es mejor en todo y viene con Bluetooth integrado. El ESP32 cuesta un poco más, pero sigue siendo barato.</p>
<p>Este chip se ha vuelto famoso por su bajo costo (he encontrado estos chips hasta por un 1€ en AliexPress), gran potencia (superando al <strong>Arduino UNO</strong>), ser (en su mayoría) Dual-core y tener WIFI y Bluetooth integrados. Además, es compatible con <strong>Arduino IDE</strong>.</p>
<h3 id="algunas-especificaciones-del-esp32">Algunas especificaciones del ESP32</h3>
<p>Por si quereis detelles muy técnicos, os dejoe el <em>datasheet</em> oficial: <a href="https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf" rel="noopener noreferrer">https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. Aquí simplemente voy a nombrar las cosas que entiendo:</p>
<ul>
<li>ADCs (Conversores analógio-digital)</li>
<li>DACs (Conversores digital-analógio)</li>
<li>Bluetooth (clásico) y BLE (Bluetooth Low Energy)</li>
<li>Memoria:
<ul>
<li>ROM: 449 KB (para el arranque y las funciones básicas)</li>
<li>SRAM: 520 KB (para datos e instrucciones)</li>
</ul>
</li>
</ul>
<h3 id="la-serie-esp32">La serie ESP32</h3>
<p>El ESP32 es solo el chip, pero también hace referencia a toda la serie (o familia) de <strong>placas de desarrollo</strong> que implementan el chip ESP32. Programar directamente en el chip ESP32 es poco práctico para aprender, testear o prototipar. Por eso se utilizan las placas de desarrollo, que vienen con toda la circutería necesaria para usar el chip, como pines para conectar periféricos, un puerto para conectarlo al ordenador, una antena WIFI y etc etc. Además, otras placas pueden venir con cámaras y otro tipos de sensores integrados.</p>
<p>Debido a que hay muchas placas, es normal abrumarse un poco. La recomendable para principiantes es <strong>DOIT Esp32 DevKit v1</strong> (ESP-WROOM-32). Aunque, seguramente os valga cualquiera que se parezca a esto:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/articles/esp32/fotografia-de-una-placa-de-desarrollo-esp32.png&#x22;,&#x22;alt&#x22;:&#x22;Fotografía de una placa de desarrollo ESP32&#x22;,&#x22;index&#x22;:0}"></p>
<h2 id="cómo-programar-en-el-esp32">¿Cómo programar en el ESP32?</h2>
<p>Como ya mencioné antes, el ESP32 se puede programar con el Arduino IDE usando <strong>C++</strong> o <strong>Micropython</strong>. También se puede usar <strong>VSCode</strong>, pero me parece que lo más fácil es usar Arduino IDE tengas o no experiencia con Arduino.</p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-note); --callout-color-dark: var(--im-callout-note);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Nota</div></div><div class="callout-content"><p>Yo uso la distribución Linux <strong>Pop!_OS</strong> (no por nada, simplemente porque quería probar algo diferente a Ubuntu). Los pasos deberían ser los mismos para otras distribuciones basadas en Debian, pero si usas otro sistema operativo, te recomiendo ojear otros tutoriales, aunque aquí comento un error que solucioné y creo es común.</p></div></div>
<h3 id="instalar-arduino-ide">Instalar Arduino IDE</h3>
<p>Arduino IDE necesita JAVA y <code>pyserial</code>, así que lo primero es descargar ambos:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.tdcb7.css"><script type="module" src="/_astro/ec.8zarh.js"><\/script><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">apt</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">install</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">default-jre</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-y</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sudo apt install default-jre -y"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic"># si no se tiene pip instalado</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">apt</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">install</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">python3-pip</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-y</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#399EE6">python3</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-m</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">pip</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">install</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">pyserial</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sudo apt install python3-pip -ypython3 -m pip install pyserial"><div></div></button></div></figure></div>
<p>Ahora añade <code>export PATH="/home/imangelo/.local/bin:$PATH"</code> al archivo <code>~/.bashrc</code> y ejecuta <code>source ~/.bashrc</code> para aplicar los cambios.</p>
<p>Comprueba que todo haya funcionado correctamente:</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#399EE6">java</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">--version</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#399EE6">pip</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">list</span><span style="--0:#5C6166"> </span><span style="--0:#ED9366">|</span><span style="--0:#5C6166"> </span><span style="--0:#399EE6">grep</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">pyserial</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="java --versionpip list | grep pyserial"><div></div></button></div></figure></div>
<p>Desde aquí puedes instalar Arduino IDE en formato ZIP o AppImage: <a href="https://www.arduino.cc/en/software" rel="noopener noreferrer">https://www.arduino.cc/en/software<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>.</p>
<p>Yo prefiero AppImage. Descargando un icono del IDE y usando un paquete de npm que creé, configuro rápidamente un desktop shortcut:</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mkdir</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/opt/arduino-ide</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mv</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">~/Downloads/arduino-ide_x.x.x_Linux_64bit.AppImage</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/opt/arduino-ide</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mv</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">~/Downloads/arduino-ide-icon.png</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/opt/arduino-ide</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#399EE6">npx</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">create-desktop-shortcut</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">arduino-ide_x.x.x_Linux_64bit.AppImage</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-n</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"Arduino IDE"</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-i</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/opt/arduino-ide/arduino-ide-icon.png</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-c</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">Development</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sudo mkdir /opt/arduino-idesudo mv ~/Downloads/arduino-ide_x.x.x_Linux_64bit.AppImage /opt/arduino-idesudo mv ~/Downloads/arduino-ide-icon.png /opt/arduino-idenpx create-desktop-shortcut arduino-ide_x.x.x_Linux_64bit.AppImage -n &#x22;Arduino IDE&#x22; -i /opt/arduino-ide/arduino-ide-icon.png -c Development"><div></div></button></div></figure></div>
<h3 id="instalando-el-esp32-en-arduino-ide">Instalando el ESP32 en Arduino IDE</h3>
<p>Ahora sigue estos pasos para instalar el ESP32 en Arduino IDE:</p>
<ol>
<li>Ve te a <strong>Files > Preferences</strong> o ejecuta el comando <code>Ctrl + Comma</code>.</li>
<li>Copia y pega el siguiente URL en <strong>Additional Boards Manager URLs</strong>:
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5c6166">https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"><div></div></button></div></figure></div>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/articles/esp32/menu-preferences-de-arduino-ide.png&#x22;,&#x22;alt&#x22;:&#x22;Menú Preferences de Arduino IDE&#x22;,&#x22;index&#x22;:0}"></li>
<li>Ahora haz click en el icono <strong>Boards Manager</strong> en el panel de navegación izquierdo, busca <strong>esp32</strong> e instala <strong>esp32 by Expressif Systems</strong>:
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/articles/esp32/menu-boards-manager-de-arduino-ide.png&#x22;,&#x22;alt&#x22;:&#x22;Menú Boards Manager de Arduino IDE&#x22;,&#x22;index&#x22;:0}"></li>
<li>Después de instalarlo, reinicia Arduno IDE.</li>
</ol>
<p>Ahora, ve a <strong>Tools > Boards</strong> y comprueba que tengas disponible <strong>esp32</strong>.</p>
<h3 id="comprobar-la-instalación">Comprobar la instalación</h3>
<p>Para comprobar que todo ha ido bien, hay que subir un programa al ESP32. Para eso, lo primero es conectarlo por un cable USB (asegúrate de que este pueda transmitir datos). Ahora sigue estos pasos:</p>
<ol>
<li>Selecciona tu placa en el menu desplegable, al lado del check y la flecha, y haz click en <strong>Select other board and port…</strong></li>
<li>En <strong>BOARDS</strong>, busca el modelo de tu placa ESP32, en mi caso es <strong>ESP32 DEV MODULE</strong>. También hay que seleccionar el puerto:
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/articles/esp32/seleccionar-el-modelo-de-la-placa-el-puerto.png&#x22;,&#x22;alt&#x22;:&#x22;Seleccionar el modelo de la placa y el puerto&#x22;,&#x22;index&#x22;:0}"></li>
</ol>
<p>Dale a <strong>OK</strong> y pega el siguiente código en el editor:</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="cpp"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic">// PIN del LED integrado</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#FA8D3E">int</span><span style="--0:#5C6166"> LED </span><span style="--0:#A37ACC">2</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic">// es llamado una vez al principio</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#FA8D3E">void</span><span style="--0:#5C6166"> </span><span style="--0:#F2AE49">setup</span><span style="--0:#5C6166">() {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#787B8099;--0fs:italic">  </span></span><span style="--0:#787B8099;--0fs:italic">// establece el modo del PIN</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#F2AE49">pinMode</span><span style="--0:#5C6166">(LED</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> OUTPUT)</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic">// es llamado en bucle</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#FA8D3E">void</span><span style="--0:#5C6166"> </span><span style="--0:#F2AE49">loop</span><span style="--0:#5C6166">() {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#787B8099;--0fs:italic">  </span></span><span style="--0:#787B8099;--0fs:italic">// enciende el LED</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent">  </span><span style="--0:#F2AE49">digitalWrite</span><span style="--0:#5C6166">(LED</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> HIGH)</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#787B8099;--0fs:italic">  </span></span><span style="--0:#787B8099;--0fs:italic">// espera 1000 milisegundos</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent">  </span><span style="--0:#F2AE49">delay</span><span style="--0:#5C6166">(</span><span style="--0:#A37ACC">1000</span><span style="--0:#5C6166">)</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent"><span style="--0:#787B8099;--0fs:italic">  </span></span><span style="--0:#787B8099;--0fs:italic">// apaga el LED</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent">  </span><span style="--0:#F2AE49">digitalWrite</span><span style="--0:#5C6166">(LED</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> LOW)</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent"><span style="--0:#787B8099;--0fs:italic">  </span></span><span style="--0:#787B8099;--0fs:italic">// espera otros 1000 milisegundos</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent">  </span><span style="--0:#F2AE49">delay</span><span style="--0:#5C6166">(</span><span style="--0:#A37ACC">1000</span><span style="--0:#5C6166">)</span><span style="--0:#5C6166B3">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// PIN del LED integradoint LED 2;// es llamado una vez al principiovoid setup() {  // establece el modo del PIN  pinMode(LED, OUTPUT);}// es llamado en buclevoid loop() {  // enciende el LED  digitalWrite(LED, HIGH);  // espera 1000 milisegundos  delay(1000);  // apaga el LED  digitalWrite(LED, LOW);  // espera otros 1000 milisegundos  delay(1000);}"><div></div></button></div></figure></div>
<p>Dale al botón <strong>Upload</strong> para compilar programa y enviarlo al ESP32:
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/articles/esp32/boton-upload-de-arduino-ide.png&#x22;,&#x22;alt&#x22;:&#x22;Botón Upload de Arduino IDE&#x22;,&#x22;index&#x22;:0}"></p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-warning); --callout-color-dark: var(--im-callout-warning);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div><div class="callout-title-inner">Advertancia</div></div><div class="callout-content"><p>Si al intentar subir el programa te salta el error:</p><div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5c6166">A fatal error ocurred: Could not open /dev/ttyUSB0, the port doesn't exist</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="A fatal error ocurred: Could not open /dev/ttyUSB0, the port doesn&#x27;t exist"><div></div></button></div></figure></div><p>es porque no tienes permisos de lectura/escritura del puerto <code>/dev/ttyUSB0</code>.
Una forma de arreglarlo, aunque suene sorprendente, es darte esos mismos permisos necesarios:</p><div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">chmod</span><span style="--0:#5C6166"> </span><span style="--0:#A37ACC">666</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/dev/ttyXXXX</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sudo chmod 666 /dev/ttyXXXX"><div></div></button></div></figure></div><p>Pero esa no es realmente una solución, pues lo tienes que hacer cada vez que vuelvas a encender el ordenador. La verdadera solución es añadir tu usuario al grupo <code>dialout</code>:</p><div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic"># Comprueba si el grupo \`dialout\` tiene acceso al puerto</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#399EE6">ls</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-l</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/dev/tty/USB0</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#787B8099;--0fs:italic"># Añade tu usuario al grupo \`dialout\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#399EE6">sudo</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">usermod</span><span style="--0:#5C6166"> </span><span style="--0:#4CBF99">-aG</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">dialout</span><span style="--0:#5C6166"> $USER</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ls -l /dev/tty/USB0sudo usermod -aG dialout $USER"><div></div></button></div></figure></div></div></div>
<p>Ahora deberías ver cómo el LED integrado de tu placa se enciende y se apaga en intervalos de 1 segundo.</p>
<p>¡Y ya estaría! Ahora ya puedes empezar a desarrollar proyectos de IoT. En mi caso, voy a intentar crear un coche a control remoto por Bluetooth.</p>
<h2 id="fuentes">Fuentes</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Apple_silicon" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Apple_silicon<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a></li>
<li><a href="https://en.wikipedia.org/wiki/ESP32" rel="noopener noreferrer">https://en.wikipedia.org/wiki/ESP32<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a></li>
<li><a href="https://randomnerdtutorials.com/getting-started-with-esp32/" rel="noopener noreferrer">https://randomnerdtutorials.com/getting-started-with-esp32/<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a></li>
</ul>`),A={title:"Introducción a la placa de desarrollo ESP32",description:"Sobre la placa de desarrollo ESP32 y cómo programar en ella con el IDE de Arduino.",pubDate:"2024-11-10T00:00:00.000Z",category:"tutorial",tags:["esp32","iot"],isDraft:!1},w="/home/imangelo/Documents/01_Projects/imangelo.dev/src/content/articles/esp32.md",B=void 0;function q(){return`
Hace tiempo que tengo un **ESP32** en casa, pero lo compré más por la curiosidad que por tener algo en mente con el que usarlo. Igualmente, siempre es divertido aprender cosas de IoT y electrónica, como programador es una forma de pasar de la abstracción del código a algo tangible y aun más incromprensible como lo es el _mundo real_. AHHH, el mundo real.

Como es de esperar, no tengo ni idea de estas cosas, pero os quiero transmitir un poco de lo que he aprendido por si os es útil.

## El ESP32

### ¿Qué es el ESP32?

El **ESP32** es una serie de _microcontroladores SoC_ (system-on-chip) de bajo coste y bajo consumo energético con WIFI y Bluetooth modo dual integrados. Actualmente son creados y desarrollados por la empresa china **Expressif Systems**.

> [!info]
> Un **SoC** es un circuito integrado que integra (valga a redundancia), la mayor parte de los componentes de un ordenador (CPU, memoria, GPU...). Además, pueden enviar y recibir señales **digitales** y **analógicas**, incluso señales de radio. La famosa serie de chips **Apple Silicon** son SoC basados (en su mayoría) en la arquitectura **ARM**.

Esta seria es la sucesora del **ESP8266**. Es mejor en todo y viene con Bluetooth integrado. El ESP32 cuesta un poco más, pero sigue siendo barato.

Este chip se ha vuelto famoso por su bajo costo (he encontrado estos chips hasta por un 1€ en AliexPress), gran potencia (superando al **Arduino UNO**), ser (en su mayoría) Dual-core y tener WIFI y Bluetooth integrados. Además, es compatible con **Arduino IDE**.

### Algunas especificaciones del ESP32

Por si quereis detelles muy técnicos, os dejoe el _datasheet_ oficial: https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf. Aquí simplemente voy a nombrar las cosas que entiendo:

- ADCs (Conversores analógio-digital)
- DACs (Conversores digital-analógio)
- Bluetooth (clásico) y BLE (Bluetooth Low Energy)
- Memoria:
  - ROM: 449 KB (para el arranque y las funciones básicas)
  - SRAM: 520 KB (para datos e instrucciones)

### La serie ESP32

El ESP32 es solo el chip, pero también hace referencia a toda la serie (o familia) de **placas de desarrollo** que implementan el chip ESP32. Programar directamente en el chip ESP32 es poco práctico para aprender, testear o prototipar. Por eso se utilizan las placas de desarrollo, que vienen con toda la circutería necesaria para usar el chip, como pines para conectar periféricos, un puerto para conectarlo al ordenador, una antena WIFI y etc etc. Además, otras placas pueden venir con cámaras y otro tipos de sensores integrados.

Debido a que hay muchas placas, es normal abrumarse un poco. La recomendable para principiantes es **DOIT Esp32 DevKit v1** (ESP-WROOM-32). Aunque, seguramente os valga cualquiera que se parezca a esto:

![Fotografía de una placa de desarrollo ESP32](@/assets/articles/esp32/fotografia-de-una-placa-de-desarrollo-esp32.png)

## ¿Cómo programar en el ESP32?

Como ya mencioné antes, el ESP32 se puede programar con el Arduino IDE usando **C++** o **Micropython**. También se puede usar **VSCode**, pero me parece que lo más fácil es usar Arduino IDE tengas o no experiencia con Arduino.

> [!note]
> Yo uso la distribución Linux **Pop!\\_OS** (no por nada, simplemente porque quería probar algo diferente a Ubuntu). Los pasos deberían ser los mismos para otras distribuciones basadas en Debian, pero si usas otro sistema operativo, te recomiendo ojear otros tutoriales, aunque aquí comento un error que solucioné y creo es común.

### Instalar Arduino IDE

Arduino IDE necesita JAVA y \`pyserial\`, así que lo primero es descargar ambos:

\`\`\`bash
sudo apt install default-jre -y
\`\`\`

\`\`\`bash
# si no se tiene pip instalado
sudo apt install python3-pip -y

python3 -m pip install pyserial
\`\`\`

Ahora añade \`export PATH="/home/imangelo/.local/bin:$PATH"\` al archivo \`~/.bashrc\` y ejecuta \`source ~/.bashrc\` para aplicar los cambios.

Comprueba que todo haya funcionado correctamente:

\`\`\`bash
java --version

pip list | grep pyserial
\`\`\`

Desde aquí puedes instalar Arduino IDE en formato ZIP o AppImage: https://www.arduino.cc/en/software.

Yo prefiero AppImage. Descargando un icono del IDE y usando un paquete de npm que creé, configuro rápidamente un desktop shortcut:

\`\`\`bash
sudo mkdir /opt/arduino-ide

sudo mv ~/Downloads/arduino-ide_x.x.x_Linux_64bit.AppImage /opt/arduino-ide
sudo mv ~/Downloads/arduino-ide-icon.png /opt/arduino-ide

npx create-desktop-shortcut arduino-ide_x.x.x_Linux_64bit.AppImage -n "Arduino IDE" -i /opt/arduino-ide/arduino-ide-icon.png -c Development
\`\`\`

### Instalando el ESP32 en Arduino IDE

Ahora sigue estos pasos para instalar el ESP32 en Arduino IDE:

1. Ve te a **Files > Preferences** o ejecuta el comando \`Ctrl + Comma\`.
2. Copia y pega el siguiente URL en **Additional Boards Manager URLs**:
   \`\`\`
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   \`\`\`
   ![Menú Preferences de Arduino IDE](@/assets/articles/esp32/menu-preferences-de-arduino-ide.png)
3. Ahora haz click en el icono **Boards Manager** en el panel de navegación izquierdo, busca **esp32** e instala **esp32 by Expressif Systems**:
   ![Menú Boards Manager de Arduino IDE](@/assets/articles/esp32/menu-boards-manager-de-arduino-ide.png)
4. Después de instalarlo, reinicia Arduno IDE.

Ahora, ve a **Tools > Boards** y comprueba que tengas disponible **esp32**.

### Comprobar la instalación

Para comprobar que todo ha ido bien, hay que subir un programa al ESP32. Para eso, lo primero es conectarlo por un cable USB (asegúrate de que este pueda transmitir datos). Ahora sigue estos pasos:

1. Selecciona tu placa en el menu desplegable, al lado del check y la flecha, y haz click en **Select other board and port...**
2. En **BOARDS**, busca el modelo de tu placa ESP32, en mi caso es **ESP32 DEV MODULE**. También hay que seleccionar el puerto:
   ![Seleccionar el modelo de la placa y el puerto](@/assets/articles/esp32/seleccionar-el-modelo-de-la-placa-el-puerto.png)

Dale a **OK** y pega el siguiente código en el editor:

\`\`\`cpp
// PIN del LED integrado
int LED 2;

// es llamado una vez al principio
void setup() {
	// establece el modo del PIN
	pinMode(LED, OUTPUT);
}

// es llamado en bucle
void loop() {
	// enciende el LED
	digitalWrite(LED, HIGH);
	// espera 1000 milisegundos
	delay(1000);
	// apaga el LED
	digitalWrite(LED, LOW);
	// espera otros 1000 milisegundos
	delay(1000);
}
\`\`\`

Dale al botón **Upload** para compilar programa y enviarlo al ESP32:
![Botón Upload de Arduino IDE](@/assets/articles/esp32/boton-upload-de-arduino-ide.png)

> [!warning]
> Si al intentar subir el programa te salta el error:
>
> \`\`\`
> A fatal error ocurred: Could not open /dev/ttyUSB0, the port doesn't exist
> \`\`\`
>
> es porque no tienes permisos de lectura/escritura del puerto \`/dev/ttyUSB0\`.
> Una forma de arreglarlo, aunque suene sorprendente, es darte esos mismos permisos necesarios:
>
> \`\`\`bash
> sudo chmod 666 /dev/ttyXXXX
> \`\`\`
>
> Pero esa no es realmente una solución, pues lo tienes que hacer cada vez que vuelvas a encender el ordenador. La verdadera solución es añadir tu usuario al grupo \`dialout\`:
>
> \`\`\`bash
> # Comprueba si el grupo \`dialout\` tiene acceso al puerto
> ls -l /dev/tty/USB0
>
> # Añade tu usuario al grupo \`dialout\`
> sudo usermod -aG dialout $USER
> \`\`\`

Ahora deberías ver cómo el LED integrado de tu placa se enciende y se apaga en intervalos de 1 segundo.

¡Y ya estaría! Ahora ya puedes empezar a desarrollar proyectos de IoT. En mi caso, voy a intentar crear un coche a control remoto por Bluetooth.

## Fuentes

- https://en.wikipedia.org/wiki/Apple_silicon
- https://en.wikipedia.org/wiki/ESP32
- https://randomnerdtutorials.com/getting-started-with-esp32/
`}function k(){return p}function L(){return[{depth:2,slug:"el-esp32",text:"El ESP32"},{depth:3,slug:"qué-es-el-esp32",text:"¿Qué es el ESP32?"},{depth:3,slug:"algunas-especificaciones-del-esp32",text:"Algunas especificaciones del ESP32"},{depth:3,slug:"la-serie-esp32",text:"La serie ESP32"},{depth:2,slug:"cómo-programar-en-el-esp32",text:"¿Cómo programar en el ESP32?"},{depth:3,slug:"instalar-arduino-ide",text:"Instalar Arduino IDE"},{depth:3,slug:"instalando-el-esp32-en-arduino-ide",text:"Instalando el ESP32 en Arduino IDE"},{depth:3,slug:"comprobar-la-instalación",text:"Comprobar la instalación"},{depth:2,slug:"fuentes",text:"Fuentes"}]}const M=u((t,n,i)=>{const{layout:a,...e}=A;return e.file=w,e.url=B,v`${g()}${m(p)}`});export{M as Content,k as compiledContent,M as default,w as file,A as frontmatter,L as getHeadings,q as rawContent,B as url};
