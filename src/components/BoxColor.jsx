import React from "react";

function BoxColor({r, g, b}){

    const handleStyle = (red, green, blue) => ({
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
    });

    return(
        <div className="boxColorContainer" style={handleStyle(r, g, b)}>rgb {r} {g} {b}</div>
    )
}

export default BoxColor