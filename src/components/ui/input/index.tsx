import * as React from 'react'

import { cn } from '@/lib/utils'

export type InputProps = React.ComponentProps<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            flex
            h-9
            w-full
            rounded-md border border-input-border
            bg-transparent
            px-3 py-1
            text-sm sm:text-base
            shadow-sm
            transition-colors duration-base
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            file:text-foreground
            placeholder:text-muted-foreground
            focus-visible:border-foreground
            focus-visible:outline-none
            focus-visible:ring-1
            focus-visible:ring-ring
            disabled:cursor-not-allowed
            disabled:opacity-50
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export default Input
