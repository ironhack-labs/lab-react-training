import React from 'react';

export default function IdCard(props) {
  console.log(props);
  return (
    <>
      <div className="IdCardContainer">
        <img src={props.picture} alt="pict" />
        <div className="IdCardContainer">
          <p>
            <b>First Name:</b> {props.firstName}
            <br></br>
            <b>Last Name:</b> {props.lastName}
            <br></br>
            <b>Gender: </b> {props.gender}
            <br></br>
            <b>Height: </b> {props.height}
            <br></br>
            <b>Birth:</b> {props.age}
          </p>
        </div>
      </div>
    </>
  );
}
