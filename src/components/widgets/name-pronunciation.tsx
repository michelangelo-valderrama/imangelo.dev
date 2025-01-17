import { Volume2Icon } from '@/icons'

import Button from '@/components/ui/button'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

// https://ipa-reader.com/?text=mike%CB%88land%CA%92elo&voice=Carla#about
function NamePronunciation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const onPlay = () => {
    if (!audioRef.current || isPlaying) return
    audioRef.current.play()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/michelangelo.mpga"
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <Button
        className={`
          group
          text-secondary
          gap-x-1
          h-6
          px-0.5 py-0
          text-base font-normal
          hover:text-secondary
          hover:bg-transparent
          focus-visible:text-secondary
          focus-visible:bg-transparent
        `}
        variant="ghost"
        onClick={onPlay}
      >
        /mikeˈlandʒelo/
        <Volume2Icon
          className={cn(
            `
              text-muted-foreground
              transition-colors duration-base
              group-hover:text-foreground
              group-focus-visible:text-foreground
            `,
            {
              'text-foreground': isPlaying
            }
          )}
        />
      </Button>
    </>
  )
}

export default NamePronunciation
