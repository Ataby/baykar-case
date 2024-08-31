/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        customCream:'rgb(254, 252,231)',
        customBrown:'#78350F',
        customYellow:'#FBBF24',
        secondCream:'#FEF3C7',
        darkBlue:"#0F172A"
      },
      screens: {
        'custom-md': '866px',
      },
    },
  },
  plugins: [],
}

