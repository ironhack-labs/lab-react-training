import React from 'react'

export default function NumbersTable(props) {
    const arr = ({limit}) => {
        let numbers = [];
        for (let num = 1; num <= limit; num++) {
            numbers.push(
                <div className='NumbersTable__number'key={num}>
                    {num}
                </div>
            )
        }
        return numbers
    }
    return (
        <div className='NumbersTable'>
           {arr(props)} 
        </div>
    )
}
