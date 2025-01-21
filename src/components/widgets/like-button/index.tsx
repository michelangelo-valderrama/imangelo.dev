import { useEffect, useRef, useState } from 'react'
import ConfettiExplosion, { type ConfettiProps } from 'react-confetti-explosion'
import { actions } from 'astro:actions'
import { useSound } from 'use-sound'

import blopSound from '@/assets/sounds/blop.mp3'
import partyHornSound from '@/assets/sounds/party-horn.mp3'

import { cn } from '@/lib/utils'

import { useDebounce } from '@/hooks/use-debounce'

import Button from '@/components/ui/button'

const confettiProps: ConfettiProps = {
  force: 0.4,
  duration: 2500,
  particleCount: 30,
  width: 600
}

function LikeButton({ slug }: { slug: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isExploding, setIsExploding] = useState(false)
  const [userLikes, setUserLikes] = useState(0)
  const [restOfLikes, setRestOfLikes] = useState(0)
  const [bubbles, setBubbles] = useState(0)

  const [playBlob] = useSound(blopSound, {
    playbackRate: 0.75 + (userLikes * 2) / 10,
    volume: 0.8
  })
  const [playPartyHorn] = useSound(partyHornSound, {
    volume: 0.6
  })

  const debouncedSaveLike = useDebounce(async (userLikes: number) => {
    const { data, error } = await actions.setLikes({
      numLikes: userLikes,
      slug
    })

    if (!data || !data.success || error) {
      console.log('[error] like-button', error)
    }
  }, 500)

  const likeButtonRef = useRef<HTMLButtonElement>(null)

  const onLike = () => {
    if (!likeButtonRef.current) return

    if (userLikes === 4) {
      setIsExploding(true)
      playPartyHorn()
    } else if (userLikes < 4) {
      playBlob()
    }

    if (userLikes < 5) {
      const newUserLikes = userLikes + 1
      setUserLikes(newUserLikes)
      debouncedSaveLike(newUserLikes)
    }

    setBubbles(bubbles + 1)

    const spanElem = document.createElement('span')
    spanElem.setAttribute('data-bubble-anim', 'true')
    spanElem.className = `
      absolute left-2.5 z-0
      size-7
      rounded-full
      bg-[radial-gradient(transparent,hsla(var(--im-heart)/0.2))]
      animate-[ping_700ms_cubic-bezier(0,0,0.2,1)_forwards]
    `
    likeButtonRef.current.appendChild(spanElem)
  }

  useEffect(() => {
    actions
      .getLikes({ slug })
      .then(({ data, error }) => {
        if (!data || error) return

        const { hits, userLikes } = data
        setRestOfLikes(hits - userLikes)
        setUserLikes(userLikes)
      })
      .finally(() => setIsLoading(false))
  }, [])

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
  }, [bubbles])

  return (
    <Button
      disabled={isLoading}
      variant="outline"
      ref={likeButtonRef}
      className={cn(
        `
          group
          ml-auto
          relative
          gap-x-1.5
          hover:bg-heart/5
          focus-visible:bg-heart/5
          hover:border-heart
          focus-visible:border-heart
        `,
        {
          'text-heart focus-visible:text-heart hover:text-heart border-heart/20':
            userLikes > 0
        }
      )}
      onClick={onLike}
    >
      <span className="absolute left-4">
        {isExploding && <ConfettiExplosion {...confettiProps} />}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          `
            transition-all duration-base
            group-hover:text-heart
            group-focus-visible:text-heart
            group-hover:scale-[1.2]
            group-focus-visible:scale-[1.2]
            group-active:scale-[1.6]
            *:transition-all *:duration-base
          `
        )}
      >
        {/* state 0 */}
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          fill="none"
          className={cn({ 'opacity-0': userLikes !== 0 })}
        />
        {/* state 1 */}
        <path
          d="M8.5 17.4999L12 20.9999L15.5 17.4999C13 15 11 19.9999 8.5 17.4999Z"
          className={cn({ 'opacity-0': userLikes !== 1 })}
        />
        <path
          d="M8.5 17.4999L5 13.9999C3.5 12.5499 2 10.7999 2 8.49994C2 7.04125 2.57946 5.6423 3.61091 4.61085C4.64236 3.5794 6.04131 2.99994 7.5 2.99994C9.26 2.99994 10.5 3.49994 12 4.99994C13.5 3.49994 14.74 2.99994 16.5 2.99994C17.9587 2.99994 19.3576 3.5794 20.3891 4.61085C21.4205 5.6423 22 7.04125 22 8.49994C22 10.7899 20.49 12.5399 19 13.9999L15.5 17.4999M8.5 17.4999L12 20.9999L15.5 17.4999M8.5 17.4999C11 19.9999 13 15 15.5 17.4999"
          fill="none"
          className={cn({ 'opacity-0': userLikes !== 1 })}
        />
        {/* state 2 */}
        <path
          d="M6 14.9999L12 20.9999L18 14.9999C12 19 12 10.5 6 14.9999Z"
          className={cn({ 'opacity-0': userLikes !== 2 })}
        />
        <path
          d="M6 14.9999L5 13.9999C3.5 12.5499 2 10.7999 2 8.49994C2 7.04125 2.57946 5.6423 3.61091 4.61085C4.64236 3.5794 6.04131 2.99994 7.5 2.99994C9.26 2.99994 10.5 3.49994 12 4.99994C13.5 3.49994 14.74 2.99994 16.5 2.99994C17.9587 2.99994 19.3576 3.5794 20.3891 4.61085C21.4205 5.6423 22 7.04125 22 8.49994C22 10.7899 20.49 12.5399 19 13.9999L18 14.9999M6 14.9999L12 20.9999L18 14.9999M6 14.9999C12 10.5 12 19 18 14.9999"
          fill="none"
          className={cn({ 'opacity-0': userLikes !== 2 })}
        />
        {/* state 3 */}
        <path
          d="M5 13.9999L12 20.9999L19 13.9999C20.0234 12.9971 21.0563 11.8574 21.6028 10.4999C14.9999 5.99994 8.99994 14.9999 2.39258 10.4999C2.93611 11.8629 3.96806 13.0024 5 13.9999Z"
          className={cn({ 'opacity-0': userLikes !== 3 })}
        />
        <path
          d="M2.39258 10.4999C2.14605 9.88176 2 9.21763 2 8.49994C2 7.04125 2.57946 5.6423 3.61091 4.61085C4.64236 3.5794 6.04131 2.99994 7.5 2.99994C9.26 2.99994 10.5 3.49994 12 4.99994C13.5 3.49994 14.74 2.99994 16.5 2.99994C17.9587 2.99994 19.3576 3.5794 20.3891 4.61085C21.4205 5.6423 22 7.04125 22 8.49994C22 9.21699 21.8519 9.8811 21.6028 10.4999M2.39258 10.4999C2.93611 11.8629 3.96806 13.0024 5 13.9999L12 20.9999L19 13.9999C20.0234 12.9971 21.0563 11.8574 21.6028 10.4999M2.39258 10.4999C8.99994 14.9999 14.9999 5.99994 21.6028 10.4999"
          fill="none"
          className={cn({ 'opacity-0': userLikes !== 3 })}
        />
        {/* state 4 */}
        <path
          d="M19 13.9999C20.49 12.5399 22 10.7899 22 8.49994C14 13 9 4 2 8.49994C2 10.7999 3.5 12.5499 5 13.9999L12 20.9999L19 13.9999Z"
          className={cn({ 'opacity-0': userLikes !== 4 })}
        />
        <path
          d="M22 8.49994C22 10.7899 20.49 12.5399 19 13.9999L12 20.9999L5 13.9999C3.5 12.5499 2 10.7999 2 8.49994M22 8.49994C22 7.04125 21.4205 5.6423 20.3891 4.61085C19.3576 3.5794 17.9587 2.99994 16.5 2.99994C14.74 2.99994 13.5 3.49994 12 4.99994C10.5 3.49994 9.26 2.99994 7.5 2.99994C6.04131 2.99994 4.64236 3.5794 3.61091 4.61085C2.57946 5.6423 2 7.04125 2 8.49994M22 8.49994C14 13 9 4 2 8.49994"
          fill="none"
          className={cn({ 'opacity-0': userLikes !== 4 })}
        />
        {/* state 5 */}
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          className={cn({ 'opacity-0': userLikes !== 5 })}
        />
      </svg>
      <span className="min-w-5">{restOfLikes + userLikes}</span>
    </Button>
  )
}

export default LikeButton
