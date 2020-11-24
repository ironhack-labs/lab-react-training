import React from 'react';
import '../style/IdCart.css'

function IdCard(props) {
  return (
    <div className="IdCard">
      <img className="profile-pic" src={props.picture} alt="" />
      <div>
        <p>
         <span> <b>First name:</b> {props.lastName}</span>
        </p>
        <p>
          <span> <b>Last name:</b> {props.firstName}</span>
        </p>
        <p>
          <span> <b>Gender:</b> {props.gender}</span>
        </p>
        <p>
          <span> <b>Height:</b> {props.height}</span>
        </p>
        <p>
          <span> <b>Birth: </b>{props.birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
