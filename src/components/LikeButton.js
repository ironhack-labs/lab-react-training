import { useState } from 'react';

function LikeButton() {
  const [colorNumber, setColorNumber] = useState(0);

  const colors = [
    'blue',
    'orange',
    'green',
    'teal',
    'red',
    'yellow',
    'pink',
    '#Bada55',
    '#333333',
    'rgb(250,123,123)',
    'lime',
    'salmon',
    'silver',
  ];

  return (
    <div>
      <button
        style={{ background: colors[colorNumber % colors.length] }}
        onClick={() => {
          setColorNumber(colorNumber + 1);
        }}
      >
        {colorNumber} Likes
      </button>
    </div>
  );
}

export default LikeButton;
