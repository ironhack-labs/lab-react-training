import React from 'react'

export default function IdCard(props) {
  return (
    <div className="IdCard box">
       <img src={props.写真} alt="" /> 
        <div className="right">
          <strong>First name:</strong> {props.firstName}
          <br/>
          <strong>Last name: </strong>{props.lastName}
          <br/>
          <strong>Gender: </  strong>{props.gender}
          <br/>
          <strong>Height: </  strong>{props.height}cm
          <br/>
          <strong>Birth: </strong>  {props.dob}
     
          </div>      
    </div>
  )
}
