import type { MarkdownHeading } from 'astro'

import Button from '@/components/ui/button'
import Drawer, {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

import { TableOfContentsIcon } from '@/icons'

import TocContent from './toc-content'

interface TocButtonProps {
  headings: MarkdownHeading[]
}

function TocButton({ headings }: TocButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <TableOfContentsIcon className="size-4 mr-2" />
          Tabla de contenidos
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Tabla de contenidos</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <ul className="px-6 pb-6">
          <TocContent headings={headings} />
        </ul>
      </DrawerContent>
    </Drawer>
  )
}

export default TocButton
