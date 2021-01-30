import React from 'react'
import './NumbersTable.css';

export default function NumbersTable(props) {

    const test = () => {
        let row = []
        for (let i = 0; i < props.limit; i++){
            if (i % 2 === 0) {
                row.push(<div className='Even Box'>{i+1}</div>)
            } else {
                row.push(<div className='Odd Box'>{i+1}</div>)
            }
            
        }
        return row
    }


    return (
        <div className="ContainerNumTable">
            {test()} 
        </div>
    )
}
