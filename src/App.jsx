import { tv } from "tailwind-variants"
import { useState } from "react"
import Header from "./componentes/moleculas/Header"
import Main from "./componentes/moleculas/Main"

const classMain = tv({
  base:"font-fontPadrao p-5  w-screen h-screen flex justify-center",
  variants:{
    color:{
      dark:"bg-darkPrincipal",
      white:"bg-whitePrincipal",
      rock:"bg-rockPrincipal"
    }
  }
})
export default function App() {
  const [tema,setTema] = useState("dark")
  return (
    <>
      <main className={classMain({color:[tema]})}>
        <section className=" w-full max-w-[450px]  my-auto ">
          <Header Tema={tema} setTema={setTema}/>
          <Main Tema={tema} setTema={setTema}/>
        </section>
      </main>
    </>
  )
}


