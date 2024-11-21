import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover'
import Button from '@/components/ui/button'

import { ShareIcon } from '@/icons'

import ShareContent from './share-content'
import Drawer, {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { useState } from 'react'

export interface ShareButtonProps {
  title: string
  url: string
  isMobile?: boolean
}

function ShareButtonMobile({ title, url }: ShareButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShareIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle />
        <DrawerDescription />
        <div className="px-2 pt-5 pb-6">
          <ShareContent
            title={title}
            url={url}
            isMobile={true}
            onUrlCopied={(res) => setOpen(!res)}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ShareButtonDesktop({ title, url }: ShareButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full size-10">
          <ShareIcon className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        align="start"
        sideOffset={10}
        className="w-48 py-2 px-1"
      >
        <ShareContent
          title={title}
          url={url}
          onUrlCopied={(res) => setOpen(!res)}
        />
      </PopoverContent>
    </Popover>
  )
}

function ShareButton({ isMobile, ...props }: ShareButtonProps) {
  if (isMobile) return <ShareButtonMobile {...props} />
  return <ShareButtonDesktop {...props} />
}

export default ShareButton
