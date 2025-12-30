/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%':    { 'background-position': '100% 50%' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 6s ease infinite',
      },
      backgroundSize: {
        '150': '150px',
      },
      fontFamily:{
        display: ['Rajdhani','sans-serif'],
      },
    },
  },
  plugins: [],
}
