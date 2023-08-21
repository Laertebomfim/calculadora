import PropTypes from "prop-types"
export default function NumarosMain({Numero}){
    return (
        <div className="flex justify-center items-center bg-branco rounded-lg">{Numero}</div>
    )
}
NumarosMain.propTypes = {
    Numero:PropTypes.string
}