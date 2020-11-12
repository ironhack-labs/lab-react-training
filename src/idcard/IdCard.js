import React from "react";
import './idCard.css';

function IdCard(props) {
  return (
  <div className="profile">
      <img className="profile-photo" src={props.picture} alt="Avatar" />
      <div className="profile-data">
      <p><strong>Last Name: </strong>{props.lastName} </p>
      <p><strong>First Name: </strong>{props.firstName} </p>
      <p><strong>Gender: </strong>{props.gender} </p>
      <p><strong>Height: </strong>{props.height} </p>
      <p><strong>Birth: </strong>{props.birth.toDateString()} </p>
      </div>
      
      
  </div>
  )
    
}

export default IdCard;