import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#6CE6D2',
        darkblue: '#0C1730'
      },
      boxShadow: {
        soft: '0 20px 40px rgba(12, 23, 48, 0.12)'
      }
    }
  },
  daisyui: {
    themes: [
      {
        denti: {
          primary: '#2BC6B7',
          secondary: '#0C1730',
          accent: '#6CE6D2',
          neutral: '#132039',
          'base-100': '#ffffff',
          info: '#7FDDE2',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#DC2626'
        }
      },
      'light'
    ]
  },
  plugins: [require('daisyui')]
} satisfies Config
