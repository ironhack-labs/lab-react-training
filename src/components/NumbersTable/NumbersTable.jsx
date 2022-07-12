import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const [value, setValue] = useState()

    const array = [1]

    for (let i = 1; i < limit; i++) {
        /* if (array.length < limit) */ array.push(array[array.length - 1] + 1)

    }

    console.log('arraylength', array.length)
    console.log('array', array)

    return (
        <>
            <div>
                <p>{}</p>
            </div >
        </>
    )
}

export default NumbersTable