import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = (({ limit }) => {

    const lista = []
    for (let i = 1; i <= limit; i++) {
        lista.push(i)
    }

    return (
        <div>
            {lista.map(celda => {
                return (
                    <div key={celda}
                        style={{ backgroundColor: celda % 2 === 0 ? "red" : "blue" }}>
                        {celda}
                    </div>
                );
            })}
        </div>
    )

})


export default NumbersTable