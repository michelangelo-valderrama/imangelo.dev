import { Hr, Link, Section, Column, Row } from '@react-email/components'

import { EMAIL } from '@/config'

function Footer() {
  return (
    <Section>
      <Hr className="border-border" />
      <Row>
        <Column>
          <Link className="text-muted-foreground text-sm underline">
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
