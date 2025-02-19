import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

import { EMAIL } from '@/config'

import { createContact, sendEmail } from '@/lib/email'
import Welcome from '@/lib/email/templates/welcome'

const newsletterSubscription = defineAction({
  input: z.object({
    email: z.string().email()
  }),
  handler: async ({ email }) => {
    await createContact({
      audienceId: import.meta.env.RESEND_AUDIENCE_ID,
      email
    })

    const recommendedArticleUrl =
      EMAIL.favoriteArticleUrls[
        Math.floor(Math.random() * EMAIL.favoriteArticleUrls.length)
      ]

    await sendEmail({
      reactTemplate: Welcome({ recommendedArticleUrl }),
      subject: '¡Gracias por suscribirte!',
      to: email
    })

    return { success: true }
  }
})

export default newsletterSubscription
