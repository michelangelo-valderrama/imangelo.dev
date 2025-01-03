import type { Element, ElementContent, Properties, Root } from 'hast'
import type { Test } from 'hast-util-is-element'

import structuredClone from '@ungap/structured-clone'
import { convertElement } from 'hast-util-is-element'
import isAbsoluteUrl from 'is-absolute-url'
import { parse } from 'space-separated-tokens'
import { visit } from 'unist-util-visit'

/**
 * Create a target for the element.
 * @param element
 *   Element to check.
 * @returns
 *   Content to add.
 */
type CreateContent = ReturnType<
  (
    element: Element
  ) => Array<ElementContent> | ElementContent | null | undefined
>

/**
 * Create properties for an element.
 * @param element
 *   Element to check.
 * @returns
 *   Properties to add.
 */
type CreateProperties = ReturnType<
  (element: Element) => Properties | null | undefined
>

/**
 * Create a `rel` for the element.
 * @param
 *   Element to check.
 * @returns
 *   `rel` to use.
 */
type CreateRel = ReturnType<
  (element: Element) => Array<string> | string | null | undefined
>

/**
 * Create a `target` for the element.
 * @param element
 *   Element to check.
 * @returns
 *   `target` to use.
 */
type CreateTarget = ReturnType<(element: Element) => Target | null | undefined>

/**
 * Configuration.
 */
interface Options {
  /**
   * Content to insert at the end of external links (optional); will be
   * inserted in a `<span>` element; useful for improving accessibility by
   * giving users advanced warning when opening a new window.
   */
  content?:
    | Array<ElementContent>
    | CreateContent
    | ElementContent
    | null
    | undefined
  /**
   * Properties to add to the `span` wrapping `content` (optional).
   */
  contentProperties?: CreateProperties | Properties | null | undefined
  /**
   * Properties to add to the link itself (optional).
   */
  properties?: CreateProperties | Properties | null | undefined
  /**
   * Protocols to check, such as `mailto` or `tel` (default: `['http',
   * 'https']`).
   */
  protocols?: Array<string> | null | undefined
  /**
   * Link types to hint about the referenced documents (default:
   * `['nofollow']`); pass an empty array (`[]`) to not set `rel`s on links;
   * when using a `target`, add `noopener` and `noreferrer` to avoid
   * exploitation of the `window.opener` API.
   */
  rel?: Array<string> | CreateRel | string | null | undefined
  /**
   * How to display referenced documents; the default (nothing) is to not set
   * `target`s on links.
   */
  target?: CreateTarget | Target | null | undefined
  /**
   * Extra test to define which external link elements are modified (optional);
   * any test that can be given to `hast-util-is-element` is supported.
   */
  test?: Test | null | undefined
}

type Target = '_blank' | '_parent' | '_self' | '_top'

const defaultProtocols = ['http', 'https']
const defaultRel = ['nofollow']

const emptyOptions: Options = {}

/**
 * Automatically add `rel` (and `target`?) to external links.
 *
 * ###### Notes
 *
 * You should [likely not configure `target`][css-tricks].
 *
 * You should at least set `rel` to `['nofollow']`.
 * When using a `target`, add `noopener` and `noreferrer` to avoid exploitation
 * of the `window.opener` API.
 *
 * When using a `target`, you should set `content` to adhere to accessibility
 * guidelines by giving users advanced warning when opening a new window.
 *
 * [css-tricks]: https://css-tricks.com/use-target_blank/
 *
 * @param options
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function rehypeExternalLinks(
  options?: Readonly<Options> | null | undefined
) {
  const settings = options || emptyOptions
  const protocols = settings.protocols || defaultProtocols
  const is = convertElement(settings.test)

  /**
   * Transform.
   * @param tree
   *   Tree.
   * @returns
   *   Nothing.
   */
  return function (tree: Root): undefined {
    visit(tree, 'element', function (node, index, parent) {
      if (
        node.tagName === 'a' &&
        typeof node.properties.href === 'string' &&
        is(node, index, parent)
      ) {
        const url = node.properties.href

        if (
          isAbsoluteUrl(url)
            ? protocols.includes(url.slice(0, url.indexOf(':')))
            : url.startsWith('//')
        ) {
          const contentRaw = createIfNeeded(settings.content, node)
          const content =
            contentRaw && !Array.isArray(contentRaw) ? [contentRaw] : contentRaw
          const relRaw = createIfNeeded(settings.rel, node) || defaultRel
          const rel = typeof relRaw === 'string' ? parse(relRaw) : relRaw
          const target = createIfNeeded(settings.target, node)

          const properties = createIfNeeded(settings.properties, node)

          if (properties) {
            Object.assign(node.properties, structuredClone(properties))
          }

          if (rel.length > 0) {
            node.properties.rel = [...rel]
          }

          if (target) {
            node.properties.target = target
          }

          if (content) {
            const properties =
              createIfNeeded(settings.contentProperties, node) || {}

            /*
            {
              type: 'element',
              tagName: 'a',
              properties: {
                href: 'https://medium.com/@ryangwilson/stop-saying-ui-ux-51f300374f8f',
                rel: [ 'noopener', 'noreferrer' ]
              },
              children: [ { type: 'text', value: 'UX first', position: [Object] } ],
              position: {
                start: { line: 9, column: 12, offset: 250 },
                end: { line: 9, column: 86, offset: 324 }
              }
            }
            */

            const lastNodeChild = node.children.at(-1)

            if (
              lastNodeChild?.type !== 'text' ||
              lastNodeChild.value.split(' ').length <= 1
            ) {
              node.children.push({
                type: 'element',
                tagName: 'span',
                properties: structuredClone(properties),
                children: structuredClone(content)
              })
              return
            }

            const text = lastNodeChild.value

            const lastWord = text.split(' ').at(-1) ?? ''
            lastNodeChild.value = text.split(' ').slice(0, -1).join(' ') + ' '

            node.children.push({
              type: 'element',
              tagName: 'span',
              properties: structuredClone(properties),
              children: [
                {
                  type: 'text',
                  value: lastWord
                },
                ...structuredClone(content)
              ]
            })
          }
        }
      }
    })
  }
}

/**
 * Call a function to get a return value or use the value.
 */
function createIfNeeded<T>(value: T, element: Element): T {
  return typeof value === 'function' ? value(element) : value
}
