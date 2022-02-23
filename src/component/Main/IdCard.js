import React from 'react'



export default function IdCard(props) {

    
  return (
    <>
        <img src={props.picture} alt="foto" />
        <p className='firstName'><strong>First Name: </strong> {props.firstName}</p>
        <p className='lastName'><strong>Last Name: </strong>{props.lastName}</p>
        <p className='gender'><strong>Gender: </strong>{props.gender} </p>
        <p className='height'><strong>Height: </strong>{props.height} </p>
        {/* birth */}
        
    </>
  )
}
