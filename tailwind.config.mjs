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
          xs: '564px',
          view: '564px'
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
          foreground: 'hsl(var(--im-popover-foreground))'
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
          },
          '70%': {
            opacity: '0'
          },
          to: {
            zIndex: '0',
            opacity: '1',
            pointerEvents: 'auto',
            marginLeft: '0'
          }
        },
        'im-slide-to-left': {
          from: {
            zIndex: '0',
            opacity: '1',
            pointerEvents: 'auto',
            marginLeft: '0'
          },
          '30%': {
            opacity: '0'
          },
          to: {
            zIndex: '-10',
            opacity: '0',
            pointerEvents: 'none',
            marginLeft: '-100%'
          }
        },
        'im-jump-in': {
          from: {
            opacity: '0',
            scale: '0'
          },
          to: {
            opacity: '1',
            scale: '1'
          }
        },
        'im-jump-out': {
          from: {
            opacity: '1',
            scale: '1'
          },
          to: {
            opacity: '0',
            scale: '0'
          }
        }
      },
      animation: {
        'accordion-down':
          'accordion-down var(--im-duration-base) var(--im-timing-fn)',
        'accordion-up':
          'accordion-up var(--im-duration-base) var(--im-timing-fn)',
        'im-slide-to-right':
          'im-slide-to-right var(--im-duration-base) var(--im-timing-fn) forwards',
        'im-slide-to-left':
          'im-slide-to-left var(--im-duration-base) var(--im-timing-fn) forwards',
        'im-jump-in':
          'im-jump-in var(--im-duration-base) var(--im-timing-fn) forwards',
        'im-jump-out':
          'im-jump-out var(--im-duration-base) var(--im-timing-fn) forwards'
      },
      screens: {
        xs: 'var(--im-screen-xs)',
        view: 'var(--im-screen-view)'
      },
      fontFamily: {
        sans: 'var(--im-sans)',
        mono: 'var(--im-mono)'
      },
      borderRadius: {
        lg: 'var(--im-radius-lg)',
        md: 'var(--im-radius-md)',
        sm: 'var(--im-radius-sm)'
      },
      padding: {
        'layout-px': 'var(--im-layout-px)'
      },
      transitionDuration: {
        lg: 'var(--im-duration-lg)',
        base: 'var(--im-duration-base)',
        sm: 'var(--im-duration-sm)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ]
}
