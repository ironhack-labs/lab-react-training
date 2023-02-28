import React from 'react'


function Random(props) {
  const {min, max} = props;
//let num1 = Math.floor(Math.random() * (max - min + 1)) + min;

 return (
    <div>Random value between {min} and {max} = &gt; {Math.floor(Math.random() * (max - min) + min)}</div>
  )
}

export default Random