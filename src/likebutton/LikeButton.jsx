import React from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [state, setState] = React.useState(0);
  const [randomNumber, setNumber] = React.useState(0);
  const [randomNumber2, setNumber2] = React.useState(5);


  const handleChange = () => {
    const random = Math.floor(Math.random() * colors.length);
    const random2 = Math.floor(Math.random() * colors.length);

    setNumber(random);
    setNumber2(random2)
    setState(state + 1);
  };

  return (
    <div classname="LikeButton">
      <button
        style={{
          backgroundColor: `${colors[randomNumber]}`,
          color: `${colors[randomNumber2]}`,
          width: 'max-content',
          height: '100px',
          fontSize: '2.5em',
          fontWeight: 'bold',
          margin: '20px'
        }}
        onClick={handleChange}
      >
        {state} {state===1 ? 'Like' : 'Likes'}
      </button>
    </div>
  );
};

export default LikeButton;
