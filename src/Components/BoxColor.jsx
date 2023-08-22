import React from "react"
function BoxColor ({r, g, b}) {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "200px",
        height: "100px",
        border: "1px solid black",
    }
    return (
        <div style={divStyle}> RGB({r}, {g}, {b})</div>
    )
}
export default BoxColor