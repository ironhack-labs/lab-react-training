import React from 'react'
import { useState } from 'react';

const Numbers = ({limit, children}) => {
  let numbers = []
  for( let count =0 ; count<=limit; count++){
        numbers.push(count)
  }
    return (
        <div>
        {}
            {numbers.map((el, i)=>{
            return <div style={{ backgroundColor: i % 2 === 0 ? "red" : "white" }}>{i}</div>
            })}
        </div>
    )
}


export default function NumbersTable () {
    return (
        <div>
            <Numbers limit={12} />
        </div>
    )
}
