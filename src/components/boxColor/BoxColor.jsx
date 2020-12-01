import React from 'react'

const BoxColor = (props) => {
 
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
        <div style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
            border: "1px solid black",
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
        }}>
            <p style={{
                color: "white",
            }}>rgb({props.r},{props.g},{props.b})</p>
        </div>
        </div>
    )
}

export default BoxColor
