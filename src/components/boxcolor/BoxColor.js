import React from 'react';

const componentToHex= (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
  
const rgbToHex= (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor= (props) => {
    const {r, g, b} = props;
    const isValid = (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) ? true : false;
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`, 
        color: props.fontColor
    };
    return (
        isValid ? (
            <div className="BoxColor box" style={divStyle}>
                rgb({r},{g},{b}) <br/>
                {rgbToHex(r, g, b)};
            </div>
        ):(
            <div className="BoxColor box">try to use values between 0 and 255 please.</div>   
        )
    );
};
    
export default BoxColor;