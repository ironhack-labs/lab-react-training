import React from 'react';

const idCard = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <p>
          <img src={props.picture} alt="img"></img>
        </p>
        <p> First name: {props.lastName}</p>
        <p> Last name: {props.firstName}</p>
        <p> Gender: {props.gender}</p>
        <p> Height: {props.height}m</p>
        <p> Birth: {props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default idCard;
