import type { Config } from 'tailwindcss'

const config: Config = {
  content:[
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'lobster': ['Lobster Two', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
         
      },
      colors: {
        'search-gray': '#505050',
        'greenlanding': '#143109',
        'orangelanding': '#D5573B',

      },
      fontSize: {
        'special': ['2.7em', {
          lineHeight: '2.7rem',
        }],
        'veryspecial': ['2.2em', {
          lineHeight: '2.2rem',
        }],
        'special2': ['1rem', {
          lineHeight: '1.1rem',
        }],
        'special3': ['3.5rem', {
          lineHeight: '1',
        }],
        'special4': ['5.25rem', {
          lineHeight: '1',
        }],
      },
      screens: {
        'weird': '800px',
        'weird2': '630px',
        'weird3': '700px',
        'weird4': '800px',
        'weird5': '900px',
      
      },

      height: {
        'img': '200px',
      },
      minWidth: {
        'img': '8rem',
      },
      backgroundImage: {
        'hero': "url('container/Header/bgImg.png')"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'unusual': 'repeat(auto-fit, minmax(20rem, 1fr))'},
    },
  },
  plugins: [require("daisyui")],
}
export default config
