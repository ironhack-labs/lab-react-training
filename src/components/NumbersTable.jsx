import React from 'react';

const NumbersTable = ({ limit }) => {
  const numberList = [];

  for (let i = 1; i <= limit; i++) {
    const numberItem = (
      <div
        key={i}
        className={`number-item ${i % 2 === 0 ? 'even' : ''}`}
      >
        {i}
      </div>
    );
    numberList.push(numberItem);
  }

  return (
    <div className="numbers-table">
      {numberList}
    </div>
  );
};

export default NumbersTable;