import React from 'react'

function IdCard(props) {
  
  return (
    <div>
        <span className='lastName'>{props.lastName}</span>
        <span className='firstName'>{props.firstName}</span>
        <span className='gender'>{props.gender}</span>
        <span className='height'>{props.height}</span>
        <span className='birth'>{props.birth.toLocaleString()}</span>
        <img src={props.picture} className='picture' alt='picture'/>
    </div>
  )
}

export default IdCard