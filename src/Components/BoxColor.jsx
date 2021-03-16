import React from 'react'

const BoxColor = (props) => {
    console.log(props)

    let divStyle = {
    backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div>

        <p style={divStyle}>rgb({props.r}, {props.g}, {props.b})</p>
            
        </div>
    )
}

export default BoxColor
