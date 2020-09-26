import React from 'react'

export default function BoxColor({r, g, b}) {
    
    let divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: `40px`,
        width: `200px`
    }
    
    return (
        <div style={divStyle}>
           Box 
        </div>
    )
}
