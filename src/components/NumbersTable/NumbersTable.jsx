import './NumbersTable.css'

import { useState } from "react"

const NumbersTable = ({ limit }) => {


    const [numbers, setNumbers] = useState(limit)

    const numbersArray = Array.from(Array(numbers + 1).keys())

    return (<>

        {numbersArray.map((eachNumber, idx) => {
            return (
                (<div key={idx} className='numbers-table'
                    style={{ backgroundColor: `${(eachNumber % 2 === 0) && 'red'} ` }}>
                    {eachNumber}</div>))
        })}




    </>
    )

}

export default NumbersTable