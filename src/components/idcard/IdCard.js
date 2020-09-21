import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <div>
        <img id="idcard-img" src={props.picture} alt="Head Shot" />
      </div>
      <div className="personal-info">
        <div type="string">
          <b>First name:</b> {props.firstName}
        </div>
        <div type="string">
          <b>Last name: </b>
          {props.lastName}
        </div>
        <div type="string">
          <b>Gender: </b>
          {props.gender}
        </div>
        <div type="number">
          <b>Height: </b>
          {props.height}
        </div>
        <div type="date">
          <b>Birth: </b>
          {props.birth}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
