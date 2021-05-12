import React from 'react';
import '../App.css';

function NumbersTable(props) {
  const { limit } = props;

  let arrOfNumbers = [];
  for (let i = 1; i <= limit; i++) {
    arrOfNumbers.push(i);
  }

  let color = 'green';

  const style = {
    backgroundColor: color,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 50,
    width: 50,
    fontSize: 20,
    padding: 0,
    margin: 0,
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {arrOfNumbers.map((number) => {
              return <th style={style}>{number}</th>;
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default NumbersTable;
