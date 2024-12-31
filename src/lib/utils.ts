import {
  getCollection,
  type CollectionEntry,
  type ContentCollectionKey
} from 'astro:content'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getFilteredPosts(
  contentCollectionType: ContentCollectionKey
): Promise<CollectionEntry<ContentCollectionKey>[]> {
  return await getCollection(contentCollectionType, ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
}

export function groupBy<K extends PropertyKey, T>(
  items: Array<T>,
  keySelector: (item: T, index: number) => K
): Partial<Record<K, T[]>> {
  return items.reduce<Partial<Record<K, T[]>>>((prev, curr, index) => {
    const key = keySelector(curr, index)

    if (prev[key]) {
      prev[key].push(curr)
    } else {
      prev[key] = [curr]
    }

    return prev
  }, {})
}

export async function copyToClipboard(txt: string) {
  let ok = false

  try {
    await navigator.clipboard.writeText(txt)
    ok = true
  } catch (error) {
    const p = document.createElement('p')
    p.textContent = txt
    document.body.appendChild(p)

    const range = document.createRange()
    range.selectNode(p)
    const selection = getSelection()
    if (!selection) return false
    selection.removeAllRanges()
    selection.addRange(range)

    try {
      ok = document.execCommand('copy')
    } finally {
      selection.removeAllRanges()
      document.body.removeChild(p)
    }
  } finally {
    return ok
  }
}

export function validEmail(str: string) {
  return z.string().email().safeParse(str).success
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function imageToBase64(url: string): Promise<string> {
  let res: (value: unknown) => void
  let rej: (reason?: any) => void

  const p = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })

  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = url

  img.onload = () => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    canvas.height = img.naturalHeight
    canvas.width = img.naturalWidth
    ctx.drawImage(img, 0, 0)

    const uri = canvas.toDataURL('image/png'),
      b64 = uri.replace(/^data:image.+;base64,/, '')

    res(b64)
  }

  img.onerror = (e) => rej(e)

  return p as Promise<string>
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.download = filename
  a.click()
  a.remove()
}
