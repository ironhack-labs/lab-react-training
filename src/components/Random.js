import React from 'react'

const Random = ({min, max}) => {
  const randomValue = Math.round(Math.random() * (max - min)) + min;

  return (
    <p style={{ border: `1px solid #000`, margin: `.5rem`, padding: `1rem` }}>{`Random value between ${min} and ${max} => ${randomValue}`}</p>
  )
}

export default Random 