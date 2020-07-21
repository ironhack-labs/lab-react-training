import React from 'react';
import './../App.css';

const IdCard = (props) => {
  function heightInMeter(heightUser) {
    return `${heightUser / 100}m`;
  }

  return (
    <div className="IdCard">
      <div className="pic">
        <img src={props.picture}></img>
      </div>
      <div className="infos">
        <p>
          <span className="bold">First name:</span>
          {props.firstName}
        </p>
        <p>
          <span className="bold">Last name:</span>
          {props.lastName}
        </p>
        <p>
          <span className="bold">Gender:</span>
          {props.gender}
        </p>
        <p>
          <span className="bold">Height:</span>
          {heightInMeter(props.height)}
        </p>
        <p>
          <span className="bold">Birth:</span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
