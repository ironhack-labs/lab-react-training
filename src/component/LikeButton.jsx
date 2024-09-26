import React, { useState } from 'react';

function Like() {
  const [count, setCount] = useState(0);

  return (
    <div className="like">
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count - 1)}>Like {count}</button>
      <button onClick={() => setCount(count + 1)}>Like {count}</button>
    </div>
  );
}

export default Like;
