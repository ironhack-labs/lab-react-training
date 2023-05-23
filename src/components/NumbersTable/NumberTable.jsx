import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    let emptyArray = []

    for (let i = 0; i <= limit; i++) {
        emptyArray.push(i)

    }


    return (
        <table className='tabla'>
            <tr>
                {
                    emptyArray.map((elm) => {
                        return <td key={elm} className={elm % 2 === 0 ? 'even' : ''}>{elm}</td>
                    })
                }
            </tr>
        </table>

    )

}
export default NumbersTable