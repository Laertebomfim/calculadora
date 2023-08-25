import { useState } from "react";
import NumarosMain from "../atomo/NumarosMain";
import  fun from "../../funCauculadora/funçoes"
import OperadoMain from "../atomo/OperadoMain";
//pega dado  
//variavel para pega os numeros 
//outra para reçebe dentro de um veto ou objeto [{numero:121, operedo:/}]  

//funçao reset 
//limpa o que vai apareçe ne tela 
//E o que veto

//funçoo del 
//tem que apaga um numeros das  duas variaves 
// pega o numero trasforma em string e retira o outimo valor  
//fazer um verificaçoa nao tiver mas numero no arry de objeto numero ele remove o veto [{numero:, operedo:/}] 

//funçoa iqual 
//vou pega minha infomaçao do veto 
//passa por uma  switcase usano (map) um funçao para verifica se tem o parametor para entara na swit adequeda 
//map com um desconstrudor  para pega o utimo  valo de cada veto 

//funçao manipuladores 
// no final do veto vai fica a funçao [156,-]
export default function Main (){
    const [exibir,setexibir] = useState("0")
    const [vetoNumero,setVetoNumero] = useState([{ operado:"+",numero:"",operado2:""}]) 

    return (
        <section>
            <div className="h-16 bg-cinza4 rounded-lg text-4xl font-bold text-branco p-4 text-right my-8">
                {exibir}
            </div>
            <article className="bg-cinza3 p-3 rounded-lg">
                <div className="grid grid-cols-4  gap-2 text-2xl font-medium auto-rows-[55px] ">

                    <NumarosMain
                        Numero="7" 
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        /> 

                    <NumarosMain
                        Numero="8"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        />
                    <NumarosMain 
                        Numero="9"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <div 
                        className="flex justify-center items-center bg-cinza1 rounded-lg text-branco uppercase text-xl"
                        onClick={()=>{fun.funçaoDel({vetoNumero,setVetoNumero,exibir,setexibir})}}    
                    >del</div>
                    <NumarosMain 
                        Numero="4"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain 
                        Numero="5"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain 
                        Numero="6"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                        />
                    <OperadoMain 
                        Operado={"+"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <NumarosMain 
                        Numero="1"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain 
                        Numero="2"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />
                    <NumarosMain 
                        Numero="3"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />

                    <OperadoMain 
                        Operado={"-"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <div className="flex justify-center items-center bg-branco rounded-lg"
                        onClick={()=>{
                            fun.MostraNaTela(exibir,setexibir,vetoNumero,",")
                            fun.armazenaNoVeto(vetoNumero,setVetoNumero,".")
                        }}
                    >,</div>


                    <NumarosMain 
                        Numero="0"
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}} 
                    />

                    <OperadoMain 
                        Operado={"x"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />
                    <OperadoMain 
                        Operado={"/"}
                        stete ={{exibir,setexibir,vetoNumero,setVetoNumero}}
                    />

                    <div className="flex justify-center items-center bg-cinza1 rounded-lg text-branco col-span-2 uppercase text-xl" 
                        onClick={()=>{
                            fun.reset(setexibir,setVetoNumero)
                        }}
                    >reset</div>
                    <div className="flex justify-center items-center bg-red1 rounded-lg text-branco col-start-3 col-span-2">=</div>
                </div>
            </article>
        </section>
    )
}
// no arquivo de funçao eu faço so funçoa par retorna 