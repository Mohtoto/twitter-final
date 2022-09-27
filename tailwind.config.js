/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './coponents/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        twitter: '#00ADED'
      }
    },
  },
  plugins: [],
}
