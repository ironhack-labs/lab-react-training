import React, { useState } from 'react'

function NumbersTable({limit}) {

    let numberOfTimes = []

    for(let i = 1; i <= limit; i++){
        numberOfTimes.push(i)
    }


    return (
        <div className='chessBoard'>
            {numberOfTimes.map((el, index) => (
                <div className='chess' style={{backgroundColor: el%2 === 0 ? 'red': 'white'}} key={index}>{el}</div>
            ))}
        </div>
    )
}

export default NumbersTable
