import { useState } from 'react';
const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
let color = colors[0];

function LikeButton() {
  let nameLikes = 'Likes';
  const [count, setCount] = useState(0);

  function handleClick() {
    color = colors[(count % 6) + 1];
    setCount(count + 1);

    // if (count === 0) {
    //   nameLikes = 'Like';
    //   console.log(nameLikes);
    // }
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: `${color}`,
        }}
        onClick={handleClick}
      >
        {count} {nameLikes}
      </button>
    </div>
  );
}

export default LikeButton;
