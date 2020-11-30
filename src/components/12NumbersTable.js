import React from 'react'

export default function NumbersTable(limit){
  let numbers = []
  

  function num(){
    for (let i=1;i<limit.limit;i++){
      numbers.push(i)
    }
    return numbers
  }

  function evenOdd(num){
    if (num%2===0){
      return 'red'
    } else {
      return 'white'
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {num().map(box => (
      <div key={box} style={{height: '50px', width:'50px', border: '2px solid black', backgroundColor: evenOdd(box)}}>
        {box}
      </div>
      ))}
    </div>
  )
}