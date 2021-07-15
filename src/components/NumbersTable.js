import React from 'react';

function NumbersTable({limit}) {
    let numbersArr = [];
    for (let i = 1; i <= limit; i++) {
        numbersArr.push(i);
    }

    const checkColor = number => {
        return number % 2 === 0 ? 'red' : 'white';
    }

    return (
        <div className="numbers-container">
            {numbersArr.map((el, index) => {
                return <div style={{backgroundColor: `${checkColor(el)}`}} key={index}>
                    <p>{el}</p></div>;
            })}
        </div>
    )
}

export default NumbersTable
