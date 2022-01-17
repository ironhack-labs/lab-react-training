import React from 'react';
import reactDom from 'react-dom';
import './LikeButton.css';

function LikeButton(props) {
  const [count, setCount] = React.useState(0);
  const styling = {
    backgroundColor: colors[count],
    borderRadius: '0px',
    width: '85px',
    height: '45px',
    fontSize: '18px',
  };

  return (
    <div>
      <button style={styling} onClick={() => setCount(count + 1)}>
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
