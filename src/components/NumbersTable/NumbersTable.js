import React from 'react'
import './NumbersTable.css';



export default function NumbersTable(props) {

    const test = () => {
        let sol = []
        for (let i = 0; i < props.limit; i++){
            if (i % 2 === 0) {
                sol.push(<div className='Even Box'>{i+1}</div>)
            } else {
                sol.push(<div className='Odd Box'>{i+1}</div>)
            }
            
        }
        return sol
    }


    return (
        <div className="box-container">
            {test()} 
        </div>
    )
}
