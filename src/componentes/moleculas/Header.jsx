import HeaderBotao from "../atomo/HeaderBotao";
import PropTypes from "prop-types"
import { tv } from "tailwind-variants";

const Style = tv({ //stylo do componete
  slots:{ //style base
    title:"text-4xl  font-bold",
    paragraph:"text-xl uppercase font-bold",
    number:"text-center  font-bold",
    conteine:"h-7 col-span-3 rounded-full px-2  flex justify-between"

  },
  variants:{//variante de cada tema
    Tema:{
      dark:{
        title:"text-darkTexto" ,
        paragraph:"text-darkTexto",
        number:"text-darkTexto",
        conteine:"bg-darkConteine"
      },
      white:{
        title:"text-whiteTexto" ,
        paragraph:"text-whiteTexto",
        number:"text-whiteTexto",
        conteine:"bg-whiteConteine"
      },
      rock:{
        title:"text-rockTexto",
        paragraph:"text-rockTexto",
        number:"text-rockTexto",
        conteine:"bg-rockConteine"
      }

    }
  }
})
export default function Header({Tema, setTema}) {
    const objetoNumero =  [//para cria div númeradas em cima do menu tema
        {id:1},
        {id:2},
        {id:3},
    ]
  const {title,number,paragraph,conteine}=Style({Tema})//desestruturação dos styles
  
      return (
      <section className="flex justify-between">
        <article className="flex items-center">
          <p className={title({colo:"white"})}>calc</p>
        </article>
        <article className="flex w-1/2 max-w-[170px] justify-between ">
            <div className="flex items-end">
                <p className={paragraph()}>theme</p>
            </div>

          <div className="grid grid-cols-3 w-1/2">
            {objetoNumero.map((e)=>(
                <div key={e.id} className={number()} >{e.id}</div>
            ))}

            <div className={conteine()}>
              <HeaderBotao Tema={Tema} setTema={setTema}/>
            </div>
          </div>
        </article>
      </section>
    );
  }
Header.propTypes = {
    Tema:PropTypes.string,
    setTema:PropTypes.func
}