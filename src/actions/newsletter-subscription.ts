import { ActionError, defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { Resend } from 'resend'

import { sleep } from '@/lib/utils'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

const newsletterSubscription = defineAction({
  input: z.object({
    email: z.string().email()
  }),
  handler: async ({ email }) => {
    if (import.meta.env.DEV) {
      await sleep(1000)
      return '[dev] ok'
    }

    const { error } = await resend.contacts.create({
      audienceId: import.meta.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
      email
    })

    if (error) {
      throw new ActionError({
        code: 'BAD_REQUEST',
        message: error.message
      })
    }

    return { success: true }
  }
})

export default newsletterSubscription
