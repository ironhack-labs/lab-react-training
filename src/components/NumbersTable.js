import React from 'react'
import './NumbersTable.css';

function NumbersTable(props) {
    const nbArray = [];
    for (let i = 1; i < props.limit; i++) {
        nbArray.push(i)
    } 

    return (
        <ul className="NumbersTable">
            {nbArray.map((elem) => {
                return <div class="square" style={ elem % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>{elem}</div>
            })}
        </ul>
    )
    
}

export default NumbersTable;