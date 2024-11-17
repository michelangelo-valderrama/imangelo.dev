import * as Share from 'social-share-generator'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverSeparator
} from '@/components/ui/popover'
import Button from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

import {
  LinkedInIcon,
  LinkIcon,
  ShareIcon,
  TelegramIcon,
  XFormerlyTwitterIcon,
  XIcon
} from '@/icons'

import { copyToClipboard } from '@/lib/utils'

interface ShareButtonProps {
  title: string
  url: string
  side: 'left' | 'top' | 'bottom' | 'right'
  align: 'center' | 'end' | 'start'
}

interface SocialBtnProps {
  social: 'telegram' | 'twitter' | 'linkedin'
  name: string
  icon: any
}

async function copyUrl(url: string) {
  await copyToClipboard(url)
  const toastId = toast('URL copiado', {
    cancel: (
      <Button
        size="icon"
        variant="ghost"
        className="size-7 ml-a"
        onClick={() => toast.dismiss(toastId)}
      >
        <XIcon className="size-4" />
      </Button>
    )
  })
}

function ShareButton({
  align = 'start',
  side = 'left',
  title,
  url
}: ShareButtonProps) {
  const SocialBtn = ({ icon: Icon, social, name }: SocialBtnProps) => {
    const shareUrl = Share[social]({
      text: title,
      url
    })
    return (
      <a tabIndex={0} href={shareUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="popover">
          <Icon className="size-4 mr-2"></Icon>
          {name}
        </Button>
      </a>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full size-10">
          <ShareIcon className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        align={align}
        side={side}
        className="w-42 py-2 px-1"
      >
        <Button variant="popover" onClick={() => copyUrl(url)}>
          <LinkIcon className="size-4 mr-2" />
          Copiar URL
        </Button>
        <PopoverSeparator />
        <SocialBtn
          social="twitter"
          name="Twitter"
          icon={XFormerlyTwitterIcon}
        />
        <SocialBtn social="linkedin" name="LinkedIn" icon={LinkedInIcon} />
        <SocialBtn social="telegram" name="Telegram" icon={TelegramIcon} />
      </PopoverContent>
    </Popover>
  )
}

export default ShareButton
