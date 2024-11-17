export const $ = <T extends HTMLElement>(s: string, root?: HTMLElement) =>
  (root ?? document).querySelector<T>(s)

export const $$ = <T extends HTMLElement>(s: string, root?: HTMLElement) =>
  (root ?? document).querySelectorAll<T>(s)
