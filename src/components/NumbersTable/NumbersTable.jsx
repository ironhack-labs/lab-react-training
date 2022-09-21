import './NumbersTable.css'
import { useState } from 'react';

const NumbersTable = ({ limit }) => {
    let li = []
    let i = 1
    for (i; i <= limit; i++) {
        li.push(i)
    }

    return (

        <div>
            <ul className='ulStyle'>
                {li.map(el => {
                    return (
                        el % 2 !== 0 ? <li key={el} className='styleLiWhite'>{el}</li> : <li key={el} className='styleLiRed'>{el}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default NumbersTable