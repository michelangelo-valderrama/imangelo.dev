import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno, presetTypography],
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: {
        background: 'hsl(var(--im-background))',
        foreground: 'hsl(var(--im-foreground))',
        header: 'hsl(var(--im-header))',
        primary: {
          DEFAULT: 'hsl(var(--im-primary))',
          foreground: 'hsl(var(--im-primary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--im-accent))',
          foreground: 'hsl(var(--im-accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--im-muted))',
          foreground: 'hsl(var(--im-muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--im-popover))',
          foreground: 'hsl(var(--im-popover-foreground))',
          muted: {
            DEFAULT: 'hsl(var(--im-popover-muted))',
            foreground: 'hsl(var(--im-popover-muted-foreground))'
          },
          accent: {
            DEFAULT: 'hsl(var(--im-popover-accent))',
            foreground: 'hsl(var(--im-popover-accent-foreground))'
          },
          border: 'hsl(var(--im-popover-border))'
        },
        input: {
          DEFAULT: 'hsl(var(--im-input))',
          foreground: 'hsl(var(--im-input-foreground))'
        },
        border: 'hsl(var(--im-border))',
        ring: 'hsl(var(--im-ring))',
        ...theme.colors
      },
      breakpoints: {
        xs: '568px',
        ...theme.breakpoints
      },
      fontFamily: {
        sans: 'var(--im-sans)',
        mono: 'var(--im-mono)'
      },
      borderRadius: {
        lg: 'calc(var(--im-radius) + 2px)',
        md: 'var(--im-radius)',
        sm: 'calc(var(--im-radius) - 2px)'
      }
    }
  },
  shortcuts: [
    [
      /^size-(\d+)$/,
      ([, s]) => `w-${s} h-${s}`,
      {
        autocomplete: 'size-<num>'
      }
    ]
  ]
})
