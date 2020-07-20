import React from 'react'

const BoxColor = (props) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    return (
        <div style={{
            margin: "20px 50px",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "25px",
            border: "2px black solid",
            height: "200px",
            width: "600px",
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`
        }}> <p>rgb({props.r},{props.g},{props.b})</p> 
            <p>{rgbToHex(props.r,props.g,props.b)}</p>
            
        </div>
    )
}

export default BoxColor
