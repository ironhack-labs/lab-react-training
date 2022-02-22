import React from 'react'
import "./BoxColor.css"

function BoxColor({r, g, b}) {

    let Style = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div className='boxColor' style={Style}>
            rgb({r}, {g}, {b})
        </div>
    )
}

export default BoxColor