import { cn } from '@/lib/utils'

import { LoaderCircleIcon } from '@/icons'

import Button, { type ButtonProps } from '@/components/ui/button'

interface ButtonLoadingProps extends ButtonProps {
  isLoading: boolean | undefined | null
}

function ButtonLoading({
  isLoading,
  className,
  disabled,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button
      className={cn('relative', className)}
      disabled={disabled ?? !!isLoading}
      {...props}
    >
      <span
        data-loading={isLoading}
        className={`
          absolute
          mx-auto
          opacity-0
          transition-all
          data-[loading=true]:animate-im-jump-in
          data-[loading=false]:animge-im-jump-out
        `}
      >
        <LoaderCircleIcon className="animate-spin" />
      </span>
      <span
        data-loading={isLoading}
        className={`
          transition-all
          data-[loading=false]:animge-im-jump-in
          data-[loading=true]:animate-im-jump-out
        `}
      >
        {children}
      </span>
    </Button>
  )
}

export default ButtonLoading
