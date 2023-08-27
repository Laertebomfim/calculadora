import { useState } from "react";
import PropTypes from "prop-types"
import NumarosMain from "../atomo/NumarosMain";
import  fun from "../../funCauculadora/funçoes"
import OperadoMain from "../atomo/OperadoMain";
import { tv } from "tailwind-variants";
const Style = tv({
    slots:{ //style base
        Exibir:"h-16 rounded-lg text-4xl font-bold  p-4 text-right my-8  overflow-hidden",
        calculadora:" p-6 rounded-xl ",
        del:"",
        reset:"col-span-2",
        igual:"col-start-3 col-span-2",
        virgula:"",
    },
    variants:{ //variantes
        Tema:{
            dark:{
                Exibir:"bg-darkTela text-darkTexto",
                calculadora:"bg-darkConteine",
                del:"bg-darkBotãoTexte hover:bg-darkHoverBT border-darkBordeBT",
                reset:"bg-darkBotãoTexte hover:bg-darkHoverBT border-darkBordeBT",
                igual:"bg-darkBotão hover:bg-darkHoverB border-darkBordaI text-white",
                virgula:"bg-darkBotãoNumbe border-darkBordeB "
            },
            white:{
                Exibir:"bg-whiteTela text-whileNumber",
                calculadora:"bg-whiteConteine",
                del:"bg-whiteBotãoTexte hover:bg-whiteHoverBT border-whiteBordeBT",
                reset:"bg-whiteBotãoTexte hover:bg-whiteHoverBT border-whiteBordeBT",
                igual:"bg-whiteBotão hover:bg-whiteHoverB border-whiteBordaI text-white",
                virgula:"text-whileNumber border-whiteBordeB bg-whiteBotãoNumbe"
            },
            rock:{
                Exibir:"bg-rockTela text-rockTexto",
                calculadora:"bg-rockConteine",
                del:"bg-rockBotãoTexte hover:bg-rockHoverBT border-rockBordeBT",
                reset:"bg-rockBotãoTexte hover:bg-rockHoverBT border-rockBordeBT",
                igual:"bg-rockBotão hover:bg-rockHoverB border-rockBordaI",
                virgula:"text-rockTexto border-rockBordeB bg-rockBotãoNumbe hover:bg-rockHoverN" 
            }
        }
    },
    compoundSlots:[//para não repetir o mesmo sytle
        {
            slots:["igual","reset","del","virgula"],
            class:"flex justify-center items-center rounded-lg uppercase text-2xl font-bold border-b-4"
        },
        {
            slots:["reset","del",],
            class:" text-white"
        }

    ]
})
export default function Main ({Tema}){
    
    const [exibir,setexibir] = useState("0") //O que vai ser mostrado na tela
    const [vetoNumero,setVetoNumero] = useState([{ operado:"+",numero:"",operado2:""}])//O que vai servir para armazena o que for clicado


    const {Exibir,calculadora,del,reset,igual,virgula} = Style({Tema})//desestruturação dos styles   
    
    return (
        <section>
            <div className={Exibir()}>
                {exibir}
            </div>
            <article className={calculadora()}>
                <div className="grid grid-cols-4 gap-[5%] h-[50vh] max-h-[500px] font-medium">

                    <NumarosMain
                        Tema={Tema}
                        Numero="7" 
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        /> 

                    <NumarosMain
                        Tema={Tema}
                        Numero="8"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        />
                    <NumarosMain 
                        Tema={Tema}
                        Numero="9"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <div 
                        className={del()}
                        onClick={()=>{fun.funçaoDel({vetoNumero,setVetoNumero,exibir,setexibir})}}    
                    >del</div>
                    <NumarosMain
                        Tema={Tema} 
                        Numero="4"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain
                        Tema={Tema} 
                        Numero="5"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain
                        Tema={Tema}
                        Numero="6"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        />
                    <OperadoMain
                        Tema={Tema}
                        Operado={"+"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <NumarosMain
                        Tema={Tema} 
                        Numero="1"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain
                        Tema={Tema} 
                        Numero="2"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain
                        Tema={Tema} 
                        Numero="3"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />

                    <OperadoMain 
                        Tema={Tema}
                        Operado={"-"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />

                    <div className={virgula()}
                        onClick={()=>{
                            fun.MostraNaTela(exibir,setexibir,vetoNumero,",")
                            fun.armazenaNoVeto(vetoNumero,setVetoNumero,".")
                        }}
                    >,</div>

                    <NumarosMain    
                        Tema={Tema}
                        Numero="0"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />

                    <OperadoMain 
                        Tema={Tema}
                        Operado={"x"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <OperadoMain 
                        Tema={Tema}
                        Operado={"/"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <div 
                        className={reset()} 
                        onClick={()=>{ fun.reset(setexibir,setVetoNumero)}}
                    >reset</div>
                    <div
                        className={igual()}
                        onClick={()=>{fun.calcular(vetoNumero,setVetoNumero,setexibir)}}   
                    >=</div>
                </div>
            </article>
        </section>
    )
}
Main.propTypes = {
    Tema:PropTypes.string
}