import * as React from 'react'
import { cn } from '@/lib/utils'

import Link, { type LinkProps } from '@/components/ui/link'

interface Props extends LinkProps {
  slug?: string
}

const TocLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, slug, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        data-toc-link
        data-heading-id={slug}
        href={`#${slug}`}
        className={cn(
          `
            border-none
            text-wrap
            my-1
            sm:my-0.5
            sm:text-sm
            data-[active=true]:text-foreground
            data-[active=true]:font-medium
            focus-visible:opacity-100
          `,
          className
        )}
        {...props}
      />
    )
  }
)

export default TocLink
