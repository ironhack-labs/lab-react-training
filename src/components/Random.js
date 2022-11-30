import React from 'react'

const Random = ({min, max}) => {
  const randNum = Math.floor(Math.random() * (max - min+1) + min);

  return (
    <div className='comp random'>
      <p>Random value between {min} and {max} {"=>"} {randNum}</p>
    </div>
  );
}

export default Random