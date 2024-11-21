---
title: Markdown Syntax
description: Meta description...
pubDate: 2024-09-12
cover:
  src: /images/el-principio-del-universo.webp
  width: 1200
  height: 768
  credits: physics.oregonstate.edu
category: markdown
tags:
  - categoría-1
  - categoría-2
isDraft: false
---

## h2 header

Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia nihil sed atque delectus velit doloribus mollitia voluptates ad quibusdam?

### h3 header

Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia nihil sed atque delectus velit doloribus mollitia voluptates ad quibusdam?

#### h4 header

Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia nihil sed atque delectus velit doloribus mollitia voluptates ad quibusdam?

---

Hay algo que siempre me ha molestado de algunos matemáticos. Tómese por ejemplo Henri Poincaré y Bertrand Russell, sin lugar a dudas grandes matemáticos —en el caso de Poincaré también físico— y filósofos —sobre todo Russell— que no dudaron en afirmar que la matemática es la ciencia más pura y más bella que existe. Yo, ante tales afirmaciones no puedo parar de preguntarme: ¿Qué tienen de científico las matemáticas?

Esto es un _archivo de prueba_.

## "Detalles"

### Cohesión de elementos

I spent an unreasonable amount of time on contextual styles, making sure that my generic “LEGO brick” components composed nicely together.

Lorem ipsum dolor sit amet.

Here's a footnote [^1].

[^1]: Footnote text goes here.

#### El arcoiris

On the desktop homepage, you might’ve noticed that there’s a big new rainbow.

Monospace example `console.log('hello, world')`, lorem ipsum dolor sit amet.

---

## An h2 header

Paragraphs are separated by a blank line.

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists look like:

- this one
- that one
- the other one

Note that --- not considering the asterisk --- the actual text content starts at 4-columns in.

> Block quotes are written like so.
>
> They can span multiple paragraphs, if you like.

Use 3 dashes for an em-dash. (ex., "she was late—traffic was terrible").

Use 2 dashes for ranges (ex., "it's all in chapters 12--14").

Three dots … will be converted to an ellipsis.

Unicode is supported. 😊

### An h3 header

Here's a numbered list:

1. first item
2. second item
3. third item

Note again how the actual text starts at 4 columns in (4 characters from the left side).

Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of indenting the block, you can use delimited blocks, if you like:

```python
def foobar():
    print("Welcome to flavor country!")
```

<br />

```sh title="Hello" showLineNumbers=false
echo "Hello, world!"
```

<br />

```python title="main.py" showLineNumbers=false
def foobar():
    print("Welcome to flavor country!")
```

<br />

```ts title="@/utils.ts"
export function groupBy<K extends PropertyKey, T>(
  items: Array<T>,
  keySelector: (item: T, index: number) => K
): Partial<Record<K, T[]>> {
  return items.reduce<Partial<Record<K, T[]>>>((prev, curr, index) => {
    const key = keySelector(curr, index)

    if (prev[key]) {
      prev[key].push(curr)
    } else {
      prev[key] = [curr]
    }

    return prev
  }, {})
}
```

<br />

(which makes copying & pasting easier).

#### An h4 header

Now a nested list:

1. First, get these ingredients:

- carrots
- celery
- lentils

2. Boil some water.
3. Dump everything in the pot and follow this algorithm:

```
find wooden spoon
uncover pot
stir
cover pot
balance wooden spoon precariously on pot handle
wait 10 minutes
goto first step (or shut off burner when done)
```

Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including that last line which continues item 3 above).

Here's a link to [google](https://www.google.com/) and to a [section heading in the current doc](#an-h2-header).

Here's a footnote v2 [^2].

[^2]: Lorem ipsum dolor sit amet.

Tables can look like this:

| size | material    | color       |
| ---- | ----------- | ----------- |
| 9    | leather     | brown       |
| 10   | hemp canvas | natural     |
| 11   | glass       | transparent |

A horizontal rule follows.

---

Here's a image can be specified like so:

![example image](@/assets/articles/shiki-magic-move.png)

:::img-fig
![example image](@/assets/articles/shiki-magic-move.png)
:::

:::img-fig[example image]
![](@/assets/articles/shiki-magic-move.png)
:::

Inline math equations go in like so: $\omega = d\phi / dt$.

Display math should get its own line and be put in in double-dollarsigns:

$$
I = \int \rho R^{2} dV
$$

And note that you can backslash-escape any punctuation characters which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

Here’s a final look at how the inline code appears: `console.log("hello world!")`. 👋
