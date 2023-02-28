import React from 'react'

function Random(props) {
    const {min, max} = props;
    const random = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum)) + minNum;

  return (
    <div>Random value between {min} and {max} = {random(min, max)} </div>
  )
}

export default Random