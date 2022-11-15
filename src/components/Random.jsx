import React from 'react'

function Random(props) {
    const {min, max} = props;

    const result = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <p>Random value between {min} and {max} = <span className='bold-text'>{result}</span></p>
  )
}

export default Random