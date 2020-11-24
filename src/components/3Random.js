import React from 'react'

const Random = (props) => {
    const borderStyle = {
        border: '2px solid black', 
        padding: '5px',
        width: '100%',
        textAlign: 'center',
        maxWidth: '600px'
    }

    let value = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <p style={borderStyle}>Random value between {props.min} and {props.max} => {value}</p>
    )
}

export default Random