import React from 'react'

function Random({min, max}) {
    let randomNum = Math.floor(Math.random() * max) + min
  return (
    <div className='randomNum'>
        This is a random number between {min} and {max} => {randomNum}
    </div>
   
  )
}

export default Random