import React, { useState } from 'react';

function Rating(props) {
  const initValue = ['☆', '☆', '☆', '☆', '☆'];
  const [state, setState] = useState(initValue);


  return <div>{state}</div>;
}

export default Rating;