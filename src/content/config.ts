import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: z.object({
    title: z.string().max(80),
    subtitle: z.string().optional(),
    description: z.string().max(350),
    pubDate: z.date(),
    lastModDate: z.date().optional(),
    isDraft: z.boolean().default(true)
  })
})

export const collections = {
  articles
}
