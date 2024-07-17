/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#EAE7DC',
      'primary': '#E85A4F',
      'secondary': '#8E8D8A',
      'card':  '#D8C3A5', //not sure where to use card right now
      'border':  '#8E8D8A',
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
}

