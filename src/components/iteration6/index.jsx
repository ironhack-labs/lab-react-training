import React from 'react';
import Rating from './Rating';

const Iteration6 = () => {
  const ratings = [0, 1.5, 2.3, 3.3, 4.4, 5];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p className="text-5xl mb-12">Iteration 6</p>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ratings.map((rating, i) => (
          <Rating shadow key={i}>
            {rating}
          </Rating>
        ))}
      </ul>
    </div>
  );
};

export default Iteration6;
