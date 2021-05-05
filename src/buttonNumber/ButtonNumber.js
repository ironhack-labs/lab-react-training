import React, { useState } from 'react';

const ButtonNumber = (props) => {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => setCount(count - 1);
  const increaseHandler = () => setCount(count + 1);
  
  return (
    <div className="counter-container">
      <h3>Functional component in ACTION!!!</h3>
      <h1>{count}</h1>
      <button onClick={decreaseHandler}>less</button>
      <button onClick={increaseHandler}>more</button>
    </div>
  )
}

export default ButtonNumber;