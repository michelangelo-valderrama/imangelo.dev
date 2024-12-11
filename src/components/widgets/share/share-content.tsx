import * as Share from 'social-share-generator'

import Button from '@/components/ui/button'
import { PopoverSeparator } from '@/components/ui/popover'

import {
  CheckIcon,
  LinkedInIcon,
  LinkIcon,
  TelegramIcon,
  XFormerlyTwitterIcon
} from '@/icons'

import { cn, copyToClipboard } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface SocialBtnProps {
  social: 'telegram' | 'twitter' | 'linkedin'
  name: string
}

interface ShareContentProps {
  title: string
  url: string
}

function ShareContent({ title, url }: ShareContentProps) {
  const [copied, setCopied] = useState(false)

  const copyUrl = async () => {
    const resp = await copyToClipboard(url)
    setCopied(resp)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => clearTimeout(timerId)
  }, [copied])

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
          className="text-sm my-0.5 sm:my-0 h-10 sm:h-9"
        >
          <Icon className="size-4 mr-2"></Icon>
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
        className="text-sm mb-0.5 h-10 sm:h-9"
      >
        <div className="mr-2 relative">
          <LinkIcon
            data-copied={copied}
            className={`
              size-4 transition-all
              data-[copied=true]:scale-0
              data-[copied=true]:opacity-0
            `}
          />
          <CheckIcon
            data-copied={copied}
            className={`
              absolute inset-0
              size-4 transition-all
              opacity-0 scale-0
              data-[copied=true]:scale-100
              data-[copied=true]:opacity-100
            `}
          />
        </div>
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
