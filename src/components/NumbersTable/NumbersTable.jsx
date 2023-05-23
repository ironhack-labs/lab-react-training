import { useState } from "react";
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    let numbersArr = []
    for (let i = 1; i <= limit; i++) {
        numbersArr.push(i)
    }

    const coloredBox = {
        backgroundColor: 'red'
    }

    return (
        <div className="table">
            {
                numbersArr.map((elm, clave) => {
                    return <div key={clave} className="numberTable" style={elm % 2 === 0 ? coloredBox : undefined}>{elm}</div>
                })

            }
        </div>
    );
}


export default NumbersTable