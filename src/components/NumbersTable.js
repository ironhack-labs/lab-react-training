import { textAlign } from '@mui/system';
import React, { useState } from 'react';

const NumbersTable = ({ limit }) => {
  const boxes = [];

  for (let i = 1; i <= limit; i += 1) {
    boxes.push(
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `${i % 2 === 0 ? 'red' : 'white'}`,
          border: 'solid 2px black',
          textAlign: 'center',
          fontWeight: 'bold',
          
        }}
      >
        <p
          style={{
            margin: '25%',
            fontSize: '2rem',
          }}
        >
          {' '}
          {i}{' '}
        </p>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: 'flex', width: '500px', flexWrap: 'wrap' }}>
        {boxes.map((box) => box)}
      </div>
    </>
  );
};

export default NumbersTable;
