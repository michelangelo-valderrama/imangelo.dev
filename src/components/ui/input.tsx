import * as React from 'react'

import { cn } from '@/lib/utils'

export type InputProps = React.ComponentProps<'input'> & {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const InputLabel = ({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn(
        'px-3 bg-muted/40 rounded flex items-center justify-center text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div
        className={cn(
          `
            w-full h-10 rounded-md text-base md:text-sm
            border border-input-border hover:text-input-foreground
            bg-input text-input-foreground
            flex
          `,
          className
        )}
      >
        {prefix && (
          <InputLabel className="rounded-r-0 border-r">{prefix}</InputLabel>
        )}
        <input
          type={type}
          className={cn(
            `
              flex size-full px-3 rounded-md
              ring-offset-background placeholder:text-muted-foreground
              file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
            `
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <InputLabel className="rounded-l-0 border-l">{suffix}</InputLabel>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export default Input
