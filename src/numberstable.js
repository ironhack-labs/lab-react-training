import React from 'react';
import './App.css';

function NumbersTable(props) {
    let array = [];
    for (let i = 1; i <= props.limit; i++) {
        array.push(i)
    }
    return (
        <div className="number-table">
            {array.map((element) => {
                return(
                element % 2 === 0 ? <div className="red-box">{element}</div>
                : <div className="white-box">{element}</div>)
            })}
        </div>
    )
}

export default NumbersTable 



