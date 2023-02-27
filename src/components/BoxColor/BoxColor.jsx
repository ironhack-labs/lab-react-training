import './BoxColor.css'
import React from "react"

const BoxColor = ({ r, g, b }) => {

    return <div style={{ backgroundColor: `rgb(${r},${g},${b})` }} className="BoxColor">rgb({r}, {g}, {b})</div>
}

export default BoxColor