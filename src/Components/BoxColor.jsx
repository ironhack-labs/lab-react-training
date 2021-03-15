import React from 'react'

function BoxColor(props) {
    return (
        <div style = {{background:`rgb(${props.r}, ${props.g}, ${props.b})`,
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        height: "10%"}}>
         rgb ({props.r}, {props.g}, {props.b})
        </div>
    )
}

export default BoxColor
