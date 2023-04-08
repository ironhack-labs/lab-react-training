/*
import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  
  return (
    <div>
      <p>Random value between {min} and {max} =&gt; {randomNum}</p>
    </div>
  );
}

export default Random;

*/

import React from 'react';

const Random = (props) => {
  const random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="border border-dark m-2 p-1">
      <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
    </div>
  );
};

export default Random;
