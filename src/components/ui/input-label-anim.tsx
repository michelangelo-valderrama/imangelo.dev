import Input from '@/components/ui/input'

export type InputLabelAnimProps = React.ComponentProps<'input'> & {
  placeholder: string
  id: string
}

function InputLabelAnim({ placeholder, id, ...props }: InputLabelAnimProps) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className={`
          origin-start
          absolute
          top-1/2
          block
          -translate-y-1/2
          cursor-text
          px-1
          text-sm
          text-muted-foreground/70
          transition-all duration-base
          
          group-focus-within:pointer-events-none
          group-focus-within:top-0
          group-focus-within:cursor-default
          group-focus-within:text-xs
          group-focus-within:font-medium
          group-focus-within:text-foreground
          
          has-[+input:not(:placeholder-shown)]:pointer-events-none
          has-[+input:not(:placeholder-shown)]:top-0
          has-[+input:not(:placeholder-shown)]:cursor-default
          has-[+input:not(:placeholder-shown)]:text-xs
          has-[+input:not(:placeholder-shown)]:font-medium
          has-[+input:not(:placeholder-shown)]:text-foreground
        `}
      >
        <span className="inline-flex bg-background px-2">{placeholder}</span>
      </label>
      <Input id={id} placeholder="" {...props} />
    </div>
  )
}

export default InputLabelAnim
