/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      main: ['Montserrat', 'sans-serif'],
      sec: ['sans-serif'],
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      green: '#1FC87F',
      soft: '#593DC8',
      sec: '#5036B8',
      ter: '#40299C',
      dark: '#341F87',
      white: '#FFFFFF',
      black: '#000',
      iris: '#7F56D9',
      box: '#352089',
      card: '#9277FB',
      cardsec: '#4B2FB7',
    },
  },
  plugins: [],
};
