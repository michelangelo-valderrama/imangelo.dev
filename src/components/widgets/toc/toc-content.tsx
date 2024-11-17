import type { MarkdownHeading } from 'astro'
import TocLink from './toc-link'

interface Props {
  headings: MarkdownHeading[]
}

function TocContent({ headings }: Props) {
  return (
    <>
      {headings.map(({ slug, text, depth }, i) => {
        if (depth > 2) return
        return (
          <li key={i}>
            <TocLink slug={slug}>{text}</TocLink>
          </li>
        )
      })}
    </>
  )
}

export default TocContent
