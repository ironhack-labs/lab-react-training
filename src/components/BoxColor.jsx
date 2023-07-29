const BoxColor = ({r,g,b}) => {

    const divStyle = {
        color: 'white',
        backgroundColor: `rgb(${r},${g},${b})`
    }
    function colorToHex(color){
        const hex = color.toString(16)
        return hex.length === 1 ? "0" + hex: hex
    }
    function convertRGBtoHex(r,g,b){
        return '#' + colorToHex(r) + colorToHex(g) + colorToHex(b);
    }
    return(
        <div className="boxcolor" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
            <p>{convertRGBtoHex(r,g,b)}</p>
        </div>
    )
}

export default BoxColor;