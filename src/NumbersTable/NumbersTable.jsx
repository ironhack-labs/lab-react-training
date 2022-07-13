import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    let newArr = []

    for (let i = 1; i <= limit; i++) newArr.push(i)

    return (

        <div className='table'>

            {
                newArr.map(elm => {
                    return (
                        elm % 2 === 0 ? <div key={elm} className='red-square'>{elm}</div> : <div key={elm}>{elm}</div>
                    )
                })
            }

        </div >
    )
}

// Metes cuadrados hasta el limit y si el número es par, divStyle color cambia a rojo

export default NumbersTable