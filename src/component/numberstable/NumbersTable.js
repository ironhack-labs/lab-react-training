import React from 'react'
import 'bulma/css/bulma.css';
import './NumbersTable.css'

const NumbersTable = (props)=>{
    const limit = props.limit
    const cellArray =[]
    for (let i = 1; i <= limit; i++) {
        cellArray.push(i);
     }

    const cells = cellArray.map((el)=>{
        return <td key={el}>{el}</td> 
    })

    return (
            <div>
                <table className="table is-bordered">
                    <tbody>
                        <tr>
                            {cells}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

export {NumbersTable}