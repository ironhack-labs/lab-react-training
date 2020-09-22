import React from 'react';

function Random(props) {
  const {min, max} = props;

  const randomNumber = Math.floor(Math.random()*(max-1)+min)

  return (
    <div>
      Random value between {min} and {max} =&gt; {randomNumber}
    </div>
  );
}

export default Random;