import { useState } from 'react'
import { actions } from 'astro:actions'

import { LoaderCircleIcon, MailIcon } from '@/icons'

import { cn, sleep, validEmail } from '@/lib/utils'

import Button from '@/components/ui/button'
import InputInlineAddOn from '@/components/ui/input/input-inline-add-on'
import { useToast } from '@/components/ui/use-toast'

function NewsletterForm() {
  const { toast } = useToast()
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean | null>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
    setIsValid(validEmail(e.target.value))
  }

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await actions.newsletterSubscription({
        email: value
      })

      if (error) throw new Error()

      toast({
        title: 'Operación exitosa.',
        description: '¡Gracias por suscribirte! 🎉'
      })
    } catch (error) {
      toast({
        variant: 'danger',
        title: 'Error inesperado.',
        description: 'Vuelva a intentarlo más tarde.'
      })
    } finally {
      setIsLoading(false)
      setValue('')
    }
  }

  return (
    <form className="mt-6 flex gap-x-2 w-full" onSubmit={onSubmit}>
      <InputInlineAddOn
        placeholder="johndoe@gmail.com"
        disabled={!!isLoading}
        className="flex-1"
        type="email"
        value={value}
        onChange={onChange}
        suffix={<MailIcon />}
      />
      <Button
        className="relative"
        type="submit"
        disabled={!isValid || !!isLoading}
      >
        <span
          data-show={isLoading}
          className={`
            absolute
            mx-auto
            opacity-0
            transition-all
            data-[show=true]:animate-im-jump-in
            data-[show=false]:animge-im-jump-out
          `}
        >
          <LoaderCircleIcon className="animate-spin" />
        </span>
        <span
          data-hidden={isLoading}
          className={`
            transition-all
            data-[hidden=true]:animate-im-jump-out
            data-[hidden=false]:animge-im-jump-in
          `}
        >
          Suscribirse
        </span>
      </Button>
    </form>
  )
}

export default NewsletterForm
