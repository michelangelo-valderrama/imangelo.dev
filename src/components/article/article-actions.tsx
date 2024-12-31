import { InfoIcon, ShareIcon } from '@/icons'

import Button from '@/components/ui/button'

import LikeButton from '@/components/widgets/like-button'
import CopyUrl from '@/components/widgets/copy-url'
import ShareButton from '@/components/widgets/share-button'

function ArticleActions({ url }: { url: string }) {
  return (
    <aside className="flex justify-between items-center mb-8">
      <div>
        <Button variant="ghost" size="icon">
          <InfoIcon />
        </Button>
        <CopyUrl url={url} />
        <ShareButton title="123" url={url} />
      </div>
      <LikeButton />
    </aside>
  )
}

export default ArticleActions
