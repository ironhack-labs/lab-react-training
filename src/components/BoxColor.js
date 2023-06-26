import React from "react"

function BoxColor(props){
const color = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
}
    return(
        <div className="BoxColor" style={color}>
            <p>rgb ({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;