/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#B8A385',  //darker brown
      'primary': '#D76356',     //button color orange
      'secondary': '#292727',   //not used
      'card':  '#D8C3A5',       //little LIGHT brown
      'border':  '#8E8D8A',     //idk
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
}

