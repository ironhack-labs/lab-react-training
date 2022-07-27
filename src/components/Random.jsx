import React from 'react'

const Random = ({min,max}) => {
    let num = Math.floor(Math.random(min) * max + 1) ;

  return (
    <div>
        <h3>Random value between {min} and {max} = {num}</h3>
    </div>
  )
}

export default Random