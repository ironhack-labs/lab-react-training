import React from 'react';
import { generateKey } from './generateUniqueKey.js';
import './NumberCard.css'

const NumberCard = ({limit}) => {
    const isEven = (num) => {
        return num % 2 === 0;
    };

    const numberArray = [];
    console.log(numberArray);
    
    for(let num = 1; num <= limit; num++) numberArray.push(num);

    return (
      <section className="NumberCard">
        {numberArray.map((number) =>
          isEven(number) ? (
            <div key={generateKey(number)} style={{ background: 'lightpink' }}>
              <p>{number}</p>
            </div>
          ) : (
            <div key={generateKey(number)} style={{ background: 'lightblue' }}>
              <p>{number}</p>
            </div>
          )
        )}
      </section>
    );
}
 
export default NumberCard;