import fs from 'node:fs'

import { defineEcConfig, ExpressiveCodeTheme } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

const jsonString = fs.readFileSync(
  new URL('./themes/ayu-light.json', import.meta.url),
  'utf-8'
)
const ayuLightTheme = ExpressiveCodeTheme.fromJSONString(jsonString)

export default defineEcConfig({
  /* Theme */
  themes: [ayuLightTheme],

  /* Plugins */
  plugins: [pluginLineNumbers()],

  /* Basics */
  defaultLocale: 'es-ES',
  defaultProps: {
    showLineNumbers: true,
    wrap: false
  },
  minSyntaxHighlightingColorContrast: 0
})
