// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'

import { remarkPlugins, rehypePlugins } from './plugins'

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://imangelo.dev',
  output: 'hybrid',
  integrations: [
    sitemap(/*TODO*/),
    react(),
    tailwind(),
    expressiveCode(),
    mdx(),
    db()
  ],
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