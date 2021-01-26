import React from 'react'
import './NumbersTable.css'

const NumbersTable = (props) => {

    const numbers = [...Array(props.limit +1).keys()]
    
    const square = numbers.map(number => {
        return(
        <div 
            className='numbersTable'
            style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}}
            key={number}>{number}
        </div>
        )
    })

        return (
            <div className='container'>
            {square}
            </div>
        )

}

export default NumbersTable
