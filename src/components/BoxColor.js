import React from "react";

const BoxColor = ({r, g, b}) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const boxStyle = {
        width: '150px',
        height: '75px',
        backgroundColor: backgroundColor,
        border: '1px solid #000',
        margin: '10px',
    };

    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.lenght === 1 ? '0' + hex : hex;
    };

    const rbgToHex = (r, g, b) => {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    };

    return (
        <div style={boxStyle}>
            <p>RGB: {r}, {g}, {b}</p>
            <p>Hex: {rbgToHex(r, g, b)}</p>
        </div>
    );
};

export default BoxColor;