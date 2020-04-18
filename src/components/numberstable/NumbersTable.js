import React from 'react';

const NumbersTable = (props) => {
    const { limit } = props;
    const isOdd = (num) => { return num % 2;};
    let numbers=[];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }
    return (
        <ul className="NumbersTable">
          {numbers.map((num) => {
            return <li key={num} style={{backgroundColor: isOdd(num) ? "white" : "red"}}>{num}</li>;
          })}
        </ul>
    );
};
    
export default NumbersTable;
    
