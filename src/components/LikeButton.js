import { useState } from 'react';

function LikeButton() {
  const colors1 = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const colors2 = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorChange, setColorChange] = useState('green');
  const [index1, setIndex1] = useState(0);
  const theBackGroundColor1 = colors1[index1 % colors1.length];
  const [index2, setIndex2] = useState(0);
  const theBackGroundColor2 = colors2[index2 % colors2.length];

  return (
    <div>
      <button
        style={{ backgroundColor: theBackGroundColor1 }}
        onClick={() => {
          setColorChange([...colors1, setColorChange + 1]);
          setIndex1(index1 + 1);
        }}
      >
        {index1} Likes
      </button>
      <br />
      <button
        style={{ backgroundColor: theBackGroundColor2 }}
        onClick={() => {
          setIndex2(index2 + 1);
        }}
      >
        {index2} Likes
      </button>
    </div>
  );
}

export default LikeButton;
