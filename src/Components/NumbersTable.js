import React from 'react'
import './NumbersTable.css'

export default function NumbersTable(props) {
    const arrNumbers = [];
    for(let i = 1; i <= props.limit; i++) {
        arrNumbers.push(i)
    }
    const outputNumbers = arrNumbers.map(number => {
        return (
            <div className="box" style={(number % 2 === 0)? {backgroundColor: 'red' }: {backgroundColor: 'white' }}>
               <p>{number}</p>
            </div>
        )
    })
    return(
        <div className="numbersWrapper">
            {outputNumbers}
        </div>
    )
}