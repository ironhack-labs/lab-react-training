import './BoxColor.css'

function BoxColor({ r, g, b }) {

    const backgroundStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    function valueToHex(c) {
        const hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
    }

    function rgbToHex(red, green, blue) {
        return (valueToHex(red) + valueToHex(green) + valueToHex(blue))
    }

    return (
        <div className='BoxColor' style={backgroundStyle}>
            <p>rgb({r},{g},{b})</p>
            <p>#{rgbToHex(r, g, b)}</p>
        </div>
    )
}

export default BoxColor