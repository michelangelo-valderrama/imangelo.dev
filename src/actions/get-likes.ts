import { hash } from '@/lib/hash'
import { defineAction } from 'astro:actions'
import { ArticleData, db, eq } from 'astro:db'
import { z } from 'astro:schema'

const getLikes = defineAction({
  input: z.object({
    slug: z.string()
  }),
  handler: async ({ slug }, { clientAddress }) => {
    try {
      const userId = await hash(clientAddress)

      const artData = await db
        .select()
        .from(ArticleData)
        .where(eq(ArticleData.slug, slug))
        .get()

      if (!artData) return { userLikes: 0, hits: 0 }

      const currentLikesByUser = artData.likesByUser || {}
      const currentUserLikes =
        currentLikesByUser[userId as keyof typeof currentLikesByUser] || 0

      return {
        userLikes: currentUserLikes,
        hits: artData.hits
      }
    } catch (error) {
      return { userLikes: 0, hits: 0 }
    }
  }
})

export default getLikes
