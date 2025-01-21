import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_6Zga7DDC.mjs';
import { manifest } from './manifest_CcNmpA8B.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/links.astro.mjs');
const _page4 = () => import('./pages/newsletter.astro.mjs');
const _page5 = () => import('./pages/rss.xml.astro.mjs');
const _page6 = () => import('./pages/unsubscribe.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const _page8 = () => import('./pages/_---article_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/links.astro", _page3],
    ["src/pages/newsletter.astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/unsubscribe.astro", _page6],
    ["src/pages/index.astro", _page7],
    ["src/pages/[...article].astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "fa28d8bb-0f88-4076-a6ac-960bffc266dc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
