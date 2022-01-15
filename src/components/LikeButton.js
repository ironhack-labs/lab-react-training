import { useState } from 'react';
import classes from './LikeButton.module.css';

const LikeButton = (props) => {
  const [counter, setCounter] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const bgColor = colors[Math.floor(Math.random() * 6)];

  const clickHandler = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <button
      onClick={clickHandler}
      type="button"
      className={classes.likeButton}
      style={{ backgroundColor: bgColor }}
    >
      {counter} Likes
    </button>
  );
};

export default LikeButton;
