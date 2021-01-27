import React from 'react';
import './NumbersTable.css';

const NumbersTable = props => {
    let numbers = [];
    let counter = 0;
    
    do {
        counter++
        numbers.push(counter)
    } while (numbers.length < props.limit)

    const numberBlocks = numbers.map(number => {
        return(
            <div className='numberBlocks' style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}} key={number}>
                {number}
            </div>
        )
    })

    return(
        <div class='numbersTable'>
      {numberBlocks}
      </div>
    )
}

export default NumbersTable;