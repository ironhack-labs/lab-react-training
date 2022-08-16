import React from 'react';

function Random(props) {
  const { min, max } = props;
  let randomNum = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      Random value between {min} and {max} = {randomNum}
    </div>
  );
}

export default Random;
