import { useState } from 'react'
import './NumbersTable.css'


function NumbersTable({ limit }) {

    


    return (
        <div>
        <h1>NumbersTable</h1>
            <div className='numbers-table'>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                        </tr>
                        <tr>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                            <td>{limit}</td>
                        </tr>
                        <tr>
                            <td>{limit}</td>
                            <td>{limit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default NumbersTable