import React from 'react';
function Random({ min, max }) {
  const randNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className="RandomContainer">
      <p>
        Random value between 1 and 6 ={'>'} {randNumber}
      </p>
    </div>
  );
}

export default Random;
