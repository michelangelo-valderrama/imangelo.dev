// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import UnoCSS from 'unocss/astro'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'

import { remarkPlugins, rehypePlugins } from './plugins'

// https://astro.build/config
export default defineConfig({
  site: 'https://imangelo.dev',
  integrations: [sitemap(/*TODO*/), react(), UnoCSS(), expressiveCode(), mdx()],
  markdown: {
    remarkPlugins,
    rehypePlugins,
    remarkRehype: {
      footnoteLabel: 'Notas'
    }
  },
  devToolbar: {
    enabled: false
  }
})
