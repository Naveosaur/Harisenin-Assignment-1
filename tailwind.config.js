/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        grayDark : '#212529',
        grayLight : '#343a40',
        gray: '#495057',
        grayLighter: '#6c757d',
        middle: '#adb5bd',
        darkWhite: '#ced4da',
        lessDarkWhite: '#dee2e6',
        whiteGray: '#e9ecef',
        white: '#f8f9fa',

      }
    },
  },
  plugins: [],
}
