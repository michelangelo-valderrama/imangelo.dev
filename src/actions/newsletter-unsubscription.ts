import { deleteContact } from '@/lib/email'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

const newsletterUnsubscription = defineAction({
  input: z.object({
    email: z.string()
  }),
  handler: async ({ email }) => {
    await deleteContact({
      audienceId: import.meta.env.RESEND_AUDIENCE_ID,
      email
    })

    return { success: true }
  }
})

export default newsletterUnsubscription
