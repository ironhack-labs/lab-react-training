import React from 'react'

const Random = ({ min, max }) => {
  return (
    <div className='border words'>
     <p>
      Random value between {min} and {max} => {Math.floor(Math.random() * max) + min}  
     </p>
    </div>
  )
}

export default Random
