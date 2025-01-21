import type { RemarkPlugins, RehypePlugins } from 'astro'

// remark plugins
import remarkDirective from 'remark-directive'
import remarkImgattr from 'remark-imgattr'
import remarkMath from 'remark-math'
import remarkImageFigure from './remark-image-figure'

// rehype plugins
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeKatex from 'rehype-katex'
import rehypeCallouts from 'rehype-callouts'
import rehypeExternalLinks from './rehype-external-links'

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
    rehypeCallouts,
    {
      callouts: {
        info: {
          title: 'Información',
          indicator:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
          color: 'var(--im-callout-info)'
        },
        note: {
          title: 'Nota',
          indicator:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
          color: 'var(--im-callout-note)'
        }
      }
    }
  ],
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
