import React from 'react';
import NumbersTable from './NumbersTable';

export default function NumbersTableSection() {
  return (
    <div>
      <h1>Number's Table</h1>

      <NumbersTable limit={12} />
    </div>
  );
}
