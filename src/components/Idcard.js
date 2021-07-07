// import { tsPropertySignature } from '@babel/types';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function IdCard(props) {
  return (
    <div key={uuidv4} className="idContainer">
      <div>
        <img src={props.picture} alt="profile"></img>
      </div>
      <div className="textAlign">
        <p>
          <b>lastName:</b> {props.lastName}
        </p>
        <p>
          <b>firstName:</b> {props.firstName}
        </p>
        <p>
          <b>gender:</b> {props.gender}
        </p>
        <p>
          <b>height:</b> {props.height / 100}m
        </p>
      </div>
    </div>
  );
}

export default IdCard;
