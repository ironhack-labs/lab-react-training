import React from 'react'
import './BoxColor.css'

export default function BoxColor(props) {
    console.log(props)
    const divStyle = {
        backgroundColor: `rgb(${props.r} ${props.g} ${props.b})`,
        width: '500px',
        height: '100px',
        border: 'solid 1px black',
        margin: '10px',
    }
    return (
        <div style={divStyle}>
            <p className="box-info">rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}
