import React from 'react'

function Random(props) {
  
    const { min, max } = props;
  
    return (
    <div className='info-card'>
        <p>Random value between {min} and {max} {'=>'} {Math.floor(Math.random() * max + min)}</p>
    </div>
  )
}

export default Random