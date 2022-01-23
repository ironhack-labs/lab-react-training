import React from "react";
import "./NumbersTable.css";

const NumbersTable = ({limit}) => {
  // Array.from(Array(10))
  //(10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  const tableArr = Array.from(Array(limit)).map((item, index )=>index +1)
  console.log(tableArr);

  return (
    <div>
      <ul className="numberBox">
        {tableArr.map((item, index) => {
          return (
            <li key={item} style={{backgroundColor: item % 2 === 0 ? 'red' : 'white'} }>{item}</li>
          )
        })}

      </ul>
    </div>
      
  
      
  )
}

export default NumbersTable;