import { useEffect, useState } from 'react'

import { CheckIcon, CopyIcon } from '@/icons'

import { copyToClipboard } from '@/lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Button from '@/components/ui/button'

function CopyUrlButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  const onCopyUrl = async () => {
    const resp = await copyToClipboard(url)
    setCopied(resp)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => clearTimeout(timerId)
  }, [copied])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" onClick={onCopyUrl}>
          <CopyIcon
            data-copied={copied}
            className={`
                transition-all duration-300
                data-[copied='true']:scale-0
                data-[copied='true']:opacity-0
              `}
          />
          <CheckIcon
            data-copied={copied}
            className={`
                absolute
                transition-all duration-300
                scale-0 opacity-0
                data-[copied='true']:scale-100
                data-[copied='true']:opacity-100
              `}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copiar URL</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default CopyUrlButton
