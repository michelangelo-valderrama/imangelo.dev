const e="como-hacer-un-videojuego-con-pico-8.md",n="articles",a="como-hacer-un-videojuego-con-pico-8",o=`
## 1. Introducción

**PICO-8** es un motor de videojuegos relativamente conocido creado por Joseph White, aka _zep_. Con PICO-8, Joseph quería crear una consola con la que poder jugar videojuegos sencillos y a la vez poder desarrollarlos en la misma consola, como en una Commodore 64. Buscaba que fuera fácil de manejar, simple y, sobre todo, autosuficiente: que contenga todo lo necesario para desarrollar un videojuego sin necesidad de usar programas externos. Así nació el concepto de _fantasy console_, que vendría a ser un emulador de una consola que no
existe, con todas las limitaciones que podría tener. Debido al minimaslismo y su potencial, PICO-8 se volvió muy usado en Game Jams. Puede entrar a su [página oficial](https://www.lexaloffle.com/pico-8.php) y jugar algunos videojuegos hechos por la comunidad (figura 1).

:::img-fig
![Figura 1: Screenshot de Poom](@/assets/articles/como-hacer-un-videojuego-con-pico-8/screenshot-de-poom.png)(width:384)
:::

Lo que nos interesa de todo esto es que, el año pasado, Joseph publicó una versión de PICO-8 totalmente gratuita que funciona en la web, que es con la que voy a trabajar durante todo este artículo.

Para hacer un videojuego se necesitan conocimientos en diversas materias, pero aquí solo nos centraremos en la programación. Si no ha programado nada en su vida, no se preocupe pues haré una breve y rápida introducción. No indagaré en cuestiones muy técnicas y me centraré principalmente en lo que se vaya usar para el juego que se planea desarrollar al final de este artículo. Por lo pronto, lo único que tiene que saber es que va a programar en Lua.

## 2. Fundamentos de Programación

Entre al siguiente enlace: <https://www.pico-8-edu.com>. Al principio solo verá unas letras blancas sobre un fondo negro (figura 2), está en el **Modo Comando**. Si escribe \`help\` verá una lista de comandos y, abajo del todo, verá que dice que presione \`ESC\` para cambiar al **Modo Editor**. Si hace lo que se dice verá una pantalla tal y como se muestra en la figura 3. También verá diferentes pestañas, en la que está usted ahora mismo es el **Editor de Código**.

:::img-fig
![Figura 2: Terminal de PICO-8](@/assets/articles/como-hacer-un-videojuego-con-pico-8/terminal-pico8.png)(width:384)
:::

:::img-fig
![Figura 3: Editor de código](@/assets/articles/como-hacer-un-videojuego-con-pico-8/editor-de-codigo.png)(width:384)
:::

### 2.1. Funciones y tipos de datos

A continuación, escriba lo siguiente (figura 4):

\`\`\`lua
print("hello, world!")
\`\`\`

No utilice mayúsculas, el tipo de fuente de PICO-8 por defecto solo utiliza las minúsculas para las letras, en cambio las mayúsculas están reservadas para otros caracteres especiales. Por ahora, presione \`ESC\`, escriba \`run\` en la línea de comandos y presiones la tecla \`ENTER\`. Tendría que ver algo como se muestra en la figura 5, si es así, ¡felicidades!, ahora puede presumir oficialmente de haber programado algo, sino es así revise si ha seguido bien todos lo pasos.

:::img-fig
![Figura 4: Hello, world!](@/assets/articles/como-hacer-un-videojuego-con-pico-8/hola-mundo.png)(width:384)
:::

:::img-fig
![Figura 5: Ejecutar un programa](@/assets/articles/como-hacer-un-videojuego-con-pico-8/ejecutar-programa.png)(width:384)
:::

> [!note]
> A partir de ahora, en los bloques de código si al final del todo aparece \`> run\` y después le siguen otras lineas significará que se ha ejecutado el programa y en las líneas se mostrará lo que tendría que salirle en pantalla.

A lo mejor se está preguntando: ¿Qué es lo que acaba de pasar? Para ello necesita saber que en programación es fundamental el concepto de _función_. Puede que le hayan venido flashbacks de sus clases de matemáticas, pero no tema, no necesita saber exactamente que es una función en matemáticas para entender estas. En programación, una función es una sección de código dedicado ha realizar cierta tarea (o función), estas reciben parámetros y retornan valores. Puede reconer funciones facilmente pues siempre llevan paréntesis. Lo que hizo hace un momento fue llamar a la función \`print\`, le pasó un parámetro, \`hello, world!\`, y, cuando el programa fue ejecutado (\`> run\`), esta función desempeñó el papel por el cual fue creada: imprimir en pantalla lo que le pasen por parámetro.

Notese que el parámetro que recibe \`print\` va entre comillas. Si escribe \`print(hello, world!)\` y ejecuta el programa, verá que le sale el siguiente error:

\`\`\`ansi
\x1B[38;5;175msyntax error line 1 (tab 0)\x1B[0m
print(hello, world!)
\x1B[2m')' expected near '!'\x1B[0m
\`\`\`

En los lenguajes de programación hay diferentes _tipos de datos_, uno de ellos son los \`string\` —una manera _fancy_ de llamar a los textos de toda la vida—. Además de los \`string\`, existen los datos de tipo \`int\` —de _integer_— que son los números enteros (..., -2, -1, 0, 1, 2,...), y los de tipo \`float\` —de coma flotante— que son los números con decimales. El asunto es que los lenguajes de programación distinguen los datos de tipo \`string\` gracias a las comillas, así saben que eso es un bloque de texto y lo interpretan como tal.

Ahora que conoce diferentes tipos de datos, unos ejemplos de como operar con cada uno de ellos. Escriba lo siguiente:

\`\`\`lua
print("hello, world!")
print(2 + 3)
print(2 / 3)
print(2 * 3)
print(2 ^ 3)
print(2 % 3)
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
hello, world!
5
0.6667
6
8
2
\`\`\`

Los **operadores** son los símbolos que realizan operaciones matemáticas: la suma, la resta, la división, la multiplicación y la exponenciación; el último operador puede parecer un poco misterioso pero simplemente es el resto de dividir 2 por 3.

Ahora escriba:

\`\`\`lua
print((2 - 3) * 2)
--(int - int) * int

print((2 + 2) ^ 3 .. " es de tipo int")
--(int + int) ^ int + string
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
-2
64 es de tipo int
\`\`\`

Hay tres cosas importantes en lo que acaba de escribir:

1. La primera es que, al igual que en matemáticas, los paréntesis agrupan.
2. La segunda es que para comentar código —poner anotaciones— se utilizan dos guiones: \`--comentario\` (todo lo que siga a los guiones no será interpretado como parte del programa y, por tanto, no será ejecutado).
3. Por último, cuando entre dos tipos de datos se colocan dos puntos, estos se concatenan —al menos en Lua—, es decir: se _enlazan_. En este caso un \`int\` (\`64\`) con un \`string\` (\`es de tipo int\`).

Existe otro tipo de dato, los de tipo \`bool\`. Pero de ellos hablaré más tarde.

### 2.2. Variables

Una **variable** es, en esencia, una forma de almacenar datos. Esta se compone del nombre de la variable y el dato que almacena. Para declarar una variable se escribe el nombre de la variable, el signo de igual y el dato que se quiere que almacene: \`x = 3\`.

Aunque hay similitud entre una variable y una incógnita en matemáticas, estas son conceptualmente diferentes. La expresión $x=3$ significa que la incógnita $x$ es equivalente al número 3. No parece ser muy diferente, pero en matemáticas no tiene sentido la expresión $x = x + 3$, pues no hay ningún valor que sea igual a él mismo más tres. En cambio, en programación la expreción \`x = x + 3\` significa que se le asigna a la variable \`x\` el valor anterior de \`x\` más 3. Esta expresión no solo no es absurda, sino que es tan fundamental que se ha inventado una manera corta de escribirlo: \`x += 3\`.

Ahora, escriba lo siguiente:

\`\`\`lua
x = 3
y = 10
print("x: "..x)
print("y: "..y)
print("x + y = "..x + y)
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
x: 3
y: 10
x + y = 13
\`\`\`

Recuerde que con \`..\` está concatenando, en este caso \`x: \` y el valor de la variable \`x\`, que en este caso es \`3\`.

### 2.3. Condicionales

Otro concepto sustancial: los **condicionales**. Existen tres tipos de condicionales:

1. los \`if\` (si),
2. los \`else\` (sino) y
3. los \`elseif\` (sino si).

La razón de existencia de los condicionales es evaluar casos: _si se cumple esto, entonces se hará aquello; sino, se hará esto otro_.

Escriba lo siguiente:

\`\`\`lua
n = 2
if n == 4 then
  print("n es igual a 4")
else
  print("n no es igual a 4")
end
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
n no es igual a 4
\`\`\`

El código se leería como: _si \`n\` es igual a 4, entonces se llama a la función \`print\` para imprimir en pantalla \`n es igual a 4\`; sino (todos los casos en los que \`n\` no sea igual a 4), se imprimirá en pantala \`n no es igual a 4\`_.

Notese que el símbolo \`=\` indica _asignación_, por el contrario, el símbolo \`==\` indica _comparación_. Esta comparación solo puede tener dos resultados: \`true\` o \`false\`, los conocidos como datos de tipo \`bool\`. Si \`n\` no es igual a 4, entonces la sentencia \`n == 4\` dará \`false\` y cuando el \`if\` lo detecte sabrá que la condición no se cumple y se pasará a la siguiente instrucción, en
este caso el \`else\`.

Habrá notado que en el ejemplo anterior no se hizo uso de uno de los tres tipos de condicionales. No se preocupe pues ahora escribirá lo siguiente:

\`\`\`lua
n = 4
if n == 2 then
  print("n es igual a 2")
elseif n == 3 then
  print("n es igual a 3")
else
  print("n no es igual a 2 o a 3")
end
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
n no es igual a 2 o a 3
\`\`\`

### 2.4. Funciones, otra vez

Las funciones son una herramienta muy útil, sobretodo porque permiten reciclar código, como en el ejemplo siguiente:

\`\`\`lua
--se crea la función even()
function even(n)
  if n % 2 == 0 then
    print(n.." es par")
  else
    print(n.." no es par")
  end
end

even(2)
even(3)
even(4)
even(5)
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
2 es par
3 no es par
4 es par
5 no es par
\`\`\`

¡Qué útiles son las funciones que nos salvan de escribir el mismo código constantemente!

Pero hay algo aún más importante de las funciones y es que, al igual que \`print\` es una función propia de PICO-8 para imprimir cosas en pantalla, hay otras muchas funciones para realizar diferentes tareas. Una de estas funciones es \`_update\`, que es especialmente importante pues se ejecuta 30 veces por segundo. ¿De qué nos sirve que esta función se ejecute 30 veces por segundo? Es útil porque, como en todo motor de videojuegos, se necesitan funciones que estén constantemente comprobando cosas como: la posición del jugador, la tecla que está pulsando, la posición de objetos, sus movimientos… etc. Además de esta, la función \`btn\` detecta si el jugador a pulsado el botón que se le pase por parámetro, ¡vayamos a comprobarlo! Para ello escriba lo siguiente:

\`\`\`lua
function buttons()
  if btn(5) then
    print("Has presionado un x")
  else
    print("__")
  end
end

function _update()
  buttons()
end
\`\`\`

Si presiona \`X\` verá como aparece \`Has presionado x\`. En la figura 6 podrá ver los números que tiene asignado cada tecla, aunque... ¿se acuerda que anteriormente dije que las mayúsculas estaban reservadas para caracteres especiales? (figura 7).

:::img-fig
![Figura 6: Pequeño Cheat Sheet de PICO-8](@/assets/articles/como-hacer-un-videojuego-con-pico-8/mini-cheat-sheet.png)(width:384)
:::

:::img-fig
![Figura 7: Algunas letras especiales de PICO-8](@/assets/articles/como-hacer-un-videojuego-con-pico-8/letras-reservadas.png)(width:384)
:::

> [!note]
> Si ve que tiene la pantalla de comandos muy sucia, puede ejecutar el comando \`cls\` para limpiarla.

Viendo la figura 8, nos damos cuenta de que podemos ampliar el programa anterior para las flechas, pero en ese caso tendríamos en la función \`buttons\` algo así:

\`\`\`lua
txt = "Has presionado "
if btn(5) then
  print(txt.." 5")
elseif btn(4) then
  print(txt.." 4")
elseif btn(0) then
  print(txt.." 0")
elseif btn(1) then
  print(txt.." 1")
elseif btn(2) then
  print(txt.." 2")
elseif btn(3) then
  print(txt.." 3")
else
  print("__")
end
\`\`\`

Pero también podríamos escribir un programa que simplemente distinga si se está pulsando uno de los cinco botones, sin importar cual sea:

\`\`\`lua
if btn(0) or btn(1) or
  btn(2) or btn(3) or
  btn(4) or btn(5) then
  print("Has presionado un boton")
else print("__") end
\`\`\`

Nuevo concepto importante: los **operadores lógicos**. Los operadores lógicos son, valga la redundancia, operadores que comparan dos resultados de tipo \`bool\` y, dependiendo de las combinaciones de estos, devuelven \`true\` o \`false\`.

Hay dos operadores lógicos imprescindibles: \`and\` y \`or\`. El operador \`and\` devuelve \`true\` si, y solo si los operandos son \`true\`. En cambio, \`or\` devuelve \`true\` si por lo menos uno de los operandos es \`true\`.

Sabiendo esto, el código anterior se leería como: _si el botón 0, o el botón 1, o el botón 2, o el botón 3, o el botón 4, o el botón 5 es pulsado, entonces se imprimirá en pantalla "Has presionado un boton", sino se imprimirá en pantalla \`__\`._

### 2.5. Dibujar cosas en pantalla

Al igual que existe la función \`_update\`, que se ejecuta 30 veces por segundo, también existe la función \`_draw\`, que
actualiza la pantalla cada vez que se ejecuta la función \`_update\`. Pero que \`_draw\` actualice la pantalla 30 veces por
segundo no quiere decir que vaya a eliminar lo que se había dibujado antes, para este fin se utiliza la función \`cls\` —que tal
vez ya haya utilizado para limpiar la pantalla de comandos.

Conociendo todo esto, se puede reescribir el programa anterior:

\`\`\`lua
function buttons()
  if btn(0) or btn(1) or
    btn(2) or btn(3) or
    btn(4) or btn(5) then
    print("Has presionado un boton")
  else print("__") end
end

function _draw()
  cls()
  buttons()
end
\`\`\`

Para empezar a hacer cosas más interesantes vaya a la segunda pestaña: el **Editor de Sprites** (figura 8). Una vez ahí, puede dibujar —con una resolución de 8 por 8 píxeles— el personaje que quiera, en mi caso dibujé un conejito al que llamaré Bunny (figura 9).

:::img-fig
![Figura 8: Editor de sprites](@/assets/articles/como-hacer-un-videojuego-con-pico-8/editor-de-sprites.png)(width:384)
:::

:::img-fig
![Figura 9: Pixelart de Bunny](@/assets/articles/como-hacer-un-videojuego-con-pico-8/bunny.png)(width:384)
:::

Para hacer que este _sprite_ se dibuje en pantalla deberá escribir lo siguiente:

\`\`\`lua
function _draw()
  cls()
  spr(1)
end
\`\`\`

La función \`spr\` se encarga de dibujar un sprite, y el 1 que se le pasa como parámetro simplemente indica el número del
sprite. Este número, empezando desde cero, viene indicado por la posición del sprite en las "casillas" que puede ver en la figura 8 y 9.

La función \`spr\` puede recibir más parámetros como la posición del sprite —por defecto es \`(0,0)\`.

La posición de un punto viene determinado por una coordenada en el eje \`x\` y en el eje \`y\`. El valor de \`x\` es la distancia del punto al lado izquiero de la pantalla, mientras que el valor de \`y\` es la distancia del punto al lado superior de la pantalla (figura 10). Así, la esquina superior izquierda es el _punto de origen_ o punto \`(0,0)\`. Por defecto, el punto de un sprite no es el centro del sprite, es su esquina superior izquierda (figura 11).

:::img-fig
![Figura 10: Sistema de coordenadas](@/assets/articles/como-hacer-un-videojuego-con-pico-8/sistema-de-coordenadas.png)(width:384)
:::

:::img-fig
![Figura 11: Ejemplo de posición de un sprite](@/assets/articles/como-hacer-un-videojuego-con-pico-8/ejemplo-sprite.png)(width:384)
:::

Sabiendo todo esto, ahora podemos hacer que Bunny se mueva por la pantalla:

\`\`\`lua
x = 60
y = 60
function move_bunny()
  if (btn(0)) then x -= 1 end
  if (btn(1)) then x += 1 end
  if (btn(2)) then y -= 1 end
  if (btn(3)) then y += 1 end
end

function _update()
  move_bunny()
end

function _draw()
  cls()
  spr(1, x, y)
end
\`\`\`

### 2.6. Bucles

Ya para acabar con esta sección, voy a hablar de los **bucles** o loops.

Un bucle es una sección de código que se repetirá siempre y cuando se cumpla una condición.

Existen diferentes tipos de bucles, pero el único que nos importa ahora es el bucle \`for\`:

\`\`\`lua
n = 3
for i = 0, n do
  print(i)
end
\`\`\`

\`\`\`ansi
\x1B[2m> run\x1B[0m
0
1
2
3
\`\`\`

En estos bucles siempre hay que declarar una variable índice \`i\`, esta aumentará en uno su valor cuando se acabe una repetición. La variable \`n\` significa que el bucle se repetirá \`n-i\` veces, en este caso \`3 - 0 = 3\` veces.

Aquí otro ejemplo:

\`\`\`lua
function _draw()
  cls()

  for i = 1, 10 do
    spr(1, i^2, 60)
    print(i^2)
  end
end
\`\`\`

En este caso, el bucle se repetirá \`10 - 1 = 9\` veces y dibujará al sprite con una coordenada \`x\` que aumentará en potencias de \`2\`, además imprime en pantalla las diferentes posiciones en \`x\` del sprite.

Por último, un ejemplo que no tiene por qué entender, pero que es interesante:

\`\`\`lua
function _draw()
  cls()

  for i = 0, 15 do
    x = 64 + cos(t() / 2 + i / 16) * 40
    y = 64 + sin(t() / 4 + i / 16) * 40
    spr(1, x, y)
  end

  s = "★ hi! ★"
  print(s, 64 - #s * 2, 64, 7)
end
\`\`\`

## 3. Squashy

Ahora vamos a crear un videojuego tipo **Pong** (figura 12).

Para empezar, acceda al **Modo Comando** y escriba \`save squashy\` para guardar el proyecto. Para asegurarse de no perder el progreso, cada cierto tiempo tendrá que presionar \`CTRL + S\` y para ejecutar el programa, en lugar de escribir \`run\` en la consola, puede presionar \`CTRL + R\`.

### 3.1. Moviendo la paleta

Lo primero que vamos a hacer será crear la paleta <span class="aside">\`paddle\`</span> y conseguir que se mueva por la parte inferior de la pantalla.

\`\`\`lua
--squashy

--paddle
padx = 52
pady = 122
padw = 24
padh = 4
steps = 3

function movepaddle()
  if btn(0) then
    padx -= steps
  elseif btn(1) then
    padx += steps
  end
end

function _update()
  movepaddle()
end

function _draw()
  --clear the screen
  rectfill(0, 0, 128, 128, 3)

  --draw the paddle
  rectfill(padx, pady, padx + padw, pady + padh, 15)
end
\`\`\`

La función \`rectfill\` sirve para dibujar rectángulos, esta además recibe diferentes parámetros: los dos primeros indican la posición de la esquina superior izquierda del rectángulo —\`padx\` y \`pady\`—, los otros dos indican la posición de la esquina inferior derecha del rectángulo —\`padx + padw\` y \`pady + padh\`—, y el último indica el color —\`15\`— (figura 13).

:::img-fig
![Figura 12: Juego Squashy](@/assets/articles/como-hacer-un-videojuego-con-pico-8/sistema-de-coordenadas.png)(width:384)
:::

:::img-fig
![Figura 13: Ejemplo de dibujado de un rectángulo](@/assets/articles/como-hacer-un-videojuego-con-pico-8/ejemplo-rectangulo.png)(width:384)
:::

### 3.2. Añadiendo la pelota

Debajo de las variables de paddle, escriba las variables de la pelota:

\`\`\`lua
--ball
ballx = 64
bally = 64
ballsize = 3
ballxdir = 3
ballydir = -2
\`\`\`

Y luego añada al final de la función \`_draw\` lo siguiente:

\`\`\`lua
--draw ball
circfill(ballx, bally, ballsize, 15)
\`\`\`

La función \`circfill\` es como la función \`rectfill\`, solo que hay que pasarle por parámetros la posición del centro del círculo —\`ballx\` y \`bally\`—, su tamaño —\`ballsize\`— y su color —\`15\`—.

### 3.3. Una pelota estática es una pelota aburrida

Para que la pelota se mueva, escriba una nueva función debajo de \`movepaddle\`:

\`\`\`lua
function moveball()
  ballx += ballxdir
  bally += ballydir
end
\`\`\`

Y luego llámela en la función \`_update\`:

\`\`\`lua
function _update()
  movepaddle()
  moveball()
end
\`\`\`

### 3.4. Rebote de la pelota

Si ejecuta el programa verá que la pelota sale volando por la esquina superior derecha de la pantalla, para solucionar este _ligero inconveniente_ tendrá que crear una nueva función debajo de la función \`moveball\` y luego llamarla en \`_update\`:

\`\`\`lua
function bounceball()
  --left
  if ballx < ballsize then
    ballxdir = -ballxdir
    sfx(0)
  end
  --right
  if ballx > 128 - ballsize then
    ballxdir = -ballxdir
    sfx(0)
  end
  --top
  if bally < ballsize then
    ballydir = -ballydir
    sfx(0)
  end
end

function _update()
  movepaddle()
  moveball()
  bounceball()
end
\`\`\`

Como la función \`bounceball\` puede ser un poco complicada para el principiante, la explicaré a continuación.

Dentro de la función \`bounceball\` hay un primer apartado —\`--left\`—, donde se comprueba si la pelota ha alcanzado la parte izquierda de la pantalla: _si la posición en el eje \`x\` de la
pelota_ —\`ballx\`— _es menor al ancho de la pelota_ —es decir, si \`ballx < 3\`; parecería más intuitivo decir "si la posición horizontal de la pelota es menor a cero...", pero en ese caso se vería a la pelota atravesar un poco la pantalla antes de rebotar—_, entonces se cambia la dirección de la pelota_ —\`ballxdir = -ballxdir\`— _y se llama a la función \`sfx\`_.

La función \`sfx\` se utiliza para que suene un _efecto de sonido_. Para ello tiene que irse a la cuarta pestaña, el **Editor de Efectos**, y crear un efecto de sonido, en mi caso creé el que se puede ver en la figura 14.

:::img-fig
![Figura 14: Primer efecto de sonido](@/assets/articles/como-hacer-un-videojuego-con-pico-8/sfx-1.png)(width:384)
:::

### 3.5. Golpear a la pelota

Ahora que la pelota se mueve y rebota contra los bordes, es el momento de hacer que rebote cuando choque contra la paleta. Para esta empresa hay que crear una nueva función debajo de \`bounceball\` y llamarla en \`_update\`:

\`\`\`lua
function bouncepaddle()
  if ballx >= padx and
    ballx <= padx + padw and
    bally > pady - padh and
    bally < pady then
    sfx(0)
    ballydir = -ballydir
  end
end

function _update()
  movepaddle()
  moveball()
  bounceball()
  bouncepaddle()
end
\`\`\`

La función \`bouncepaddle\` funciona de la siguiente manera: _si la posición en \`x\` de la pelota es mayor o igual a la posición en \`x\` de la esquina izquierda de la paleta y a su vez es menor o igual a la posición en \`x\` de la esquina derecha de la paleta, además de que si la posición en \`y\` de la pelota es mayor a la posición en \`y\` de la base de la paleta y a su vez es menor a la posición en \`y\` del lado superior de la paleta, entonces se llama a la función \`sfx\` y se le cambia la dirección vertical de la pelota._

### 3.6. La pelota retorna

Cuando la pelota llega a la parte inferior de la pantalla, esta desaparece sin dejar rastro. Ante esta desgracia tendrá que escribir una nueva función que hará reaparecer a la pelota en medio de la pantalla —también tendrá que llamar esta función en \`_update\`, pero espero que eso ya lo vaya pillando—:

\`\`\`lua
function losedeadball()
  if bally > 128 then
    sfx(1)
    bally = 24
  end
end

function _update()
  movepaddle()
  moveball()
  bounceball()
  bouncepaddle()
  losedeadball()
end
\`\`\`

En esta nueva función se llama a \`sfx(1)\` y no al \`sfx\` de siempre, esto es así porque reproducirá un efecto de sonido diferente y por esa misma razón tendrá que crear un nuevo efecto de sonido, en mi caso creé el que se puede ver en la figura 15.

:::img-fig
![Figura 15: Segundo efecto de sonido](@/assets/articles/como-hacer-un-videojuego-con-pico-8/sfx-2.png)(width:384)
:::

### 3.7. Puntuación

Para añadir una puntuación, hace falta crear una variable \`score = 0\` y hacer una pequeña modificación a la función \`bouncepaddle\`:

\`\`\`lua
score = 0

function bouncepaddle()
  if ballx >= padx and
    ballx <= padx + padw and
    bally > pady then
    sfx(0)
    ballydir = -ballydir
    score += 10
  end
end
\`\`\`

Ahora hay que imprimir en pantalla la puntuación, para ello hay que añadir lo siguiente a la función \`_draw\`:

\`\`\`lua
--draw score
print(score, 12, 6, 15)
\`\`\`

Aunque no lo mencioné anteriormente, la función \`print\` también puede recibir de parámetros una posición —en este caso \`(12,6)\`— y un color —\`15\`—.

### 3.8. Corazones

Para indicar la vida del jugador vamos a usar corazones, como se muestra en la figura 16 —aunque para ello se tendrá que borrar a Bunny—. Para esta tarea se debe crear una una variable \`lives = 3\` y modificar la función \`_draw\`:

:::img-fig
![Figura 16: Pixelart de un corazón](@/assets/articles/como-hacer-un-videojuego-con-pico-8/corazon.png)(width:384)
:::

\`\`\`lua
lives = 3
function _draw()
  --clear the screen
  rectfill(0, 0, 128, 128, 3)
  if lives > 0 then
    --draw the lives
    for i=1, lives do
      spr(1, 124 - i * 8, 4)
    end
    --draw score
    print(score, 12, 6, 15)
    --draw paddle
    rectfill(padx, pady, padx + padw, pady + padh, 15)
    --draw ball
    circfill(ballx, bally, ballsize, 15)
  else
    --draw game over
    print("game over", 48, 64, 15)
  end
end
\`\`\`

Además, hay que complicar un poco —solo un poco— la función \`losedeadball\`:

\`\`\`lua
function losedeadball()
  if bally > 128 then
    if lives > 0 then
      --next live
      sfx(1)
      bally = 24
      lives -= 1
    else
      --game over
      ballxdir = 0
      ballydir = 0
    end
  end
end
\`\`\`

Y por último, cambiar ligeramente la función \`_update\`:

\`\`\`lua
function _update()
  if lives > 0 then
    movepaddle()
    moveball()
    bounceball()
    bouncepaddle()
    losedeadball()
  end
end
\`\`\`

## 4. Final

Con todo, el código debería quedar tal que así:

\`\`\`lua
--squashy

--paddle
padx = 52
pady = 122
padw = 24
padh = 4
steps = 3

--ball
ballx = 64
bally = 64
ballsize = 3
ballxdir = 3
ballydir = -2

score = 0
lives = 3

function movepaddle()
  if btn(0) then
    padx -= steps
  elseif btn(1) then
    padx += steps
  end
end

function moveball()
  ballx += ballxdir
  bally += ballydir
end

function bounceball()
  --left
  if ballx < ballsize then
    ballxdir = -ballxdir
    sfx(0)
  end
  --right
  if ballx > 128 - ballsize then
    ballxdir = -ballxdir
    sfx(0)
  end
  --top
  if bally < ballsize then
    ballydir = -ballydir
    sfx(0)
  end
end

function bouncepaddle()
  if ballx >= padx and
    ballx <= padx + padw and
    bally > pady then
    sfx(0)
    ballydir = -ballydir
    score += 10
  end
end

function losedeadball()
  if bally > 128 then
    if lives > 0 then
      --next live
      sfx(1)
      bally = 24
      lives -= 1
    else
      --game over
      ballxdir = 0
      ballydir = 0
    end
  end
end

function _update()
  if lives > 0 then
    movepaddle()
    moveball()
    bounceball()
    bouncepaddle()
    losedeadball()
  end
end

function _draw()
  --clear the screen
  rectfill(0, 0, 128, 128, 3)
  if lives > 0 then
    --draw the lives
    for i=1, lives do
      spr(1, 124 - i * 8, 4)
    end
    --draw score
    print(score, 12, 6, 15)
    --draw paddle
    rectfill(padx, pady, padx + padw, pady + padh, 15)
    --draw ball
    circfill(ballx, bally, ballsize, 15)
  else
    --draw game over
    print("game over", 48, 64, 15)
  end
end
\`\`\`

Para exportar ejecute el juego y presione \`CTRL + 7\`, después vaya al **Modo Comando** y escriba \`save squashy.png\`, así se le descargará un archivo \`.png\`, si ese mismo archivo lo arrastra hasta PICO-8 se le cargará el juego (figura 17).

:::img-fig
![Figura 17: Squashy exportado a PNG](@/assets/articles/como-hacer-un-videojuego-con-pico-8/squashy.p8.png)
:::

## Referencias

1. White, J. (s.f.). _PICO-8 User Manual_. <https://www.lexaloffle.com/dl/docs/pico-8_manual.html>
2. De Bock, A. (agosto de 2015). _PICO-8 Zine_ \\#1. <https://sectordub.itch.io/pico-8-fanzine-1>
`,i={title:"Cómo hacer un videojuego con PICO-8",description:"Tutorial de cómo programar un videojuego en PICO-8.",pubDate:new Date(16780608e5),category:"gamedev",tags:["pico-8"],isDraft:!1,cover:{src:"/images/pico-8.webp",width:920,height:430,credits:"https://www.steamgriddb.com/grid/163642"}},s={type:"content",filePath:"/home/imangelo/Documents/01_Projects/imangelo.dev/src/content/articles/como-hacer-un-videojuego-con-pico-8.md",rawData:void 0};export{s as _internal,o as body,n as collection,i as data,e as id,a as slug};
