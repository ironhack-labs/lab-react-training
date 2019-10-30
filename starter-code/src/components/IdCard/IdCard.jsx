import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
  return (
    <div className='IdCard box' key={props.firstName}>
      <img src={props.picture} alt={props.firstName}/> 
      <div className='right'>
        <strong>First Name</strong> : {props.firstName}<br />
        <strong>Last Name:</strong> {props.lastName}<br />
        <strong>Gender:</strong> {props.gender}<br />
        <strong>Height:</strong> {props.height}<br />
        <strong>Birth:</strong> {props.birth.getMonth() + 1} 
      </div>
    </div>
  );
};

export default IdCard