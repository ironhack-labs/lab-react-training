import React from 'react';

const NumbersTable = (props) => {
  const arrNumbers = [];
  let init = 1;
  while (arrNumbers.length < props.limit) {
    arrNumbers.push(init);
    ++init;
  }
  const numbersList = arrNumbers.map((el, index) => {
    if (index % 2 !== 0) {
      return (
        <span key={el} style={{ backgroundColor: 'red' }}>
          {el}
        </span>
      );
    } else {
      return <span key={el}>{el}</span>;
    }
  });
  return <div className="wrapper">{numbersList}</div>;
};

export default NumbersTable;
