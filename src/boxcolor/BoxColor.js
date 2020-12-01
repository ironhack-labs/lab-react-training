import React from 'react'

export default function BoxColor(props) {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color:(props.r+props.g+props.b)/3>100? 'black' : 'white'
    }

    const rgbToHex =  "#" + ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1);
      
    return (
        <div className="box-color" style={divStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex}</p>
        </div>
    )
}
