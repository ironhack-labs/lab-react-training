import React from "react";

function NumberList({limit}){
  const list = [];
  for (let i = 1; i <= limit; i++){
    if (i % 2 === 0){
      list.push(
        <div className="even">
          {i}
        </div>
      )
    } else {
      list.push(
        <div className="odd">
          {i}
        </div>
      )
    }
  }
  return(
    <div className="number-list">{list}</div>
  )
}

export default NumberList