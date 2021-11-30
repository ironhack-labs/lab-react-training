import React from 'react';

export default function IdCard(props) {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src={props.picture} alt="" />
        </div>

        <div>
          <h3>First Name: {props.firstName}</h3>
          <h3>Last Name: {props.lastName}</h3>
          <h3>Gender: {props.gender}</h3>
          <h3>Height: {props.height}</h3>
          <h3>Birth: {props.birth}</h3>
        </div>
      </div>
    </div>
  );
}
