import React from 'react'

function Random(props) {


const {min, max} = props
const randomNumber = Math.floor((Math.random () * (max)) + 1 );

  return (
    <div>
        <p>Random value between 1 and {max} = {randomNumber}</p>
    </div>
  )
}

export default Random