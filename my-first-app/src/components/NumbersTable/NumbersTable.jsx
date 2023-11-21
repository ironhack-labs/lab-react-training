import { useState } from "react";
import "./NumbersTable.css"


const NumbersTable = ({ limit }) => {

    const cellsNumbers = []

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            cellsNumbers.push((<td className="squareCell evenNumber">{i}</td>))
        } else {
            cellsNumbers.push((<td className="squareCell oddNumber">{i}</td>))
        }
        if (cellsNumbers.length % 5 === 0) {
            cellsNumbers.push(<tr></tr>)
            cellsNumbers.push((<tr className="squareRow"></tr>))
        }
    }

    return (
        <div>
            <table>

                {cellsNumbers}
            </table>

        </div>
    )

}


export default NumbersTable