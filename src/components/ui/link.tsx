import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  `
    inline-flex items-center justify-center
    whitespace-nowrap
    transition-colors
    cursor-pointer
  `
)

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  title?: string
  isExternal?: boolean
}

function Link({ className, title, isExternal, ...props }: ButtonProps) {
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
