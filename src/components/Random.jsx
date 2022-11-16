

import React from 'react'

function Random({min, max}) {
const value = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <p>Random value between {min} and {max}: {value}</p>
    </div>
  );
}

export default Random