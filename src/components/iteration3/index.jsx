import React from 'react';
import BoxColor from './BoxColor';

const Iteration3 = () => {
  const colors = [
    {
      r: 123,
      g: 213,
      b: 0,
    },
    {
      r: 123,
      g: 123,
      b: 123,
    },
    {
      r: 222,
      g: 222,
      b: 222,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p class="text-5xl mb-12">Iteration 3</p>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map((color) => (
          <BoxColor {...color} />
        ))}
      </ul>
    </div>
  );
};

export default Iteration3;
