import React from 'react'

function NumberTile({ children }) {
    const divStyle = { width: "5em", height: "5em"};
    divStyle.backgroundColor = children % 2 === 0 ? "red" : "white";
    divStyle.color = children % 2 === 0 ? "white" : "black";
    return (
        <div className="border border-dark border-2 fw-bold d-flex justify-content-center align-items-center" style={ divStyle }>{ children }</div>
    )

};

export default NumberTile;
