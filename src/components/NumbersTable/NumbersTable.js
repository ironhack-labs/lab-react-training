import React from 'react'
import "./NumbersTable.css"

function NumbersTable({limit}) {
    const numberOfBoxes = []
    for (let i = 1; i <= limit; i ++) {
        const even = i %2 === 0 ? "even" : "odd"
        numberOfBoxes.push(
            <div className={even}>
                {i}
            </div>
            )
    }
    return (
        <div className="boxContainer">
            {numberOfBoxes}
        </div>
    )
}

export default NumbersTable
