import React from 'react'

import './NumbersTable.css'

export default function NumbersTable({limit}) {
    const limitArray = []
    for(let i=0 ; i<limit ; i++){
        limitArray.push(0)
    }
  return (
    <div className="NumbersTable">
        {limitArray.map((el,i)=><div className={i%2===0 ? 'red number' : 'number'}>{i+1}</div>)}
    </div>
  )
}
