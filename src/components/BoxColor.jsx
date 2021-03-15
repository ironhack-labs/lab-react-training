import React from 'react'

const getStyle = (props) => {
    return {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        margin: "10px",
        padding: "10px",
        color: `rgb(${255-props.r},${255-props.g},${255-props.b})`
    }
}


const BoxColor = (props) => {
    return (
        <div style={getStyle(props)}>
            rgb({props.r},{props.g},{props.b})
        </div>
    )
}

export default BoxColor
