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
