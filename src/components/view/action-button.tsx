import * as React from 'react'
import { cn } from '@/lib/utils'

import type { ButtonProps } from '@/components/ui/button'
import Button from '@/components/ui/button'

const ActionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          'rounded-full hover:bg-transparent [&_svg]:size-5',
          className
        )}
        {...props}
      />
    )
  }
)

export default ActionButton
