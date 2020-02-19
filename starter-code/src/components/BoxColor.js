 
import React from "react";

const BoxColor = (props) => {

    const convertHex = character => {
        const hex = character.toString(16);
        if (hex.length===1)
            return "0"+hex;
        else 
        return hex;
    }
      
    const rgbToHex = (r, g, b) => {
        return "#" + convertHex(r) + convertHex(g) + convertHex(b);
    }

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
      };
    return (
        <div className="box-color" style={divStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor;