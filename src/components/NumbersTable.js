import React from "react";
import "../index.css"

const NumbersTable = (props) => {
    let { limit } = props;
    let squares = [];
    let color;

    for (let i = 1; i <= limit; i++) {
        squares.push(i);
    }

    return (
        <div className="numbers-table">
            {squares.map(number => (
                number % 2 == 0 ? color = "red" : color = "white",
                <div className="numbers-table-square" style={{ backgroundColor: color }}>{number}</div>
            ))}
        </div>
    )
}

export default NumbersTable;
