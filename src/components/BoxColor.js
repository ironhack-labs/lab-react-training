import React from 'react'

function BoxColor(props) {
    const r=props.r
    const g=props.g
    const b=props.b
    
    return (
        <div className="boxcolor" style={{backgroundColor:`rgb(${r},${g},${b})`, height:"100px"}}>
            rgb({props.r},{props.g},{props.b})
        </div>
    )
}

export default BoxColor
