const BoxColor = ({ r, g, b }) => {


    const ColorToHex = (color) => {

        let hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }
    const ConvertRGBtoHex = (r, g, b) => {
        return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
    }

    const divStyle = {
        color: 'black',
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: '50px 10px',
        width: '200px',
        margin: '20px',
        textAlign: 'center'
    }
    return (
        <div style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
            <p>{ConvertRGBtoHex(r, g, b)}</p>
        </div>
    )
}
export default BoxColor