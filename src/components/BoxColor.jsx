function BoxColor(props) {
    function toHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
    }
    const hexValue = toHex(props.r)+toHex(props.g)+toHex(props.b);
    const concatColor = `rgb(${props.r},${props.g},${props.b})`
    const fontColor = ((0.2126*props.r + 0.7152*props.g + 0.0722*props.b)) <= 150 ? 'white' : 'black'

    const boxStyle = {
        background: concatColor,
        color:  fontColor
    }
    return (
        <div className="color-box" style={boxStyle}>
            <p>{concatColor} <br />
            #{hexValue}</p>
        </div>
    )
  }
   
  export default BoxColor;