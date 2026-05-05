/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          bg:      '#080812',
          surface: '#0f0f1e',
          s2:      '#161628',
          s3:      '#1e1e38',
          s4:      '#252545',
          border:  'rgba(255,255,255,0.07)',
          border2: 'rgba(255,255,255,0.12)',
        },
        accent: {
          DEFAULT: '#e94560',
          dark:    '#c73450',
        },
        brand_blue:   '#4fc3f7',
        brand_green:  '#00d4aa',
        brand_yellow: '#ffd060',
        brand_purple: '#b464ff',
        brand_orange: '#ff8c42',
      },
      animation: {
        'fade-up':   'fadeUp 0.22s ease forwards',
        'fade-in':   'fadeIn 0.18s ease forwards',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: 'translateY(10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
      },
    },
  },
  plugins: [],
}
