import React from 'react';
import './LikeButton.css';

const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

const INITIAL_STATE = {
  likes: 0,
  color: randomColor,
};

function handleLike(state, setState) {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  setState({ likes: state.likes + 1, color: colorArray[randomIndex] });
}

export default function Likebutton() {
  const [state, setState] = React.useState({ ...INITIAL_STATE });

  return (
    <div className="like-button-container">
      <button
        style={{
          backgroundColor: state.color,
          color: state.color === 'yellow' ? 'black' : 'white',
        }}
        onClick={() => handleLike(state, setState)}
      >
        {state.likes} {state.likes === 1 ? 'Like' : 'Likes'}
      </button>
    </div>
  );
}
