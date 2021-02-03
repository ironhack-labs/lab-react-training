import React from 'react'

function BoxColor (props) {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
    return <div className="border border-dark m-2 d-flex p-1" style={{backgroundColor: color}}>{color}</div>
}

export default BoxColor