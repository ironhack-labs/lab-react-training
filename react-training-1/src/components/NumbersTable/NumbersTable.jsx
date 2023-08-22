import './NumbersTable.css'
import { useState } from "react"

const NumbersTable = ({ limit }) => {

    const numbers = []

    for (let i = 1; i < limit + 1; i++) {
        numbers.push(i)
    }
    // console.log(numbers)

    return (

        <div className='NumbersBox'>
            {
                numbers.map((elm, idx) => {
                    return elm % 2 === 0 ? <p className='Red' key={idx}>{elm}</p> : <p className='White' key={idx}>{elm}</p>
                })
            }

        </div>

    )
}

export default NumbersTable