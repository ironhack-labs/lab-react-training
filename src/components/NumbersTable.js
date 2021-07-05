import { useState } from 'react';

const NumbersTable = ({ limit }) => {
  const [bgColor, setBgColor] = useState('white');

  const numArray = [];
  for (let i = 1; i < limit + 1; i++) {
    numArray.push(i);
  }

  return (
    <div>
      {numArray.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: item % 2 === 0 ? 'red' : 'white',
            width: '100px',
            height: '100px',
            border: '1px solid black',
            display: 'inline-block',
          }}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
