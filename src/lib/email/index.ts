import { Resend } from 'resend'

import { EMAIL } from '@/config'
import type { Contact } from './interfaces'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export async function createContact({
  audienceId,
  email
}: {
  audienceId: string
  email: string
}) {
  try {
    const resp = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false
    })

    if (resp.error) throw resp.error.message

    return resp.data!
  } catch (error) {
    throw error
  }
}

export async function deleteContact({
  audienceId,
  email
}: {
  audienceId: string
  email: string
}) {
  try {
    const resp = await resend.contacts.remove({
      audienceId,
      email
    })

    if (resp.error) throw resp.error.message

    return resp.data!
  } catch (error) {
    throw error
  }
}

export async function sendEmail({
  reactTemplate: react,
  subject,
  to
}: {
  reactTemplate: React.ReactNode
  subject: string
  to: string
}) {
  try {
    const resp = await resend.emails.send({
      from: EMAIL.from,
      react,
      subject,
      to: [to]
    })

    if (resp.error) throw resp.error.message

    return resp.data
  } catch (error) {
    throw error
  }
}

export async function getContactsSuscribed(audienceId: string) {
  try {
    const resp = await resend.contacts.list({ audienceId })
    if (resp.error) throw resp.error.message

    return resp.data?.data.filter((contact) => !contact.unsubscribed) ?? []
  } catch (error) {
    throw error
  }
}

export async function sendEmailToAudience({
  audienceId,
  reactTemplateCb: reactCb,
  subject
}: {
  audienceId: string
  reactTemplateCb: (contact: Contact) => React.ReactNode
  subject: string
}) {
  try {
    const contacts = await getContactsSuscribed(audienceId)

    if (contacts.length > 100) throw 'There are more than 100 contacts'

    const resp = await resend.batch.send(
      contacts.map((contact) => ({
        from: EMAIL.from,
        react: reactCb(contact),
        subject,
        to: contact.email
      }))
    )

    if (resp.error) throw resp.error.message

    return resp.data!
  } catch (error) {
    throw error
  }
}
