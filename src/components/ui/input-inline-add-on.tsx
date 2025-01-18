import { cn } from '@/lib/utils'

import Input from '@/components/ui/input'

export type InputInlineAddOnProps = Omit<
  React.ComponentProps<'input'>,
  'prefix'
> & {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

function InlineAddOn({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        `
          pointer-events-none
          absolute inset-y-0
          flex items-center justify-center
          text-muted-foreground/80
          peer-focus-visible:text-foreground
          peer-disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  )
}

function InputInlineAddOn({
  className,
  prefix,
  suffix,
  ...props
}: InputInlineAddOnProps) {
  return (
    <div className={cn('relative', className)}>
      {prefix && <InlineAddOn className="start-0 ps-3">{prefix}</InlineAddOn>}
      <Input
        className={cn('peer', {
          'ps-9': prefix,
          'pe-9': suffix
        })}
        {...props}
      />
      {suffix && <InlineAddOn className="end-0 pe-3">{suffix}</InlineAddOn>}
    </div>
  )
}

export default InputInlineAddOn
