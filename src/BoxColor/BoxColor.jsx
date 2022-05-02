import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    function ColorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    function ConvertRGBtoHex(red, green, blue) {
        return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }

    return (

        <div className="cuad" style={{ backgroundColor }}>
            <p>{backgroundColor}</p>
            <p>{ConvertRGBtoHex(r, g, b)}</p></div>

    )

}

export default BoxColor