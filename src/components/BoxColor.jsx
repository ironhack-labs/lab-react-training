const BoxColor = (props) => {
    const backgroundRgb = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }  //Tiene estructura CSS

    function ColorToHex(color) {
        let hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    function ConvertRGBtoHex(red, green, blue) {
        return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }

    return (
        <div className="rgbBox" style={backgroundRgb}>
            R:{props.r} G:{props.g} B:{props.b}

            {ConvertRGBtoHex(props.r, props.g, props.b)}
        </div>
    )
};

export default BoxColor