import React from 'react';
import './NumbersTable.css';

const renderTable = (limit) => {
  let render = [];
  for (let i = 1; i <= limit; i++) {
    render.push(
      <div key={i} style={{ backgroundColor: i % 2 === 0 ? 'red' : 'inherit' }}>
        {i}
      </div>
    );
  }
  return render;
};

export default function NumbersTable({ limit }) {
  return <div className="numbers-table-container">{renderTable(limit)}</div>;
}
