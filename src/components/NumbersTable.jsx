import React from 'react';

function NumbersTable({ limit }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'flex-wrap', width: '901px' }}>
      {[...Array(limit)].map((number, index) => {
        const color = (index + 1) % 2 === 0 ? 'red' : 'white';
        return (
          <div key={index} style={{ backgroundColor: color, width: '800px' }}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
