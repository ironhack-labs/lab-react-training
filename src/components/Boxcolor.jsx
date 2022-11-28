
const BoxColor = props => {

    const { r, g, b } = props

    const divStyle = { background: `rgb(${r}, ${g}, ${b})` }

    return (
        <div>
            <p style={divStyle} className="colors">rgb ({r},{g},{b}) </p>
        </div>
    )

}
export default BoxColor