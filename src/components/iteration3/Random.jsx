import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const numRan = Math.floor(Math.random() * (max - min)) + min;

  return (
    <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-indigo-600 truncate">
            Random value between {min} and {max} ={'>'} {numRan}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Random;
