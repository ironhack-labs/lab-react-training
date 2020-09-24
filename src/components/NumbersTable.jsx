import React, {Component} from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
    const numbersArray = [];
    let color;
    for (let i = 1; i <= props.limit; i++) {
        if (i % 2 === 0) {
            color = 'red';
        } else {
            color = 'white';
        }

        const number = (<div style={{backgroundColor:color}}>{i}</div>)
        numbersArray.push(number)
    }
    return (<div className="NumbersTable">
        {numbersArray}
    </div>)
}

export default NumbersTable