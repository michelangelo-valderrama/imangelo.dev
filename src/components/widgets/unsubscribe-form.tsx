import { useState } from 'react'
import { actions } from 'astro:actions'

import { MailXIcon } from '@/icons'

import ButtonLoading from '@/components/ui/button-loading'
import InputInlineAddOn from '@/components/ui/input-inline-add-on'
import { useToast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'

function UnsubscribeForm() {
  const { toast } = useToast()
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean | null>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await actions.newsletterUnsubscription({
        email: value
      })

      if (error) throw new Error()

      toast({
        title: 'Operación exitosa.'
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
    <form className="mt-6 flex gap-x-2 w-full items-end" onSubmit={onSubmit}>
      <div className="flex-1">
        <Label htmlFor="email">Correo</Label>
        <InputInlineAddOn
          id="email"
          placeholder="johndoe@gmail.com"
          disabled={!!isLoading}
          className="flex-1"
          type="email"
          value={value}
          onChange={onChange}
          suffix={<MailXIcon />}
        />
      </div>
      <ButtonLoading isLoading={isLoading}>Desuscribirse</ButtonLoading>
    </form>
  )
}

export default UnsubscribeForm
