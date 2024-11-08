/**
 * @description Register directive nodes in mdast.
 * @see https://github.com/remarkjs/remark-directive?tab=readme-ov-file#types
 */
/// <reference types="mdast-util-directive" />

import { visit } from 'unist-util-visit'

import type { Root, Paragraph, PhrasingContent } from 'mdast'

import type { MarkdownVFile } from '@astrojs/markdown-remark'

function remarkImageFigure() {
  return (tree: Root, file: MarkdownVFile) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return
      if (node.name !== 'img-fig') return

      const data = node.data || (node.data = {})
      const attributes = node.attributes || {}
      const children = node.children

      // add figure node
      data.hName = 'figure'

      // handle figcaption text
      // priority: content inside [] of `:::img-fig[]{}`、`![]()`
      let content: PhrasingContent[]
      if (
        children[0].type === 'paragraph' &&
        children[0].data?.directiveLabel &&
        children[0].children[0].type === 'text'
      ) {
        content = children[0].children
        children.shift()
      } else if (
        children[0].type === 'paragraph' &&
        children[0].children[0].type === 'image' &&
        children[0].children[0].alt
      ) {
        content = [{ type: 'text', value: children[0].children[0].alt }]
      } else {
        file.fail(
          'The figcaption text is missing in the `image-figure` directive. Specify it in the `[]` of `:::image-figure[]{}` or `![]()`.',
          node
        )
      }

      // add figcaption node
      const figcaptionNode: Paragraph = {
        type: 'paragraph',
        data: {
          hName: 'figcaption',
          hProperties: attributes
        },
        children: content
      }

      children.push(figcaptionNode)
    })
  }
}

export default remarkImageFigure
