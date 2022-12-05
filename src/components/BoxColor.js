const BoxColor = (r, g, b) => {
    
    function rgbToHex(r, g, b) {
        function valueToHex(value){
            let convertToHex = value.toString(16);
            return value.length == 1 ? "0" + convertToHex : convertToHex;
        };
        return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
      }
    
    const hexValue = rgbToHex(r, g, b)
    const boxStyle = {
        "background-color": {hexValue},
        "color": "white",
        height : 200,
        border : "Solid",
        "margin-top": 20, 
        "text-align": "center",
        "font-size": 50
}
    return (
        <div className="color-box boxed-border" style={boxStyle}>
            <p>rgb{"("}{r},{g},{b}{")"}</p>
            <br/>
            <p>{hexValue}</p>
        </div>
    )
}
export default BoxColor