import React from "react";

function BoxColor(props) {
    const {r, g, b} = props;
    const bgColor = "rgb(" + [r, g, b].join(",") + ")";
     
    return(
        <div className="BoxColor" style={{ backgroundColor: bgColor }}>
            <p>rgb({ r }, { g }, { b })</p>
        </div>
    )
}

export default BoxColor;