import React, { useEffect } from 'react'
import { useState } from 'react'


function NumbersTable({limit}) {

useEffect(()=>{
const limiter = []

for (let i = 1; i < limit + 1; i++) {
  if(limiter.length < limit){
    limiter.push(i)
  }
}

setLimiter(limiter)
},[])



const [numberTables, setTable] = useState([])

const setLimiter = (limiter) =>{
  setTable(limiter)
}


return(
    <div className='row d-flex justify-content-center align-items-center mx-5 px-5 '>
    {numberTables.map((numbers) => {
      if((numbers % 2) === 0){
        return (
          <p className='col-4 bg-danger border p-5 m-0'>Pares {numbers}</p>
        )
      } else {
        return (
          <p className='col-4 border p-5 m-0'>{numbers}</p>
        )
      }
    })}
    </div>
  )
}

export default NumbersTable