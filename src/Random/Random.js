import React from 'react';

export default function Random(props) {
  const { min = 0, max = 0 } = props;
  let randomValue = Math.floor(Math.random() * max) + min;
  return (
    <div>
      Random value between{min} and {max} =&gt; {randomValue}
    </div>
  );
}
