import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
    const color = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    };

    function componentToHex(c) {
    var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const hexColor = rgbToHex(props.r, props.g, props.b);

    return <article className="BoxColor" style={color}>
    <p>
        rgb({props.r}, {props.g}, {props.b})
    </p>

    <p>
        {hexColor}
    </p>
    </article>
}

export default BoxColor