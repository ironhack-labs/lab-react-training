import React from 'react';

export default function NumbersTable(props) {
  let index = [];
  for (let i = 1; i <= props.limit; i++) {
    index.push(i);
  }

  const styleRed = {
    backgroundColor: 'red',
  };

  const styleWhite = {
    backgroundColor: 'white',
  };

  return (
    <div className="flex-table">
      {index.map((item) => {
        return item % 2 !== 0 ? (
          <p style={styleWhite} className="table" key={item}>
            {item}
          </p>
        ) : (
          <p style={styleRed} className="table" key={item}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
