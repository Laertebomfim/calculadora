import PropTypes from "prop-types"
import  fun from "../../funCauculadora/funçoes"
export default function NumarosMain({Numero,stete}){
    const {exibir,setexibir,vetoNumero,setVetoNumero} = stete
    return (
        <div 
            className="flex justify-center items-center bg-branco rounded-lg"
            onClick={
                (e)=>{
                    fun.MostraNaTela(exibir,setexibir,e.target.innerText)
                    fun.armazenaNoVeto(vetoNumero,setVetoNumero,e.target.innerText)
                }
            }
        >{Numero}</div>
    )
                        
}
NumarosMain.propTypes = {
    Numero:PropTypes.string,
    stete:PropTypes.object,
}