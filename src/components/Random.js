import React from 'react';

function Random (props) {
    const {min, max} = props
  const random = Math.floor(Math.random()*(max - min)) + min
  return (
      <>Random value between {min} and {max} = {random}</>
  )

};

export default Random;