import React from 'react'

function BoxColor(props) {
    return (
        <div>
            <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}> rgb({props.r}, {props.g}, {props.b}) </div>
            
        </div>
    )
}

export default BoxColor
