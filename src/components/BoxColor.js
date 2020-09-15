import React from 'react'

function BoxColor(props) {

    let bgColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`

    }
    return(
        <div className="BoxColor" style={bgColor}>
             rgb({props.r}, {props.g}, {props.b}) 
        </div>
    )
}

export default BoxColor