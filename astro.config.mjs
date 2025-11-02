// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'

import { remarkPlugins, rehypePlugins } from './plugins'

import db from '@astrojs/db'

const SITE = 'https://imangelo.dev'

// https://astro.build/config
export default defineConfig({
  site: SITE,
  adapter: vercel(),
  output: 'hybrid',
  integrations: [
    sitemap({
      filter: (page) => page !== `${SITE}/404`
    }),
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
