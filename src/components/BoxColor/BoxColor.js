import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    const rgbColor = `${r}, ${g}, ${b}`

    // function rgbToHex(rgbColor) {
    //     var hexadecimal = rgbColor.toString(16);
    //     return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    // }

    // function convertRGBtoHex(red, green, blue) {
    //     return "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
    // }

    return (
        <div style={divStyle} className="boxColor">
            <p>rgb({rgbColor})</p>
        </div>
    )

}

export default BoxColor

// <p>{convertRGBtoHex(`${r}, ${g}, ${b}`)}</p>