/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit-bold': ['Outfit-Bold'],
        'outfit': ['Outfit-Regular'],
      },
      height: {
        '500px': '500px',  // Add custom height of 500px
      },
    },
  },
  plugins: [],
}

