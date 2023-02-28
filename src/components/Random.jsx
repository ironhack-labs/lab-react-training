import React from 'react'

function Random(props) {
    const {min, max} = props

  



  return (
    <div>
<h6>Random value between {min} and {max} {'=>'} {Math.floor(Math.random() * (max - min) + min)}</h6>
    </div>
  )
}

export default Random