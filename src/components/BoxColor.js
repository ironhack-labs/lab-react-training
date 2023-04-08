function BoxColor({r, g, b, fontColor}) {

    function rgbToHex(r, g, b) {
        function componentToHex(c) {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div className="boxColor" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: fontColor}}>
            <p>rgb({r},{g},{b})</p>
            <p>{rgbToHex(r, g, b)}</p>
        </div>
    )
}

export default BoxColor;