import React from 'react'

export default function BoxColor({ r, g, b }) {
    const color = `rgb(${r}, ${g}, ${b})`
    return (
        <div style={{ backgroundColor: color }}>
            rgb({ r}, { g}, { b})
        </div >
    )
}
