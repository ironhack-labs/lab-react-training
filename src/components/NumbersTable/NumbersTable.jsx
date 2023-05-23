import React from 'react'

const NumbersTable = ({ limit }) => {

    const numbers = Array.from({ length: limit }, (elm, i) => i + 1)
    return (
        <div className="numbers-table">
            {numbers.map((number) => (
                <div key={number} className={number % 2 === 0 ? 'number-item red' : 'number-item'}>
                    {number}
                </div>
            ))}
        </div>)
}

export default NumbersTable