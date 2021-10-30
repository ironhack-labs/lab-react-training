import React, { useState } from 'react';

function LikeButton() {
  const initialState = 0;

  const [state, setState] = useState(initialState);

  function IncreaseNumber() {
    setState(state + 1);
  }

  return (
    <div>
      <button onClick={IncreaseNumber}> {state} likes </button>
    </div>
  );
}

export default LikeButton;
