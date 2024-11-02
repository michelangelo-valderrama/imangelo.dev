import type { RemarkPlugins, RehypePlugins } from 'astro'

import remarkMath from 'remark-math'

import rehypeKatex from 'rehype-katex'

export const remarkPlugins: RemarkPlugins = [remarkMath]

export const rehypePlugins: RehypePlugins = [rehypeKatex]
