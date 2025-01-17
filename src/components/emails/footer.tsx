import { Hr, Link, Section, Column, Row } from '@react-email/components'

import { EMAIL } from '@/config'

function Footer({ contactId }: { contactId: string }) {
  const unsubscribeUrl = EMAIL.unsubscribeUrl + '/' + contactId

  return (
    <Section>
      <Hr className="border-border" />
      <Row>
        <Column>
          <Link
            className="text-muted-foreground text-sm underline"
            href={unsubscribeUrl}
          >
            desuscribirse
          </Link>
        </Column>
        <Column align="right">
          <Link
            className="text-muted-foreground text-sm underline"
            href={EMAIL.originUrl}
          >
            imangelo.dev
          </Link>
        </Column>
      </Row>
    </Section>
  )
}

export default Footer
