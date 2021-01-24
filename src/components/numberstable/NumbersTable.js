import React from 'react';

export default function NumbersTable(props) {
  const numbers = Array.from({length: props.limit}, (_, i) => i + 1);
  // alternative: const numbers = Array.from(Array(props.limit).keys(), i => i + 1)

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '1rem'}}>
      {numbers.map(n => {
        return <div key={n} 
          style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid',
            backgroundColor: n % 2 === 0 ? 'red' : 'white'
          }}>
            {n}
          </div>
        })}
    </div>
  )
}

