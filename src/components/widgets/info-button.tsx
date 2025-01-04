import { InfoIcon } from '@/icons'

import { formatDate } from '@/lib/utils'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import Button from '@/components/ui/button'

function InfoLine({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="flex justify-between gap-x-5">
      <span className="min-w-fit text-muted-foreground">{title}</span>
      <span>{children}</span>
    </li>
  )
}

export interface InfoButtonProps {
  lastModDate?: Date
  coverCredits?: string
  category?: string
  tags?: string[]
}

function InfoButton(props: InfoButtonProps) {
  const infoLines: { title: string; content: React.ReactNode }[] = []

  Object.keys(props).forEach((_key) => {
    const key = _key as keyof typeof props

    if (key === 'category' && props[key]) {
      const value = props[key]
      infoLines.push({
        title: 'Categoría',
        content: (
          <>
            <span className="text-muted-foreground">@</span>
            {value}
          </>
        )
      })
    } else if (key === 'coverCredits' && props[key]) {
      const value = props[key]
      infoLines.push({
        title: 'Créd. de img.',
        content: value
      })
    } else if (key === 'lastModDate' && props[key]) {
      const value = props[key]
      infoLines.push({
        title: 'Últ. act.',
        content: formatDate(value)
      })
    } else if (key === 'tags' && props[key]) {
      const value = props[key]
      infoLines.push({
        title: 'Etiquetas',
        content: (
          <div className="gap-x-1.5 grid grid-cols-2">
            {value.map((_, index) => (
              <span key={index}>
                <span className="text-muted-foreground">#</span>
                matemáticas
              </span>
            ))}
          </div>
        )
      })
    }
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <InfoIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        className={`
          w-auto
          text-sm
          space-y-2
        `}
      >
        {infoLines.map(({ title, content }, index) => (
          <InfoLine key={index} title={title}>
            {content}
          </InfoLine>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default InfoButton
