import LikeButton from '@/components/widgets/like-button'
import CopyUrl from '@/components/widgets/copy-url'
import ShareButton from '@/components/widgets/share-button'
import InfoButton, {
  type InfoButtonProps
} from '@/components/widgets/info-button'

interface ArticleActionsProps extends InfoButtonProps {
  url: string
}

function ArticleActions({ url, ...props }: ArticleActionsProps) {
  return (
    <aside className="flex items-start mb-8">
      <InfoButton {...props} />
      <CopyUrl url={url} />
      <ShareButton title="123" url={url} />
      <LikeButton />
    </aside>
  )
}

export default ArticleActions
