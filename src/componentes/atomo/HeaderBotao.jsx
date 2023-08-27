import PropTypes from "prop-types"
import { useState } from "react"
import { tv } from "tailwind-variants"

const botaoStyle = tv({
    base:"w-full rounded-full h-full ",//style base
    variants:{ //variantes
        apareçer:{// para fazer aparace e desaparecer o ponto do menu tema
            true:"block",
            false:"hidden"
        },
        color:{
            dark:"bg-darkBotão  hover:bg-darkHoverB",
            white:"bg-whiteBotão hover:bg-whiteHoverB",
            rock:"bg-rockBotão hover:bg-rockHoverB"
        }
    },
})
export default function HeaderBotao ({Tema,setTema}){
    const infBotoes = [ // infomaçao para o veto 
        {id:1,mostra:true},
        {id:2,mostra:false},
        {id:3,mostra:false}
    ]
    const [vetoBotao,setVetoBotao] = useState(infBotoes) //para atualiza os botoes 

    const botaoclick = (idBotao)=>{ //funçao para ser chamada quado for clickado 
        idBotao === 1 ?setTema("dark"):false
        idBotao === 2 ?setTema("white"):false
        idBotao === 3 ?setTema("rock"):false
        const valor = vetoBotao.map((ob)=>({ //retorna o novo veto 
            ...ob,
            mostra:idBotao === ob.id //true ou false
        }))
        setVetoBotao(valor) // atualiza o state com o novo veto 
    }
    return(
        <>
            {vetoBotao.map((botao)=>(
                <div
                    key={botao.id}
                    className="inline-block w-1/3 py-1 "
                    onClick={()=>{botaoclick(botao.id)}}
                >
                    <div className={botaoStyle({apareçer:[botao.mostra],color:[Tema]})}></div>
                </div>
                
            ))}
        </>
    )
}

HeaderBotao.propTypes = {
    Tema:PropTypes.string,
    setTema:PropTypes.func
}