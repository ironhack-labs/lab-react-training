import React from 'react'
import "../styles/BoxColor.css"

const BoxColor = (props) => {

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? 0 + hex : hex;
    }

    function rgbToHex (r, g, b) {
        return "#" + componentToHex(props.r) + componentToHex(props.g) + componentToHex(props.b)
    }


    return (
        <div className="box__boxColor"
        style={{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        
        }} 
        >
        <p> rgb(${props.r}, ${props.g}, ${props.b}) </p>
        <p>{rgbToHex (props.r, props.g, props.b)} </p>
        </div>
        
    )
}

export default BoxColor
