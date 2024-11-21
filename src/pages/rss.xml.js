import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const articles = await getCollection('articles')

  return rss({
    title: 'Michelangelo Valderrama',
    description:
      'Soy un desarrollador que escribe sobre software, ciencia, arte y demás.',
    site: context.site,
    language: 'es-es',
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/article/${article.slug}/`,
      author: 'valderramamichelangelo@gmail.com'
    })),
    customData: `<language>es-es</language>`
  })
}
