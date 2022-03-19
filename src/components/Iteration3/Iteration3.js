import React from 'react';
import { Random } from './Random/Random';

const Iteration3 = () => {
  return (
    <div className="row gx-5 w-50">
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
};

export { Iteration3 };
