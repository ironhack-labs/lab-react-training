import React from 'react'

const BoxColor = ({r, g, b}) => {

    const divStyle = {
    border: "1.5px solid black",
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: "150px",
    width: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    }

    return (
        <div>
            <div style={divStyle}>rgb({r}, {g}, {b}) </div>
        </div>
    )
}

export default BoxColor
