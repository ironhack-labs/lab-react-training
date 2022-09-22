import React from 'react'

const Random = (props) => {
    const {max, min}= props;
   let random = Math.floor(Math.random() * (max - min + 1) + min);
   ;
  return (
    <div className='card'>
        <p>Random value between {min} and {max} ={'>'} {random}</p>
    </div>
  )
}

export default Random;