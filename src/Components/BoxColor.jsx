import React from 'react'
import "../styles/BoxColor.css";

function BoxColor(props) {

    let hexValue = "";
    function rgbToHex(value) {
        const hexTable = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        // convert the value of each color in its hex symbol (2 values)
        const firstSymbol= Math.floor((value / 16)); 
        const secondSymbol= Math.floor((((value / 16)- firstSymbol))*16);
        //Report the value in the hexTable and create the hexPair
        hexValue += hexTable[firstSymbol] + hexTable[secondSymbol];
    }
    rgbToHex(props.r)
    rgbToHex(props.g)
    rgbToHex(props.b)

    return (
        <div>
            <div className="boxColor" 
                style={
                    {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}
            } >
                <p>rgb:({props.r}, {props.g}, {props.b}) </p>
                <p>{hexValue}</p>
               
            </div>
        </div>
    )
}

export default BoxColor
