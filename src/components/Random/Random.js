import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className='card'>
      <h2>
        Random value between {min} and {max} = {random}
      </h2>
    </div>
  )
}

export default Random;
