import { useState } from "react"
import { tv } from "tailwind-variants"

const botaoStyle = tv({
    base:"w-full rounded-full h-full bg-red1 ",
    variants:{
        apareçer:{
            true:"block",
            false:"hidden"
        }
    }
})

export default function HeaderBotao (){
    const infBotoes = [ // infomaçao para o veto 
        {id:1,mostra:true},
        {id:2,mostra:false},
        {id:3,mostra:false}
    ]
    const [vetoBotao,setVetoBotao] = useState(infBotoes) //para atualiza os botoes 

    const botaoclick = (idBotao)=>{ //funçao para ser chamada quado for clickado 
        const valor = vetoBotao.map((ob)=>({ //retorna o novo veto 
            ...ob,
            mostra:idBotao === ob.id
        }))
        setVetoBotao(valor) // atualiza o state com o novo veto 
    }

    return(
        <>
            {vetoBotao.map((botao)=>(
                <div
                    key={botao.id}
                    className="inline-block w-1/3 py-1"
                    onClick={()=>{botaoclick(botao.id)}}
                >
                    <div className={botaoStyle({apareçer:[botao.mostra]})}></div>
                </div>
            ))}
        </>
    )
}



// import { useRef } from "react"
// import { useState } from "react"
// import { tv } from "tailwind-variants"
// const botao = tv({
//     base:"w-full rounded-full h-full bg-[#d13f30] ",
//     variants:{
//         apareçer:{
//             true:"block",
//             false:"hidden"
//         }
//     }
// })
// export default function HeaderBotao (){
//     const [valoApareçe,setValoApareçe] = useState("false")
//     const elemento = useRef()

//     return(
//         <div  className="inline-block w-1/3 py-1 " onClick={()=>{setValoApareçe("true")}}>
//             <div ref={elemento} className={botao({apareçer:[valoApareçe]})}></div>
//         </div>
//     )
// }


// import { useRef } from "react";
// import { useState } from "react";
// import { tv } from "tailwind-variants";
// const botao = tv({
//   base: "w-full rounded-full h-full bg-[#d13f30] ",
//   variants: {
//     apareçer: {
//       true: "block",
//       false: "hidden",
//     },
//   },
// });
// export default function HeaderBotao() {
//   const [valoApareçe1, setValoApareçe1] = useState("true");
//   const [valoApareçe2, setValoApareçe2] = useState("false");
//   const [valoApareçe3, setValoApareçe3] = useState("false");
//   const elemento = useRef();

//   return (
//     <>
//       <div
//         className="inline-block w-1/3 py-1 "
//         onClick={() => {
//           setValoApareçe1("true");
//           setValoApareçe2("false");
//           setValoApareçe3("false");
//         }}
//       >
//         <div
//           ref={elemento}
//           className={botao({ apareçer: [valoApareçe1] })}
//         ></div>
//       </div>
//       <div
//         className="inline-block w-1/3 py-1 "
//         onClick={() => {
//           setValoApareçe1("false");
//           setValoApareçe2("true");
//           setValoApareçe3("false");
//         }}
//       >
//         <div
//           ref={elemento}
//           className={botao({ apareçer: [valoApareçe2] })}
//         ></div>
//       </div>
//       <div
//         className="inline-block w-1/3 py-1 "
//         onClick={() => {
//           setValoApareçe1("false");
//           setValoApareçe2("false");
//           setValoApareçe3("true");
//         }}
//       >
//         <div
//           ref={elemento}
//           className={botao({ apareçer: [valoApareçe3] })}
//         ></div>
//       </div>
//     </>
//   );
// }