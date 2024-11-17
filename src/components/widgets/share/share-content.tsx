import * as Share from 'social-share-generator'
import { toast } from 'sonner'

import Button from '@/components/ui/button'
import { PopoverSeparator } from '@/components/ui/popover'

import {
  LinkedInIcon,
  LinkIcon,
  TelegramIcon,
  XFormerlyTwitterIcon,
  XIcon
} from '@/icons'

import { copyToClipboard } from '@/lib/utils'

interface SocialBtnProps {
  social: 'telegram' | 'twitter' | 'linkedin'
  name: string
}

interface ShareContentProps {
  title: string
  url: string
  isMobile?: boolean
}

function ShareContent({ title, url, isMobile }: ShareContentProps) {
  const copyUrl = async () => {
    const resp = await copyToClipboard(url)
    if (!resp) return

    const toastId = toast('URL copiado', {
      position: isMobile ? 'top-center' : 'bottom-right',
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

  const SocialBtn = ({ social, name }: SocialBtnProps) => {
    const shareUrl = Share[social]({
      text: title,
      url
    })

    let Icon
    if (social === 'telegram') Icon = TelegramIcon
    else if (social === 'linkedin') Icon = LinkedInIcon
    else Icon = XFormerlyTwitterIcon

    return (
      <a tabIndex={0} href={shareUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant="popover"
          className="text-base sm:text-sm my-0.5 sm:my-0 h-10 sm:h-9"
        >
          <Icon className="size-5 sm:size-4 mr-4 sm:mr-2"></Icon>
          {name}
        </Button>
      </a>
    )
  }

  return (
    <>
      <Button
        variant="popover"
        onClick={copyUrl}
        className="text-base sm:text-sm mb-0.5 h-10 sm:h-9"
      >
        <LinkIcon className="size-5 sm:size-4 mr-4 sm:mr-2" />
        Copiar URL
      </Button>
      <PopoverSeparator />
      <SocialBtn social="twitter" name="Twitter" />
      <SocialBtn social="linkedin" name="LinkedIn" />
      <SocialBtn social="telegram" name="Telegram" />
    </>
  )
}

export default ShareContent
