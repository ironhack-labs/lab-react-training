const BoxColor = (props) => {
    const {r, g, b} = props
    function valueToHex(c) {
        var hex = c.toString(16);
        if(hex.length === 1)
            {return "0"+ hex 
            } else  {return hex 
        }
      }  
      let rgbHex = "#"+valueToHex(r)+valueToHex(g)+valueToHex(b)

    const boxStyle = {
        "display" : "flex",
        "flexDirection" : "Column",
        "backgroundColor": `${rgbHex}`,
        "color": "white",
        'height' : '10%',
        'width' : '600',
        'border' : "Solid",
        "marginTop": '20px',
        "marginLeft": '20%',
        "marginRight": '20%',
        "textAlign": "center",
        "fontSize": '25px',
        "border" : "Solid 4px black",
}
    return (
        <div className="colorBox" style={boxStyle}>
            <p>rgb{"("}{r},{g},{b}{")"}</p>

            <p>{rgbHex}</p>
        </div>
    )
}
export default BoxColor