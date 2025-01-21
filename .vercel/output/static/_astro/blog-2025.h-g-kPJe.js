const e="blog-2025.md",o="articles",a="blog-2025",n=`
Nuevo año, nuevo blog.

Después de estar tiempo ausente, vuelvo mostrando en lo que llevo trabajando bastante más tiempo del que me gustaría: el rediseño del blog.

## Aspectos generales

Como era de esperar, no podía rediseñar el blog si no es con un giro de 360º: fuera el modo dark, fuera solo blanco y negro, fuera las serifas, fuera todo. Ahora solo uso el blanco, el negro y un naranja como secundario (referenciando a los diseños de Rams).

He querido añadir "animaciones", ya sabéis, **efectos chulos**, para que se sienta mejor el navegar por los artículos. Ni tan mal, la verdad. Muy contento con la tabla de contenidos, el botón para compartir en redes sociales y el botón de me gusta (que esa es otra). Ahora, como en algún momento prometí, hay botón de me gusta. Todavía falta la sección de comentarios, pero eso requiere gestionar sesiones y quiero darme tiempo para hacer otros proyectos.

Como bien manifiesto en la página principal, busqué que el diseño fuese minimalista, útil, _human-first_ y estético, y creo que lo he conseguido, aunque eso es cuestión de cada uno. ¿Era necesario el botón de pronunciación? Pues no imprescindible, pero creo que un buen diseño tiene que tener personalidad y estilo, y el botón de pronunciación creo que aporta a eso, igual que todas las animaciones que hay. Sobre todo, no quería que por intentar añadir algo _chulo_ se empeore la experiencia del usuario (UX first).

## Botón de me gusta

Este botón me ha dado problemas serios. Al final conseguí algo _cute_ y gracioso que no desentonara con el resto de la interfaz.

Tienes hasta cinco me gusta y por cada uno se va llenando el corazón. Cuando terminas suelta confetti. ¡Qué más se puede pedir!

Uso Astro DB para guardar los datos y la IP (hasheada) como identificador, todo por idea de [Josh W. Comeau](https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2/#database-stuff-8). ¿Podría ser mejor? Seguramente, ¿pero para qué darle tanta importancia a un detalle gracioso?

## Estilos

Mucho CSS hay aquí, más allá de TailwindCSS, pero por culpa de Markdown. Quería que la parte más importante, los artículos, tenga cierta identidad también, así que tocó customizar muy fuerte.

Lo más problemático fue Expressive Code, más por tener muchas cosas que por ser difícil, pero al final conseguí algo que me gustase. Pero todavía hay algo que me quema, y es el botón de copiar en los bloques de código, porque no puedo animarlo como el botón de copiar URL al final de los artículos. ¡AAAHHH!

## Nuevas páginas

Ahora tengo una sección de [links](/links), nada importante, pero a mi me gusta que esté ahí.

También he añadido una página para desuscribirse del [newsletter](/newsletter), algo que tendría que haber añadido antes, pero bueno, mejor tarde que nunca :)

> Con respecto al newsletter, es evidente que prácticamente nadie se suscribe, igual que prácticamente nadie lee esto, ¡pero a mi me gusta tenerlo!

Ahora, también enlazo mi [portfolio](https://portfolio.imangelo.dev/), aunque ya ha pasado tiempo y ya no me convence, pero no voy a ponerme a rediseñarlo, porque voy a tardar una barbaridad en hacerlo. Al menos estoy muy contento con la sección [Personal](https://portfolio.imangelo.dev/#personal), aunque por algún motivo, a veces la primera vuelta sale medio rara, ¯\\_(ツ)\\_/¯.

## Sobre los artículos

He eliminado algunos artículos, eso va a ser algo habitual pues poco a poco voy a ir descartándolos o actualizándolos. No voy cumpliendo con lo de _un artículo al mes_, pero nada más es porque no tengo constancia, es decir, la mayoría de los últimos artículos los escribí en un día. Creo que lo mejor será intentar escribir una vez a la semana, y publicar cuando las cosas se vayan completando.

Tal vez sea yo, pero tengo muchas cosas que hacer entre proyectos, trabajo, hobbies y estudios, y realmente tengo que limitarme un poco, ¡porque al final no acabo nada!

Este es un tema que parece común, sobre todo entre programadores, pero en mi caso es peor porque también hago música y toco la guitarra, dibujo, leo, hago fotos y soy un cinéfilo, ¿qué hago con mi vida entonces? ¡ME MATO O QUÉ UNIVERSO, POR QUÉ ME HAS HECHO ASÍ! Pero bueno, lo que queda es seguir intentando las cosas, aunque no vayan saliendo.
`,s={title:"Sobre el blog, edición 2025",description:"Nuevo año, nuevo blog. Aquí relato un poco sobre el rediseño de este y sobre otras cuestiones varias.",pubDate:new Date(17372448e5),isDraft:!1},r={type:"content",filePath:"/home/imangelo/Documents/01_Projects/imangelo.dev/src/content/articles/blog-2025.md",rawData:void 0};export{r as _internal,n as body,o as collection,s as data,e as id,a as slug};
