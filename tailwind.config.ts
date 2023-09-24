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
      "bg": 'animatedgradientwithtilt 30s ease infinite alternate',
      'text-bg': 'animatedgradient 10s ease infinite alternate',
      "meteor-effect": "meteor 300s linear infinite",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "ping": "ping 2s linear infinite",
      "logo-wall": "logo 60s linear infinite"
    },
    keyframes: {
      // hero image slant animation
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "0.5" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0.1",
        },
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
      "image-glow": {
        "0%": {
          opacity: "0",
          "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
        },
        "10%": {
          opacity: "1",
          "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
        },
        "100%": {
          opacity: "0.2",
        },
      },
      animatedgradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
      animatedgradientwithtilt: {
        '0%': {
          backgroundPosition: '0% 50%',
          transform: 'rotate(0deg)'
        },
        '25%': {
          transform: 'rotate(0.5deg)',
        },
        '50%': {
          backgroundPosition: '100% 50%',
          transform: 'rotate(0deg)'
        },
        '75%': {
          transform: 'rotate(-0.5deg)',
        },
        '100%': {
          backgroundPosition: '0% 50%',
          transform: 'rotate(0deg)'
        },
      },
      ping: {
        '50%': {
          transform: "scale(1.5)"
        },
        '75%, 100%': {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      logo: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" }
      }
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
        'lime-bg': '#A4FF00',
        'card-inner-div': '#383838'
      },
      backgroundImage: {
        'star-pattern': "url('/star-bg.svg')",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(21,89,46, 0.3), transparent)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "section-gradient":
          "radial-gradient(50% 50% at 50% 50%,rgb(197 52 211 / 20%) 0%,rgba(171,171,171,0) 100%)",
        "card-gradient-green":
          "linear-gradient(220deg, rgba(21, 28, 28, 0.51) 68.8%, #4D6B1F 104.79%)",
        "inside-card": "linear-gradient(175deg, #0F1414 4.38%, #1B240B 340.68%)"
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
export default config
