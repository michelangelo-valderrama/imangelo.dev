import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  `
    inline-flex items-center justify-center
    whitespace-nowrap
    transition-colors duration-base
    cursor-pointer
    text-muted-foreground
    border-b
    hover:text-accent-foreground
    hover:border-accent-foreground
    focus-visible:text-accent-foreground
    focus-visible:border-accent-foreground
  `,
  {
    variants: {
      variant: {
        links: 'inline-flex text-foreground w-fit gap-x-1'
      }
    }
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  title?: string
  isExternal?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant, className, title, isExternal, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, className }))}
        about={isExternal ? '_black' : '_self'}
        title={title}
        aria-label={title}
        {...props}
      ></a>
    )
  }
)

Link.displayName = 'Link'

export default Link
