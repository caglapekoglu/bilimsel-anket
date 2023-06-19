/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    fontFamily:{
      'poppins':['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#226CE0',
        'greyText':'#828282'
      }
    },
  },
  plugins: [],
}
