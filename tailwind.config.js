/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        //tema dark
        darkPrincipal:"hsl(222, 26%, 31%)",//main fondo
        darkConteine:"hsl(223, 31%, 20%)",//fudo "menu é calculadora"
        darkTela:"hsl(224, 36%, 15%)",//tela resultado
        darkBotãoNumbe:"hsl(45, 7%, 89%)",//botões numeros
        darkBotãoTexte:"hsl(225, 21%, 49%)",//cor dos botões "reset, del"
        darkBotão:"hsl(25, 99%, 37%)",//botão "="
        darkHoverB:"hsl(25, 98%, 45%)",//hover botão "=" 
        darkHoverBT:"hsl(225, 21%, 60%)",//hover cor dos botões "reset, del"
        //tema white
        whitePrincipal:" hsl(0, 0%, 90%)",//main fondo
        whiteConteine:" hsl(0, 5%, 81%)",//fudo "menu é calculadora"
        whiteTela:"hsl(0, 0%, 93%)",//tela resultado
        whiteBotãoNumbe:"hsl(45, 7%, 89%)",//botões numeros
        whiteBotãoTexte:"hsl(185, 58%, 35%)",//cor dos botões "reset, del"
        whiteBotão:" hsl(6, 63%, 50%)",//botão "="
        whiteHoverB:"hsl(25, 98%, 50%)",//hover botão "=" 
        whiteHoverBT:"hsl(185, 42%, 47%)",//hover cor dos botões "reset, del"
        //tema rock
        rockPrincipal:"hsl(268, 75%, 9%)",//main fondo
        rockConteine:"hsl(268, 71%, 15%)",//fudo "menu é calculadora"
        rockTela:"hsl(268, 71%, 15%)",//tela resultado
        rockBotãoNumbe:"hsl(268, 47%, 21%)",//botões numeros
        rockBotãoTexte:"hsl(281, 89%, 26%)",//cor dos botões "reset, del"
        rockBotão:" hsl(176, 100%, 44%)",//botão "="
        rockHoverB:"hsl(177, 92%, 70%)",//hover botão "=" 
        rockHoverBT:"hsl(281, 89%, 36%)",//hover cor dos botões "reset, del"
        rockHoverN:"hsl(290, 70%, 36%)",//hover botões numeros
      },
      fontFamily:{
        fontPadrao:" 'League Spartan', sans-serif "
      },
      colors:{
        //tema dark
        darkTexto:" hsl(30, 25%, 89%)",//texto
        darkNumber:"hsl(60, 10%, 19%)",//cor números
        darkBordeB:"hsl(35, 11%, 61%)",//bordas dos números botãos 
        darkBordeBT:"hsl(225, 21%, 39%)",//border dos botões "reset, del
        darkBordaI:"hsl(25, 99%, 27%)",//borda do botão igual
        //teme white
        whiteTexto:"hsl(0, 0%, 30%)",//texto
        whileNumber:"hsl(60, 10%, 19%)",//cor números
        whiteBordeB:"hsl(35, 11%, 61%)",//bordas dos números botãos 
        whiteBordeBT:"hsl(185, 58%, 25%)",//border dos botões "reset, del
        whiteBordaI:"hsl(25, 99%, 27%)",//borda do botão igual
        //tema rock
        rockTexto:"hsl(52, 100%, 62%)",//texto
        rockNumber:"hsl(60, 10%, 19%)",//cor números
        rockBordeB:"hsl(268, 47%, 31%)",//bordas dos números botãos 
        rockBordeBT:"hsl(285, 91%, 52%)",//border dos botões "reset, del
        rockBordaI:"hsl(176, 100%, 54%)",//borda do botão igual
      }
    },
  },
  plugins: [],
}

