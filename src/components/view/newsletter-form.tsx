import { useState } from 'react'
import { actions } from 'astro:actions'

import { AtSignIcon, LoaderCircleIcon } from '@/icons'

import { validEmail } from '@/lib/utils'

import Input from '@/components/ui/input'
import Button from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

function NewsletterForm() {
  const { toast } = useToast()
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
    setIsValid(validEmail(e.target.value))
  }

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await actions.newsletterSubscription({
        email: value
      })

      if (error) throw new Error()

      toast({
        variant: 'success',
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
      setLoading(false)
      setValue('')
    }
  }

  return (
    <form className="mt-6 flex gap-x-2 w-full" onSubmit={onSubmit}>
      <Input
        disabled={loading}
        className="flex-1 h-9.5"
        placeholder="correo@gmail.com"
        type="email"
        value={value}
        onChange={onChange}
        /* @ts-ignore */
        prefix={<AtSignIcon className="size-4" />}
      />
      <Button type="submit" disabled={!isValid || loading}>
        {loading && <LoaderCircleIcon className="size-4 mr-1 animate-spin" />}
        Suscribirse
      </Button>
    </form>
  )
}

export default NewsletterForm
