import './BoxColor.css'

const BoxColor = props => {
    const { r, g, b } = props

    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);

    }

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        padding: 25
    }

    return (
        <div className="boxColor" style={divStyle}>
            <p>rgb{(r)}, {(g)}, {(b)}</p>
            <p>{rgbToHex(r, g, b)}</p>
        </div>
    )

}

export default BoxColor