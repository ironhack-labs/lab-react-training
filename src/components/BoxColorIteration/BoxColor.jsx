import "./BoxColor.css"

const BoxColor = ({ r, g, b }) => {

    const boxStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` }

    return (
        <div style={boxStyle} className="boxColor-container">
            <p>rgb(${r}, ${g}, ${b})</p>
        </div>
    )
}

export default BoxColor
