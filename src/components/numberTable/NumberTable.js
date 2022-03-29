import React from 'react';
import './NumberTable.css'

const NumberTable = (props) => {

  const limit = Array.from(Array(props.limit)).map((number, index)=> index+1)
  return (
    <>
    <ul className='number-table'>
        {
          limit.map((number, index) => {
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

export default NumberTable; 