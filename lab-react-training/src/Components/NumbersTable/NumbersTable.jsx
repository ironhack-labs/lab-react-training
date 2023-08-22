import { useState } from "react"
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const element = []

    for (let i = 0; i < limit; i++) {
        if (i % 2 === 0) {
            element.push(<p className="even"> {i}</p>)
        } else {
            element.push(<p >{i}</p>)
        }
    }

    return (
        <p className="elements"> {element}   </p>
    )
}


export default NumbersTable