import React from 'react';
import './IdCard.css'


function IdCard(props) {
    return (
     <div className = "IdCard">
     <img src={props.picture} alt="profile"></img>
     <div>
     <p><strong>FirstName:</strong>{props.firstName}</p>
     <p><strong>LastName:</strong>{props.lastName}</p>
     <p><strong>Height:</strong>{props.height}</p>
     <p><strong>Gender:</strong>{props.gender}</p>
     <p><strong>Birth:</strong> {props.birth}</p>
     </div>
     </div>
    );
  }
  
  export default IdCard;
  