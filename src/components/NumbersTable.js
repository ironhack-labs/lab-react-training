import React from 'react'

export default function NumbersTable(props) {
    //    const numbers = Array.from(Array(props.limit).keys()) ;
    const numbers = Array.from({length: props.limit}, (v, i) => i+1);
    const listItems = numbers.map(value =>  
        value %2 === 0 ?
        <div key={value} className="square">{value}</div>
        :
        <div key={value} className="square" style={{backgroundColor:"red"}}>{value}</div>
        )
        
  return (
    <div className='squareDiv'>
    {listItems}
    </div>
  )
}
