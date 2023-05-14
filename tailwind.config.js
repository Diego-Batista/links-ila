/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        'title': ['Roboto', 'cursive'],
        'sub-title': ['Raleway', 'cursive'],
        'sub-title02': ['Sacramento', 'cursive'],
      },
      keyframes: {
        flash: {
          '25%, 40%': { opacity: '0'},
          '50%': { opacity: '1'},
          '50%': { opacity: '0'},
          },
      },
      animation: {
        flash: 'flash 2s infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
