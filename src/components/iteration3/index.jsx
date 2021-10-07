import React from 'react';
import Random from './Random';

const Iteration3 = () => {
  const numbers = [
    { min: 0, max: 10 },
    { min: 100, max: 200 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p class="text-5xl mb-12">Iteration 3</p>

      <ul className="space-y-3">
        {numbers.map((number) => (
          <Random {...number} />
        ))}
      </ul>
    </div>
  );
};

export default Iteration3;
