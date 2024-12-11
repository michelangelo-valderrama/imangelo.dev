/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      colors: {
        background: 'hsl(var(--im-background))',
        foreground: 'hsl(var(--im-foreground))',
        header: 'hsl(var(--im-header))',
        primary: {
          DEFAULT: 'hsl(var(--im-primary))',
          foreground: 'hsl(var(--im-primary-foreground))'
        },
        goodbye: {
          DEFAULT: 'hsl(var(--im-goodbye))'
        },
        accent: {
          DEFAULT: 'hsl(var(--im-accent))',
          foreground: 'hsl(var(--im-accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--im-muted))',
          foreground: 'hsl(var(--im-muted-foreground))'
        },
        danger: {
          DEFAULT: 'hsl(var(--im-danger))',
          foreground: 'hsl(var(--im-danger-foreground))',
          tint: 'hsl(var(--im-danger-tint))'
        },
        success: {
          DEFAULT: 'hsl(var(--im-success))',
          foreground: 'hsl(var(--im-success-foreground))'
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
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
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
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ]
}
