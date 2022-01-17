import "./BoxColor.css"
import React from "react"

function BoxColor (props) {
    // <BoxColor r={255} g={0} b={0} />
    const rHex = props.r.toString(16);
    const gHex = props.g.toString(16);
    const bHex = props.b.toString(16);
    const divStyle = {
        backgroundColor: "rgb("+props.r+","+props.g+","+props.b+")",
    }
    return (
        <div style={divStyle}>
            rgb({props.r},{props.g},{props.b})
            <br></br>
            #{rHex}{gHex}{bHex}
        </div>
    )
}

export default BoxColor