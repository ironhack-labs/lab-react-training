import React from "react";
import './numberstable.css'

const NumbersTable = ({ limit }) => {
    const numbers = [];
  
    for (let i = 1; i <= limit; i++) {
      const color = i % 2 === 0 ? 'red' : 'white';
      numbers.push(
        <div key={i} style={{ backgroundColor: color }}>
          {i}
        </div>
      );
    }
  
    return <div className="Number-color" style={{ display: 'flex', flexWrap: 'wrap'}}>{numbers}</div>;
  };

  export default NumbersTable;

  /*

  En esta interaccion me ayudaron hacerla pero no entendí muy bien la explicación



  */