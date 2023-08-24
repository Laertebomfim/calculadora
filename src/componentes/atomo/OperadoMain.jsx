import PropTypes from "prop-types"
import fun from "../../funCauculadora/funçoes"
export default function OperadoMain({Operado,stete}){

    const {exibir,setexibir,vetoNumero,setVetoNumero} = stete

    return(
        <div
            className="flex justify-center items-center bg-branco rounded-lg"
            onClick={(e)=>{
                fun.CalculoOperado(vetoNumero,setVetoNumero,e.target.innerText,setexibir,exibir)
            }}
        >{Operado}</div>
    )
}
OperadoMain.propTypes = {
    Operado:PropTypes.string,
    stete:PropTypes.object
}