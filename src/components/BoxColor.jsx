import React from 'react'

export default function BoxColor(props) {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g},${props.b})`,
        width: '400px',
        height: '100px',
        margin: '20px', 
      };

    return (
        <div style={divStyle}>
            
            rgb({props.r},{props.g},{props.b})
            
        </div>
    )
}