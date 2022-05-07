import { useState } from 'react';
import { randomValueGenerate } from '../utils/utilities';

const LikeButton = () => {
  const [counterValue, setCounterValue] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <div>
      <button
        style={{ backgroundColor: randomValueGenerate(colors) }}
        onClick={() =>
          setCounterValue((prevCounterValue) => ++prevCounterValue)
        }
      >
        {counterValue} likes{' '}
      </button>
    </div>
  );
};

export default LikeButton;
