export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL,
  title: 'Michelangelo Valderrama',
  description: 'Lorem ipsum dolor sit amet...',
  lang: 'es'
}

export const EMAIL = {
  originUrl: SITE.url,
  unsubscribeUrl: SITE.url + '/newsletter/unsubscribe',
  favoriteArticleUrls: [
    SITE.url + '/2023-03-23-las-matematicas-no-son-una-ciencia',
    SITE.url + '/2023-03-07-el-principio-del-universo',
    SITE.url + '/2024-04-14-en-memoria-de-isaac-asimov'
  ],
  from: 'Michelangelo Valderrama <hi@imangelo.dev>'
}

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/michelangelo-v-2a71702b1/',
  github: 'https://github.com/michelangelo-valderrama/',
  portfolio: 'https://portfolio.imangelo.dev/',
  website: SITE.url
}

export const BANNER = {
  url: '/banner.png',
  width: 1200,
  height: 800
}
