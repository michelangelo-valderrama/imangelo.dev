import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: z.object({
    title: z.string().max(80),
    subtitle: z.string().optional(),
    description: z.string().max(350),
    pubDate: z.date(),
    lastModDate: z.date().optional(),
    category: z.string().optional(),
    tags: z.string().array().optional(),
    isDraft: z.boolean().default(true),
    cover: z
      .object({
        src: z.string(),
        width: z.number().min(0),
        height: z.number().min(0),
        credits: z.string().optional()
      })
      .optional()
  })
})

export const collections = {
  articles
}
