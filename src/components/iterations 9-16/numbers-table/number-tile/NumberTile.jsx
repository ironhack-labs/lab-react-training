import React from 'react'

function NumberTile({ children }) {
    const divStyle = { width: "5em", height: "5em"};
    children % 2 === 0 ? divStyle.backgroundColor = "red" : divStyle.backgroundColor = "white";
    children % 2 === 0 ? divStyle.color = "white" : divStyle.color = "black";
    return (
        <div className="border border-dark border-2 fw-bold d-flex justify-content-center align-items-center" style={ divStyle }>{ children }</div>
    )

};

export default NumberTile;
