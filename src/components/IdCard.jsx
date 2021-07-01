import React from 'react';

const idCard = (props) => {
  console.log(props);
  return (
    <div>
      <div className="border border-black rounded-md my-4 p-2">
        <p>
          <img src={props.picture} alt="img"></img>
        </p>
        <p>
          <strong>First name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Last name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}m
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default idCard;
