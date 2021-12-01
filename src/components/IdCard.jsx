import React from 'react';

export default function IdCard(props) {

  return (
    <div style={{ backgroundColor: 'white', color: 'black', display: "flex", width: "33%", margin: "5px" }}>
      <img src={props.picture} alt="" />
      <div>
        <p>First Name : {props.firstName}</p>
        <p>Last Name : {props.lastName}</p>
        <p>Gender: {props.gender}</p>
      </div>
    </div>
  );
}
