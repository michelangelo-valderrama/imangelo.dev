import {
  getCollection,
  type CollectionEntry,
  type ContentCollectionKey
} from 'astro:content'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
