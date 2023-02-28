import './NumbersTable.css'
import { useState } from "react"

const NumbersTable = ({ limit }) => {

    let numbersArr = []
    for (let i = 1; i <= limit; i++) {
        numbersArr.push(i)
    }

    const styleBox = {
        backgroundColor: 'red'
    }


    return (
        <div className="carousel">
            {

                numbersArr.map((elm, inx) => {
                    return <div key={inx} className="numberTable" style={elm % 2 === 0 ? styleBox : undefined}>{elm}</div>
                })

            }
        </div>
    );
}

export default NumbersTable