import React from 'react';


function NumbersTable(props) {
    const { limit } = props;

    const makeSquares = () => {
      const squares = [];
  
      for (let i = 1; i <= limit; i++) {
        squares.push(
          <div 
            style={{
              backgroundColor: i % 2 === 0 ? 'red' : 'white',
              width: '50px',
              height: '50px',
              paddingTop: '25px',
              border: '1px solid black'
            }}
          >
            {i}
          </div>
        );
      }
      return squares;
    };
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{makeSquares()}</div>
    );
  }
  

export default NumbersTable;