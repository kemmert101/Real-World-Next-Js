/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [    
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      'keysysBlue': {
        '50': '#f0faff',
        '100': '#e0f3fe',
        '200': '#bae9fd',
        '300': '#7cd9fd',
        '400': '#37c6f9',
        '500': '#0dafea',
        '600': '#0197d6',
        '700': '#0270a2',
        '800': '#065f86',
        '900': '#0b4e6f',
        '950': '#083249',
    },
    ...colors,
    }
  },
  plugins: [],
}

