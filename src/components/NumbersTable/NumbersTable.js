import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    return (

        <table className="table">
            {
                limit.forEach(eachNumber => {
                    return (
                        <tbody>
                            <tr>
                                <td>{eachNumber}</td>
                            </tr>

                        </tbody>
                    )
                })
            }
        </table>
    )

}

export default NumbersTable