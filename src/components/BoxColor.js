import React from "react";

function BoxColor(props) {
    const {r, g, b} = props;
    const bgColor = "rgb(" + [r, g, b].join(",") + ")";
     
    function convert(rgb) {

        function hexCode(i) {
            return ("0" + parseInt(i).toString(16)).slice(-2);
        }
        return "#" + hexCode(rgb[0]) + hexCode(rgb[1]) 
                + hexCode(rgb[2]);
    }

    return(
        <div className="BoxColor" style={{ backgroundColor: bgColor }}>
            <p>rgb({ r }, { g }, { b })</p>
            <p>{ convert([r, g, b]) }</p>
        </div>
    )
}

export default BoxColor;