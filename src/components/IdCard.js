import React from "react";

function IdCard(props) {
    const {person} = props
  
    return (
     
     <div className="ID">
      <img src = {person.picture} alt = "foto"/>
        <p>
          <b>First name:</b> {person.firstName}
        </p>
        <p>
          <b>Last name:</b> {person.lastName}
        </p>
        <p> <b>Gender:</b> {person.gender}</p>
       
        <p> Height: {person.height} </p>
       
        <p> Birth: {person.birth.toString()} </p>
        
      </div>
    );
  }
  
  export default IdCard;