import React from 'react'
import './NumbersTable.scss'

const NumbersTable = ({ limit }) => {

    let table = []
    for(let i = 1; i < limit + 1; i++){ 
        i % 2 === 0 
            ? table.push({ i, type: 0 }) 
            : table.push({ i, type: 1 })
    }

    return (
        <>
            { table.map((number, id) => {
                return (<div key={id} className={ number.type === 0 ? 'Number0' : 'Number1' }> { number.i } </div>)
            }) }
        </>
    )
}

export default NumbersTable
