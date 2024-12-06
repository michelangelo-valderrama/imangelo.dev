import { useState } from 'react'

import { AtSignIcon } from '@/icons'

import { validEmail } from '@/lib/utils'

import Input from '@/components/ui/input'
import Button from '@/components/ui/button'

function NewsletterForm() {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
    setIsValid(validEmail(e.target.value))
  }

  return (
    <form action="" className="mt-6 flex gap-x-2 w-full">
      <Input
        className="flex-1 h-9.5"
        placeholder="correo@gmail.com"
        type="email"
        value={value}
        onChange={onChange}
        /* @ts-ignore */
        prefix={<AtSignIcon className="size-4" />}
      />
      <Button disabled={!isValid} type="submit">
        Suscribirse
      </Button>
    </form>
  )
}

export default NewsletterForm
