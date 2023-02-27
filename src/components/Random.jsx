import React from 'react';

const Random = (props) => {
  const { max, min } = props;
  let x = Math.floor(Math.random() * max + min);
  return (
    <div className="div">
      <p>
        {' '}
        Random value between {min} and {max} = {x}{' '}
      </p>
    </div>
  );
};
export default Random;
