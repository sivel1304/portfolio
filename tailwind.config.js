/** @type {import('tailwindcss').Config} */

export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#8083ff',
      'secondary': '#cc62f2',
      'third': '#ff3c52',
      'backgrund': { 900: '#111111', 800: '#1f1f1f', 700: '#292929' },
      'white': '#faf8ff'
    },
    fontSize: {
      'sm': 'clamp(0.8rem, 0.54vi + 0.67rem, 1.17rem)',
      'base': 'clamp(1rem, 0.81vi + 0.8rem, 1.56rem)',
      'md': 'clamp(1.25rem, 1.2vi + 0.95rem, 2.08rem)',
      'lg': 'clamp(1.56rem, 1.75vi + 1.13rem, 2.78rem)',
      'xl': 'clamp(1.95rem, 2.52vi + 1.32rem, 3.7rem)',
      '2xl': 'clamp(2.44rem, 3.59vi + 1.54rem, 4.93rem)',
      '3xl': 'clamp(3.05rem, 5.08vi + 1.78rem, 6.58rem)'
    },
    fontFamily: {
      'inter': ['Inter', 'PP Neue Montreal Book', 'sans-serif'],
      'pp': ['PP Neue Montreal Book', 'Inter', 'sans-serif'],
    },
    animation: {
      'text-roll': 'textRoll 15s linear infinite',
    },
    keyframes: {
      textRoll: {
        from: { transform: 'translateX(0%)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
  plugins: [],
}

/* --fs-sm: clamp(0.8rem, 0.54vi + 0.67rem, 1.17rem);
--fs-base: clamp(1rem, 0.81vi + 0.8rem, 1.56rem);
--fs-md: clamp(1.25rem, 1.2vi + 0.95rem, 2.08rem);
--fs-lg: clamp(1.56rem, 1.75vi + 1.13rem, 2.78rem);
--fs-xl: clamp(1.95rem, 2.52vi + 1.32rem, 3.7rem);
--fs-2xl: clamp(2.44rem, 3.59vi + 1.54rem, 4.93rem); */

