import React from 'react'

const BoxColor = (props) => {
    const { r, g, b } = props;

    const hexColor = Object.keys(props).map(c => {
        const hex = props[c].toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    });

    // console.log(hexColor);

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    };

    return (
        <div className="BoxColor box" style={divStyle}>
            {`rgb(${r}, ${g}, ${b})`}
            <br/>
            {`#${hexColor.join('')}`}
        </div>
    );
};

export default BoxColor;