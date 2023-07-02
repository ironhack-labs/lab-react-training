import React from 'react';

const NumbersTable = (props) => {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <table className='numbers-table'>
        <tbody>
        <tr>
          {numbers.map((number) => (
              <td key={number} style={{ background: number % 2 === 0 ? 'red' : 'white' }}>{number}</td>))}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumbersTable;
