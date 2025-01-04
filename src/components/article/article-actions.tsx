import { InfoIcon, ShareIcon } from '@/icons'

import Button from '@/components/ui/button'

import LikeButton from '@/components/widgets/like-button'
import CopyUrl from '@/components/widgets/copy-url'
import ShareButton from '@/components/widgets/share-button'
import { TooltipProvider } from '../ui/tooltip'

function ArticleActions({ url }: { url: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <aside className="flex justify-between items-start mb-8">
        <div>
          <Button variant="ghost" size="icon">
            <InfoIcon />
          </Button>
          <CopyUrl url={url} />
          <ShareButton title="123" url={url} />
        </div>
        <LikeButton />
      </aside>
    </TooltipProvider>
  )
}

export default ArticleActions
