import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbersArr = [];
  for (let i = 1; i <= limit; i++) {
    numbersArr.push(i);
  }
  return (
    <table>
      <tbody>
        {numbersArr
          .reduce((rows, number, index) => {
            if (index % 5 === 0) rows.push([]);
            rows[rows.length - 1].push(number);
            return rows;
          }, [])
          .map((row) => (
            <tr>
              {row.map((number) => (
                <td
                  style={{
                    backgroundColor: number % 2 === 0 ? 'red' : 'white',
                  }}
                >
                  {number}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default NumbersTable;
