import React from 'react';

const Random = ({ min, max }) => {
  const i3 = {
    display: 'flex',
    margin: 15,
    padding: 1,
    borderStyle: 'solid',
    fontSize: 24,
  };
  return (
    <div style={i3}>
      <p>
        Random value between {min} and {max} = {randomNum({ min, max })}
      </p>
    </div>
  );
};

const randomNum = ({ min, max }) => {
  return Math.floor(Math.random() * max) + min;
};

export default Random;
