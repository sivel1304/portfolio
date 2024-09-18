/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#8083ff',
      'secondary': '#cc62f2',
      'third': '#ff3c52',
      'backgrund': { 900: '#111111', 800: '#1f1f1f', 700: '#292929' }
    },
    fontSize: {
      '2xl': '61px',
      '3xl': '78px',
      '4xl': '99px',
      '5xl': '126px',
    }
  },
  plugins: [],
}

