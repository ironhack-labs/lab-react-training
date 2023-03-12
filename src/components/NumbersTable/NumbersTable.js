
import React from 'react';
import "./NumbersTable.css"

const NumbersTable = ({limit}) => {

let numbers = [];

for(let i = 1; i <= limit; i++){
    numbers.push(i)
}

const isEven = (number) => {
    if (number % 2 === 0){
        return true
    } else {
        return false
    }
}


    return (
        <div className='NumbersTable'>
        {numbers.map(number => {
            return <div className="numbersquare" style={isEven(number) ? {backgroundColor: 'red'} : {backgroundColor: 'white'}} key={number}>
            <div>{number}</div>
          </div>
        })}
      </div>
    );
};

export default NumbersTable;