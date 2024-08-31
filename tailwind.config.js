/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit-bold': ['Outfit-Bold'],
        'outfit': ['Outfit-Regular'],
        'outfit-medium': ['Outfit-Medium'],
      },
      height: {
        '500px': '500px',  // Add custom height of 500px
      },
      colors: {
        primary: '#E8B920',
        gray: '#8F8E8D',
        white:'#FFFFFF',
      },
    },
  },
  plugins: [],
}

