import React from 'react'

function Random(props) {
    let {min, max} = props;
    const value = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
        <p>Random value between {min} and {max} = {value}</p>
        <p>Random value between {min} and {max} = {value}</p>
    </div>
  )
}

export default Random