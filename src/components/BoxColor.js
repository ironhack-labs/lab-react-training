import React from 'react'

const BoxColor = ({ r, g, b}) => {
    return (
        <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, height: '8vw', width: '50vw'}}  >
            <p>rgb({r}, {g}, {b}</p>
        </div>
    )
}

export default BoxColor
