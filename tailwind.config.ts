import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EFE7',
        'paper-2': '#EAE6DB',
        ink: '#0A1A3F',
        'ink-2': '#0F2657',
        blue: {
          DEFAULT: '#2D5BFF',
          deep: '#1A3DD9',
          soft: '#9DB6FF',
        },
        sky: '#DCE5FF',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widish: '0.18em',
      },
      spacing: {
        15: '3.75rem', // 60px — fills in the gap between 14 (56px) and 16 (64px)
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        22: '0.22',
        72: '0.72',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      keyframes: {
        ping2: {
          '0%': { transform: 'scale(.7)', opacity: '.9' },
          '80%,100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-15px) scale(1.08)' },
          '66%': { transform: 'translate(-15px,20px) scale(.95)' },
        },
        blink: { '50%': { opacity: '0' } },
        spin6: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        ping2: 'ping2 1.8s cubic-bezier(0,0,.2,1) infinite',
        float: 'float 12s ease-in-out infinite',
        blink: 'blink 1s steps(2) infinite',
        spin6: 'spin6 6s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
