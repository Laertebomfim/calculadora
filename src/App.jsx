import { tv } from "tailwind-variants"
import { useState } from "react"
import Header from "./componentes/moleculas/Header"
import Main from "./componentes/moleculas/Main"
function App() {
  const [tema,setTema] = useState(1)
  

  return (
    <>
      <main className="font-fontPadrao p-5 bg-cinza2 w-screen h-screen">
        <section className="max-w-[350px]" >
          <Header/>
          <Main/>
        </section>
      </main>
    </>
  )
}

export default App
