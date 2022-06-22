import { useState } from 'react';
import "./IdCard.css";

import React from 'react';

export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {

  return (
    <div className="IdCard">
        <img src={picture}/>
        <div className="data">
            <div className="data-title"><strong>First Name: </strong>{firstName}</div>
            <div className="data-title"><strong>Last Name: </strong>{lastName}</div>
            <div className="data-title"><strong>Gender: </strong>{gender}</div>
            <div className="data-title"><strong>Height: </strong>{height}</div>
            <div className="data-title"><strong>Birth: </strong>{birth.toDateString()}</div>
        </div>
    </div>
  );
}
