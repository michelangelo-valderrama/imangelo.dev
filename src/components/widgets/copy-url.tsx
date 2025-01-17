import { useEffect, useState } from 'react'

import { CheckIcon, CopyIcon } from '@/icons'

import { copyToClipboard } from '@/lib/utils'

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
    <Button variant="ghost" size="icon" onClick={onCopyUrl}>
      <CopyIcon
        data-copied={copied}
        className={`
          transition-all duration-base
          data-[copied='true']:scale-0
          data-[copied='true']:opacity-0
        `}
      />
      <CheckIcon
        data-copied={copied}
        className={`
          absolute
          transition-all duration-base
          scale-0
          opacity-0
          data-[copied='true']:scale-100
          data-[copied='true']:opacity-100
        `}
      />
    </Button>
  )
}

export default CopyUrlButton
