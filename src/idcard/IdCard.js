import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div>
      <div className="idcard">
        <div>
          <img className="image-id" src={props.imgId} />
        </div>
        <br />
        <div className="id-items">
          <span type="text">
            <b>First Name: </b>
            {props.firstName}
          </span>
          <p type="text">
            <b>Last Name: </b>
            {props.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {props.gender}
          </p>
          <p>
            <b>Height: </b>
            {props.height}
          </p>
          <p>
            <b>Birth: </b>
            {props.birth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
