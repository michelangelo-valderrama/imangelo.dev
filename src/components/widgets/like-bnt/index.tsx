import Button from '@/components/ui/button'
import ActionButton from '@/components/view/action-button'
import { LikeIcon } from '@/icons'
import { useState } from 'react'

function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <ActionButton
        size="md"
        data-liked={liked}
        className={`
          font-medium
          data-[liked="true"]:text-foreground
          data-[liked="true"]:hover:text-accent-foreground
          gap-x-2
        `}
        onClick={() => setLiked(!liked)}
      >
        <LikeIcon />
        <span className="min-w-4">{liked ? 1 : 0}</span>
      </ActionButton>
    </div>
  )
}

export default LikeButton
