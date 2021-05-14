import React from 'react';

function NumbersTable(prop) {
  const { limit } = prop;

  let numberArr = [];
  for (let i = 1; i < limit + 1; i++) {
    numberArr.push(i);
  }

  const number = numberArr.map((e, idx) => {
    return e % 2 === 0 ? (
      <div className="number" key={idx} style={{ backgroundColor: 'red' }}>
        <h4>{e}</h4>
      </div>
    ) : (
      <div className="number" key={idx}>
        <h4>{e}</h4>
      </div>
    );
  });

  return <div className="boxesContainer">{number}</div>;
}

export default NumbersTable;
