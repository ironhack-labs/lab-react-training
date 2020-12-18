import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className='box'>
      <p>Random value between {min} and {max} = {random}</p>
    </div>
  )
}

export default Random;