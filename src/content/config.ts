import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: z.object({
    isDraft: z
      .boolean()
      .default(true)
      .describe(
        'Marks the post as a draft. If `true`, it is only visible in development and excluded from production builds.'
      )
  })
})

export const collections = {
  articles
}
