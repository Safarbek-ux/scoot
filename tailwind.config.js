/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lexenDeca' : ['Lexend Deca', 'sans-serif'],
        'spcaeMono' : ['Space Mono', 'monospace'],
      },
      colors :{
        'scoot' :{
          'yellow' : '#FCB72B',
          'darkNavy' : '#495567',
          'dimGrey' : '#939CAA',
          'lightGrey' : '#E5ECF4',
          'snow' : 'rgb(242,245,249)',
          'lightYellow' : '#FFF4DF',
        },
      }
    },
  },
  plugins: [],
}

