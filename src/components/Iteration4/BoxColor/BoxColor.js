import React from 'react';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const BoxColor = (props) => {
  
  const { style } = props
  console.log(style)

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export { BoxColor };
