export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL,
  title: 'Michelangelo Valderrama',
  description:
    'Desarrollador apacionado por la ciencia y el arte que busca nuevas formas de pensar en la web.',
  lang: 'es'
}

export const EMAIL = {
  originUrl: SITE.url,
  unsubscribeUrl: SITE.url + '/newsletter/unsubscribe',
  favoriteArticleUrls: [
    SITE.url + '/las-matematicas-no-son-una-ciencia',
    SITE.url + '/el-principio-del-universo',
    SITE.url + '/en-memoria-de-isaac-asimov'
  ],
  from: 'Michelangelo Valderrama <hi@imangelo.dev>'
}

export const AUTHOR = {
  fullName: 'Michelangelo Valderrama Vivanco',
  workCompany: 'IF7SPORTS',
  jobTitle: 'Desarrollador FullStack',
  twitter: '@imangelo84'
}

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/michelangelo-v-2a71702b1/',
  github: 'https://github.com/michelangelo-valderrama/',
  twitter: 'https://x.com/imangelo84/',
  portfolio: 'https://portfolio.imangelo.dev/',
  website: SITE.url
}

export const BANNER = {
  src: SITE.url + '/banner.png',
  width: 1200,
  height: 675,
  alt: SITE.title
}
