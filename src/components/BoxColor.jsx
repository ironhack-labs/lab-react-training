import React from 'react';
import "../styles/BoxColor.css"

const BoxColor = (props) => {
    const r = props.r
    const g = props.g
    const b = props.b
    const myBox={
        backgroundColor: "rgb("+r+","+g+","+b+")"
    }
    return (
        <div className="BoxColor">
            <div style={myBox}>
                rgb({props.r}, {props.g}, {props.b})
            </div>
        </div>
    )
}

export default BoxColor
