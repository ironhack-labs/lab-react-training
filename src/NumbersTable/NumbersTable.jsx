import './NumbersTable.css'
import { useState } from 'react'


function NumbersTable({ limit }) {
    const [numberIndex, setNumberIndex] = useState(1)


    let numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }
    console.log(numbers)


    const numbersBox = numbers.map((e) => {
        return (
            <div key={e} className={(e % 2 === 0) ? 'even' : 'odd'}> {e} </div>
        )
    })

    return (
        <div className='bigDiv'>
            {numbersBox}
        </div>

    )

}

export default NumbersTable