/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        branco:"#e9e3dc",
        red1:"#d13f30",
        cinza1:"#627398",
        cinza2:"#3b4664",
        cinza3:"#252d44",
        cinza4:"#191f32"
      },
      fontFamily:{
        fontPadrao:" 'League Spartan', sans-serif "
      },
      colors:{
        branco:"#e9e3dc"
      }
    },
  },
  plugins: [],
}

