import React from 'react'

function Random(props) {
    const { min, max } = props

    return (
        <div>
            {Math.floor(Math.random() * (max - min) + min)}
        </div>
    )
}

export default Random