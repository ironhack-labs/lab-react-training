import '../style/BoxColor.css'


function BoxColor(props) {


    const {
        r: red,
        g: green,
        b: blue
    } = props


    // Convert to hexadecimal funciton
    function valueToHex(c) {

        var hex = c.toString(16);

        return hex

    }

    // RGB to HEX
    function rgbToHex(r, g, b) {

        return (valueToHex(r) + valueToHex(g) + valueToHex(b));

    }

    const divStyle = {
        backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')'
    };


    return (
        <div style={divStyle} className="box">
            <p>rbg({red},{green},{blue})</p>
            <p>#{rgbToHex(red, green, blue)}</p>
        </div>
    )
}

export default BoxColor;