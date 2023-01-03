import React from 'react';
const randomNumber=({min, max})=>
{

  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
    Random value between {min} and {max} => {randomValue}
    </div>);
}

export default randomNumber;
