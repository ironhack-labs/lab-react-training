import React from 'react';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

function BoxColor(props) {
    let {r,g,b} = props;

    const style = {
        backgroundColor: `rgb(${r},${g},${b})`,
        height: '60px',
        width: '300px',
        border: '1px solid black',
        textAlign: 'center',
        padding: '7px'
    }

    const hex = (r,g,b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div className="colored-box" style={style}>
            <p>rgb({r},{g},{b})</p>
            <p>{hex(r,g,b)}</p>
        </div>
    )
}

export default BoxColor;