import React from 'react';
import Random from './Random';

export default function RandomSection() {
  return (
    <div>
      <h1>Random number</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}
