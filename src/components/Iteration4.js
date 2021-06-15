import React, {Component} from 'react';

const BoxColor = ({r, g, b}) => {
    const divStyle = {
        backgroundColor: `rgb(${[r,g,b]})`
    };
    return (
        <div class = "box" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor;