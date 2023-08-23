import './NumbersTable.css'
import { useState } from 'react'

const NumbersTable = ({ limit }) => {

    let arrayNUm = []

    for (let i = 0; i <= limit; i++) {

        arrayNUm.push(i)
    }

    return (
        arrayNUm.map((elem, index) => {

            if (elem % 2 === 0) {
                return <p key={index} style={{ backgroundColor: 'red' }}>{elem}</p>
            } else {
                return <p key={index} style={{ backgroundColor: 'white', color: 'black' }}>{elem}</p>
            }

        })

    )


}



export default NumbersTable