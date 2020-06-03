import React from 'react';

function NumbersTable(props) {
  const array = [];

  for (let i = 1; i <= props.limit; i++) {
    array.push(i);
  }
  console.log(array);

  const numbers = array.map((number) => {
    if (number % 2 === 0) {
      return (
        <td key={number.toString()} style={{ backgroundColor: 'red' }}>
          {number}
        </td>
      );
    } else {
      return <td key={number.toString()}>{number}</td>;
    }
  });

  return (
    <table>
      <tbody>
        <tr>{numbers}</tr>
      </tbody>
    </table>
  );
}

export default NumbersTable;
