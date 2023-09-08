import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 5s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
      colors: {
        'background': '#0F1414',
        'outline-gray': '#3A3A3A',
        'dark-green': '#222F0A',
        'light-green': '#C0F560',
        'lime-bg': '#A4FF00'
      },
      backgroundImage: {
        'star-pattern': "url('/star-bg.svg')",
      }
    },
  },
  plugins: [],
}
export default config
