import React from 'react';
import './styles.css';

function IdCard (props) {
  return (
    <div className="idcard">
      <img src={props.picture} alt=""/>
      <div className="idContent">
        <p><span className="bold">First name: </span>{props.firstName}</p>
        <p><span className="bold">Last name: </span>{props.lastName}</p>
        <p><span className="bold">Gender: </span>{props.gender}</p>
        <p><span className="bold">Height: </span>{props.height}</p>
        <p><span className="bold">Date of Birth: </span>{props.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;