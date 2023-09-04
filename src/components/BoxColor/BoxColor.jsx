
const BoxColor = ({ r, g, b }) => {

    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        border: `2px solid #000000`,
        padding: `30px`,
        textAlign: 'center'
    }

    return (
        <div style={boxStyle}>
            rgb ({r},{g},{b})
        </div>
    )
}

export default BoxColor
