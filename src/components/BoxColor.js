import React from 'react';

const BoxColor = ({r, g, b}) => {
    const componentToHex = c => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    return (
        <div className="border boxColor" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}>
            rgb({r},{g},{b})
            <br/>
            #{componentToHex(r)}{componentToHex(g)}{componentToHex(b)}
        </div>
    );
}

export default BoxColor;