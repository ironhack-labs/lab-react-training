import React from "react";
import './NumbersTable.css';

function NumbersTable({ limit }) {
    const numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }

    const styleBox = {
        backgroundColor: 'red'
    }

    return (
        <div className='Grid'>
            {
                numbers.map((elm, idx) => {
                    return <div style={elm % 2 === 0 ? styleBox : undefined} className='NumberBox' key={idx}>{elm}</div>
                })
            }
        </div>
    )
}

export default NumbersTable;
