import { useState } from 'react';

function LikeButton() {
  const [state, setState] = useState({ bgColor: 'purple', count: 0 });

  function incrementClick(event) {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const newCount = state.count + 1;
    setState({ bgColor: colors[newCount % 6], count: newCount });
  }

  if (state === 1) {
    return (
      <button
        onClick={incrementClick}
        style={{ backgroundColor: state.bgColor }}
      >
        {state.count} Like
      </button>
    );
  } else {
    return (
      <button
        onClick={incrementClick}
        style={{ backgroundColor: state.bgColor }}
      >
        {state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
