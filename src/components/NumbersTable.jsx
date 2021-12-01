import { useState } from 'react';

export const NumbersTable = ({ limit }) => {
  const [numbers, setNumbers] = useState([]);

  const numbersArr = () => {
    let arr = [];
    for (let i = 0; i <= limit; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (numbers.length === 0) {
    setNumbers((numbers) => (numbers = numbersArr()));
  }

  return (
    <div style={{ border: '2px solid black' }} className="num-table">
      {numbers.map((num, i) =>
        num % 2 === 0 ? (
          <div
            key={i}
            style={{ backgroundColor: `red`, border: '1px solid black' }}
            className="box"
          >
            {num}
          </div>
        ) : (
          <div
            key={i}
            style={{ backgroundColor: `white`, border: '1px solid black' }}
            className="box"
          >
            {num}
          </div>
        )
      )}
    </div>
  );
};
