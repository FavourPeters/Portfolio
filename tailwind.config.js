/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
    },
    colors: {
      'bgPurple': '#521262',
      'secondary': '#00FFF5',
      'white': '#FFFFFF',
      'h-color': '#4B51D2',
      'lightPurple': '#9747FF',
      'black': '#000000'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

