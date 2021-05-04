import React from 'react';
import './NumbersTable.css';
import { v4 as uuid } from 'uuid';

export default function NumbersTable(props) {
  console.log('hello');
  const list = [...Array(props.limit)].map((box, idx) => {
    console.log(idx);
    return (
      <>
        {idx % 2 ? (
          <div key={uuid()} className="even">
            {idx + 1}
          </div>
        ) : (
          <div key={uuid()} className="odd">
            {idx + 1}
          </div>
        )}
      </>
    );
  });
  console.log(list);
  return (
    <div key={uuid()} className="numbers-table">
      {list}
    </div>
  );
}
