import React from 'react'
import './NumbersTable.css'

function NumbersTable(props) {

    let numbers = []

    for(let i = 1; i <= props.limit; i++) {
        numbers.push(i)
    }

    const orderedNumbers = numbers.map((n, i) => {
       return n%2 === 0?<div className='red' key={i}>{n}</div>:<div className='white' key={i}>{n}</div>
    })


    return (
        
       <div className='container-numbers'>      
            {orderedNumbers}
       </div>
    )
}

export default NumbersTable

