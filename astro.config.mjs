// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

import UnoCSS from 'unocss/astro'

import { remarkPlugins, rehypePlugins } from './plugins'

// https://astro.build/config
export default defineConfig({
  site: 'https://imangelo.dev',
  integrations: [mdx(), sitemap(/*TODO*/), react(), UnoCSS()],
  markdown: {
    remarkPlugins,
    rehypePlugins
  }
})
