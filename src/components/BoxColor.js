import React from 'react'

export default function BoxColor(props) {
    
    return (
        <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b}`,border:"solid black 2px", margin:"10px", padding:"10px", fontSize: "20px"}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}
