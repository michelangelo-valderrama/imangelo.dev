import { useState } from 'react'

import { ShareIcon, XIcon } from '@/icons'

import Button from '@/components/ui/button'

import ShareContent from './share-content'

export interface ShareButtonProps {
  title: string
  url: string
}

function ShareButton(props: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  const onOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      data-open={isOpen}
      className={`
        inline-flex relative
      `}
    >
      <Button
        data-open={isOpen}
        className={`
          bg-background relative z-10
          data-[open='true']:border
          data-[open='true']:rounded-r-none
          data-[open='true']:text-muted-foreground
        `}
        variant="ghost"
        size="icon"
        onClick={onOpen}
      >
        <ShareIcon
          data-open={isOpen}
          className={`
          transition-all duration-300
          data-[open='true']:scale-0
          data-[open='true']:opacity-0
      `}
        />
        <XIcon
          data-open={isOpen}
          className={`
          absolute
          transition-all duration-300
          scale-0 opacity-0
          data-[open='true']:scale-100
          data-[open='true']:opacity-100
        `}
        />
      </Button>
      <div
        data-open={isOpen}
        className={`
          absolute top-0
          pl-9
          rounded-md
          border
          bg-background-contrast
          h-full
          transition-all duration-300
          opacity-0
          pointer-events-none
          -translate-x-full
          data-[open='true']:animate-im-slide-to-right
          data-[open='false']:animate-im-slide-to-left
        `}
      >
        <ShareContent {...props} />
      </div>
    </div>
  )
}

export default ShareButton
