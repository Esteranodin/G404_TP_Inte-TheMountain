/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./index.html"],

  theme: {
    container:{
      // padding: {
        //   DEFAULT: '1rem',
        //   sm: '2rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
    },
    extend: {
      colors: {
        button: {
          'blue': 'hsl(180, 57, 49)',
          'red': 'hsl(345, 91, 55)',
        },

        flat: {
          'blue': 'hsl(199, 64, 73)',
          'cream': 'hsl(0, 0, 87)',
          'grey': 'hsl(203, 24, 19)',
        },

        fonts: {
          'grey' : 'hsl(0, 0, 87)',
          'blue' : 'hsl(185, 64, 47)',
          'off-white': 'hsl(0, 0, 100)',
        },
      },

      fontFamily: {
        titres: ['Rokkitt', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },

      fontSize: {
        paragraph: '15px',
      },

      backgroundImage: {
        header: "url('../images/bg_header.jpg')",
      }
    },
  },
  plugins: [],
}

