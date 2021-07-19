import React from 'react';

function BoxColor(props) {
    let { r, g, b } = props;

    let boxColorNew = `rgb(${r},${g},${b})`;

    return (
        <div style={{ backgroundColor: boxColorNew }} className="colorBox">
        {boxColorNew}
        </div>
    );
}

export default BoxColor;