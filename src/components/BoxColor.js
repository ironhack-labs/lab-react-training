import React from 'react'

export const BoxColor = (props) => {

    const style = {backgroundColor:`rgb(${props.r},${props.g},${props.b})`, height:`50px`}
    //pasar a hexadecimal
    let hexcolor = "#"+componentToHex(props.r)+componentToHex(props.g)+componentToHex(props.b)
    function componentToHex(x) {
        var hex = x.toString(16);
        return hex.len == 1 ? "0" + hex : hex;
    }
    return (
        <div style={style}>
           
            <p style ={{textAlign:'center'}}>RGB ({props.r},{props.g},{props.b})</p>
            <p style ={{textAlign:'center'}}>Hexadecimal {hexcolor}</p>
        </div>
    )
}

export default BoxColor;