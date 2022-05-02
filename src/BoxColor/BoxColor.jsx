import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    let divColor = { backgroundColor: `rgb( ${r}, ${g}, ${b})` }

    return (
        <p className="box" style={divColor}>RGB {r}, {g}, {b}</p>
    )
}

export default BoxColor