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
          text-secondary gap-x-1 h-6 px-0.5
          text-base font-normal group
          hover:text-secondary
        `}
        variant="ghost"
        onClick={onPlay}
      >
        /mikeˈlandʒelo/
        <Volume2Icon
          className={cn(
            'text-muted-foreground group-hover:text-foreground transition-colors',
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
