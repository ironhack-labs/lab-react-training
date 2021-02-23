import React from 'react'

export default function BoxColor(props) {
    const color = {
        backgroundColor: 'rgb('+props.r+', '+props.g+', '+props.b+')',
        width: '30vw',
        border: '1px solid black',
        margin: '1rem',
        borderRadius: '10px',
        padding: '1rem'
    }
    return (
        <div className='boxColor' style={color}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    )
}
