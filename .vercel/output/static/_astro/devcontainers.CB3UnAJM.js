import{c as a,r as n,m as i}from"./instance.MjLduAVP.js";import{d}from"./utils.DpFHxlYG.js";import"./astro/assets-service.Dt0krELq.js";import"./index.CTjT7uj6.js";const s=`<h2 id="introducción">Introducción</h2>
<p>Hace un tiempo empecé a implementar Dev Containers a algunos proyectos. Aunque no soy un experto en Docker (ni en nada, realmente), me gustaría compartir un poco sobre lo que he aprendido.</p>
<p>Los Dev Containers son una tecnología que permiten desarrollar dentro de un contenedor. Sabiendo un poco de Docker, es posible ahorrar mucho tiempo y dolores de cabeza a la hora de tener que trasladar el entorno de trabajo a un nuevo ordenador o a un nuevo miembro del equipo.</p>
<p>Ya sabéis, eso de que hay que instalar x versión de node, que en Windows no funciona (siempre pasa algo en Windows), que hay que instalar x extensiones. En general, todas las variantes de <strong>“en mi máquina funciona”</strong>. Una pérdida de tiempo tremenda. Gracias a los contenedores, ahora podemos crear un entorno y replicarlo cuantas veces queramos sin esfuerzo.</p>
<p>En este artículo, iré poco a poco implementando los Dev Containers a un par de proyectos, y al final os compartiré algunos casos específicos que he tenido, los cuales tal vez os sean útiles :></p>
<p>Para los proyectos, os dejo el repositorio: <a href="https://github.com/michelangelo-valderrama/devcontainers-article" rel="noopener noreferrer">https://github.com/michelangelo-valderrama/devcontainers-article<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>.</p>
<h2 id="primer-proyecto-frontend-con-vite">Primer proyecto: Frontend con Vite</h2>
<p>Fácil, tenemos una web con Vite (por hacer un proyecto rápido, pero podría ser cualquier frontend con Astro, Angular…) y queremos implementar los Dev Containers. No hay ninguna necesidad más que tener un Linux (p. ej. Debian o Ubuntu) con Node, NPM, Git y alguna extensión útil como GitLens o Pretty TypeScript Errors (claro está, en caso de usar TypeScript).</p>
<p>Para implementar los Dev Containers, primero hay que instalar la extensión oficial <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" rel="noopener noreferrer">ms-vscode-remote.remote-containers<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a> y crear el archivo <code>devcontainer.json</code> en el directorio <code>.devcontainer</code>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.tdcb7.css"><script type="module" src="/_astro/ec.8zarh.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5c6166">.devcontainer/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">devcontainer.json</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#5c6166">public/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#5c6166">.gitignore</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=".devcontainer/  devcontainer.jsonpublic/.gitignore"><div></div></button></div></figure></div>
<p>Este será el archivo que buscará la extensión para saber que tenemos un Dev Container y crearlo. Si quisiéramos, podríamos tener más de uno:</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5c6166">.devcontainer/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">python-backend/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">    </span></span><span style="--0:#5c6166">devcontainer.json</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">react-frontend/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">    </span></span><span style="--0:#5c6166">devcontainer.json</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=".devcontainer/  python-backend/    devcontainer.json  react-frontend/    devcontainer.json"><div></div></button></div></figure></div>
<p>Ahora hay que configurar la creación del Dev Container en el <code>devcontainer.json</code>. Si gustáis de más detalles podéis leer la referencia oficial: <a href="https://containers.dev/implementors/json_reference/" rel="noopener noreferrer">https://containers.dev/implementors/json_reference/<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>.</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">.devcontainer/devcontainer.json</span></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5C6166">{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"name"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"vite-example"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"image"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"mcr.microsoft.com/devcontainers/javascript-node:22"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"customizations"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"vscode"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">      </span><span style="--0:#55B4D4">"extensions"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> [</span><span style="--0:#86B300">"eamodio.gitlens"</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"esbenp.prettier-vscode"</span><span style="--0:#5C6166">]</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">      </span><span style="--0:#55B4D4">"settings"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">        </span><span style="--0:#55B4D4">"editor.defaultFormatter"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"esbenp.prettier-vscode"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent">        </span><span style="--0:#55B4D4">"editor.formatOnSave"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#A37ACC">true</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent">        </span><span style="--0:#55B4D4">"editor.tabSize"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#A37ACC">2</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">    </span></span><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">}</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"forwardPorts"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> [</span><span style="--0:#A37ACC">5173</span><span style="--0:#5C6166">]</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"postCreateCommand"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"npm i &#x26;&#x26; npm run dev"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">// o yarn/pnpm install, pues la imagen también viene con yarn y pnpm.</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"remoteUser"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"node"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  &#x22;name&#x22;: &#x22;vite-example&#x22;,  &#x22;image&#x22;: &#x22;mcr.microsoft.com/devcontainers/javascript-node:22&#x22;,  &#x22;customizations&#x22;: {    &#x22;vscode&#x22;: {      &#x22;extensions&#x22;: [&#x22;eamodio.gitlens&#x22;, &#x22;esbenp.prettier-vscode&#x22;],      &#x22;settings&#x22;: {        &#x22;editor.defaultFormatter&#x22;: &#x22;esbenp.prettier-vscode&#x22;,        &#x22;editor.formatOnSave&#x22;: true,        &#x22;editor.tabSize&#x22;: 2      }    }  },  &#x22;forwardPorts&#x22;: [5173],  &#x22;postCreateCommand&#x22;: &#x22;npm i &#x26;&#x26; npm run dev&#x22;,  // o yarn/pnpm install, pues la imagen también viene con yarn y pnpm.  &#x22;remoteUser&#x22;: &#x22;node&#x22;}"><div></div></button></div></figure></div>

































<table><thead><tr><th>Opción</th><th>Descripción</th></tr></thead><tbody><tr><td><code>name</code></td><td>El nombre del Dev Container.</td></tr><tr><td><code>image</code></td><td>El nombre de una imagen de un registro de contenedores.</td></tr><tr><td><code>customization</code></td><td>Configuración de herramientas específicas, en este caso de VS Code.</td></tr><tr><td><code>forwardPorts</code></td><td>Crea una lista de puertos dentro del contenedor disponibles localmente.</td></tr><tr><td><code>postCreateCommand</code></td><td>Un <em>string</em> o lista de comandos que se ejecutan después de crearse el contenedor.</td></tr><tr><td><code>remoteUser</code></td><td>Sobrescribe el usuario que se ejecuta en el contenedor. Por defecto es el de <code>containerUser</code>, que a su vez es por defecto el usuario <code>root</code> o el de la instrucción <code>USER</code> del Dockerfile usado para crear la imagen<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.</td></tr></tbody></table>
<p>La imagen <code>mcr.microsoft.com/devcontainers/javascript-node:22</code> es oficial de Microsoft y es muy útil para proyectos de Node. Si queréis saber de más imágenes, os dejo el link a un repositorio: <a href="https://github.com/devcontainers/images/tree/main/src" rel="noopener noreferrer">https://github.com/devcontainers/images/tree/main/src<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>.</p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-info); --callout-color-dark: var(--im-callout-info);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="callout-title-inner">Información</div></div><div class="callout-content"><p>En mis proyectos con TypeScript, uso la imagen de JavaScript. Como ya mencioné, solo hay que añadir alguna extensión más.</p></div></div>
<p>Una vez hecho esto, al volver a abrir el proyecto aparecerá una alerta abajo a la derecha para re-abrirlo en un contenedor. Pero también se puede mediante el comando <strong><code>Dev Containers: Reopen in Container</code></strong> desde el <strong>Command Palette</strong> (<code>F1</code> o <code>Ctrl + Shift + P</code>).</p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-info); --callout-color-dark: var(--im-callout-info);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="callout-title-inner">Información</div></div><div class="callout-content"><p>Cuando cambiéis la configuración del Dev Container, debéis ejecutar el comando <code>Dev Container: Rebuild and Reopen in Container</code>. Y, en el caso de querer borrar algún Dev Container, ejecutar <code>Dev Container: Clean Up Dev Containers...</code></p></div></div>
<p>Después, al abrir la terminal, veréis que tiene una terminal con ZSH y Oh My ZSH (gracias a la imagen de Microsoft), y que se encuentra en el directorio <code>/workspaces/NOMBRE_DEL_DIRECTORIO_DEL_PROYETO</code>.</p>
<p>Ahora se podrá ejecutar <code>npm run dev</code> y, si todo ha ido bien, ver algo así:</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">VITE v5.4.2  ready in 123 ms</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">➜  Local:   http://localhost:5173/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">➜  Network: use --host to expose</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#5c6166">  </span></span><span style="--0:#5c6166">➜  press h + enter to show help</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  VITE v5.4.2  ready in 123 ms  ➜  Local:   http://localhost:5173/  ➜  Network: use --host to expose  ➜  press h + enter to show help"><div></div></button></div></figure></div>
<h3 id="problema-con-vite-y-los-dev-containers">Problema con Vite y los dev containers</h3>
<p>Si intentáis acceder a <code>localhost:5173</code>, notaréis que no carga. <a href="https://github.com/vitejs/vite/issues/16522" rel="noopener noreferrer">Esto es un problema un tanto extraño con Vite y los dev <span>containers<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>, pero en principio debería arreglarse añadiendo el argumento <code>--host</code>:</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">package.json</span></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5C6166">{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">//...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"scripts"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"dev"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"vite --host"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"build"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"vite build"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"preview"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"vite preview --host"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">//...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  //...  &#x22;scripts&#x22;: {    &#x22;dev&#x22;: &#x22;vite --host&#x22;,    &#x22;build&#x22;: &#x22;vite build&#x22;,    &#x22;preview&#x22;: &#x22;vite preview --host&#x22;  }  //...}"><div></div></button></div></figure></div>
<p>Si se ejecuta otra vez <code>npm run dev</code> y accedéis a <code>localhost:5173</code> desde el navegador, debería ver la web del proyecto.</p>
<h3 id="partir-de-un-dockerfile">Partir de un Dockerfile</h3>
<p>Si lo que se busca es una imagen más personalizada, se puede partir de la imagen de un Dockerfile:</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">.devcontainer/Dockerfile</span></figcaption><pre data-language="dockerfile"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#FA8D3E">FROM</span><span style="--0:#5C6166"> mcr.microsoft.com/devcontainers/javascript-node:22</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#FA8D3E">RUN</span><span style="--0:#5C6166"> apt-get update &#x26;&#x26; apt-get install git-flow -y \\</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">    </span></span><span style="--0:#5C6166">&#x26;&#x26; rm -rf /var/lib/apt/lists/*</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="FROM mcr.microsoft.com/devcontainers/javascript-node:22RUN apt-get update &#x26;&#x26; apt-get install git-flow -y \\    &#x26;&#x26; rm -rf /var/lib/apt/lists/*"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">.devcontainer/devcontainer.json</span></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5C6166">{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">// ...</span></div></div><div class="ec-line highlight del"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"image"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"mcr.microsoft.com/devcontainers/javascript-node:22"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"build"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"dockerfile"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"Dockerfile"</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">// ...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  // ...  &#x22;image&#x22;: &#x22;mcr.microsoft.com/devcontainers/javascript-node:22&#x22;,  &#x22;build&#x22;: {    &#x22;dockerfile&#x22;: &#x22;Dockerfile&#x22;  }  // ...}"><div></div></button></div></figure></div>
<p>En este Dockerfile, además, instalo Git Flow y elimino la caché para <a href="https://docs.docker.com/build/building/best-practices/#run" rel="noopener noreferrer">optimizar la <span>imagen<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a><sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup>.</p>
<h3 id="git">Git</h3>
<p>No hace falta hacer nada en especial para configurar Git en un Dev Container, por defecto VS Code se encarga y puedes seguir trabajando con normalidad.</p>
<h2 id="segundo-proyecto-backend-con-node-y-mongo">Segundo proyecto: Backend con Node y Mongo</h2>
<p>Cuando se tienen proyectos más complejos que necesitan una base de datos y un servidor, se necesitará a su vez gestionar más contenedores. Pero no hay problema porque los Dev Containers también soportan Docker Compose.</p>
<p>Con respecto al archivo <code>devcontainer.json</code>, solo hay algunas diferencias:</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">.devcontainer/devcontainer.json</span></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5C6166">{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"name"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"node-example"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"dockerComposeFile"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"compose.yml"</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic">// (1)</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"service"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"api"</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic">// (2)</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"workspaceFolder"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"/workspace"</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic">// (3)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"customizations"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"vscode"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">      </span><span style="--0:#55B4D4">"extensions"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> [</span><span style="--0:#86B300">"mongodb.mongodb-vscode"</span><span style="--0:#5C6166B3">,</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"Postman.postman-for-vscode"</span><span style="--0:#5C6166">]</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">    </span></span><span style="--0:#5C6166">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">}</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"forwardPorts"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> [</span><span style="--0:#A37ACC">3000</span><span style="--0:#5C6166">]</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"postCreateCommand"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"npm i &#x26;&#x26; npm run dev"</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"remoteUser"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"node"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  &#x22;name&#x22;: &#x22;node-example&#x22;,  &#x22;dockerComposeFile&#x22;: &#x22;compose.yml&#x22;, // (1)  &#x22;service&#x22;: &#x22;api&#x22;, // (2)  &#x22;workspaceFolder&#x22;: &#x22;/workspace&#x22;, // (3)  &#x22;customizations&#x22;: {    &#x22;vscode&#x22;: {      &#x22;extensions&#x22;: [&#x22;mongodb.mongodb-vscode&#x22;, &#x22;Postman.postman-for-vscode&#x22;]    }  },  &#x22;forwardPorts&#x22;: [3000],  &#x22;postCreateCommand&#x22;: &#x22;npm i &#x26;&#x26; npm run dev&#x22;,  &#x22;remoteUser&#x22;: &#x22;node&#x22;}"><div></div></button></div></figure></div>
<p>(1) En el atributo <code>dockerComposeFile</code>, indicamos la ruta del archivo Docker Compose <code>compose.yml</code> (o <code>docker-compose.yml</code>).</p>
<p>(2) Establecemos el servicio al que debe conectarse el Dev Container.</p>
<p>(3) Cuando se parte de una imagen o un Dockerfile, no hace falta indicar el <code>workspaceFolder</code> porque el Dev Container puede asumirlo. Sin embargo, cuando se usa un archivo Docker Compose, se necesita definir explícitamente.</p>
<p>Y este es el archivo <code>compose.yml</code>:</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">.devcontainer/compose.yml</span></figcaption><pre data-language="yaml"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#55B4D4">services</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">api</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">image</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mcr.microsoft.com/devcontainers/javascript-node:22</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">container_name</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">node-example-api</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">network_mode</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">service:db</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (1)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">volumes</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">..:/workspace:cached</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (2)</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">command</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/bin/sh -c "while sleep 1000; do :; done"</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (3)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">db</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">image</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mongo:7</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">container_name</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">node-example-db</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">ports</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">27017:27017</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (4)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">volumes</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">node-example-db-data:/data/db</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (5)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span style="--0:#55B4D4">volumes</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">node-example-db-data</span><span style="--0:#5C6166B3">:</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:  api:    image: mcr.microsoft.com/devcontainers/javascript-node:22    container_name: node-example-api    network_mode: service:db # (1)    volumes:      - ..:/workspace:cached # (2)    command: /bin/sh -c &#x22;while sleep 1000; do :; done&#x22; # (3)  db:    image: mongo:7    container_name: node-example-db    ports:      - 27017:27017 # (4)    volumes:      - node-example-db-data:/data/db # (5)volumes:  node-example-db-data:"><div></div></button></div></figure></div>
<p>(1) <code>network_mode</code> enlaza directamente la red del contenedor del <code>api</code> con la del <code>db</code>, esto permite acceder a la base de datos mediante el localhost.</p>
<p>(2) Monta el directorio del proyecto (<code>..</code>, porque este <code>compose.yaml</code> está en el directorio <code>.devcontainer</code>), en el directorio <code>/workspace</code> dentro del contenedor. La flag <code>:cached</code> solo afecta a MacOS y mejora el rendimiento en lecturas pesadas, a coste de alguna inconsistencia temporal entre el host y el contenedor.</p>
<p>(3) Este comando evita que el contenedor se detenga al terminar algún proceso pues es un proceso infinito.</p>
<p>(4) Mapeo el puerto de la base de datos para poder acceder a esta desde el host. No es necesario si se usa la extensión de MongoDB (<code>mongodb.mongodb-vscode</code>, que se instala automáticamente en el contenedor), pero en lo personal prefiero <a href="https://www.mongodb.com/products/tools/compass" rel="noopener noreferrer">Mongo <span>Compass<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. A gustos colores.</p>
<p>(5) Determino un volumen (gestionado por Docker) para persistir la base de datos. También se podría usar un bind mount, pero en este escenario no ofrece ninguna ventaja.</p>
<div dir="auto" class="callout" style="--callout-color-light: var(--im-callout-info); --callout-color-dark: var(--im-callout-info);"><div class="callout-title"><div class="callout-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="callout-title-inner">Información</div></div><div class="callout-content"><p>Si haciendo pruebas os quedan muchos volúmenes o imágenes basura, siempre podéis usar los comandos <code>docker volume prune</code> y <code>docker image prune</code>.</p></div></div>
<h2 id="algunos-casos-específicos">Algunos casos específicos</h2>
<p>Ahora, algunos casos específicos que me han ocurrido y quiero contaros.</p>
<h3 id="acceder-desde-la-ip">Acceder desde la IP</h3>
<p>A veces queremos poder comprobar el funcionamiento de una web desde el móvil, o necesitamos que una aplicación móvil haga peticiones al API en nuestro ordenador durante el desarrollo. En este caso, es mejor borrar <code>network_mode: service:db</code> y mapear el puerto del API:</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="yml"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#55B4D4">services</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">api</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">image</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">mcr.microsoft.com/devcontainers/javascript-node:22</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">container_name</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">node-example-api</span></div></div><div class="ec-line highlight del"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">network_mode</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">service:db</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">volumes</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">..:/workspace:cached</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">command</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">/bin/sh -c "while sleep 1000; do :; done"</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">ports</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">3000:3000</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">#...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:  api:    image: mcr.microsoft.com/devcontainers/javascript-node:22    container_name: node-example-api    network_mode: service:db    volumes:      - ..:/workspace:cached    command: /bin/sh -c &#x22;while sleep 1000; do :; done&#x22;    ports:      - 3000:3000  #..."><div></div></button></div></figure></div>
<h3 id="optimizar-el-node_modules">Optimizar el <code>node_modules</code></h3>
<p>Si el <code>npm i</code> va muy lento, a lo mejor se soluciona <a href="https://code.visualstudio.com/remote/advancedcontainers/improve-performance#_use-a-targeted-named-volume" rel="noopener noreferrer">optimizando el acceso al directorio <code>node_modules</code><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. Esto es porque en MacOs y en Windows, los contenedores se ejecutan en una Máquina Virtual<sup><a href="#user-content-fn-3" id="user-content-fnref-3" data-footnote-ref="" aria-describedby="footnote-label">3</a></sup>, lo que hace que los bind mounts no sean tan eficientes. Para solucionar esto solo hay que añadir la configuración pertinente:</p>
<p><strong>Dockerfile o imagen</strong></p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#86B300">"mounts"</span><span style="--0:#5C6166">: [</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#86B300">"source=\${localWorkspaceFolderBasename}-node_modules,target=\${containerWorkspaceFolder}/node_modules,type=volume"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#5C6166">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#86B300">"postCreateCommand"</span><span style="--0:#5C6166">: </span><span style="--0:#86B300">"sudo chown node node_modules"</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic">// necesario si no eres root</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;mounts&#x22;: [  &#x22;source=\${localWorkspaceFolderBasename}-node_modules,target=\${containerWorkspaceFolder}/node_modules,type=volume&#x22;],&#x22;postCreateCommand&#x22;: &#x22;sudo chown node node_modules&#x22; // necesario si no eres root"><div></div></button></div></figure></div>
<p><strong>Docker Compose</strong></p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="yaml"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#55B4D4">services</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">api</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#787B8099;--0fs:italic"># ...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">volumes</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">..:/workspace:cached</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">node-example-node_modules:/workspace/node_modules</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic"># ...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:  api:    # ...    volumes:      - ..:/workspace:cached      - node-example-node_modules:/workspace/node_modules  # ..."><div></div></button></div></figure></div>
<h3 id="instalar-herramientas">Instalar herramientas</h3>
<p>Si, por ejemplo, necesitas el CLI de AWS, en lugar de intentar configurarlo desde cero, puedes usar una <strong>Feature</strong> y gozarlo:</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="json"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#5C6166">{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">//...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"features"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">"ghcr.io/devcontainers/features/aws-cli:1"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">      </span><span style="--0:#55B4D4">"version"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> </span><span style="--0:#86B300">"latest"</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">    </span></span><span style="--0:#5C6166">} </span><span style="--0:#787B8099;--0fs:italic">// (1)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">}</span><span style="--0:#5C6166B3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">"mounts"</span><span style="--0:#5C6166B3">:</span><span style="--0:#5C6166"> [</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">    </span><span style="--0:#86B300">"source=\${localEnv:HOME}/.aws,target=/workspace/.aws,type=bind,readonly"</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">  </span></span><span style="--0:#5C6166">] </span><span style="--0:#787B8099;--0fs:italic">// (2)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">//...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#5C6166">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  //...  &#x22;features&#x22;: {    &#x22;ghcr.io/devcontainers/features/aws-cli:1&#x22;: {      &#x22;version&#x22;: &#x22;latest&#x22;    } // (1)  },  &#x22;mounts&#x22;: [    &#x22;source=\${localEnv:HOME}/.aws,target=/workspace/.aws,type=bind,readonly&#x22;  ] // (2)  //...}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="yml"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#55B4D4">services</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#55B4D4">api</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#55B4D4">environment</span><span style="--0:#5C6166B3">:</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">AWS_CONFIG_FILE=/workspace/.aws/config</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#5C6166">      </span></span><span style="--0:#5C6166">- </span><span style="--0:#86B300">AWS_SHARED_CREDENTIALS_FILE=/workspace/.aws/credentials</span><span style="--0:#5C6166"> </span><span style="--0:#787B8099;--0fs:italic"># (3)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#787B8099;--0fs:italic">#...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:  api:    environment:      - AWS_CONFIG_FILE=/workspace/.aws/config      - AWS_SHARED_CREDENTIALS_FILE=/workspace/.aws/credentials # (3)  #..."><div></div></button></div></figure></div>
<p>(1) Configuro <a href="https://github.com/devcontainers/features/tree/main/src/aws-cli" rel="noopener noreferrer">la feature de AWS <span>CLI<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. Aquí un repositorio con más features: <a href="https://github.com/devcontainers/features" rel="noopener noreferrer">https://github.com/devcontainers/features<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>.</p>
<p>(2) Configuro un bind mount de la carpeta <code>~/.aws/</code> (con los archivos <code>config</code> y <code>credentials</code>) a la de <code>/workspace/.aws/</code> en el contenedor, para mantener mi configuración y credenciales.</p>
<p>(3) Configuro las variables de entorno de AWS.</p>
<h2 id="despedida">Despedida</h2>
<p>Y esto es todo. Todavía no he usado los Dev Containers en muchos proyectos, pero quería contar algo de lo que he aprendido sobre ellos.</p>
<p>Hace tiempo que no escribo algo técnico, y lo echaba un poco en falta. Todavía no me veo volviendo a escribir un artículo de investigación, matemáticas o física; pero bueno, solo es cuestión de tiempo.</p>
<p>Personalmente, veo los Dev Containers algo muy útil, pero que chupan bastantes recursos del sistema. Creo que lo mejor sería usarlos en monorepos, pero no lo he probado todavía, así que nada.</p>
<p>Espero que este artículo haya sido útil, que te haya animado a probar esta nueva tecnología o que simplemente hayas aprendido algo nuevo, que nunca viene mal.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-1">
<p>Por temas de seguridad, <a href="https://code.visualstudio.com/remote/advancedcontainers/add-nonroot-user" rel="noopener noreferrer">es preferente usar un usuario <em>non-root</em> en el <span>contenedor<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-2">
<p>Es posible que vea como otros también usan <code>apt-get clean</code>, pero en este caso es innecesario pues <a href="https://github.com/moby/moby/blob/03e2923e42446dbb830c654d0eec323a0b4ef02a/contrib/mkimage/debootstrap#L82-L105" rel="noopener noreferrer">ya lo hacen las imágenes de Debian y <span>Ubuntu<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. <a href="#user-content-fnref-2" data-footnote-backref="" aria-label="Back to reference 2" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-3">
<p>Esto debido a que los <code>cgroups</code> y los <code>namespaces</code> solo están disponibles en Linux. Aunque sería posible crear contenedores usando los mecanismos de aislamiento nativos de cada sistema operativo, o por lo menos <a href="https://earthly.dev/blog/macos-native-containers/" rel="noopener noreferrer">hay alguna iniciativa al <span>respecto<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17 17 7"></path></svg></span></a>. <a href="#user-content-fnref-3" data-footnote-backref="" aria-label="Back to reference 3" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,o={title:"Sobre los dev containers: Una guía práctica",description:"Aprende cómo los Dev Containers optimizan el desarrollo de proyectos frontend y backend, creando entornos replicables y ahorrando tiempo en configuraciones complejas.",pubDate:"2024-09-29T00:00:00.000Z",category:"tutorial",tags:["docker","devcontainers"],isDraft:!1},t="/home/imangelo/Documents/01_Projects/imangelo.dev/src/content/articles/devcontainers.md",l=void 0;function y(){return`
## Introducción

Hace un tiempo empecé a implementar Dev Containers a algunos proyectos. Aunque no soy un experto en Docker (ni en nada, realmente), me gustaría compartir un poco sobre lo que he aprendido.

Los Dev Containers son una tecnología que permiten desarrollar dentro de un contenedor. Sabiendo un poco de Docker, es posible ahorrar mucho tiempo y dolores de cabeza a la hora de tener que trasladar el entorno de trabajo a un nuevo ordenador o a un nuevo miembro del equipo.

Ya sabéis, eso de que hay que instalar x versión de node, que en Windows no funciona (siempre pasa algo en Windows), que hay que instalar x extensiones. En general, todas las variantes de **"en mi máquina funciona"**. Una pérdida de tiempo tremenda. Gracias a los contenedores, ahora podemos crear un entorno y replicarlo cuantas veces queramos sin esfuerzo.

En este artículo, iré poco a poco implementando los Dev Containers a un par de proyectos, y al final os compartiré algunos casos específicos que he tenido, los cuales tal vez os sean útiles :>

Para los proyectos, os dejo el repositorio: https://github.com/michelangelo-valderrama/devcontainers-article.

## Primer proyecto: Frontend con Vite

Fácil, tenemos una web con Vite (por hacer un proyecto rápido, pero podría ser cualquier frontend con Astro, Angular…) y queremos implementar los Dev Containers. No hay ninguna necesidad más que tener un Linux (p. ej. Debian o Ubuntu) con Node, NPM, Git y alguna extensión útil como GitLens o Pretty TypeScript Errors (claro está, en caso de usar TypeScript).

Para implementar los Dev Containers, primero hay que instalar la extensión oficial [ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) y crear el archivo \`devcontainer.json\` en el directorio \`.devcontainer\`:

\`\`\`
.devcontainer/
	devcontainer.json
public/
.gitignore
\`\`\`

Este será el archivo que buscará la extensión para saber que tenemos un Dev Container y crearlo. Si quisiéramos, podríamos tener más de uno:

\`\`\`
.devcontainer/
	python-backend/
		devcontainer.json
	react-frontend/
		devcontainer.json
\`\`\`

Ahora hay que configurar la creación del Dev Container en el \`devcontainer.json\`. Si gustáis de más detalles podéis leer la referencia oficial: https://containers.dev/implementors/json_reference/.

\`\`\`json title=".devcontainer/devcontainer.json"
{
  "name": "vite-example",

  "image": "mcr.microsoft.com/devcontainers/javascript-node:22",

  "customizations": {
    "vscode": {
      "extensions": ["eamodio.gitlens", "esbenp.prettier-vscode"],
      "settings": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
        "editor.tabSize": 2
      }
    }
  },

  "forwardPorts": [5173],

  "postCreateCommand": "npm i && npm run dev",
  // o yarn/pnpm install, pues la imagen también viene con yarn y pnpm.

  "remoteUser": "node"
}
\`\`\`

| Opción              | Descripción                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`name\`              | El nombre del Dev Container.                                                                                                                                                                                             |
| \`image\`             | El nombre de una imagen de un registro de contenedores.                                                                                                                                                                  |
| \`customization\`     | Configuración de herramientas específicas, en este caso de VS Code.                                                                                                                                                      |
| \`forwardPorts\`      | Crea una lista de puertos dentro del contenedor disponibles localmente.                                                                                                                                                  |
| \`postCreateCommand\` | Un _string_ o lista de comandos que se ejecutan después de crearse el contenedor.                                                                                                                                        |
| \`remoteUser\`        | Sobrescribe el usuario que se ejecuta en el contenedor. Por defecto es el de \`containerUser\`, que a su vez es por defecto el usuario \`root\` o el de la instrucción \`USER\` del Dockerfile usado para crear la imagen[^1]. |

La imagen \`mcr.microsoft.com/devcontainers/javascript-node:22\` es oficial de Microsoft y es muy útil para proyectos de Node. Si queréis saber de más imágenes, os dejo el link a un repositorio: https://github.com/devcontainers/images/tree/main/src.

> [!info]
> En mis proyectos con TypeScript, uso la imagen de JavaScript. Como ya mencioné, solo hay que añadir alguna extensión más.

Una vez hecho esto, al volver a abrir el proyecto aparecerá una alerta abajo a la derecha para re-abrirlo en un contenedor. Pero también se puede mediante el comando **\`Dev Containers: Reopen in Container\`** desde el **Command Palette** (\`F1\` o \`Ctrl + Shift + P\`).

> [!info]
> Cuando cambiéis la configuración del Dev Container, debéis ejecutar el comando \`Dev Container: Rebuild and Reopen in Container\`. Y, en el caso de querer borrar algún Dev Container, ejecutar \`Dev Container: Clean Up Dev Containers...\`

Después, al abrir la terminal, veréis que tiene una terminal con ZSH y Oh My ZSH (gracias a la imagen de Microsoft), y que se encuentra en el directorio \`/workspaces/NOMBRE_DEL_DIRECTORIO_DEL_PROYETO\`.

Ahora se podrá ejecutar \`npm run dev\` y, si todo ha ido bien, ver algo así:

\`\`\`
  VITE v5.4.2  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
\`\`\`

### Problema con Vite y los dev containers

Si intentáis acceder a \`localhost:5173\`, notaréis que no carga. [Esto es un problema un tanto extraño con Vite y los dev containers](https://github.com/vitejs/vite/issues/16522), pero en principio debería arreglarse añadiendo el argumento \`--host\`:

\`\`\`json title="package.json" {4,6}
{
  //...
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host"
  }
  //...
}
\`\`\`

Si se ejecuta otra vez \`npm run dev\` y accedéis a \`localhost:5173\` desde el navegador, debería ver la web del proyecto.

### Partir de un Dockerfile

Si lo que se busca es una imagen más personalizada, se puede partir de la imagen de un Dockerfile:

\`\`\`dockerfile title=".devcontainer/Dockerfile"
FROM mcr.microsoft.com/devcontainers/javascript-node:22

RUN apt-get update && apt-get install git-flow -y \\
    && rm -rf /var/lib/apt/lists/*
\`\`\`

\`\`\`json title=".devcontainer/devcontainer.json" del={3} add={4-6}
{
  // ...
  "image": "mcr.microsoft.com/devcontainers/javascript-node:22",
  "build": {
    "dockerfile": "Dockerfile"
  }
  // ...
}
\`\`\`

En este Dockerfile, además, instalo Git Flow y elimino la caché para [optimizar la imagen](https://docs.docker.com/build/building/best-practices/#run)[^2].

### Git

No hace falta hacer nada en especial para configurar Git en un Dev Container, por defecto VS Code se encarga y puedes seguir trabajando con normalidad.

## Segundo proyecto: Backend con Node y Mongo

Cuando se tienen proyectos más complejos que necesitan una base de datos y un servidor, se necesitará a su vez gestionar más contenedores. Pero no hay problema porque los Dev Containers también soportan Docker Compose.

Con respecto al archivo \`devcontainer.json\`, solo hay algunas diferencias:

\`\`\`json title=".devcontainer/devcontainer.json" {4-6}
{
  "name": "node-example",

  "dockerComposeFile": "compose.yml", // (1)
  "service": "api", // (2)
  "workspaceFolder": "/workspace", // (3)

  "customizations": {
    "vscode": {
      "extensions": ["mongodb.mongodb-vscode", "Postman.postman-for-vscode"]
    }
  },
  "forwardPorts": [3000],
  "postCreateCommand": "npm i && npm run dev",
  "remoteUser": "node"
}
\`\`\`

(1) En el atributo \`dockerComposeFile\`, indicamos la ruta del archivo Docker Compose \`compose.yml\` (o \`docker-compose.yml\`).

(2) Establecemos el servicio al que debe conectarse el Dev Container.

(3) Cuando se parte de una imagen o un Dockerfile, no hace falta indicar el \`workspaceFolder\` porque el Dev Container puede asumirlo. Sin embargo, cuando se usa un archivo Docker Compose, se necesita definir explícitamente.

Y este es el archivo \`compose.yml\`:

\`\`\`yaml title=".devcontainer/compose.yml" {5,7,8,13,15}
services:
  api:
    image: mcr.microsoft.com/devcontainers/javascript-node:22
    container_name: node-example-api
    network_mode: service:db # (1)
    volumes:
      - ..:/workspace:cached # (2)
    command: /bin/sh -c "while sleep 1000; do :; done" # (3)
  db:
    image: mongo:7
    container_name: node-example-db
    ports:
      - 27017:27017 # (4)
    volumes:
      - node-example-db-data:/data/db # (5)

volumes:
  node-example-db-data:
\`\`\`

(1) \`network_mode\` enlaza directamente la red del contenedor del \`api\` con la del \`db\`, esto permite acceder a la base de datos mediante el localhost.

(2) Monta el directorio del proyecto (\`..\`, porque este \`compose.yaml\` está en el directorio \`.devcontainer\`), en el directorio \`/workspace\` dentro del contenedor. La flag \`:cached\` solo afecta a MacOS y mejora el rendimiento en lecturas pesadas, a coste de alguna inconsistencia temporal entre el host y el contenedor.

(3) Este comando evita que el contenedor se detenga al terminar algún proceso pues es un proceso infinito.

(4) Mapeo el puerto de la base de datos para poder acceder a esta desde el host. No es necesario si se usa la extensión de MongoDB (\`mongodb.mongodb-vscode\`, que se instala automáticamente en el contenedor), pero en lo personal prefiero [Mongo Compass](https://www.mongodb.com/products/tools/compass). A gustos colores.

(5) Determino un volumen (gestionado por Docker) para persistir la base de datos. También se podría usar un bind mount, pero en este escenario no ofrece ninguna ventaja.

> [!info]
> Si haciendo pruebas os quedan muchos volúmenes o imágenes basura, siempre podéis usar los comandos \`docker volume prune\` y \`docker image prune\`.

## Algunos casos específicos

Ahora, algunos casos específicos que me han ocurrido y quiero contaros.

### Acceder desde la IP

A veces queremos poder comprobar el funcionamiento de una web desde el móvil, o necesitamos que una aplicación móvil haga peticiones al API en nuestro ordenador durante el desarrollo. En este caso, es mejor borrar \`network_mode: service:db\` y mapear el puerto del API:

\`\`\`yml del={5} add={9,10}
services:
  api:
    image: mcr.microsoft.com/devcontainers/javascript-node:22
    container_name: node-example-api
    network_mode: service:db
    volumes:
      - ..:/workspace:cached
    command: /bin/sh -c "while sleep 1000; do :; done"
    ports:
      - 3000:3000
  #...
\`\`\`

### Optimizar el \`node_modules\`

Si el \`npm i\` va muy lento, a lo mejor se soluciona [optimizando el acceso al directorio \`node_modules\`](https://code.visualstudio.com/remote/advancedcontainers/improve-performance#_use-a-targeted-named-volume). Esto es porque en MacOs y en Windows, los contenedores se ejecutan en una Máquina Virtual[^3], lo que hace que los bind mounts no sean tan eficientes. Para solucionar esto solo hay que añadir la configuración pertinente:

**Dockerfile o imagen**

\`\`\`json
"mounts": [
  "source=\${localWorkspaceFolderBasename}-node_modules,target=\${containerWorkspaceFolder}/node_modules,type=volume"
],
"postCreateCommand": "sudo chown node node_modules" // necesario si no eres root
\`\`\`

**Docker Compose**

\`\`\`yaml add={6}
services:
  api:
	  # ...
    volumes:
      - ..:/workspace:cached
      - node-example-node_modules:/workspace/node_modules
  # ...
\`\`\`

### Instalar herramientas

Si, por ejemplo, necesitas el CLI de AWS, en lugar de intentar configurarlo desde cero, puedes usar una **Feature** y gozarlo:

\`\`\`json {4-6,8-10}
{
  //...
  "features": {
    "ghcr.io/devcontainers/features/aws-cli:1": {
      "version": "latest"
    } // (1)
  },
  "mounts": [
    "source=\${localEnv:HOME}/.aws,target=/workspace/.aws,type=bind,readonly"
  ] // (2)
  //...
}
\`\`\`

\`\`\`yml {3-5}
services:
  api:
    environment:
      - AWS_CONFIG_FILE=/workspace/.aws/config
      - AWS_SHARED_CREDENTIALS_FILE=/workspace/.aws/credentials # (3)
  #...
\`\`\`

(1) Configuro [la feature de AWS CLI](https://github.com/devcontainers/features/tree/main/src/aws-cli). Aquí un repositorio con más features: https://github.com/devcontainers/features.

(2) Configuro un bind mount de la carpeta \`~/.aws/\` (con los archivos \`config\` y \`credentials\`) a la de \`/workspace/.aws/\` en el contenedor, para mantener mi configuración y credenciales.

(3) Configuro las variables de entorno de AWS.

## Despedida

Y esto es todo. Todavía no he usado los Dev Containers en muchos proyectos, pero quería contar algo de lo que he aprendido sobre ellos.

Hace tiempo que no escribo algo técnico, y lo echaba un poco en falta. Todavía no me veo volviendo a escribir un artículo de investigación, matemáticas o física; pero bueno, solo es cuestión de tiempo.

Personalmente, veo los Dev Containers algo muy útil, pero que chupan bastantes recursos del sistema. Creo que lo mejor sería usarlos en monorepos, pero no lo he probado todavía, así que nada.

Espero que este artículo haya sido útil, que te haya animado a probar esta nueva tecnología o que simplemente hayas aprendido algo nuevo, que nunca viene mal.

[^1]: Por temas de seguridad, [es preferente usar un usuario _non-root_ en el contenedor](https://code.visualstudio.com/remote/advancedcontainers/add-nonroot-user).

[^2]: Es posible que vea como otros también usan \`apt-get clean\`, pero en este caso es innecesario pues [ya lo hacen las imágenes de Debian y Ubuntu](https://github.com/moby/moby/blob/03e2923e42446dbb830c654d0eec323a0b4ef02a/contrib/mkimage/debootstrap#L82-L105).

[^3]: Esto debido a que los \`cgroups\` y los \`namespaces\` solo están disponibles en Linux. Aunque sería posible crear contenedores usando los mecanismos de aislamiento nativos de cada sistema operativo, o por lo menos [hay alguna iniciativa al respecto](https://earthly.dev/blog/macos-native-containers/).
`}function f(){return s}function C(){return[{depth:2,slug:"introducción",text:"Introducción"},{depth:2,slug:"primer-proyecto-frontend-con-vite",text:"Primer proyecto: Frontend con Vite"},{depth:3,slug:"problema-con-vite-y-los-dev-containers",text:"Problema con Vite y los dev containers"},{depth:3,slug:"partir-de-un-dockerfile",text:"Partir de un Dockerfile"},{depth:3,slug:"git",text:"Git"},{depth:2,slug:"segundo-proyecto-backend-con-node-y-mongo",text:"Segundo proyecto: Backend con Node y Mongo"},{depth:2,slug:"algunos-casos-específicos",text:"Algunos casos específicos"},{depth:3,slug:"acceder-desde-la-ip",text:"Acceder desde la IP"},{depth:3,slug:"optimizar-el-node_modules",text:"Optimizar el node_modules"},{depth:3,slug:"instalar-herramientas",text:"Instalar herramientas"},{depth:2,slug:"despedida",text:"Despedida"},{depth:2,slug:"footnote-label",text:"Notas"}]}const b=a((c,r,p)=>{const{layout:v,...e}=o;return e.file=t,e.url=l,n`${i()}${d(s)}`});export{b as Content,f as compiledContent,b as default,t as file,o as frontmatter,C as getHeadings,y as rawContent,l as url};
