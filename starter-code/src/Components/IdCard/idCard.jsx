import React from 'react';

import './style.css';

function Card (data) {
    return (
      <div className="card">
      <img src = {data.data.img}></img>
      <div>
      <p>First Name : {data.data.firstName}</p>
      <p>Last Name : {data.data.lastName}</p>
      <p>Country : {data.data.country}</p>
      <p>Is student : {data.data.isStudent}</p>
      </div>
      </div>
    )
}

export default Card;

