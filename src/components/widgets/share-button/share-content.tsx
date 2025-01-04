import * as Share from 'social-share-generator'

import { LinkedInIcon, TelegramIcon, XFormerlyTwitterIcon } from '@/icons'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Button from '@/components/ui/button'

interface SocialBtnProps {
  name: 'Telegram' | 'Twitter' | 'LinkedIn'
}

interface ShareContentProps {
  title: string
  url: string
}

function ShareContent({ title, url }: ShareContentProps) {
  const SocialBtn = ({ name }: SocialBtnProps) => {
    const social = name.toLocaleLowerCase()
    const shareUrl = Share[social as keyof typeof Share]({
      text: title,
      url
    })

    let Icon
    if (social === 'telegram') Icon = TelegramIcon
    else if (social === 'linkedin') Icon = LinkedInIcon
    else Icon = XFormerlyTwitterIcon

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            tabIndex={-1}
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-none">
              <Icon></Icon>
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <div className="flex size-full">
      <SocialBtn name="LinkedIn" />
      <SocialBtn name="Telegram" />
      <SocialBtn name="Twitter" />
    </div>
  )
}

export default ShareContent
