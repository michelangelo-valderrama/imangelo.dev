import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  `
    inline-flex items-center justify-center
    whitespace-nowrap
    transition-colors
    duration-300
    cursor-pointer
    text-muted-foreground
    hover:text-accent-foreground
    border-b hover:border-accent-foreground
  `
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  title?: string
  isExternal?: boolean
}

function Link({ className, title, isExternal, ...props }: LinkProps) {
  return (
    <a
      className={cn(linkVariants({ className }))}
      about={isExternal ? '_black' : '_self'}
      title={title}
      aria-label={title}
      {...props}
    ></a>
  )
}

Link.displayName = 'Link'

export default Link
