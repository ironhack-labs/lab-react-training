import React from 'react';

const NumbersTable = ({ limit }) => {
  const elements = [];

  for (let i = 0; i < limit; i++) {
    const bgColor = (i + 1) % 2 === 0 ? 'red' : 'white';
    const divStyle = {
      border: '1px solid black',
      backgroundColor: bgColor,
      width: '50px',
      height: '50px',
      display: 'inline-block',
      textAlign: 'center',
    };
    elements.push(
      <div style={divStyle} key={i + 1}>
        {i + 1}
      </div>
    );
  }

  return <div className="NumbersTable">{elements}</div>;
};

export default NumbersTable;
