import React from 'react';

function NumbersTable(props) {
const { limit } = props;

const numbers = [];
for (let i = 1; i <= limit; i++) {
    numbers.push(i);
}

return (
    <div className="NumbersTable">
    <ul>
        {numbers.map((number, index) => (
        <li
            key={index}
            style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
        >
            {number}
        </li>
        ))}
    </ul>
    </div>
);
}

export default NumbersTable;
