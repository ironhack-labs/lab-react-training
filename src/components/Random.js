import React from 'react';

export const Random = (props) => {
  const { max, min } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} = {randomNum}
      </p>
    </div>
  );
};
