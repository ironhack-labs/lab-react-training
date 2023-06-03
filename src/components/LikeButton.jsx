import { useState } from 'react';

function LikeButton() {
  const colorsArr = [
    '#7333a5',
    '#455EB5',
    '#11aa99',
    '#ddbb55',
    'chocolate',
    '#c63925',
  ];
  const [count, setCount] = useState(0);
  const updateCount = (event) => {
    setCount(count + 1);
  };

  return (
    <button
      style={{
        backgroundColor: colorsArr[count % colorsArr.length],
      }}
      onClick={updateCount}
      class="btn-like"
    >
      <span className="icon">👍</span>
      <span className="text">{count}</span>
    </button>
  );
}

export default LikeButton;
