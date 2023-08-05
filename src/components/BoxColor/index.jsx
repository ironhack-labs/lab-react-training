import React from "react";
import './index.css'


const BoxColor = ({r, g, b}) =>{
    const color = (`rgb(${r}, ${g}, ${b})`)
    function valueToHex(c) {
        var hex = c.toString(16);
        return hex
    }
    function rgbToHex(r, g, b) {
        return(valueToHex(r) + valueToHex(g) + valueToHex(b));    
    }
    
    return (       
    <div style={{ backgroundColor: color }} className="boxColor">
        <p className="displayColor">{`rgb(${r}, ${g}, ${b})`}</p>
        <p className="displayColor">#{rgbToHex(r, g, b)}</p> 
    </div>)
}

export default BoxColor;