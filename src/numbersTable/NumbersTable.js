import React from 'react'
import NumberDiv from './NumberDiv'

import './NumbersTable.css'

const NumbersTable = ({limit}) => {
    const numbersArr = Array.from({length: limit},(v,i)=> i + 1)
    return (

        <div className='container'>
        <h2>Iteration 12: List and Keys | NumbersTable</h2>
        <hr />
        <div className='main-numbers'>
            {/* <div className='number'> */}
                {numbersArr.map(number => <NumberDiv key={number+ Math.random()*999} number={number}/>)}
            {/* </div> */}
        </div>
        </div>
    )
}

export default NumbersTable
