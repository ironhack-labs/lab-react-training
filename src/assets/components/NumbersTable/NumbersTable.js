import React from 'react';
import './NumbersTable.css'

const NumbersTable = (props) => {

  const arrNumbers = Array.from(Array(props.limit)).map((number, index)=> index+1)
  return (
    <>
    <ul className='number-table'>
        {
          arrNumbers.map((number, index) => {
            return (
            <li
            style={{backgroundColor: number % 2 === 0 ? 'red': 'white'}}
            key={index}>{number}</li>
            ) 
          })
        }
     
    </ul>

    </>
  )
}

export default NumbersTable;