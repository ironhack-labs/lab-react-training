import React from "react";
import './NumbersTable.css'


const NumbersTable = (({limit}) => {

    const cells = []
    for (let i = 1 ; i <= limit ; i++) {
        cells.push(i)
    }

    return ( 
        <div className="numContainer">
            {cells.map(cell => {
                return (
                    <div key={cell} className="number-cell" style={{backgroundColor: cell && cell % 2 === 0 ? "red" : "white"}}>
                        {cell}
                    </div>
                )
            })}
        </div>
    )

})

export default NumbersTable