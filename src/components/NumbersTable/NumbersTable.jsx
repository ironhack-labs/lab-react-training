import { useState } from "react";
import "./NumbersTable.css"


const NumbersTable = ({ limit }) => {
    const numbers = [];

    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    return (
        <table>
            <tbody>
                {numbers.map((number) => (
                    <tr key={number} >
                        <td className="tableNumber" style={{ backgroundColor: number % 2 === 0 && 'red' }}>{number}</td>
                    </tr>
                ))}
            </tbody>
        </table>)

}

export default NumbersTable