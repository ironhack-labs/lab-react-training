import React from 'react';
import BoxColor from './BoxColor';

export default function BoxColorSection() {
  return (
    <div>
      <h1>Box Color</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}
