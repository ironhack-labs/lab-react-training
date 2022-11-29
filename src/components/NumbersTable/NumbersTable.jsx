import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = props => {

    const { limit } = props

    let box = []

    for (let i = 0; i < limit; i++) {
        box.push(i + 1)
    }

    const [numbArr, setNumbArr] = useState(box)

    return (
        <div className='NumbersTable'>
            <ul>
                {numbArr.map((elm, i) => {
                    return elm % 2 === 0 ? <li key={i} className='even'>{elm}</li> : <li key={i}>{elm}</li>
                })}
            </ul>
        </div>
    )
}

export default NumbersTable