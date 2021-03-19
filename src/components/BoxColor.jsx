import React from "react"
import "../assets/css/BoxColor.css"

const BoxColor = (props) => {
    const someoneStyle = { 
         background: `rgb(${props.r},${props.g},${props.b})`
        }
    return (

        <div className="box__boxColor" style={someoneStyle}>
            <p className="codeColor">
                rgb(${props.r},${props.g},${props.b})
            </p>
        </div>

    )
}

export default BoxColor;