import {
  Font,
  Body,
  Container,
  Head,
  Html,
  Tailwind
} from '@react-email/components'

import Footer from './footer'

interface RootProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  contactId: string
}

function Root({ contactId, children }: RootProps) {
  return (
    <Html lang="es">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'http://imangelo.dev/fonts/InterVariable.woff2',
            format: 'woff2'
          }}
          fontWeight="<weight>"
          fontStyle="normal"
        ></Font>
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: '#fbfbf9',
                foreground: '#4a4c42',
                accent: {
                  foreground: '#1b1b18'
                },
                muted: {
                  foreground: '#9a9a98'
                },
                link: '#0680f9',
                border: '#ebebea'
              }
            }
          }
        }}
      >
        <Body className="bg-background text-foreground font-sans">
          <Container className="pt-10 px-6 pb-8">
            {children}
            <Footer contactId={contactId} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Root
