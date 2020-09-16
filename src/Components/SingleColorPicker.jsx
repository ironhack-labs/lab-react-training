import React from 'react'

const SingleColorPicker = ({ color, value, onChange }) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: "2px solid black", backgroundColor: color === 'r' ? 'red' : color === 'g' ? 'green' : color === 'b' ? 'blue' : 'black', width: 50, height: 50 }}></div>
            <p style={{ marginLeft: 15 }}>{color.toUpperCase()}: <input type="number" min="0" max="255" onChange={onChange} value={value} /></p>
        </div>
    )
}

export default SingleColorPicker
