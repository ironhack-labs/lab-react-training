
function Rating (props) {
    const { children } = props

    const rate = Math.round(parseFloat(children))

    //falta logica de las estrellas
    
    return (
        <div>{rate}</div>
    )
}

export default Rating