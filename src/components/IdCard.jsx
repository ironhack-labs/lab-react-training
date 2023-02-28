import React from 'react'

function IdCard(props) {
    const{lastName,firstName,gender,height,birth,picture}=props
  return (
    <div>
       <img src={picture} alt="" /> 
       <ul>
        <li>First name:{firstName}</li>
        <li>Last name:{lastName}</li>
        <li>Gender:{gender}</li>
        <li>Height:{height}</li>
        <li>Birth:{birth.toDateString()}</li>
       </ul>
       
    </div>
  )
}

export default IdCard