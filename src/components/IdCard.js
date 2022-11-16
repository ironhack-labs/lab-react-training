import React from 'react'

function IdCard(props) {
  return (
    <div className='user'>
    <img src={props.picture} alt="" />
<p className='lastName'>{props.lastName}</p>
<p className='firstName'>{props.firstName}</p>
<p className='gender'>{props.gender}</p>
<p className='height'>{props.height}</p>
 <p className='birth'>{props.birth.toLocaleString()}</p> 
        
    </div>
  )
}



export default IdCard

