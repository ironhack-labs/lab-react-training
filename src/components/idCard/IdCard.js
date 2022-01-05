import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="idCard-wrapper">
      <div>
        <img src={props.picture} alt={props.lastName} />
      </div>
      <div>
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p> 
        {/* .toDateString() ->'Tue Jul 14 1992' */}
        {/* Tue Jul 14 1992 02:00:00 GMT+0200 (Central European Summer Time) */}
      </div>
    </div>
  )
}
export default IdCard;