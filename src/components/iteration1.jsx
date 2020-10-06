import React from "react";

//ITERATION 1
function IdCard(props) {
    return (
      <div className="idCard">
         <img src={props.picture} alt="profil pic"/>
        <ul>
          <li><strong>First Name:</strong> {props.firstName}</li>
          <li><strong>Last Name:</strong> {props.lastName}</li>
          <li><strong>Gender:</strong> {props.gender}</li>
          <li><strong>Height:</strong> {props.height}</li>
          <li><strong>Birth:</strong> {props.birth}</li>  
        </ul>
       
      </div>
    );
  }
  
export default IdCard;