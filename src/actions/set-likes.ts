import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { db, eq, ArticleData } from 'astro:db'

import { hash } from '@/lib/hash'

const SUCCESS_RESPONSE = { success: true }

const setLikes = defineAction({
  input: z.object({
    slug: z.string(),
    numLikes: z.number()
  }),
  handler: async ({ numLikes: likesGiven, slug }, { clientAddress }) => {
    const userId = await hash(clientAddress)

    try {
      const artData = await db
        .select()
        .from(ArticleData)
        .where(eq(ArticleData.slug, slug))
        .get()

      if (!artData) {
        await db.insert(ArticleData).values({
          hits: likesGiven,
          likesByUser: {
            [userId]: likesGiven
          },
          slug
        })
        return SUCCESS_RESPONSE
      }

      const currentLikesByUser = artData.likesByUser || {}
      const currentUserLikes =
        currentLikesByUser[userId as keyof typeof currentLikesByUser] || 0

      const newUserLikes = Math.min(5, likesGiven)
      const likesDifference = newUserLikes - currentUserLikes

      if (likesDifference <= 0) return SUCCESS_RESPONSE

      await db
        .update(ArticleData)
        .set({
          hits: artData.hits + likesDifference,
          likesByUser: {
            ...currentLikesByUser,
            [userId]: newUserLikes
          }
        })
        .where(eq(ArticleData.slug, slug))

      return SUCCESS_RESPONSE
    } catch (error) {
      return { success: false }
    }
  }
})

export default setLikes
