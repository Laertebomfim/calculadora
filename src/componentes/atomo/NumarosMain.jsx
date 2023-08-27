import PropTypes from "prop-types"
import  fun from "../../funCauculadora/funçoes"
import { tv } from "tailwind-variants"
const Style = tv({
    base:"flex justify-center items-center rounded-lg border-b-4 font-bold text-3xl",//style base
    variants:{//variantes
        color:{
            dark:"bg-darkBotãoNumbe border-darkBordeB text-darkNumber hover:bg-white",
            white:"bg-whiteBotãoNumbe border-whiteBordeB hover:bg-white text-whileNumber",
            rock:"bg-rockBotãoNumbe border-rockBordeB hover:bg-rockHoverN text-rockTexto"
        }
    }
})
export default function NumarosMain({Numero,stete,Tema}){
    const {exibir,setexibir,vetoNumero,setVetoNumero} = stete
    return (
        <div 
            className={Style({color:[Tema]})}
            onClick={
                (e)=>{
                    fun.MostraNaTela(exibir,setexibir,vetoNumero,e.target.innerText)
                    fun.armazenaNoVeto(vetoNumero,setVetoNumero,e.target.innerText)
                }
            }
        >{Numero}</div>
    )
                        
}
NumarosMain.propTypes = {
    Numero:PropTypes.string,
    stete:PropTypes.object,
    Tema:PropTypes.string
}