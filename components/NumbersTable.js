import React from 'react';

function NumbersTable({limit}){
        let numbersArray = [];
        for (let i = 1; i <= limit; i++){
            numbersArray.push(i);
        }

        const checkColor = number =>{
            return number % 2 === 0 ? 'red' : 'white';
        }

        return (
            <div className="numbers-container">
                {numbersArray.map((el, index) =>{
                    return <div style={{backgroundColor: `${checkColor(el)}`}} key={index}>
                        <p>{el}</p>
                        </div>
                })}
                </div>
        )
} 

export default NumbersTable