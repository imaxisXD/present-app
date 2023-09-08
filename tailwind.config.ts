import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animation: {
      //hero image 
      tilt: 'tilt 10s infinite linear',
      "image-rotate": "image-rotate 1400ms ease forwards",
    },
    keyframes: {
      // hero image slant animation
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      //hero image glow animation
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
    extend: {
      fontFamily: {
        fixel: ["var(--font-fixel)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
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
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(21,89,46, 0.3), transparent)",
      }
    },
  },
  plugins: [],
}
export default config
