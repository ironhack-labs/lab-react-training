function BoxColor(r,g,b){

    const colors = r

    let rgb = {
        r: colors.r,
        g: colors.g,
        b: colors.b
    }

    let rgbToHex = {
        r: rgb.r.toString(16),
        g: rgb.g.toString(16),
        b: rgb.b.toString(16)
    }

    if (rgbToHex.r < 10){
        rgbToHex.r = '0'+ rgbToHex.r
    } else if (rgbToHex.g < 10) {
        rgbToHex.g = '0' + rgbToHex.g
    } else if (rgbToHex.b < 10) {
        rgbToHex.b = '0' + rgbToHex.b
    }

    const bgColor = {
        backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    }

    return(
        <div className="border border-dark p-2 m-1" style={bgColor}>
            <h5>RGB: ({rgb.r},{rgb.g},{rgb.b})</h5>
            <h5>Hex: #{rgbToHex.r + rgbToHex.g + rgbToHex.b}</h5>
        </div>
    );
}

export default BoxColor;