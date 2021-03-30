import React from 'react';
import '../assets/css/NumbersTable.css'

const NumbersTable = ({ limit }) => {

    return (<div className='NumbersTable'>
        {
            Array.apply(null, { length: limit }).map((a, i) => {
                return (
                    <h1 className={i % 2 === 0 ? 'NumbersTableItem' : 'NumbersTableItemB NumbersTableItem'}>
                        {i + 1}
                    </h1>
                )
            })
        }
    </div>)
}

export default NumbersTable;