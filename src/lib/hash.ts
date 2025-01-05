import { createHash } from 'node:crypto'

export async function hash(message: string) {
  const $hash = createHash('sha256')
  return $hash.update(message).digest('hex')
}
