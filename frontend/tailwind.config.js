/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        bgNav: '#001529'
      },
      screens: {
        '3xl': '1700',
        'xl':'1280px',
        'lg': '1024px',
        'md':'768px',
        'sm':'640px'
      }
    },
  },
  plugins: [],
}
