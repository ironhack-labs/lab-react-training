import React, { useState } from 'react';

function NumbersTable({ limit }) {
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < limit; i++) {
      const className =
        i % 2 === 0 ? 'numbers-table-item-red' : 'numbers-table-item-white';
      items.push(
        <div className={className} key={i}>
          {i}
        </div>
      );
    }
    return items;
  };

  return <div className="numbers-table">{renderItems()}</div>;
}

export default NumbersTable;
