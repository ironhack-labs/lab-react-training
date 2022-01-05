import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idCard-wrapper">
      <div>
        <img src={props.picture} alt={props.lastName} />
      </div>
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()}</p> 
        {/* .toDateString() ->'Tue Jul 14 1992' */}
        {/* Tue Jul 14 1992 02:00:00 GMT+0200 (Central European Summer Time) */}
      </div>
    </div>
  )
}
export default IdCard;