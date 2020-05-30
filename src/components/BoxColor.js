import React from 'react';

function BoxColor(props){

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function getContrast(r, g, b) {
        // Get YIQ ratio
        let yiq = Math.floor(((r * 299) + (g * 587) + (b * 114)) / 1000);
        //console.log('yiq valoe = ', yiq);

        // Check contrast
        return (yiq >= 128) ? 'black' : 'white';
    }

    const rgbStyle = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`, color: `${getContrast(props.r, props.g, props.b)}`};

    return(
        <div className="rgb-div" style={rgbStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor;