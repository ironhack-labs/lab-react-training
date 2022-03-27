import React from "react";

import "./BoxColor.css";

//https://www.delftstack.com/howto/javascript/rgb-to-hex-javascript/
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

const BoxColor = (props) => {
    const { r, g, b } = props;
    const rh = ColorToHex(r)
    const gh = ColorToHex(g)
    const bh = ColorToHex(b);
    return (
        <div className="box" style={{backgroundColor: `rgb(${r},${g},${b})`}} >
            <h2>rgb({r},{g},{b})</h2>
            <h2>#{rh}{gh}{bh}</h2>
        </div>
    );
}

export default BoxColor;