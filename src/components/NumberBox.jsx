import React from 'react'

export default function NumberBox({number, style}) {
    return (
        <div className="number-box" style={style}>
            <h1>{number}</h1>
        </div>
    )
}
