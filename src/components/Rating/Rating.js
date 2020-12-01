import React from 'react'

const Rating = (props) => {
  const numStars = Math.round(props.children); 
  const stars = new Array(5).fill(undefined); 

  return (
    <div style={{fontSize: '32px'}}>
    {stars.map((e, index) => 
      numStars > index 
        ? <span key={index}>★</span> 
        : <span key={index}>☆</span>
      )
    }
    </div>
  )
}

export default Rating;

