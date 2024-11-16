import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `
    inline-flex items-center justify-center
    whitespace-nowrap
    rounded-md
    text-sm font-medium
    transition-colors duration-300
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    disabled:pointer-events-none disabled:op-50
  `,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow hover:bg-op-80',
        outline: `
          border bg-background text-muted-foreground
          hover:bg-accent hover:text-accent-foreground
        `,
        ghost:
          'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    ></button>
  )
}

Button.displayName = 'Button'

export default Button
