import React from 'react';
import './IdCard.css';

function formatDate(date) {
  return date.toString().substring(0, 15);
}

const IdCard = (props) => {
  let height = props.height / 100;

  return (
    <div className="idCard">
      <div className="innerCard">
        <img srcSet={props.picture} alt="" />
      </div>
      <div className="innerCard">
        <p>
          <b>First name:</b> {props.firstName} <br />
          <b>Last name</b>: {props.lastName} <br />
          <b>Gender</b>: {props.gender} <br />
          <b>Height</b>: {height}m <br />
          <b>Birth</b>: {formatDate(props.birth)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
