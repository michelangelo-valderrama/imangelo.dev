import { Heading, Text, Link } from '@react-email/components'

import Root from '@/components/emails/root'

interface Props {
  recommendedArticleUrl: string
}

function Welcome({ recommendedArticleUrl }: Props) {
  return (
    <Root>
      <Heading className="text-xl text-accent-foreground" as="h1">
        ¡Gracias por suscribirte!
      </Heading>
      <Text>
        A partir de ahora, recibirás notificaciones cuando suba un nuevo
        artículo, o cuando quiera comunicar algo relacionado. Podrás
        desuscribirte al final de cada correo.
      </Text>
      <Text className="font-medium">¡Gracias por apoyar este proyecto!</Text>
      <Text>
        Por lo pronto, te dejo con{' '}
        <Link className="text-link" href={recommendedArticleUrl}>
          uno de mis artículos favoritos
        </Link>
        .
      </Text>
    </Root>
  )
}

export default Welcome
