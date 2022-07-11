import './boxColor.css'

const BoxColor = ({ r, g, b }) => {

    function ColorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
    }
    function ConvertRGBtoHex(red, green, blue) {
        return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }
    const colorInHex = ConvertRGBtoHex(r, g, b);

    const hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    )
    // Using the HSP value, determine whether the color is light or dark
    let color = 'white'
    if (hsp > 150) {

        color = 'black'
    }



    const boxColor = {
        backgroundColor: colorInHex,
        color: color
    }
    return (
        <figure style={boxColor} className="boxColor">
            <p>rgb({r}, {g}, {b})</p>
            <p>{colorInHex}</p>
        </figure >

    )
}

export default BoxColor