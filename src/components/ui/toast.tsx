'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, toast } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `
              group toast p-3
              group-[.toaster]:bg-background
              group-[.toaster]:text-foreground
              group-[.toaster]:border-border
              group-[.toaster]:shadow
            `,
          description: 'group-[.toast]:text-popover-muted-foreground',
          actionButton:
            'group-[.toast]:bg-accent group-[.toast]:text-accent-foreground',
          cancelButton:
            'group-[.toast]:bg-popover-muted group-[.toast]:text-foreground',
          title: 'text-sm',
          icon: '*:size-4 mr-0 ml-1'
        }
      }}
      {...props}
    />
  )
}

export default Toaster
export { toast }
