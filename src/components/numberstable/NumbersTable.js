import React from 'react';
import './NumbersTable.css'

export default function NumbersTable(props) {

    const numbers = [];
    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i)
    }

    const display = numbers.map(number => {
        return number % 2 === 0 ? 
        <div className="cell" style={{backgroundColor: 'red'}}> { number }</div> : 
        <div className="cell" > { number }</div>
    })

    return (
        <div className="table">
            { display }
        </div>
    )
}