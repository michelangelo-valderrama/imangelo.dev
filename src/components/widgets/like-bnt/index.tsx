import { useEffect, useRef, useState } from 'react'

import { HeartIcon } from '@/icons'

import ActionButton from '@/components/view/action-button'
import { cn } from '@/lib/utils'

function LikeButton() {
  const [likes, setLikes] = useState(0)
  const likeButtonRef = useRef<HTMLButtonElement>(null)

  const onClickLike = () => {
    if (likes >= 5) return

    setLikes(likes + 1)

    if (!likeButtonRef.current) return

    const spanElem = document.createElement('span')
    spanElem.setAttribute('data-bubble-anim', 'true')
    spanElem.className = `
      absolute top-0 left-0 bottom-0 right-0
      bg-[radial-gradient(transparent,#fee2e2)] rounded-full z-0
      animate-[ping_700ms_cubic-bezier(0,0,0.2,1)_forwards]
    `
    likeButtonRef.current.appendChild(spanElem)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!likeButtonRef.current) return

      const allBubbleAnims =
        likeButtonRef.current.querySelectorAll<HTMLSpanElement>(
          '[data-bubble-anim]'
        )
      allBubbleAnims.forEach((bubbleAnim) => {
        likeButtonRef.current!.removeChild(bubbleAnim)
      })
    }, 800)

    return () => clearTimeout(timerId)
  }, [likes])

  return (
    <div className="flex flex-col items-center">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
            <stop style={{ stopColor: 'gray' }} offset="0%" />
            <stop style={{ stopColor: 'red' }} offset="40%" />
          </linearGradient>
        </defs>
      </svg>
      <ActionButton
        ref={likeButtonRef}
        data-liked={!!likes}
        className="group relative"
        onClick={onClickLike}
      >
        {/* <HeartIcon
          data-max={likes >= 5}
          data-likes={likes}
          className={cn(`
            fill-[url(#gradient-1)]
            hover:fill-[url(#gradient-1)]
            transition-all
            group-hover:scale-[1.2]
            data-[max='false']:group-active:scale-[1.4]
          `)}
        /> */}
        <svg>
          <clipPath id="heart-icon">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </clipPath>
          <rect
            width="20"
            height="20"
            clipPath="url(#heart-icon)"
            fill="red"
          ></rect>
        </svg>
      </ActionButton>
      <span className="text-muted-foreground">{likes}</span>
    </div>
  )
}

export default LikeButton
