import React from 'react'
import './BoxColor.css'

export default function BoxColor(props) {
    const color= {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
                    color:(props.r+props.g+props.b)/3>100?'black':'white'}
    return (
        <div>
            <div className="color-box" style={color}>
                <p>rgb ({props.r},{props.g},{props.b})</p>
                <p></p>
            </div>
        </div>
    )
}
