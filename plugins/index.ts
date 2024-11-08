import type { RemarkPlugins, RehypePlugins } from 'astro'

// remark plugins
import remarkDirective from 'remark-directive'
import remarkImageFigure from './remark-image-figure'
import remarkImgattr from 'remark-imgattr'
import remarkMath from 'remark-math'

// rehype plugins
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'

export const remarkPlugins: RemarkPlugins = [
  remarkDirective,
  remarkImageFigure,
  remarkImgattr,
  remarkMath
]

export const rehypePlugins: RehypePlugins = [
  rehypeHeadingIds,
  rehypeKatex,
  [
    rehypeExternalLinks,
    {
      rel: 'noopener noreferrer',
      content: {
        type: 'element',
        tagName: 'svg',
        properties: {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          fill: 'none',
          viewBox: '0 0 24 24'
        },
        children: [
          {
            type: 'element',
            tagName: 'path',
            properties: {
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '2',
              d: 'M7 7h10v10M7 17 17 7'
            }
          }
        ]
      }
    }
  ]
]
