import React from 'react';
import './NumbersTable.css'

const NumbersTable = (props) => {
    let numArray = [];

    for (let i = 0; i <= props.limit; i++) {
        numArray.push(i);
    }

    return (
        <ul className="numbersTable">
            {numArray.map(num => 
                <li style={{backgroundColor: num % 2 !== 0 ? "red" : "white"}} key={num}>{num}</li>
            )}
        </ul>
    )

}

export default NumbersTable;
