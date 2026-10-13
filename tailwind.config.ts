import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        solid: 'var(--solid)',
        'on-solid': 'var(--on-solid)',
        slab: {
          DEFAULT: 'var(--slab)',
          fg: 'var(--slab-fg)',
          muted: 'var(--slab-muted)',
        },
        accent: {
          DEFAULT: '#FF5B04',
          deep: '#D94A00',
          soft: '#FFB27F',
          tint: '#FFE2D2',
          ink: '#1A0C04',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        15: '3.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
