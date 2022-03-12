import { useState } from 'react';

function LikeButton(props) {
  const [count, setCount] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const btnStyle = {
    backgroundColor: colors[count % colors.length],
    color: 'white',
  };

  function handleClick(event) {
    setCount(count + 1);
  }

  return (
    <button style={btnStyle} onClick={handleClick}>{`${count} Likes`}</button>
  );
}

export default LikeButton;
