import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: 'Michelangelo',
    description: '...',
    site: context.site,
    items: [], // TODO: add articles
    customData: `<language>es-es</language>`,
  });
}
