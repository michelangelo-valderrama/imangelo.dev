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
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

export interface ShareButtonProps {
  title: string
  url: string
  isMobile?: boolean
}

function ShareButtonMobile({ title, url }: ShareButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-foreground"
        >
          <ShareIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Compartir artículo</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <div className="px-2 pb-6">
          <ShareContent title={title} url={url} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ShareButtonDesktop({ title, url }: ShareButtonProps) {
  return (
    <Popover>
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
        <ShareContent title={title} url={url} />
      </PopoverContent>
    </Popover>
  )
}

function ShareButton({ isMobile, ...props }: ShareButtonProps) {
  if (isMobile) return <ShareButtonMobile {...props} />
  return <ShareButtonDesktop {...props} />
}

export default ShareButton
