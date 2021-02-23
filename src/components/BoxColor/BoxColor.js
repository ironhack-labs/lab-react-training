import React from 'react'

export default function BoxColor(props) {
    const color = {
        backgroundColor: 'rgb('+props.r+', '+props.g+', '+props.b+')',
        width: 'max-content',
        margin: '2rem',
        padding: '2rem'
    }
    return (
        <div className='boxColor rounded-lg' style={color}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    )
}
