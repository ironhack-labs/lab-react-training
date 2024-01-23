import { useState } from 'react';

function LikeButton(props) {
  const [count, setCount] = useState(0);
  const cols = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const increaseCount = () => {
    let countCopy = count;
    countCopy += 1;
    console.log(count);
    setCount(countCopy);
  };

  const setCol = (counter) => {
    let index = 0; // HERE PROBLEM ***
    if (count >= cols.length) {
        index = count % cols.length;
    } else {
        index = count;
    }
    return {backgroundColor: cols[index]};
  }

  return (
    <button 
    className="like-button" 
    onClick={increaseCount}
    style={setCol(count)}>
      {count} Likes
    </button>
  );
}
export default LikeButton;
