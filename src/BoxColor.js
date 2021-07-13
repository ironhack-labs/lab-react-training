import React from "react";

function BoxColor({r, g, b}){
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`, height:100, width:300
    }
    return <div className="border-container" style = {divStyle}> {divStyle.backgroundColor}</div>
}   


export default BoxColor;