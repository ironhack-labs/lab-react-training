import React from 'react'

function BoxColor(props) {
    const rgbHex = (rgb) => {
        let hex = rgb.toString(16)
        if(hex.length < 2){
            hex = "0" + hex;
        }
        return hex;
    }   
    return (
        <div 
        className="boxcolor" 
        style= {{backgroundColor: `rgb(${props.r}, ${props.g} ${props.b})`}}>
        
        <p> rgb ({props.r},{props.g},{props.b}) </p>
        # {rgbHex (`${props.r}${props.g}${props.b}`)}
            
        </div>
    )
}


export default BoxColor
