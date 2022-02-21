
function BoxColor(props) {

    const { r, g, b } = props
    
    const bgColor = {
        backgroundColor: `rgb(${ r }, ${ g }, ${ b })`
}

    return (
        <div style={bgColor}>HOLA</div>
    )
}

export default BoxColor
