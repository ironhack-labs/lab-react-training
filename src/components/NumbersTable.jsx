import React from 'react'

// eslint-disable-next-line react/prop-types
export default function NumbersTable({limit}) {
  const displayBoxes = () => {
    let arrayNum = [];
    for (let x = 1; x <= limit; x++ ){
        arrayNum.push(x);
    }

    return arrayNum.map((numBox) => {
        return (numBox % 2 === 0) ?  <div style={{backgroundColor:"red"}}>{numBox}</div> : <div>{numBox}</div>;
    })
  }
  return (
    <div className="numbers-table">
        {displayBoxes()}
    </div>
  )
}
