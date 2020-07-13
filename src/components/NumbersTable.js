import React from 'react';

const NumbersTable = (props) => {
  const list = [];

  for (let i = 1; i < props.limit + 1; i++) {
    const divStyle = {
      backgroundColor: i % 2 === 0 ? 'red' : 'white',
      color: i % 2 === 0 ? 'white' : 'black',
    };
    list.push(
      <div className="square" style={divStyle} key={i}>
        <h1>{i}</h1>
      </div>
    );
  }

  return <div className="number-table">{list}</div>;
};

export default NumbersTable;
