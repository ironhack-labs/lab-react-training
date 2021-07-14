import React from 'react'

const BoxColor = (props) => {
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    return  (   
        <div style={divStyle}>
        <p>rgb: {props.r} {props.g} {props.b}</p>
        </div>
    )
}

export default BoxColor;