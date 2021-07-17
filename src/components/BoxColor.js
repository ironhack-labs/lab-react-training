import React from "react";

function BoxColor({r, g, b}){

    const divStyle = {
         backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return <div className="colors" style = {divStyle}> {divStyle.backgroundColor}</div>
    

}
export default BoxColor;