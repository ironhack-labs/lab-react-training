import React from 'react';

function NumbersTable(props) {
  let table = [];
  for (let i = 1; i <= props.limit; i++) table.push(i);

  return (
    <div className="numberstable">
      <ul className="ul">
        {table.map((number, i) => (
          <li
            className="li"
            key={i}
            style={{ backgroundColor: i % 2 === 0 ? 'white' : 'red' }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumbersTable;
