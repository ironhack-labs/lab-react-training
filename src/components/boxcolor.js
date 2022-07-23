import React from "react";

function BoxColor(props){
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }

    let hexValue = "#" + ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1);

    return(
        <div className='container' style={divStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{hexValue}</p>
        </div>
    )
}

export default BoxColor;

