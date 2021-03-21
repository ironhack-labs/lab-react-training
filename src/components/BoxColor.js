import React from 'react';
import "../statics/css/BoxColor.css";


//const decimalToHex = (r,g,b) => {
//    const rHex = r.toString(16);
//    const gHex = g.toString(16);
//    const bHex = b.toString(16);
//
//    if (!rHex.length){
//        console.log (`entra ${rHex}`)
//    }
//    return '#'+rHex+gHex+bHex
//
//
// 
//}
//
const decimalToHex = (decimal) => {
    const hex = decimal.toString(16);
    if (hex.length > 1) {
       
        return hex
    } else {
      
        return '0'+hex

    }
    

}


const BoxColor = ({ r, g, b }) => {
    return (
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p >rbg({r},{g},{b})</p>
           <p>#{decimalToHex(r)}
            {decimalToHex(g)}
            {decimalToHex(b)}
            </p>



        </div>
    )
};

export default BoxColor;



