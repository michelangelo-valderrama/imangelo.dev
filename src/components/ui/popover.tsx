import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `
          z-50 w-72 p-4
          rounded-md border border-border
          bg-popover text-popover-foreground
          shadow outline-none
          data-[state=open]:animate-fade-in
          data-[state=open]:animate-zoom-in
          data-[state=closed]:animate-fade-out
          data-[state=closed]:animate-zoom-out
          data-[state]:animate-duration-100
          data-[state]:animate-ease
        `,
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))

PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverSeparator = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) => {
  return <hr className={cn('my-2 mx-2', className)} {...props} />
}

PopoverSeparator.displayName = 'Popover Separator'

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverSeparator
}
