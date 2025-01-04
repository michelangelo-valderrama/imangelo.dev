/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: 'var(--im-layout-px)',
        screens: {
          xs: '568px'
        }
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--im-background))',
          contrast: 'hsl(var(--im-background-contrast))'
        },
        foreground: 'hsl(var(--im-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--im-primary))',
          foreground: 'hsl(var(--im-primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--im-secondary))',
          foreground: 'hsl(var(--im-secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--im-accent))',
          foreground: 'hsl(var(--im-accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--im-muted))',
          foreground: 'hsl(var(--im-muted-foreground))'
        },
        heart: 'hsl(var(--im-heart))',
        danger: {
          DEFAULT: 'hsl(var(--im-danger))',
          foreground: 'hsl(var(--im-danger-foreground))',
          tint: 'hsl(var(--im-danger-tint))'
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
          foreground: 'hsl(var(--im-input-foreground))',
          border: 'hsl(var(--im-input-border))'
        },
        footer: {
          DEFAULT: 'hsl(var(--im-footer))'
        },
        tooltip: {
          DEFAULT: 'hsl(var(--im-tooltip))'
        },
        border: 'hsl(var(--im-border))',
        ring: 'hsl(var(--im-ring))'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'im-slide-to-right': {
          from: {
            zIndex: '-10',
            opacity: '0',
            pointerEvents: 'none',
            marginLeft: '-100%'
            // transform: 'translateX(-100%)'
          },
          '70%': {
            opacity: '0'
          },
          to: {
            zIndex: '0',
            opacity: '1',
            pointerEvents: 'auto',
            marginLeft: '0'
            // transform: 'translateX(0)'
          }
        },
        'im-slide-to-left': {
          from: {
            zIndex: '0',
            opacity: '1',
            pointerEvents: 'auto',
            marginLeft: '0'
            // transform: 'translateX(0)'
          },
          '30%': {
            opacity: '0'
          },
          to: {
            zIndex: '-10',
            opacity: '0',
            pointerEvents: 'none',
            marginLeft: '-100%'
            // transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'im-slide-to-right': 'im-slide-to-right 0.2s ease-out forwards',
        'im-slide-to-left': 'im-slide-to-left 0.2s ease-out forwards'
      },
      screens: {
        xs: '568px'
      },
      fontFamily: {
        sans: 'var(--im-sans)',
        mono: 'var(--im-mono)'
      },
      borderRadius: {
        lg: 'calc(var(--im-radius) + 2px)',
        md: 'var(--im-radius)',
        sm: 'calc(var(--im-radius) - 2px)'
      },
      padding: {
        'layout-px': 'var(--im-layout-px)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ]
}
