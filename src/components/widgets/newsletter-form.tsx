import { useState } from 'react'
import { actions } from 'astro:actions'

import { MailIcon } from '@/icons'

import { validEmail } from '@/lib/utils'

import ButtonLoading from '@/components/ui/button-loading'
import InputInlineAddOn from '@/components/ui/input-inline-add-on'
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
      <ButtonLoading disabled={!isValid || !!isLoading} isLoading={isLoading}>
        Suscribirse
      </ButtonLoading>
    </form>
  )
}

export default NewsletterForm
