import React from 'react'

const BoxColor = ({r, g, b}) => {
    return (
        <div
            style={{
                backgroundColor:`rgb(${r},${g},${b})`,
                width: 80,
                height: 80,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'space-evenly'
            }}
        />
    )
}

export default BoxColor
