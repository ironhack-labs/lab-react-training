import React from 'react'

const BoxColor = ({r, g, b}) => {
    return (
        <div style= {{
            width: 200,
            height: 150,
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}>
            
        </div>
    )
}

export default BoxColor
